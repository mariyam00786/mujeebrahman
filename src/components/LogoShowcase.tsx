"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  "/images/work/personal-logo.jpeg",
  "/images/work/personal-logo (1).jpeg",
  "/images/work/personal-logo (2).jpeg",
  "/images/work/personal-logo (3).jpeg",
  "/images/work/personal-logo (4).jpeg",
];

export default function LogoShowcase() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-primary/10" id="logo-showcase">
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
              <span className="text-primary text-sm font-mono tracking-widest uppercase font-semibold">BRANDING — 05</span>
              <div className="h-[1px] w-12 bg-primary"></div>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase text-primary"
            >
              Advanced Logos
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary/70 max-w-sm text-lg font-medium"
          >
            A curated selection of brand marks, logotypes, and symbols designed with precision and intention.
          </motion.p>
        </div>

        {/* Logo Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              className="relative w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] aspect-square overflow-hidden bg-primary/5 rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-500 flex items-center justify-center p-8"
            >
              <Image 
                src={img} 
                alt={`Logo Design ${idx + 1}`} 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
