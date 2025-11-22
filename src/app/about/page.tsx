import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StorySection from "@/components/about/StorySection";
import MissionVision from "@/components/about/MissionVision";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/sections/TeamSection";

export const metadata: Metadata = {
  title: "About Us | NeuTechAfrica",
  description: "Learn about NeuTechAfrica's mission, vision, and the talented team driving digital transformation across Africa.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <MissionVision />
      <ValuesSection />
      <TeamSection />
    </>
  );
}
