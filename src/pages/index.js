import AboutSection from "@/components/sections/AboutSection";
import AuthorSection from "@/components/sections/AuthorSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import PriceSection from "@/components/sections/PriceSection";
import ProgramSection from "@/components/sections/ProgramSection";
import ReviewSection from "@/components/sections/ReviewSection";
import SopSection from "@/components/sections/SopSection";
import TargetSection from "@/components/sections/TargetSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SopSection />
      <TargetSection />
      <BenefitsSection />
      <ProgramSection />
      <AuthorSection />
      <PriceSection />
      <ReviewSection />
      <ContactSection />
    </main>
  );
}
