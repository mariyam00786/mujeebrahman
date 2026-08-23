"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { content } from "@/data/content";

export default function SocialArchive() {
  const { socialArchive } = content;

  // We want to ensure we have exactly 5 images to match our bespoke magazine grid layout.
  // If the user uploads more or fewer, this specific layout maps to indices 0-4.
  // Real world usage: you'd map dynamically, but a magazine layout requires bespoke sizing.
  const images = socialArchive.slice(0, 7);

  return (
    <section className="py-24 md:py-32 bg-background" id="social-archive">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-accent text-sm font-mono tracking-widest uppercase mb-4 block">Archive — 03</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-primary">
              Social Media
            </h2>
          </div>
          <p className="text-secondary max-w-sm text-lg md:text-right">
            A curated selection of campaigns, grids, and visual explorations designed for the feed.
          </p>
        </div>
      </div>

      {/* Magazine Grid Layout */}
      {/* We use a background color and gap-px to create 1px solid borders between all items like a print magazine */}
      <div className="border-y border-neutral-300 bg-neutral-300 w-full">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-px">
          
          {/* Featured Large Poster (Left) */}
          {images[0] && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-7 bg-background p-6 md:p-12 xl:p-20 flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] bg-neutral-100 group overflow-hidden">
                <div className="absolute inset-0 z-0 bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-400 text-sm">Image 1</div>
                <Image src={images[0].image} alt={images[0].caption} fill className="object-cover z-10 transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <span className="font-mono text-xs text-tertiary uppercase tracking-widest">Fig. 01</span>
                <p className="text-sm font-medium text-primary text-right max-w-[200px]">{images[0].caption}</p>
              </div>
            </motion.div>
          )}

          {/* Right Side Stack */}
          <div className="col-span-1 md:col-span-5 bg-neutral-300 flex flex-col gap-px">
            
            {/* Top Right Square */}
            {images[1] && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="bg-background p-6 md:p-10 flex-1 flex flex-col justify-center"
              >
                <div className="relative w-full aspect-square bg-neutral-100 group overflow-hidden mx-auto max-w-[400px]">
                  <div className="absolute inset-0 z-0 bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-400 text-sm">Image 2</div>
                  <Image src={images[1].image} alt={images[1].caption} fill className="object-cover z-10 transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="mt-6 flex justify-between items-start max-w-[400px] mx-auto w-full">
                  <span className="font-mono text-xs text-tertiary uppercase tracking-widest">Fig. 02</span>
                  <p className="text-sm font-medium text-primary text-right">{images[1].caption}</p>
                </div>
              </motion.div>
            )}

            {/* Bottom Right Landscape */}
            {images[2] && (
               <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="bg-background p-6 md:p-10 flex-1 flex flex-col justify-center"
             >
               <div className="relative w-full aspect-video bg-neutral-100 group overflow-hidden mx-auto max-w-[400px]">
                 <div className="absolute inset-0 z-0 bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-400 text-sm">Image 3</div>
                 <Image src={images[2].image} alt={images[2].caption} fill className="object-cover z-10 transition-transform duration-1000 group-hover:scale-105" />
               </div>
               <div className="mt-6 flex justify-between items-start max-w-[400px] mx-auto w-full">
                 <span className="font-mono text-xs text-tertiary uppercase tracking-widest">Fig. 03</span>
                 <p className="text-sm font-medium text-primary text-right">{images[2].caption}</p>
               </div>
             </motion.div>
            )}

          </div>

          {/* Bottom Row - Split 50/50 */}
          {images[3] && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-6 bg-background p-6 md:p-12 flex flex-col"
            >
              <div className="relative w-full aspect-square md:aspect-[4/3] bg-neutral-100 group overflow-hidden">
                <div className="absolute inset-0 z-0 bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-400 text-sm">Image 4</div>
                <Image src={images[3].image} alt={images[3].caption} fill className="object-cover z-10 transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <span className="font-mono text-xs text-tertiary uppercase tracking-widest">Fig. 04</span>
                <p className="text-sm font-medium text-primary text-right max-w-[200px]">{images[3].caption}</p>
              </div>
            </motion.div>
          )}

          {images[4] && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-6 bg-background p-6 md:p-12 flex flex-col"
            >
              <div className="relative w-full aspect-square md:aspect-[4/3] bg-neutral-100 group overflow-hidden">
                <div className="absolute inset-0 z-0 bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-400 text-sm">Image 5</div>
                <Image src={images[4].image} alt={images[4].caption} fill className="object-cover z-10 transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <span className="font-mono text-xs text-tertiary uppercase tracking-widest">Fig. 05</span>
                <p className="text-sm font-medium text-primary text-right max-w-[200px]">{images[4].caption}</p>
              </div>
            </motion.div>
          )}

          {/* Third Row - Asymmetric (5/7 split) for the remaining 2 images */}
          {images[5] && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-5 bg-background p-6 md:p-12 flex flex-col"
            >
              <div className="relative w-full aspect-[3/4] md:aspect-square bg-neutral-100 group overflow-hidden">
                <div className="absolute inset-0 z-0 bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-400 text-sm">Image 6</div>
                <Image src={images[5].image} alt={images[5].caption} fill className="object-cover z-10 transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <span className="font-mono text-xs text-tertiary uppercase tracking-widest">Fig. 06</span>
                <p className="text-sm font-medium text-primary text-right max-w-[200px]">{images[5].caption}</p>
              </div>
            </motion.div>
          )}

          {images[6] && (
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="col-span-1 md:col-span-7 bg-background p-6 md:p-12 xl:p-20 flex flex-col"
            >
              <div className="relative w-full aspect-video md:aspect-[16/10] bg-neutral-100 group overflow-hidden">
                <div className="absolute inset-0 z-0 bg-neutral-200 animate-pulse flex items-center justify-center text-neutral-400 text-sm">Image 7</div>
                <Image src={images[6].image} alt={images[6].caption} fill className="object-cover z-10 transition-transform duration-1000 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <span className="font-mono text-xs text-tertiary uppercase tracking-widest">Fig. 07</span>
                <p className="text-sm font-medium text-primary text-right max-w-[200px]">{images[6].caption}</p>
              </div>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
}
