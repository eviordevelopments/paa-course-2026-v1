import React from "react";
import { BarChart3, BookOpen, Clock3, Lightbulb, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "./shared";

const workflow: Array<{ title: string; detail: string; icon: LucideIcon; tone: string }> = [
  { title: "1. Clase", detail: "Aprende la estructura", icon: Lightbulb, tone: "bg-mint" },
  { title: "2. Práctica", detail: "Aplica lo aprendido", icon: TrendingUp, tone: "bg-peach" },
  { title: "3. Repaso", detail: "Refuerza conceptos", icon: BookOpen, tone: "bg-lavender" },
  { title: "4. Simulacro", detail: "Mide tu tiempo real", icon: Clock3, tone: "bg-peach-soft" },
  { title: "5. Seguimiento", detail: "Ajusta y mejora", icon: BarChart3, tone: "bg-mint-soft" },
];

export function Workflow() {
  return (
    <SectionShell className="workflow-section">
      <h2>Así funciona tu preparación de 6 semanas</h2>
      <div className="workflow-desktop" aria-label="Ciclo de preparación de cinco pasos">
        <svg className="infinity-path" viewBox="0 0 900 410" aria-hidden="true">
          <path d="M450 205C330 5 70 30 92 210c22 178 263 150 358-5 95-155 336-183 358-5 22 180-238 205-358 5Z" />
          <path
            className="dash-path"
            d="M450 205C330 5 70 30 92 210c22 178 263 150 358-5 95-155 336-183 358-5 22 180-238 205-358 5Z"
          />
        </svg>
        <div className="workflow-center">
          <span className="script">
            Estructura
            <br />
            Constante
          </span>
        </div>
        {workflow.map(({ title, detail, icon: Icon, tone }, i) => (
          <article className={`workflow-step step-${i + 1}`} key={title}>
            <div className={`workflow-icon ${tone}`}>
              <Icon />
            </div>
            <h3>{title}</h3>
            <p>({detail})</p>
          </article>
        ))}
      </div>
      <div className="workflow-mobile">
        <div className="workflow-center">
          <span className="script">Estructura Constante</span>
        </div>
        {workflow.map(({ title, detail, icon: Icon, tone }) => (
          <article className="mobile-step" key={title}>
            <div className={`workflow-icon ${tone}`}>
              <Icon />
            </div>
            <div>
              <h3>{title}</h3>
              <p>{detail}</p>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
