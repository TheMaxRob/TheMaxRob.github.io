"use client";
import Link from "next/link";
import type { ProfExperience } from "../types/types";

interface ExperienceCardProps {
  experience: ProfExperience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  // Convert dates to human-readable strings
  const startStr = experience.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  const endStr = experience.endDate
    ? experience.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    : "Present";

  return (
    <Link href={experience.pageLink ?? "#"}>
      <div className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-shadow hover:shadow-lg flex flex-col hover:bg-gray-100 dark:hover:bg-gray-700">
        <h2 className="text-4xl font-extrabold text-left">{experience.company}</h2>
        <p className="text-sm text-gray-500 mt-1">
          {experience.role} | {startStr} – {endStr}
        </p>
      </div>
    </Link>
  );
};

export default ExperienceCard;