import React from "react";
import { Play } from "lucide-react";
import { SectionShell, Tape } from "./shared";

export function Recordings() {
  return (
    <SectionShell className="recordings-section">
      <h2>¿Y si un día no puedo asistir en vivo?</h2>
      <div className="video-wrap">
        <div className="video-player">
          <strong>Cero estrés.</strong>
          <button type="button" aria-label="Reproducir vista previa">
            <Play fill="currentColor" />
          </button>
          <div className="video-progress">
            <span />
          </div>
        </div>
        <aside className="sticky-note script">
          <Tape />
          Todas las clases quedan grabadas.
        </aside>
      </div>
      <p className="recording-copy">
        Tu vida no se detiene. <strong>No pierdes el contenido ni el ritmo del curso</strong> por no
        poder conectarte a una sesión. <strong>Estudia a tu propio paso.</strong>
      </p>
    </SectionShell>
  );
}
