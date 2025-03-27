// /app/components/ProjectCard.tsx

"use client";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../types/types"; // Adjust path as needed

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link href={project.pageLink ?? "#"}>
      <div className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-lg shadow transition-shadow hover:shadow-lg flex flex-row items-start space-x-6 hover:bg-gray-100 dark:hover:bg-gray-700">
        {/* Optionally display an image if you want; remove this if not needed */}
        {/* 
        <div className="flex-shrink-0">
          <Image
            src="/project-thumbnail.jpg"
            alt={project.title}
            width={180}
            height={120}
            className="rounded"
          />
        </div>
        */}

        <div className="flex flex-col">
          <h2 className="text-4xl font-extrabold text-left">{project.title}</h2>

          {/* Optionally display end_date if set */}
          {project.end_date && (
            <p className="text-sm text-gray-500">
              {project.end_date.toLocaleDateString("en-US", { month: "short", year: "numeric" })}
            </p>
          )}

          <p className="mt-2 text-sm">{project.description}</p>

          {/* Render tags as small chips */}
          {project.tags?.length > 0 && (
            <ul className="mt-2 flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <li
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
