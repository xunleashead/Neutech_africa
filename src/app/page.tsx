import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesSection from "@/components/sections/ServicesSection";
import ResourcesSection from "@/components/sections/ResourcesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesSection />
      <ResourcesSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
