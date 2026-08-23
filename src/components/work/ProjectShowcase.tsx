"use client";

import { content } from "@/data/content";
import ProjectCard from "./ProjectCard";

export default function ProjectShowcase() {
  const { projects } = content;

  return (
    <section className="py-24 px-6 md:px-12 bg-background" id="work">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex items-end justify-between">
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-primary">
            Selected Works
          </h2>
          <div className="hidden md:block w-1/3 h-[1px] bg-neutral-200 mb-4"></div>
        </div>

        {/* Vertical Stack Layout (Nithin Style) */}
        <div className="flex flex-col gap-24 md:gap-40 max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <div key={project.id} className="w-full">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
