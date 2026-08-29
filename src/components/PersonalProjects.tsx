"use client";

import { motion } from "framer-motion";

const videos = [
  "/images/work/AI project.mp4",
  "/images/work/Summer camp Ai promotion ads 2.mp4",
  "/images/work/onam 2.mp4",
];

const images = [
  "/images/work/personal works (9).jpeg",
  "/images/work/personal works (10).jpeg",
  "/images/work/personal works (11).jpeg",
  "/images/work/personal works (1).jpeg",
  "/images/work/personal works (2).jpeg",
  "/images/work/personal works (3).jpeg",
  "/images/work/personal works (4).jpeg",
  "/images/work/personal works (5).jpeg",
  "/images/work/personal works (6).jpeg",
  "/images/work/personal works (7).jpeg",
  "/images/work/personal works (8).jpeg",
];

function CardIcons() {
  return (
    <div className="flex items-center justify-between mt-3 px-1">
      <div className="flex items-center gap-3 text-primary/40">
        {/* Send */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
        </svg>
        {/* Heart */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
        {/* Comment */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      {/* Bookmark */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary/40">
        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
      </svg>
    </div>
  );
}

export default function PersonalProjects() {
  const allItems = [...images];

  return (
    <section className="py-24 md:py-32 bg-background border-t border-primary/10" id="personal-projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-primary text-sm font-mono tracking-widest uppercase font-semibold">SELECTED WORKS - 04</span>
              <div className="h-[1px] w-12 bg-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase text-primary"
            >
              Personal Projects
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary/70 max-w-sm text-lg font-medium"
          >
            A collection of visual experiments, passion projects, and creative explorations outside of client work.
          </motion.p>
        </div>

        {/* Square card grid - 3 columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-12 md:mb-16">
          {allItems.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: (idx % 3) * 0.07 }}
            >
              {/* Poster image card */}
              <div className="relative overflow-hidden rounded-2xl group aspect-[3/4] bg-primary/5 shadow-sm hover:shadow-lg transition-shadow duration-500">
                <img
                  src={img}
                  alt={`Personal Work ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <CardIcons />
            </motion.div>
          ))}
        </div>

        {/* Motion Work label */}
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary/50 text-xs font-mono tracking-widest uppercase">Motion Work</span>
          <div className="h-[1px] flex-1 bg-primary/10" />
          <span className="text-primary/30 text-xs font-mono">{videos.length} videos</span>
        </div>

        {/* Videos - reel portrait (9:16) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {videos.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
            >
              <div className="relative overflow-hidden rounded-2xl group aspect-[9/16] bg-primary/5 shadow-sm hover:shadow-lg transition-shadow duration-500">
                <video
                  src={src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}