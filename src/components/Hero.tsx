"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center overflow-hidden bg-background">
      
      {/* Top Bar Navigation */}
      <div className="absolute top-0 left-0 right-0 p-6 md:p-8 flex justify-between items-center z-50 text-sm md:text-base font-medium">
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-accent text-primary px-5 py-2 rounded-full font-bold shadow-sm"
        >
          Hello, Welcome
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-primary hidden sm:block font-semibold"
        >
          Mujeeb Rahman
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-semibold"
        >
          Graphic Design
        </motion.div>
      </div>

      {/* Center Kinetic Typography */}
      <div className="relative flex flex-col items-center justify-center w-full z-10 pointer-events-none mt-10 md:mt-0">
        
        {/* Top Layer 2 (Hollow Outline) */}
        <motion.h1 
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-65%", opacity: 0.3 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute text-[22vw] sm:text-[18vw] md:text-[16vw] font-black tracking-tighter text-transparent lowercase whitespace-nowrap"
          style={{ WebkitTextStroke: '2px var(--color-accent)' }}
        >
          portfolio
        </motion.h1>

        {/* Top Layer 1 (Hollow Outline) */}
        <motion.h1 
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "-35%", opacity: 0.6 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute text-[22vw] sm:text-[18vw] md:text-[16vw] font-black tracking-tighter text-transparent lowercase whitespace-nowrap"
          style={{ WebkitTextStroke: '2px var(--color-accent)' }}
        >
          portfolio
        </motion.h1>

        {/* Center Solid Layer (Yellow with Dark Brutalist Shadow) */}
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative text-[22vw] sm:text-[18vw] md:text-[16vw] font-black tracking-tighter text-accent lowercase whitespace-nowrap z-20"
          style={{ textShadow: '4px 4px 0px var(--color-primary), 8px 8px 0px rgba(28,25,23,0.15)' }}
        >
          portfolio
        </motion.h1>

        {/* Bottom Layer 1 (Hollow Outline) */}
        <motion.h1 
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "35%", opacity: 0.6 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute text-[22vw] sm:text-[18vw] md:text-[16vw] font-black tracking-tighter text-transparent lowercase whitespace-nowrap"
          style={{ WebkitTextStroke: '2px var(--color-accent)' }}
        >
          portfolio
        </motion.h1>

        {/* Bottom Layer 2 (Hollow Outline) */}
        <motion.h1 
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: "65%", opacity: 0.3 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="absolute text-[22vw] sm:text-[18vw] md:text-[16vw] font-black tracking-tighter text-transparent lowercase whitespace-nowrap"
          style={{ WebkitTextStroke: '2px var(--color-accent)' }}
        >
          portfolio
        </motion.h1>

        {/* 2026 Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute top-[75%] md:top-[80%] z-30 text-xl md:text-3xl font-black text-primary/80 bg-background/80 backdrop-blur-sm px-4 rounded-full drop-shadow-md"
        >
          2026
        </motion.div>
      </div>

    </section>
  );
}
