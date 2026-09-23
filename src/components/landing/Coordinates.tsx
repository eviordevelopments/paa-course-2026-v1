import React from "react";
import { AlarmClock, CalendarCheck, Laptop } from "lucide-react";
import { SectionShell } from "./shared";

export function Coordinates() {
  return (
    <SectionShell className="coordinates-section">
      <div className="coordinates-layout">
        <h2 className="left-heading">
          Coordenadas
          <br />
          del curso
        </h2>
        <div className="coordinate-cards">
          <article className="coordinate date-card">
            <CalendarCheck />
            <strong>
              28 de septiembre
              <br />— 6 de noviembre
            </strong>
          </article>
          <article className="coordinate schedule-card">
            <AlarmClock />
            <span>Lunes a viernes | 8:30–10:00 p. m.</span>
          </article>
          <article className="coordinate online-card">
            <Laptop />
            <span>100% En Línea</span>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
