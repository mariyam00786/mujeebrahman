"use client";

import { motion } from "framer-motion";

const videos = [
  "/images/work/AI project.mp4",
  "/images/work/Summer camp Ai promotion ads 2.mp4",
  "/images/work/onam 2.mp4",
];

const images = [
  "/images/work/personal works (1).jpeg",
  "/images/work/personal works (2).jpeg",
  "/images/work/personal works (3).jpeg",
  "/images/work/personal works (4).jpeg",
  "/images/work/personal works (5).jpeg",
  "/images/work/personal works (6).jpeg",
  "/images/work/personal works (7).jpeg",
  "/images/work/personal works (8).jpeg",
];

export default function PersonalProjects() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-primary/10" id="personal-projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-primary text-sm font-mono tracking-widest uppercase font-semibold">SELECTED WORKS — 04</span>
              <div className="h-[1px] w-12 bg-primary"></div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase text-primary"
            >
              Personal Projects
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary/70 max-w-sm text-lg font-medium"
          >
            A collection of visual experiments, passion projects, and creative explorations outside of client work.
          </motion.p>
        </div>

        {/* Videos Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {videos.map((src, idx) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative overflow-hidden bg-primary/5 rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-500 aspect-[9/16] md:aspect-auto md:h-[600px]"
            >
              <video 
                src={src} 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
              />
            </motion.div>
          ))}
        </div>

        {/* Masonry Images Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              className="relative overflow-hidden bg-primary/5 rounded-2xl group break-inside-avoid shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={img} 
                alt={`Personal Work ${idx + 1}`} 
                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </motion.div>
          ))}

          {/* Minimal Filler Block to balance the 3-column grid (8 images + 1 block = 9 items) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative bg-transparent border border-primary/10 rounded-2xl break-inside-avoid flex flex-col items-center justify-center p-12 text-center h-[400px] shadow-sm hover:border-primary/30 transition-colors duration-500"
          >
            <div className="w-12 h-[2px] bg-primary/20 mb-8"></div>
            <h3 className="text-3xl font-display font-bold text-primary tracking-tighter uppercase mb-4 leading-none">
              Constant<br />Exploration
            </h3>
            <p className="text-primary/50 font-mono text-xs uppercase tracking-widest">
              More updates soon
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
