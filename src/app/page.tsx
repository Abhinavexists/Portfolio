import { Header } from "@/sections/Header";
import { ProfileSection } from "@/sections/Profile";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { AchivementsSection } from "@/sections/Achivements";
import { AboutSection } from "@/sections/About";
import { GameSection } from "@/sections/Game";
import { Footer } from "@/sections/Footer";
import CodingChallengesSection from "@/sections/ChallengesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="home">
        <ProfileSection />
      </section>
      <section id="projects">
        <ProjectsSection />
      <TapeSection />
      <AchivementsSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <CodingChallengesSection />
      <GameSection />
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
