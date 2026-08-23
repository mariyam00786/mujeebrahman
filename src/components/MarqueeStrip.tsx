"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function MarqueeStrip() {
  const { items } = content.marquee;
  
  // Duplicate the array to create a seamless loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full bg-primary text-background overflow-hidden py-4 md:py-6 relative border-y border-neutral-800">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-primary via-transparent to-primary w-full h-full opacity-50 hidden md:block"></div>
      
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex gap-8 md:gap-16 items-center"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <div className="flex gap-8 md:gap-16 items-center pr-8 md:pr-16">
            {marqueeItems.map((item, index) => (
              <div key={index} className="flex items-center gap-8 md:gap-16">
                <span className="text-xl md:text-3xl font-display font-medium tracking-tight uppercase">
                  {item}
                </span>
                <span className="text-accent text-2xl md:text-4xl leading-none">✦</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
