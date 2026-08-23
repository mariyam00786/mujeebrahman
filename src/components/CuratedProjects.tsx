"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, MouseEvent } from "react";

const curatedProjects = [
  {
    name: "ISPEAK CENTER",
    slug: "ispeak",
    year: "2023 — PRESENT",
    category: "Social Media | Branding | Video",
    image: "/images/work/ispeak-cover.jpg.jpg",
  },
  {
    name: "PROMED TRADING",
    slug: "promed",
    year: "2023",
    category: "Marketing | Ads | Campaigns",
    image: "/images/work/promed-cover.jpg.jpeg",
  },
  {
    name: "FLYWINGS TRAVELS",
    slug: "flywings",
    year: "2022",
    category: "Posters | Banners | Video Editing",
    image: "/images/work/flywings-cover.jpg.jpeg",
  }
];

function ProjectCard({ project, idx }: { project: any, idx: number }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ 
      x: e.clientX - rect.left, 
      y: e.clientY - rect.top 
    });
  };

  return (
    <Link 
      href={`/work/${project.slug}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group w-full md:w-1/2 border-b border-x md:border-x-0 md:border-r border-neutral-200 flex flex-col items-center justify-between overflow-hidden min-h-[300px] md:min-h-[400px] relative cursor-none bg-transparent p-8 block"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: idx * 0.1 }}
        className="w-full h-full flex flex-col items-center justify-between relative z-10"
      >
        {/* Top: Year */}
        <span className="text-tertiary text-sm md:text-base uppercase tracking-widest font-mono transition-colors duration-500 group-hover:text-accent">
          {project.year}
        </span>

        {/* Center: Company Name */}
        <div className="flex items-center justify-center flex-1 w-full">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary uppercase tracking-tighter text-center transition-colors duration-500 group-hover:text-white">
            {project.name}
          </h3>
        </div>

        {/* Bottom: Category */}
        <span className="text-primary text-sm md:text-base uppercase tracking-widest font-mono transition-colors duration-500 group-hover:text-white font-medium text-center">
          {project.category}
        </span>
      </motion.div>

      {/* Hover Image Reveal */}
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out overflow-hidden pointer-events-none">
        <Image 
          src={project.image} 
          alt={project.name} 
          fill 
          className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700 ease-out" 
        />
        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 transition-opacity duration-700"></div>
      </div>

      {/* Custom Cursor */}
      <motion.div
        animate={{ 
          x: mousePos.x - 50, // Center the 100px circle
          y: mousePos.y - 50,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.5
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
        className="absolute top-0 left-0 w-[100px] h-[100px] rounded-full bg-accent flex items-center justify-center text-primary text-xs font-bold uppercase tracking-widest pointer-events-none z-50 text-center leading-tight shadow-xl"
      >
        View<br/>Project
      </motion.div>
    </Link>
  );
}

export default function CuratedProjects() {
  return (
    <section className="relative z-10 bg-background w-full py-24 md:py-32" id="curated-projects">
      
      {/* Header Section */}
      <div className="flex flex-col items-center px-6 md:px-12 mb-16 md:mb-24">
        <h2 className="text-primary text-center text-5xl md:text-6xl lg:text-7xl leading-none uppercase font-display font-bold tracking-tighter">
          CURATED PROJECTS
        </h2>
        <p className="text-secondary text-center text-lg md:text-xl mt-6 max-w-2xl">
          Selection of projects across branding, social media, and visual systems - each one built with intention.
        </p>
      </div>

      {/* Grid Layout (2-column bordered style) */}
      <div className="flex flex-col md:flex-row md:flex-wrap border-t md:border-l border-neutral-200 mx-6 md:mx-12">
        {curatedProjects.map((project, idx) => (
          <ProjectCard key={project.slug} project={project} idx={idx} />
        ))}

        {/* Filler block if uneven number */}
        {curatedProjects.length % 2 !== 0 && (
           <div className="hidden md:flex group w-full md:w-1/2 border-b md:border-r border-neutral-200 flex-col items-center justify-center min-h-[300px] md:min-h-[400px] bg-transparent">
              <span className="text-tertiary font-mono uppercase tracking-widest text-sm">More coming soon</span>
           </div>
        )}
      </div>

    </section>
  );
}
