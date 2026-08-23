"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { content } from "@/data/content";

export default function DesignerProfile() {
  const { mainText, paragraphLeft, paragraphRight, image } = content.hero;

  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-background pt-20 md:pt-28 pb-12 md:pb-16 border-t border-primary/10">
      
      {/* Unique Background Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0)', 
          backgroundSize: '48px 48px' 
        }}
      ></div>

      {/* Floating Rotating Badge */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-12 left-12 md:top-24 md:left-24 z-0 opacity-20 pointer-events-none hidden sm:block"
      >
        <svg width="120" height="120" viewBox="0 0 100 100" className="fill-primary">
          <path d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z" />
        </svg>
      </motion.div>

      {/* Center 3D Interwoven Effect */}
      <div className="relative flex-1 flex flex-col items-center justify-center w-full pointer-events-none mb-6 md:mb-10 z-10">
        
        {/* Layer 1: Solid Background Text */}
        <motion.h1 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[40%] md:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] sm:text-[15vw] md:text-[14vw] font-black text-accent leading-none select-none z-0 tracking-tighter uppercase font-sans whitespace-nowrap w-full text-center drop-shadow-sm"
        >
          {mainText}
        </motion.h1>

        {/* Layer 2: Person Image */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-[450px] md:max-w-[600px] lg:max-w-[700px] h-[40vh] md:h-[60vh] pointer-events-auto"
          style={{ 
            WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)'
          }}
        >
          <Image
            src={image}
            alt="Mujeeb Rahman - Graphic Designer"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
          />
        </motion.div>

        {/* Layer 3: Transparent Outline Text (Over Image) */}
        <motion.h1 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[40%] md:top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] sm:text-[15vw] md:text-[14vw] font-black leading-none select-none z-20 pointer-events-none text-transparent tracking-tighter uppercase font-sans whitespace-nowrap w-full text-center"
          style={{ WebkitTextStroke: '1.5px rgba(255, 232, 98, 0.9)' }}
        >
          {mainText}
        </motion.h1>
      </div>

      {/* Bottom Paragraphs */}
      <div className="relative px-6 md:px-12 z-30 pointer-events-none">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-7xl mx-auto gap-8 md:gap-0 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:max-w-md"
          >
            <p className="text-sm md:text-base text-primary/90 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: paragraphLeft.replace('I am', '<span class="font-bold text-primary text-base">I am</span>') }} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full md:max-w-md text-left md:text-right"
          >
            <p className="text-sm md:text-base text-primary/90 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: paragraphRight.replace('B.Com Computer Applications', '<span class="font-bold text-primary text-base">B.Com Computer Applications</span>') }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
