import React from "react";
import { SectionShell, Tape } from "./shared";

export function LimitedSpots() {
  return (
    <SectionShell className="limited-section">
      <h2>
        <span>Importante: Cupo Limitado</span>
      </h2>
      <h3>🔥 ÚNICAMENTE 10 LUGARES DISPONIBLES 🔥</h3>
      <div
        className="capacity"
        role="progressbar"
        aria-label="Cupo ocupado"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={95}
      >
        <span>
          <b>95%</b>
        </span>
      </div>
      <div className="lined-note">
        <Tape />
        <p>
          El precio especial de <strong>$1,500 MXN</strong> es exclusivo
          <br className="hidden sm:block" /> para las primeras{" "}
          <strong>10 personas en inscribirse.</strong>
        </p>
      </div>
      <p className="script disclaimer">
        *Nota: El curso es un programa grupal enfocado en el avance colectivo; no incluye asesorías
        individuales.
      </p>
    </SectionShell>
  );
}
