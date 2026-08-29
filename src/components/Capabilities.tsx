"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function Capabilities() {
  const { capabilities } = content;

  return (
    <section className="py-16 md:py-32 px-5 md:px-12 bg-accent text-primary" id="capabilities">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-12 md:mb-20">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-primary text-sm font-mono tracking-widest uppercase font-semibold">What I do — 02</span>
              <div className="h-[1px] w-12 bg-primary"></div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-6xl font-display font-bold tracking-tighter"
            >
              Capabilities
            </motion.h2>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary/70 max-w-sm text-lg font-medium"
          >
            A full-stack creative toolkit — from first sketch to the final published asset.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 md:gap-x-12 border-t border-primary/20 pt-16">
          {capabilities.map((cap, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative flex flex-col cursor-default"
            >
              {/* Animated Accent Line */}
              <div className="absolute -top-16 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
              
              <div className="text-primary/50 font-mono text-xl mb-6 group-hover:text-primary transition-colors duration-300 font-semibold">
                (0{idx + 1})
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-white transition-colors duration-300 drop-shadow-sm group-hover:drop-shadow-md">
                {cap.title}
              </h3>
              
              <p className="text-primary/80 font-medium leading-relaxed group-hover:text-primary transition-colors duration-300">
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
