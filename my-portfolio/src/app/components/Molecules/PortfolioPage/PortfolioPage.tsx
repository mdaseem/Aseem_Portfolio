import React from "react";
import AboutSection from "../../Atoms/AboutSection/AboutSection";
import AISection from "../../Atoms/AISection/AiSection";
import ContactSection from "../../Atoms/ContactSection/ContactSection";
import ExperienceSection from "../../Atoms/ExperienceSection/ExperienceSection";
import HeroSection from "../../Atoms/HeroSection/HeroSection";
import NavBar from "../../Atoms/NavBar/NavBar";
import ProjectsSection from "../../Atoms/ProjectsSection/ProjectsSection";
import SkillsSection from "../../Atoms/SkillSection/SkillsSection";
import FadeIn from "../../HOC/FadeIn/FadeIn";

export default function PortfolioPage() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <FadeIn delay={`${0.1}s`}>
          <AboutSection />
        </FadeIn>
        <FadeIn delay={`${0.1}s`}>
          <SkillsSection />
        </FadeIn>
        <ProjectsSection />
        <FadeIn delay={`${0.1}s`}>
          <ExperienceSection />
        </FadeIn>
        <FadeIn delay={`${0.1}s`}>
          <AISection />
        </FadeIn>
        <FadeIn delay={`${0.1}s`}>
          <ContactSection />
        </FadeIn>
      </main>
    </>
  );
}
