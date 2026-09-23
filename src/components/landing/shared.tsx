import React from "react";
import { AlarmClock, BookOpen, Star, Target } from "lucide-react";

export function Tape({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`tape ${className}`} />;
}

export function DoodleStar({ className = "" }: { className?: string }) {
  return <Star aria-hidden="true" className={`sticker-star ${className}`} />;
}

export function Scribble() {
  return (
    <svg viewBox="0 0 300 190" className="h-44 w-full" aria-label="Garabato que representa caos">
      <path
        className="scribble-line"
        d="M48 113c-44-76 89-118 148-49 67 80-92 116-126 38-25-59 84-92 139-31 45 50-55 112-121 53-49-44 24-112 105-73 74 36 24 115-60 93-88-23-71-111 19-112 87-1 106 91 17 125-69 27-137-47-70-104 63-53 148 18 108 85-38 64-138 17-97-55 39-69 144-8 109 66-34 73-146 25-120-53"
      />
      <path className="scribble-line" d="M165 141c35 9 48 26 49 42" />
    </svg>
  );
}

export function StepsIllustration() {
  return (
    <svg viewBox="0 0 300 190" className="h-44 w-full" aria-label="Escalera ascendente con flecha">
      <path
        d="M45 160v-38h42V88h45V57h46V25h56"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
      <path
        d="M80 150c42-2 83-20 120-74"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path d="m191 78 29-23-4 36" fill="currentColor" />
      <path
        d="M52 135h31M94 101h32M139 69h34M184 38h36"
        stroke="var(--mint)"
        strokeWidth="14"
        strokeLinecap="round"
        opacity=".75"
      />
    </svg>
  );
}

export function StudentArt({ kind }: { kind: "time" | "books" | "target" }) {
  const Icon = kind === "time" ? AlarmClock : kind === "books" ? BookOpen : Target;
  return (
    <div
      className={`student-art student-${kind}`}
      role="img"
      aria-label={
        kind === "time"
          ? "Estudiante preocupado por el tiempo"
          : kind === "books"
            ? "Estudiante entre libros"
            : "Estudiante apuntando a una meta"
      }
    >
      <Icon className="student-symbol" />
      <div className="student-head">
        <span />
        <span />
      </div>
      <div className="student-body" />
      {kind === "books" && (
        <div className="book-stack">
          <i />
          <i />
          <i />
          <i />
        </div>
      )}
      {kind === "target" && (
        <div className="target-rings">
          <i />
        </div>
      )}
    </div>
  );
}

export function SectionShell({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`scrap-section dot-paper ${className}`}>
      {children}
    </section>
  );
}
