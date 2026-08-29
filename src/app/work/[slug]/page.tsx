import { content } from "@/data/content";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define project details mapped by slug
const projectDetails: Record<string, any> = {
  "ispeak": {
    name: "ISPEAK CENTER",
    role: "Social Media Manager / Designer",
    period: "2023 — Present",
    description: "Complete digital branding and social media execution. Designed posters, covered live events, and shaped the brand's social presence from the ground up.",
    services: ["Brand Identity", "Social Media", "Video Editing", "Posters & Print"],
    highlightImage: "/images/work/ispeak-highlight.jpg",
    sections: [
      {
        label: "Branding",
        images: [
          "/images/work/ispeak-branding (1).jpeg",
          "/images/work/ispeak-branding (3).jpeg",
          "/images/work/ispeak-branding (4).jpeg",
          "/images/work/ispeak-branding (5).jpeg",
          "/images/work/ispeak-branding (6).jpeg",
          "/images/work/ispeak-branding (7).jpeg",
          "/images/work/ispeak-branding (8).jpeg",
          "/images/work/ispeak-branding (9).jpeg",
          "/images/work/ispeak-branding (10).jpeg",
        ]
      },
      {
        label: "Posters",
        images: [
          "/images/work/ispeak-poster (1).jpeg",
          "/images/work/ispeak-poster (2).jpeg",
          "/images/work/ispeak-poster (3).jpeg",
          "/images/work/ispeak-poster (4).jpeg",
          "/images/work/ispeak-poster (5).jpeg",
          "/images/work/ispeak-poster (6).jpeg",
          "/images/work/ispeak-poster (7).jpeg",
          "/images/work/ispeak-poster (8).jpeg",
          "/images/work/ispeak-poster (9).jpeg",
          "/images/work/ispeak-poster (11).jpeg",
          "/images/work/ispeak-poster(12).jpeg",
        ]
      }
    ]
  },
  "promed": {
    name: "PROMED TRADING",
    role: "Marketing & Design",
    period: "Jan — Aug 2023",
    description: "Ran social media, created promotional ads, managed the medical store, and executed paid ad campaigns.",
    services: ["Marketing Design", "Ad Creatives", "Campaign Management"],
    images: [
      "/images/work/promed-cover.jpg.jpeg",
      "/images/work/promed-posters (1).jpeg",
      "/images/work/promed-posters (2).jpeg",
      "/images/work/promed-posters (3).jpeg",
      "/images/work/promed-posters (4).jpeg",
      "/images/work/promed-posters (5).jpeg",
    ]
  },
  "flywings": {
    name: "FLYWINGS TRAVELS",
    role: "Graphic Designer",
    period: "2022",
    description: "Designed posters, banners & thumbnails. Handled full video editing pipelines from raw footage to final output for travel promos.",
    services: ["Video Editing", "Posters", "Banners"],
    images: [
      "/images/work/flywings-cover.jpg.jpeg",
      "/images/work/flywing-posters (1).jpeg",
      "/images/work/flywing-posters (2).jpeg",
      "/images/work/flywing-posters (3).jpeg",
      "/images/work/flywing-posters (4).jpeg",
      "/images/work/flywing-posters (5).jpeg",
      "/images/work/flywing-posters (6).jpeg",
      "/images/work/flywing-posters (7).jpeg",
      "/images/work/flywing-posters (8).jpeg",
      "/images/work/flywing-posters (9).jpeg",
      "/images/work/flywing-posters (10).jpeg",
      "/images/work/flywing-posters (11).jpeg",
      "/images/work/flywing-posters (12).jpeg",
    ]
  },
  "personal": {
    name: "PERSONAL WORKS",
    role: "Visual Designer",
    period: "Ongoing",
    description: "A collection of personal explorations, visual experiments, and passion projects showcasing my creative range outside of client work.",
    services: ["Visual Design", "Experimentation", "Typography"],
    sections: [
      {
        label: "Creative Works",
        images: [
          "/images/work/personal works (1).jpeg",
          "/images/work/personal works (2).jpeg",
          "/images/work/personal works (3).jpeg",
          "/images/work/personal works (4).jpeg",
          "/images/work/personal works (5).jpeg",
          "/images/work/personal works (6).jpeg",
          "/images/work/personal works (7).jpeg",
          "/images/work/personal works (8).jpeg",
          "/images/work/personal works (9).jpeg",
          "/images/work/personal works (10).jpeg",
          "/images/work/personal works (11).jpeg",
        ]
      },
      {
        label: "Logo Design",
        images: [
          "/images/work/personal-logo (1).jpeg",
          "/images/work/personal-logo (2).jpeg",
          "/images/work/personal-logo (3).jpeg",
          "/images/work/personal-logo (4).jpeg",
          "/images/work/personal-logo (5).jpeg",
          "/images/work/personal-logo (6).jpeg",
        ]
      }
    ]
  }
};

// Reusable masonry grid
function MasonryGrid({ images, projectName }: { images: string[]; projectName: string }) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
      {images.map((img: string, idx: number) => (
        <div
          key={idx}
          className="relative overflow-hidden bg-primary/5 group rounded-2xl md:rounded-3xl break-inside-avoid shadow-sm hover:shadow-xl transition-shadow duration-500"
        >
          <img
            src={encodeURI(img)}
            alt={`${projectName} image ${idx + 1}`}
            className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectDetails[slug];

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-background min-h-screen text-primary selection:bg-accent selection:text-white pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-mono uppercase tracking-widest text-sm mb-16"
        >
          <span>←</span> Back to Home
        </Link>

        {/* Project Header */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-start mb-16 md:mb-24 border-b border-primary/10 pb-10 md:pb-16">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-7xl lg:text-[7rem] font-display font-black tracking-tighter leading-[0.9] uppercase mb-5 md:mb-8 text-primary">
              {project.name}
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 font-medium leading-relaxed">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-col gap-8 min-w-[250px]">
            <div>
              <span className="block text-primary/50 font-mono text-sm uppercase tracking-widest mb-2">Role</span>
              <span className="text-lg font-medium">{project.role}</span>
            </div>
            <div>
              <span className="block text-primary/50 font-mono text-sm uppercase tracking-widest mb-2">Timeline</span>
              <span className="text-lg font-medium">{project.period}</span>
            </div>
            <div>
              <span className="block text-primary/50 font-mono text-sm uppercase tracking-widest mb-2">Services</span>
              <ul className="flex flex-col gap-1">
                {project.services.map((s: string) => (
                  <li key={s} className="text-lg font-medium">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Highlight Image (if any) */}
        {project.highlightImage && (
          <div className="mb-16 md:mb-24 w-full flex justify-center">
            <div className="w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-primary/5 flex items-center justify-center">
              <img 
                src={encodeURI(project.highlightImage)} 
                alt={`${project.name} Highlight`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </div>
          </div>
        )}

        {/* Sectioned gallery (e.g. Branding + Posters) */}
        {project.sections ? (
          <div className="flex flex-col gap-20">
            {project.sections.map((section: { label: string; images: string[] }) => (
              <div key={section.label}>
                {/* Section heading */}
                <div className="flex items-center gap-6 mb-10">
                  <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight text-primary whitespace-nowrap">
                    {section.label}
                  </h2>
                  <div className="flex-1 h-px bg-primary/15" />
                  <span className="font-mono text-sm text-primary/40 uppercase tracking-widest">
                    {section.images.length} images
                  </span>
                </div>
                <MasonryGrid images={section.images} projectName={project.name} />
              </div>
            ))}
          </div>
        ) : (
          /* Flat gallery for other projects */
          <MasonryGrid images={project.images} projectName={project.name} />
        )}

      </div>
    </main>
  );
}

