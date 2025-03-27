// /app/.tsx (or /app/page.tsx if you're using the default Next.js route)
// "use client" needed if you're using client-side components here

"use client";
import Link from "next/link";
import Image from "next/image";
import headshot from "../../public/headshot.jpg";

import type { Project, ProfExperience, Extracurricular } from "../types/types";
import ProjectCardList from "./ProjectCardList"; // Adjust path as needed
import ExperienceCardList from "./ExperienceCardList";

export default function Homepage() {
  // Example Project data
  const projects: Project[] = [
    {
      title: "geoChat",
      description: "An anonymous live chat app with geofenced access to chat rooms.",
      end_date: new Date("2024-10-01"),
      link: "https://github.com/ShaneBerhoff/geoChat",
      pageLink: "/projects/geoChat",
      tags: ["React", "NodeJS", "MongoDB"],
      content: "Full details about geoChat..."
    },
    {
      title: "Solo",
      description: "A mobile app designed for travelers to meet up and explore foreign cities together.",
      end_date: null,
      link: "https://github.com/TheMaxRob/Solo",
      pageLink: "/projects/solo",
      tags: ["SwiftUI", "MapKit", "Firebase"],
      content: "More content about Solo..."
    },
    {
      title: "Worldline",
      description:
        "A mobile app that pulls user photo library metadata to visualize their journey across space and time.",
      end_date: new Date("2024-11-1"),
      link: "https://github.com/emory-worldline/worldline",
      pageLink: "/projects/worldline",
      tags: ["React Native", "Expo", "Mapbox"],
      content:
        "Content describing team collaboration, Agile sprints, stand-ups, custom animations, etc."
    },
    {
      title: "Venmo-Receipt-Scanner",
      description:
        "Mobile app that automatically scans receipts, and allows you to assign items to Venmo friends and automatically send out Venmo requests.",
      end_date: new Date("2025-02-1"),
      link: "https://github.com/TheMaxRob/Venmo-Receipt-Scanner",
      pageLink: "/projects/vrs",
      tags: ["React Native", "Python", "Flask", "Pytesseract", "OpenCV"],
      content:
        "Additional details on how you used Tesseract, your image preprocessing pipeline, and so on."
    },
    {
      title: "Raspberry Pi Friend Recognizer",
      description:
        "AI model trained to recognize and differentiate my friends using a Raspberry Pi Camera Kit.",
      end_date: new Date("2025-01-1"),
      link: "https://github.com/TheMaxRob/RpiFaceDetector",
      pageLink: "/projects/rspi",
      tags: ["C++", "OpenCV", "Raspberry Pi"],
      content:
        "Describe your Pi environment, how you handle camera input, training data, performance constraints, etc."
    },
  ];

  // Example Professional Experience data
  const experiences: ProfExperience[] = [
    {
      company: "nCent Holdings",
      role: "Full-Stack Engineer Intern",
      startDate: new Date("2024-10-1"),
      endDate: null, 
      pageLink: '/experiences/nCent'
    },
    {
      company: "Emory Computer Research Lab",
      role: "Undergraduate Researcher",
      startDate: new Date("2024-11-1"),
      endDate: null,
      pageLink: '/experiences/research',
    },
    {
      company: "Guardian Owl Digital",
      role: "Development Intern",
      startDate: new Date("Jun 2024"),
      endDate: new Date("Aug 2024"),
      pageLink: '/experiences/godigital'
    },
    
  ];

  const extracurriculars: Extracurricular[] = [
    {
      name: "Kappa Alpha Epsilon",
      role: "Philanthropy Chair",
      startDate: new Date("2024-12-1"),
      endDate: null,
    },
    {
      name: "Emory Impact Investing Group",
      role: "Senior Analyst",
      startDate: new Date("2023-01-01"),
      endDate: new Date("2024-09-01"),
      description: "Managed a $250,000 fund for microloans and consulting.",
    },
    {
      name: "Emory Rock Climbing Team",
      role: "Member",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2024-12-31"),
      description: "Participated in climbing competitions and practices.",
    }
  ];

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] scroll-smooth">
      {/* Header */}
      <header className="py-8 text-center">
        <div className="flex flex-col items-center">
          <Image
            src={headshot}
            alt="Your Name"
            width={130}
            height={130}
            className="rounded-full"
          />
          <h1 className="text-4xl font-bold italic">Max Roberts</h1>
          <p className="mt-2 text-sm">
            Atlanta, GA | 502-365-0302 |{" "}
            <Link
              href="mailto:maxroberts2003@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              maxroberts2003@gmail.com
            </Link>
          </p>
          {/* Social Icons, etc. */}
        </div>
      </header>

      {/* Navigation Cards */}
      <section className="container mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="#projects"
            className="flex items-center justify-center p-12 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg shadow hover:shadow-2xl text-center text-3xl font-bold transition transform hover:scale-105"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="flex items-center justify-center p-12 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg shadow hover:shadow-2xl text-center text-3xl font-bold transition transform hover:scale-105"
          >
            Professional Experience
          </a>
          <a
            href="#community"
            className="flex items-center justify-center p-12 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg shadow hover:shadow-2xl text-center text-3xl font-bold transition transform hover:scale-105"
          >
            Community Involvement
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 pb-10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <ProjectCardList projects={projects} />
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="container mx-auto px-4 pb-10">
        <h2 className="text-3xl font-bold mb-6">Professional Experiences</h2>
        <ExperienceCardList experiences={experiences} />
      </section>

      {/* Community Involvement Section */}
      <section id="community" className="container mx-auto px-4 pb-10">
        <h2 className="text-3xl font-bold mb-6">Leadership & Extracurriculars</h2>
        {extracurriculars.map((activity, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg shadow transition mb-6"
          >
            <h3 className="text-2xl font-semibold">{activity.name}</h3>
              <p className="text-sm italic">
                {activity.role} |{" "}
                {activity.startDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })} –{" "}
                {activity.endDate
                  ? activity.endDate.toLocaleDateString("en-US", { month: "short", year: "numeric" })
                  : "Present"}
              </p>
            {activity.description && (
              <p className="mt-2 text-sm">{activity.description}</p>
            )}
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Max Roberts. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
