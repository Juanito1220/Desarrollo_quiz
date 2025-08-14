import { HoverEffect } from "@/components/ui/card-hover-effect";
import Link from "next/link";

export function QuizCards() {
  return (
    <div className="flex justify-center w-full py-12">
      <div className="w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <HoverEffect items={quizzes} />
      </div>
    </div>
  );
}

export const quizzes = [
  {
    title: "Desarrollo Seguro",
    description:
      "Preparación para exámen",
    link: "/select-quiz/conservation-econ/",
  }
];