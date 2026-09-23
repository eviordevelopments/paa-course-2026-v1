import React from "react";
import { DoodleStar, Scribble, SectionShell, StepsIllustration, Tape } from "./shared";

export function Difference() {
  return (
    <SectionShell className="difference" id="diferencia">
      <DoodleStar className="edge-star" />
      <h2>La diferencia entre intentar y lograr</h2>
      <div className="compare-grid">
        <article className="paper-card chaos-card">
          <Tape />
          <Scribble />
          <p>
            Estudiar más
            <br />
            <span>(Caos, sin dirección)</span>
          </p>
        </article>
        <article className="paper-card achieve-card">
          <Tape />
          <StepsIllustration />
          <p>
            No se trata solamente de estudiar más, sino de tener una estructura para prepararte,
            practicar y avanzar.
          </p>
        </article>
      </div>
      <p className="script rainbow-strip">Prepárate. Practica. Confía en tu proceso.</p>
    </SectionShell>
  );
}
