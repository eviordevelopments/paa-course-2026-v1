import React from "react";
import { DoodleStar } from "./shared";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-title">
      {[...Array(10)].map((_, i) => (
        <DoodleStar key={i} className={`night-star night-star-${i + 1}`} />
      ))}
      <h2 id="final-title">¿Lista/o para prepararte?</h2>
      <a className="cta-pill final-button" href="#inversion">
        QUIERO INSCRIBIRME
      </a>
      <p className="script final-copy">
        ↑<br />
        Haz clic arriba para asegurar tu lugar.
        <br />
        <span>(La información de transferencia se te proporcionará en el siguiente paso).</span>
      </p>
    </section>
  );
}
