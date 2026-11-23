<?php
// Formulario de contacto del portfolio: manda el mensaje al Gmail de Sara.
// Usa el mismo config-sahica.php que sahica.com (está en public_html, fuera de Git):
// buzón no-reply@sahica.com por SMTP ('correo_desde', 'smtp_clave') y la clave secreta de Turnstile ('turnstile_secreto').
declare(strict_types=1);
date_default_timezone_set('Europe/Madrid');

const PARA = 'sarahidalgocaro97@gmail.com';

function responder(bool $ok, string $msg, int $codigo = 200): never {
    http_response_code($codigo);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode(['ok' => $ok, 'msg' => $msg], JSON_UNESCAPED_UNICODE);
    exit;
}

function sahica_config(): array {
    static $cfg = null;
    if ($cfg !== null) return $cfg;
    $dir = __DIR__;
    for ($i = 0; $i < 5; $i++) {
        if (is_file($dir . '/config-sahica.php')) { $cfg = require $dir . '/config-sahica.php'; return $cfg; }
        $dir = dirname($dir);
    }
    $cfg = [];
    return $cfg;
}

function campo(string $k, int $max): string {
    $v = trim((string)($_POST[$k] ?? ''));
    $v = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $v) ?? '';
    return mb_substr($v, 0, $max);
}

/** Cloudflare Turnstile: true si la casilla es buena o si aún no hay clave secreta. */
function turnstile_ok(): bool {
    $secreto = (string)(sahica_config()['turnstile_secreto'] ?? '');
    if ($secreto === '') return true;
    $token = (string)($_POST['cf-turnstile-response'] ?? '');
    if ($token === '' || strlen($token) > 2048) return false;
    $datos = http_build_query(['secret' => $secreto, 'response' => $token, 'remoteip' => $_SERVER['REMOTE_ADDR'] ?? '']);
    $ch = curl_init('https://challenges.cloudflare.com/turnstile/v0/siteverify');
    curl_setopt_array($ch, [CURLOPT_POST => true, CURLOPT_POSTFIELDS => $datos, CURLOPT_RETURNTRANSFER => true, CURLOPT_TIMEOUT => 8]);
    $res = curl_exec($ch); curl_close($ch);
    if ($res === false) { error_log('turnstile: Cloudflare no responde'); return true; }
    $j = json_decode((string)$res, true);
    return is_array($j) && !empty($j['success']);
}

/** Máximo 5 mensajes cada 10 minutos desde la misma conexión (IP cifrada, en un archivo temporal). */
function demasiados(): bool {
    $f = sys_get_temp_dir() . '/portfolio-contacto-' . hash('sha256', ($_SERVER['REMOTE_ADDR'] ?? '') . __DIR__);
    $ahora = time();
    $lista = array_filter(array_map('intval', is_file($f) ? (file($f, FILE_IGNORE_NEW_LINES) ?: []) : []), fn($t) => $t > $ahora - 600);
    if (count($lista) >= 5) return true;
    $lista[] = $ahora;
    @file_put_contents($f, implode("\n", $lista));
    return false;
}

function enviar_correo(string $para, string $asunto, string $cuerpo, array $cab): bool {
    $c = sahica_config();
    $asunto = '=?UTF-8?B?' . base64_encode($asunto) . '?=';
    if (empty($c['smtp_clave'])) {
        return @mail($para, $asunto, $cuerpo, implode("\r\n", $cab), '-f' . $c['correo_desde']);
    }
    $host = $c['smtp_host'] ?? 'smtp.hostinger.com';
    $puerto = (int)($c['smtp_puerto'] ?? 465);
    $usuario = $c['smtp_usuario'] ?? $c['correo_desde'];
    $dominio = substr(strrchr((string)$c['correo_desde'], '@') ?: '@sahica.com', 1);
    $s = @stream_socket_client(($puerto === 465 ? 'ssl://' : 'tcp://') . $host . ':' . $puerto, $en, $es, 15);
    if (!$s) { error_log("SMTP: no conecta ($es)"); return false; }
    stream_set_timeout($s, 15);
    $leer = function () use ($s): string {
        $r = '';
        while (($l = fgets($s, 515)) !== false) { $r .= $l; if (strlen($l) < 4 || $l[3] === ' ') break; }
        return $r;
    };
    $orden = function (string $cmd, array $ok) use ($s, $leer): bool {
        if ($cmd !== '') fwrite($s, $cmd . "\r\n");
        $r = $leer();
        if (!in_array((int)substr($r, 0, 3), $ok, true)) { error_log('SMTP: ' . trim($r)); return false; }
        return true;
    };
    $cabeceras = array_merge([
        'Date: ' . date('r'),
        'To: <' . $para . '>',
        'Subject: ' . $asunto,
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@' . $dominio . '>',
    ], $cab);
    if (!preg_grep('/^MIME-Version:/i', $cabeceras)) $cabeceras[] = 'MIME-Version: 1.0';
    // Puntos al principio de línea se doblan (regla de SMTP)
    $datos = preg_replace('/^\./m', '..', str_replace(["\r\n", "\r"], "\n", $cuerpo));
    $datos = str_replace("\n", "\r\n", $datos);
    $bien = $orden('', [220])
        && $orden('EHLO ' . $dominio, [250])
        && ($puerto === 465 || ($orden('STARTTLS', [220]) && stream_socket_enable_crypto($s, true, STREAM_CRYPTO_METHOD_TLS_CLIENT) && $orden('EHLO ' . $dominio, [250])))
        && $orden('AUTH LOGIN', [334])
        && $orden(base64_encode($usuario), [334])
        && $orden(base64_encode((string)$c['smtp_clave']), [235])
        && $orden('MAIL FROM:<' . $c['correo_desde'] . '>', [250])
        && $orden('RCPT TO:<' . $para . '>', [250, 251])
        && $orden('DATA', [354])
        && $orden(implode("\r\n", $cabeceras) . "\r\n\r\n" . $datos . "\r\n.", [250]);
    @fwrite($s, "QUIT\r\n");
    fclose($s);
    return $bien;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { header('Allow: POST', true, 405); exit; }
if (campo('website', 50) !== '') responder(true, 'Thanks! I got your message and will reply soon.'); // trampa para robots

$nombre = campo('name', 120); $email = campo('email', 160); $mensaje = campo('message', 4000);
if ($nombre === '') responder(false, 'Please tell me your name.', 422);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) responder(false, 'Please check your email address.', 422);
if (mb_strlen($mensaje) < 10) responder(false, 'Your message is a bit short. Tell me a little more.', 422);
if (($_POST['privacy'] ?? '') === '') responder(false, 'Please tick the privacy box so I can reply.', 422);
if (!turnstile_ok()) responder(false, 'Please complete the "Verify you are human" check and send again.', 403);
if (demasiados()) responder(false, 'You have sent several messages in a row. Please wait a few minutes.', 429);

$c = sahica_config();
if (empty($c['correo_desde'])) { error_log('contacto.php: falta config-sahica.php'); responder(false, 'The form is not working right now. Please email me at ' . PARA . '.', 500); }

$nombre1 = str_replace(["\r", "\n"], ' ', $nombre);
$texto = "Nuevo mensaje desde portfolio.sahica.com\n\n"
    . "Nombre: $nombre1\nCorreo: $email\nEmpresa: " . (campo('company', 160) ?: '-') . "\n\n"
    . $mensaje . "\n\n—\nSi respondes a este correo, le escribes directamente.";
$cab = [
    'From: Portfolio <' . $c['correo_desde'] . '>',
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];
if (!enviar_correo(PARA, "Portfolio: mensaje de $nombre1", $texto, $cab)) {
    responder(false, 'The message could not be sent right now. Please email me at ' . PARA . '.', 500);
}
responder(true, 'Thanks! I got your message and will reply soon.');
