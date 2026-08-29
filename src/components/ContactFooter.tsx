"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function ContactFooter() {
  const { headline, email, phoneQatar, phoneIndia, socials } = content.contact;

  return (
    <footer className="bg-background text-primary pt-16 md:pt-32 pb-8 px-5 md:px-12 relative overflow-hidden border-t border-primary/10" id="contact">
      {/* Background Marquee of Name */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.03] pointer-events-none overflow-hidden select-none">
        <h2 className="text-[20vw] font-display font-bold uppercase whitespace-nowrap leading-none tracking-tighter">
          MUJEEB RAHMAN MUJEEB RAHMAN
        </h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col min-h-[50vh] justify-between">
        
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl lg:text-[7rem] font-display font-bold tracking-tighter leading-[0.9] mb-6 md:mb-8">
              <span className="block">{headline.split(' ').slice(0, Math.ceil(headline.split(' ').length / 2)).join(' ')}</span>
              <span className="block">{headline.split(' ').slice(Math.ceil(headline.split(' ').length / 2)).join(' ')}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col gap-8 md:mt-4 md:items-end text-lg md:text-xl"
          >
            <a 
              href={`mailto:${email}`}
              className="text-primary/70 hover:text-primary transition-colors duration-300 font-medium pb-1 border-b border-primary/20 hover:border-primary inline-flex"
            >
              {email}
            </a>
            
            <div className="flex flex-col gap-2 md:items-end text-primary/60 font-medium">
              <p>Qatar: <a href={`tel:${phoneQatar.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">{phoneQatar}</a></p>
              <p>India: <a href={`tel:${phoneIndia.replace(/[^0-9+]/g, '')}`} className="hover:text-primary transition-colors">{phoneIndia}</a></p>
            </div>
            
            <div className="flex gap-6 mt-4">
              {Object.entries(socials).map(([platform, link]) => (
                <a 
                  key={platform} 
                  href={link as string} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="capitalize text-primary/60 hover:text-primary font-semibold transition-all"
                >
                  {platform}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 md:mt-32 pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary/50 font-mono text-center">
          <p>© {new Date().getFullYear()} Mujeeb Rahman. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Home</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
