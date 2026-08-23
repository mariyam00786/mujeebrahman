"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function About() {
  const { bio } = content.about;

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl lg:text-5xl leading-tight md:leading-snug font-medium text-primary tracking-tight"
        >
          {bio}
        </motion.p>
      </div>
    </section>
  );
}
