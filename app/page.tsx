"use client";

import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  { href: "/editor", cardText: "projeto" },
];

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="w-screen h-screen bg-zinc-300 relative p-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} href={project.href} cardText={project.cardText} />
        ))}

        <button
          className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center
                         text-2xl shadow-md fixed bottom-6 right-6 transition-all cursor-pointer
                         hover:w-[3.25rem] hover:h-[3.25rem] hover:text-[1.75rem] hover:bg-blue-600
                         active:bg-blue-700"
        >
          +
        </button>
      </div>
    </div>
  );
}