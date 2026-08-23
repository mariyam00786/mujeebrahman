"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { content } from "@/data/content";

export default function Hero() {
  const { topTextLeft, topTextRight, mainText, paragraphLeft, paragraphRight, image } = content.hero;

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background pt-6 md:pt-12">
      
      {/* Top Floating Text (Normal flow) */}
      <div className="w-full px-6 md:px-12 z-30">
        <div className="flex justify-between w-full max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-4xl font-bold lowercase tracking-tight"
          >
            {topTextLeft}
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-4xl font-bold lowercase tracking-tight"
          >
            {topTextRight}
          </motion.h2>
        </div>
      </div>

      {/* Center 3D Interwoven Effect (Wrapper ensures items stay together) */}
      <div className="relative flex-1 flex flex-col items-center justify-end w-full pointer-events-none mt-10 md:mt-0">
        
        {/* Layer 1: Solid Background Text */}
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[40%] md:top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[26vw] md:text-[15vw] lg:text-[14vw] font-black text-accent leading-none select-none z-0 tracking-tighter uppercase font-sans whitespace-nowrap w-full text-center"
        >
          {mainText}
        </motion.h1>

        {/* Layer 2: Person Image */}
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-[650px] lg:max-w-[800px] h-[50vh] md:h-[65vh] lg:h-[75vh] pointer-events-auto"
        >
          <Image
            src={image}
            alt="Mujeeb Rahman - Graphic Designer"
            fill
            className="object-contain object-bottom"
            priority
          />
        </motion.div>

        {/* Layer 3: Transparent Outline Text (Over Image) */}
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[40%] md:top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 text-[26vw] md:text-[15vw] lg:text-[14vw] font-black leading-none select-none z-20 pointer-events-none text-transparent tracking-tighter uppercase font-sans whitespace-nowrap w-full text-center"
          style={{ WebkitTextStroke: '1.5px rgba(255, 232, 98, 0.9)' }}
        >
          {mainText}
        </motion.h1>
      </div>

      {/* Bottom Floating Paragraphs (Relative on mobile, absolute overlap on desktop) */}
      <div className="relative md:absolute bottom-0 md:bottom-12 left-0 right-0 px-6 md:px-12 z-30 pb-10 md:pb-0 mt-6 md:mt-0 pointer-events-none">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full max-w-7xl mx-auto gap-6 md:gap-0 pointer-events-auto">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-full md:max-w-sm"
          >
            <p className="text-sm md:text-base text-neutral-800 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: paragraphLeft.replace('I am', '<span class="font-bold text-black text-base">I am</span>') }} />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="max-w-full md:max-w-sm text-left md:text-right self-start md:self-end"
          >
            <p className="text-sm md:text-base text-neutral-800 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: paragraphRight.replace('B.Com Computer Applications', '<span class="font-bold text-black text-base">B.Com Computer Applications</span>') }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
