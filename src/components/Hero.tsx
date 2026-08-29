"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-background text-primary">

      {/* Top Nav */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-between items-center px-5 md:px-12 pt-6 md:pt-8 z-50"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-primary" />
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-sm bg-primary opacity-60" />
            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-accent border border-primary/20" />
          </div>
          <div className="leading-none ml-1">
            <div className="font-display font-black text-sm md:text-base tracking-tight text-primary uppercase">Mujeeb</div>
            <div className="font-display font-black text-sm md:text-base tracking-tight text-secondary uppercase">Studio</div>
          </div>
        </div>

        {/* Top right label */}
        <p className="font-mono text-[10px] md:text-xs text-secondary uppercase tracking-widest">Portfolio / 2026</p>
      </motion.div>

      {/* Portfolio text — absolutely centered */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4">
        <div className="relative w-full leading-none">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="font-script text-primary select-none italic w-full text-center"
            style={{
              fontSize: "clamp(3rem, 18vw, 20rem)",
              lineHeight: 1,
              fontWeight: 700,
            }}
          >
            Portfolio
          </motion.h1>

          {/* Golden wavy SVG ribbon */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 pointer-events-none origin-left"
            style={{ top: "38%", height: "28%" }}
          >
            <svg viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#b8860b" stopOpacity="0.6" />
                  <stop offset="20%"  stopColor="#ffd700" stopOpacity="0.9" />
                  <stop offset="45%"  stopColor="#ffe862" stopOpacity="1" />
                  <stop offset="60%"  stopColor="#d4a017" stopOpacity="1" />
                  <stop offset="80%"  stopColor="#ffd700" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#b8860b" stopOpacity="0.5" />
                </linearGradient>
              </defs>
              <path d="M0,55 C120,20 240,90 360,50 C480,10 600,80 720,45 C840,10 960,75 1080,40 C1200,5 1320,70 1440,35"
                fill="none" stroke="url(#goldGrad)" strokeWidth="18" strokeLinecap="round" />
              <path d="M0,50 C120,15 240,85 360,45 C480,5 600,75 720,40 C840,5 960,70 1080,35 C1200,0 1320,65 1440,30"
                fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom info strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-end px-5 md:px-12 pb-16 md:pb-8 gap-2 md:gap-0 z-10"
      >
        <p className="font-sans text-xs md:text-sm text-secondary tracking-wide leading-relaxed">
          BRANDING&nbsp;&bull;&nbsp;GRAPHIC DESIGN&nbsp;&bull;&nbsp;SOCIAL MEDIA&nbsp;&bull;&nbsp;VIDEO&nbsp;&bull;&nbsp;CONTENT&nbsp;&bull;&nbsp;DIGITAL MARKETING
        </p>
        <div className="font-mono text-[10px] md:text-xs text-secondary tracking-wide flex flex-wrap gap-2 md:gap-4 items-center">
          <span>mujeebmuji.888@gmail.com</span>
          <span className="text-primary/30 hidden md:inline">/</span>
          <span>+974 30482688</span>
          <span className="text-primary/30 hidden md:inline">/</span>
          <span>Kerala, India</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 z-20"
      >
        <span className="font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-secondary">Scroll</span>
        <div className="w-5 h-8 md:w-6 md:h-10 rounded-full border-2 border-primary/30 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 md:h-2 rounded-full bg-accent"
          />
        </div>
        <motion.svg
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          width="14" height="8" viewBox="0 0 16 10" fill="none"
          className="text-primary/30"
        >
          <path d="M1 1L8 8L15 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </motion.div>

    </section>
  );
}