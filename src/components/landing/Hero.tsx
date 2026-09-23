import React from "react";
import { BookOpen, Laptop } from "lucide-react";
import { DoodleStar, Tape } from "./shared";

export function Hero() {
  return (
    <section className="hero dot-lavender" aria-labelledby="hero-title">
      <div className="hero-note note-left">
        ↷ <span>¡Empieza hoy!</span>
      </div>
      <div className="hero-note note-right">
        ✓ <span>¡Tú puedes!</span>
      </div>
      <div className="photo-frame photo-one" aria-hidden="true">
        <Tape />
        <BookOpen />
      </div>
      <div className="photo-frame photo-two" aria-hidden="true">
        <Tape />
        <Laptop />
      </div>
      <div className="paper-hero">
        <Tape className="tape-a" />
        <Tape className="tape-b" />
        <span className="shape shape-mint" />
        <span className="shape shape-peach" />
        <span className="shape shape-yellow" />
        <h1 id="hero-title">
          Curso de
          <br />
          Preparación
          <br />
          para la PAA
        </h1>
        <p className="script hero-by">por Cris Pinnel</p>
        <p className="marker-copy">
          6 semanas para estudiar, practicar
          <br className="hidden sm:block" /> y llegar listo a tu examen.
        </p>
        <a className="cta-pill hero-cta" href="#inversion">
          QUIERO INSCRIBIRME
        </a>
      </div>
      <p className="script hero-bottom">Organización = Éxito.</p>
      <div className="plant-sticker left-plant" aria-hidden="true">
        🪴
      </div>
      <div className="plant-sticker right-plant" aria-hidden="true">
        🌱
      </div>
      <DoodleStar className="star-a" />
      <DoodleStar className="star-b" />
    </section>
  );
}
