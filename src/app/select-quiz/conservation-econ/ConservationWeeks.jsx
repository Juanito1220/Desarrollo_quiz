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
  { title: "Tema 1", description: "Practice/Intro Quiz", link: "week0" },
  { title: "Tema 2", description: "What is Economics?", link: "week1" },
  { title: "Tema 3", description: "What is Conservation?", link: "week2" },
  { title: "Tema 4", description: "Modern Impacts Necessitating Conservation", link: "week3" },
  { title: "Tema 5", description: "Threats To Wildlife", link: "week4" },
  { title: "Tema 6", description: "How Can Economics Help?", link: "week5" },
  { title: "Tema 7", description: "Markets - Places Where Economics Works", link: "week6" },
  { title: "Tema 8", description: "Markets, Welfare And Conservation", link: "week7" },
  { title: "Tema 9", description: "Public Sector And Conservation", link: "week8" },
  { title: "Tema 10", description: "Industrial Organization And Conservation", link: "week9" },
  { title: "Examen Completo", description: 'Take the conmbined exam, with total 150+ questions', link: "finalexam" } 
];
