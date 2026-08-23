"use client";

import { motion } from "framer-motion";
import { content } from "@/data/content";

export default function ExperienceTimeline() {
  const { experience } = content;

  return (
    <section className="py-24 px-6 md:px-12 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-primary mb-16">
          Where I&apos;ve Worked
        </h2>

        <div className="flex flex-col gap-12 md:gap-16">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative pl-6 md:pl-0 border-l md:border-l-0 border-neutral-200"
            >
              <div className="md:grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                {/* Year/Timeline Indicator */}
                <div className="text-sm font-mono text-tertiary mb-2 md:mb-0 md:pt-1 relative">
                  <span className="md:hidden absolute -left-[29px] top-1.5 w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-accent transition-colors duration-300"></span>
                  {exp.period}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-medium text-primary mb-1">
                    {exp.role}
                  </h3>
                  <div className="text-lg text-secondary mb-4">
                    {exp.company}
                  </div>
                  <p className="text-base text-tertiary leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
