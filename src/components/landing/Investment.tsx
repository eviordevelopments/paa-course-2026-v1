import React from "react";
import { SectionShell } from "./shared";

export function Investment() {
  return (
    <SectionShell className="investment-section" id="inversion">
      <h2>Tu Inversión</h2>
      <div className="price-tag">
        <span className="tag-hole" aria-hidden="true" />
        <p>
          Precio regular: <del>$1,800 MXN</del>
        </p>
        <strong>$1,500 MXN</strong>
        <span className="price-badge">
          🔥 Precio
          <br />
          Especial
        </span>
      </div>
      <div className="deposit-tag script">
        Aparta tu lugar hoy
        <br />
        con solo $300 MXN
      </div>
    </SectionShell>
  );
}
