import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/landing/Hero";
import { Difference } from "../components/landing/Difference";
import { Audience } from "../components/landing/Audience";
import { Features } from "../components/landing/Features";
import { Workflow } from "../components/landing/Workflow";
import { Recordings } from "../components/landing/Recordings";
import { Coordinates } from "../components/landing/Coordinates";
import { Investment } from "../components/landing/Investment";
import { LimitedSpots } from "../components/landing/LimitedSpots";
import { FinalCta } from "../components/landing/FinalCta";
import { HowToPay } from "../components/landing/HowToPay";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Curso de Preparación para la PAA | Cris Pinnel" },
      {
        name: "description",
        content:
          "Curso en línea de preparación para la PAA: seis semanas de clases, práctica, simulacros y acompañamiento.",
      },
      { property: "og:title", content: "Curso de Preparación para la PAA" },
      {
        property: "og:description",
        content: "Seis semanas para estudiar, practicar y llegar listo a tu examen.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Difference />
      <Audience />
      <Features />
      <Workflow />
      <Recordings />
      <Coordinates />
      <Investment />
      <HowToPay />
      <LimitedSpots />
      <FinalCta />
    </main>
  );
}
