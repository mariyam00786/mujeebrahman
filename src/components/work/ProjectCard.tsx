"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

interface ProjectCardProps {
  id: string;
  title: string;
  year: string;
  categories: string[];
  image: string | string[];
  link: string;
}

export default function ProjectCard({ title, year, categories, image, link }: ProjectCardProps) {
  const images = Array.isArray(image) ? image : [image];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col gap-6 w-full"
    >
      <div className="relative w-full overflow-hidden bg-neutral-100 aspect-[3/4] sm:aspect-square md:aspect-[4/5] lg:aspect-[3/4] max-h-[80vh]">
        {/* Placeholder logic handles if the user hasn't added the image yet */}
        <div className="absolute inset-0 z-0 bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-400">
          <span className="text-sm">Loading Media...</span>
        </div>
        
        {images.length > 1 ? (
          <div className="absolute inset-0 z-10 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
            {images.map((img, idx) => (
              <div key={idx} className="relative min-w-full h-full snap-center group/img">
                <Image
                  src={img}
                  alt={`${title} - image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
                <Link href={link} className="absolute inset-0 bg-black/0 hover:bg-black/10 z-20 transition-all duration-500 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer">
                   <div className="bg-primary text-background px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 hover:translate-y-0 transition-all duration-500 ease-out pointer-events-none">
                      <span>View Project</span>
                      <ArrowUpRight className="w-4 h-4" />
                   </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <Link href={link} className="block absolute inset-0 z-10">
            <Image
              src={images[0]}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
            <div className="absolute inset-0 bg-black/10 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <div className="bg-primary text-background px-6 py-3 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <span>View Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        )}
        
        {/* Navigation dots for multiple images */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2 pointer-events-none">
             {images.map((_, idx) => (
               <div key={idx} className="w-2 h-2 rounded-full bg-white/50 backdrop-blur-sm" />
             ))}
          </div>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 border-b border-neutral-200 pb-8 mt-4">
        <div className="flex flex-col gap-3">
          <h3 className="text-4xl md:text-5xl font-display font-medium text-primary tracking-tight hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, idx) => (
              <span key={idx} className="text-sm font-medium uppercase tracking-wider text-secondary bg-neutral-100 px-4 py-1.5 rounded-full">
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="text-lg font-medium text-tertiary font-mono pt-2 md:pt-0">
          {year}
        </div>
      </div>
    </motion.div>
  );
}
