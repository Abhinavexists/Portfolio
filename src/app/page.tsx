import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AchivementsSection } from "@/sections/Achivements";
import { AboutSection } from "@/sections/About";

export default function Home() {
  return (
    <div>
       <Header />
       <HeroSection />
       <ProjectsSection />
       <TapeSection />
       <AchivementsSection />
       <AboutSection />
    </div>
  );
}
