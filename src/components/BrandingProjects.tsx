"use client";

import { motion } from "framer-motion";

type ProjectImage = {
  src: string;
  className?: string; // To control bento box spans (e.g., 'col-span-2 row-span-2')
};

type BrandingProject = {
  id: string;
  clientName: string;
  description: string[];
  images: ProjectImage[];
};

const diafaImages: ProjectImage[] = [
  { src: "/images/work/branding.mp4" },
  { src: "/images/work/branding.jpeg" },
  { src: "/images/work/branding.png" },
  { src: "/images/work/branding (1).jpeg" },
  { src: "/images/work/branding (2).jpeg" },
  { src: "/images/work/branding (3).jpeg" },
  { src: "/images/work/branding (4).jpeg" },
  { src: "/images/work/branding (5).jpeg" },
  { src: "/images/work/branding (6).jpeg" },
  { src: "/images/work/branding (7).jpeg" },
  { src: "/images/work/branding (8).jpeg" },
  { src: "/images/work/branding (9).jpeg" },
  { src: "/images/work/branding (10).jpeg" },
  { src: "/images/work/branding (11).jpeg" },
];

const ispeakImages: ProjectImage[] = [
  { src: "/images/work/ispeak-branding (1).jpeg" },
  { src: "/images/work/ispeak-branding (3).jpeg" },
  { src: "/images/work/ispeak-branding (4).jpeg" },
  { src: "/images/work/ispeak-branding (5).jpeg" },
  { src: "/images/work/ispeak-branding (6).jpeg" },
  { src: "/images/work/ispeak-branding (7).jpeg" },
  { src: "/images/work/ispeak-branding (8).jpeg" },
  { src: "/images/work/ispeak-branding (9).jpeg" },
  { src: "/images/work/ispeak-branding (10).jpeg" },
];

const projects: BrandingProject[] = [
  {
    id: "diafa",
    clientName: "DIAFA HASHA BAKERY",
    description: [
      "I transform ideas into impactful realities through creative and strategic design solutions. Specializing in visual identity creation, I ensure that every project reflects the essence of the brand, delivering a cohesive and memorable experience.",
      "From concept development to final execution, our expertise covers every stage of the branding process. Whether it's building a brand from the ground up or refreshing an existing identity, I provide innovative solutions that connect deeply with audiences and elevate brand presence."
    ],
    images: diafaImages
  },
  {
    id: "ispeak",
    clientName: "ISPEAK CENTER",
    description: [
      "A comprehensive brand identity for Ispeak Center. Focusing on accessibility and engagement, the design language communicates care, professionalism, and approachability.",
      "The visual system extends across various touchpoints, ensuring a consistent and impactful brand presence in both physical and digital spaces."
    ],
    images: ispeakImages
  }
];

export default function BrandingProjects() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-primary/10" id="branding-projects">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-primary text-sm font-mono tracking-widest uppercase font-semibold">SELECTED WORKS - 05</span>
            <div className="h-[1px] w-12 bg-primary" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold tracking-tighter uppercase text-primary"
          >
            Branding Projects
          </motion.h2>
        </div>

        {/* Projects List */}
        <div className="flex flex-col gap-24 md:gap-40">
          {projects.map((project, pIdx) => (
            <div key={project.id} className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              
              {/* Left Side: Sticky Text Content */}
              <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                {/* Client name removed as per request */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-6 text-primary/70 font-medium mb-16 text-sm md:text-base leading-relaxed"
                >
                  {project.description.map((p, i) => <p key={i}>{p}</p>)}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-xs md:text-sm font-semibold uppercase text-primary/80 tracking-widest"
                >
                  MUJEEB RAHMAN<br />
                  © All rights reserved
                </motion.div>
              </div>

              {/* Right Side: Masonry Gallery - Perfect Masonry via Flex Columns */}
              <div className="lg:w-2/3">
                
                {/* Desktop/Tablet: 2 Columns */}
                <div className="hidden md:grid grid-cols-2 gap-6 mb-12">
                  {[0, 1].map((colIndex) => (
                    <div key={colIndex} className="flex flex-col gap-6">
                      {project.images.filter((_, i) => i % 2 === colIndex).map((img, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 24 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="relative overflow-hidden rounded-2xl group bg-primary/5 shadow-sm hover:shadow-md transition-all duration-500">
                            {img.src.endsWith(".mp4") ? (
                              <video src={encodeURI(img.src)} autoPlay loop muted playsInline className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                            ) : (
                              <img src={encodeURI(img.src)} alt={`${project.clientName} Work`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Mobile: 1 Column */}
                <div className="grid md:hidden grid-cols-1 gap-6 mb-12">
                  {project.images.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl group bg-primary/5 shadow-sm hover:shadow-md transition-all duration-500">
                        {img.src.endsWith(".mp4") ? (
                          <video src={encodeURI(img.src)} autoPlay loop muted playsInline className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                        ) : (
                          <img src={encodeURI(img.src)} alt={`${project.clientName} Work`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]" loading="lazy" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
