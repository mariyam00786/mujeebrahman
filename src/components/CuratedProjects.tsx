"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

const curatedProjects = [
  {
    name: "ISPEAK CENTER",
    slug: "ispeak",
    year: "2023 — PRESENT",
    category: "SOCIAL MEDIA | BRANDING | VIDEO",
    image: "/images/work/ispeak-cover.jpg.jpg",
  },
  {
    name: "PROMED TRADING",
    slug: "promed",
    year: "2023",
    category: "MARKETING | ADS | CAMPAIGNS",
    image: "/images/work/promed-cover.jpg.jpeg",
  },
  {
    name: "FLYWINGS TRAVELS",
    slug: "flywings",
    year: "2022",
    category: "POSTERS | BANNERS | VIDEO EDITING",
    image: "/images/work/flywing-posters (9).jpeg",
  },
];

interface ProjectCardProps {
  project: (typeof curatedProjects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.07 }}
      ref={cardRef}
      className="relative overflow-hidden border-r border-b border-primary/10 last:border-r-0 cursor-none"
      style={{ minHeight: "400px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Link href={`/work/${project.slug}`} className="block w-full h-full">

        {/* Background image — fades in on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: hovered ? 1 : 0,
            backgroundImage: `url(${project.image.split('/').map(encodeURIComponent).join('/')})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Light overlay on top of image */}
        <div
          className="absolute inset-0 bg-background/70 transition-opacity duration-700"
          style={{ opacity: hovered ? 1 : 0 }}
        />

        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center justify-between h-full p-8 md:p-12" style={{ minHeight: "400px" }}>
          {/* Year — top center */}
          <span className="font-mono text-xs text-secondary uppercase tracking-widest">
            {project.year}
          </span>

          {/* Project name — center */}
          <h3
            className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-primary uppercase tracking-tight leading-tight text-center transition-colors duration-300"
            style={{ color: hovered ? "var(--color-primary)" : undefined }}
          >
            {project.name}
          </h3>

          {/* Category — bottom center */}
          <p className="font-mono text-[10px] md:text-xs text-secondary uppercase tracking-widest text-center">
            {project.category}
          </p>
        </div>

      </Link>

      {/* Custom cursor badge — outside Link so overflow-hidden doesn't clip it */}
      {hovered && cursorPos.x > 0 && (
        <div
          className="absolute z-30 pointer-events-none flex items-center justify-center rounded-full bg-accent shadow-xl"
          style={{
            width: 88,
            height: 88,
            left: cursorPos.x - 44,
            top: cursorPos.y - 44,
            transition: "left 0.06s linear, top 0.06s linear",
          }}
        >
          <span className="text-primary font-black text-[10px] leading-tight tracking-widest uppercase text-center">
            VIEW<br />PROJECT
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default function CuratedProjects() {
  return (
    <section className="relative z-10 bg-background w-full py-24 md:py-32" id="curated-projects">

      {/* Header — centered */}
      <div className="text-center px-6 mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-primary text-5xl md:text-7xl lg:text-8xl leading-none uppercase font-display font-bold tracking-tighter mb-5"
        >
          Curated Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-secondary text-base md:text-lg max-w-md mx-auto leading-relaxed"
        >
          Selection of projects across branding, social media, and visual systems —{" "}
          each one built with intention.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="border-t border-l border-primary/10 grid grid-cols-1 md:grid-cols-2">
        {curatedProjects.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} index={idx} />
        ))}

        {/* "More Coming Soon" placeholder if odd number of projects */}
        {curatedProjects.length % 2 !== 0 && (
          <div
            className="border-r border-b border-primary/10 flex items-center justify-center"
            style={{ minHeight: "400px" }}
          >
            <span className="font-mono text-xs text-primary/30 uppercase tracking-widest">
              More Coming Soon
            </span>
          </div>
        )}
      </div>

    </section>
  );
}