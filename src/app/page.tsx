import Hero from "@/components/Hero";
import DesignerProfile from "@/components/DesignerProfile";
import MarqueeStrip from "@/components/MarqueeStrip";
import Capabilities from "@/components/Capabilities";
import CuratedProjects from "@/components/CuratedProjects";
import PersonalProjects from "@/components/PersonalProjects";
import LogoShowcase from "@/components/LogoShowcase";
import ContactFooter from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="bg-background text-primary selection:bg-accent selection:text-white">
      <Hero />
      <DesignerProfile />
      <MarqueeStrip />
      <Capabilities />
      <CuratedProjects />
      <PersonalProjects />
      <LogoShowcase />
      <ContactFooter />
    </main>
  );
}
