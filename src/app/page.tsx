import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AchivementsSection } from "@/sections/Achivements";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
        <Header />
        <HeroSection />
        <ProjectsSection />
        <TapeSection />
        <AchivementsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
    </div>
  );
}
