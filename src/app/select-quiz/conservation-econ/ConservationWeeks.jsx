import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";

export function ConservationWeeks() {
  return (
    <div className="flex justify-center w-full py-12">
      <div className="w-full max-w-5xl px-2 sm:px-4 lg:px-6">
        <HoverEffect items={quizzes.map(q => ({
          ...q,
          link: `/select-quiz/conservation-econ/${q.link.split('/').pop()}` // Ensure correct URL
        }))} className="compact-cards"/>
      </div>
    </div>
  );
}

export const quizzes = [
  { title: "Tema 1", description: "Seguridad en el Ciclo de Vida de Desarrollo del Software", link: "week0" },
  { title: "Tema 2", description: "Seguridad en el ciclo de vida del software en las fases de análisis y diseño", link: "week1" },
  { title: "Tema 3", description: "Seguridad en el ciclo de vida del software en las fases de codificación, pruebas y operación", link: "week2" },
  { title: "Tema 4", description: "Codificación segura de aplicaciones I", link: "week3" },
  { title: "Tema 5", description: "Codificación segura de aplicaciones II", link: "week4" },
  { title: "Tema 6", description: "Introducción al concepto de auditoría de sistemas de información", link: "week5" },
  { title: "Tema 7", description: "Gobierno y gestión de la función de auditoría", link: "week6" },
  { title: "Tema 8", description: "El proceso de auditoría de sistemas de la información", link: "week7" },
  { title: "Tema 9", description: "Auditorías operativas/técnicas", link: "week8" },
  { title: "Tema 10", description: "Auditorías de cumplimiento y metodologías de auditoría", link: "week9" },
  { title: "Exámen Completo", description: 'Take the conmbined exam, with total 150+ questions', link: "finalexam" }, 
  { title: "Preguntas Extras", description: 'Take the conmbined exam, with total 150+ questions', link: "extras" } 
];
