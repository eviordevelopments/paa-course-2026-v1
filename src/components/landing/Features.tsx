import React from "react";
import {
  CalendarCheck,
  FileText,
  FolderOpen,
  MessageCircle,
  NotebookPen,
  Play,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SectionShell } from "./shared";

const features: Array<{ label: string; icon: LucideIcon; tone: string }> = [
  { label: "Clases en vivo", icon: CalendarCheck, tone: "bg-blue-soft" },
  { label: "Grabaciones\ndisponibles", icon: Play, tone: "bg-peach-soft" },
  { label: "Ejercicios\nguiados", icon: NotebookPen, tone: "bg-mint-soft" },
  { label: "6 Simulacros", icon: FileText, tone: "bg-yellow-soft" },
  { label: "Grupo privado\nde WhatsApp", icon: MessageCircle, tone: "bg-lavender-soft" },
  { label: "Materiales y\nrecursos de estudio", icon: FolderOpen, tone: "bg-pink-soft" },
];

export function Features() {
  return (
    <SectionShell className="features-section">
      <h2 className="left-heading">
        Todo lo que necesitas
        <br />
        en un solo lugar
      </h2>
      <span className="turquoise-stroke" aria-hidden="true" />
      <div className="feature-grid">
        {features.map(({ label, icon: Icon, tone }) => (
          <article className="feature" key={label}>
            <div className={`feature-icon ${tone}`}>
              <Icon />
              <Sparkles className="mini-sparkle" />
            </div>
            <h3>
              {label.split("\n").map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h3>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
