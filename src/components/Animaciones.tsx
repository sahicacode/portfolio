"use client";

import { useEffect } from "react";

// Elementos que aparecen al hacer scroll
const selectores = [".sh", ".pj", ".more li", ".tools li", ".ai-card", ".prose", ".nums", ".stack > div", ".country", ".exp li", ".extra", ".ck", ".github", ".contact .wrap > *"];

// Cuenta desde 0 hasta el número final
function contar(el: HTMLElement) {
  const final = Number(el.dataset.contar);
  const duracion = 1400;
  const inicio = performance.now();

  function paso(ahora: number) {
    const progreso = Math.min((ahora - inicio) / duracion, 1);
    const suave = 1 - Math.pow(1 - progreso, 3); // empieza rápido y frena al final
    el.textContent = String(Math.round(final * suave));
    if (progreso < 1) requestAnimationFrame(paso);
  }
  requestAnimationFrame(paso);
}

export default function Animaciones() {
  useEffect(() => {
    const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (sinMovimiento) return;

    const elementos = document.querySelectorAll<HTMLElement>(selectores.join(","));
    elementos.forEach((el) => {
      el.classList.add("reveal");
      // pequeño retraso entre hermanos para que entren en cascada
      const indice = Array.from(el.parentElement?.children ?? []).indexOf(el);
      el.style.transitionDelay = `${(indice % 4) * 90}ms`;
    });

    const contadores = document.querySelectorAll<HTMLElement>("[data-contar]");
    contadores.forEach((el) => (el.textContent = "0"));

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return;
          const el = entrada.target as HTMLElement;
          el.classList.add("visible");
          // quito el retraso para que el hover vaya al momento
          setTimeout(() => (el.style.transitionDelay = ""), 1200);
          el.querySelectorAll<HTMLElement>("[data-contar]").forEach(contar);
          observador.unobserve(el);
        });
      },
      { threshold: 0.15 }
    );

    elementos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return null;
}
