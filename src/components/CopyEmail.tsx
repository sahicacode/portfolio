"use client";

import { useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [texto, setTexto] = useState("Copy");

  async function copiar() {
    try {
      await navigator.clipboard.writeText(email);
      setTexto("Copied");
    } catch {
      setTexto("Ctrl+C");
    }
    setTimeout(() => setTexto("Copy"), 1500);
  }

  return (
    <button type="button" onClick={copiar}>
      {texto}
    </button>
  );
}
