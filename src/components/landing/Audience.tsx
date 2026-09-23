import React from "react";
import { StudentArt, Tape } from "./shared";

export function Audience() {
  const cards = [
    { kind: "time" as const, copy: "El que no sabe por dónde empezar a organizar su tiempo." },
    {
      kind: "books" as const,
      copy: "El que estudia mucho, pero siente que no avanza en los simulacros.",
    },
    {
      kind: "target" as const,
      copy: "El que necesita una estructura clara para asegurar el mejor puntaje posible.",
    },
  ];
  return (
    <section className="scrap-section cork-section" aria-labelledby="audience-title">
      <h2 id="audience-title">¿Este curso es para ti?</h2>
      <div className="polaroid-grid">
        {cards.map((card, index) => (
          <article className={`polaroid polaroid-${index + 1}`} key={card.kind}>
            <Tape className="polaroid-tape" />
            <span className="pin" aria-hidden="true" />
            <StudentArt kind={card.kind} />
            <p>{card.copy}</p>
          </article>
        ))}
      </div>
      <p className="script torn-strip">Si te identificas con alguno, estás en el lugar correcto.</p>
    </section>
  );
}
