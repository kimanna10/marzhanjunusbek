import AboutSection from "@/components/sections/AboutSection";
import AuthorSection from "@/components/sections/AuthorSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import HeroSection from "@/components/sections/HeroSection";
import PriceSection from "@/components/sections/PriceSection";
import ProgramSection from "@/components/sections/ProgramSection";
import ReviewSection from "@/components/sections/ReviewSection";
import SopSection from "@/components/sections/SopSection";
import TargetSection from "@/components/sections/TargetSection";

import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Терапевтический курс «Исцеление Души»</title>
        <meta
          name="description"
          content="Пройдите авторский терапевтический курс 'Исцеление Души' с методикой Sense Out Pro (SOP). Проработайте блоки, страхи и ограничивающие убеждения, наладьте отношения, исцелите тело и откройте новые возможности в жизни и финансах."
        />
        <meta
          name="keywords"
          content="SOP, Sense Out Pro, терапевтический курс, личностный рост, энергетическая проработка, медитация, исцеление, психологическая помощь"
        />

        {/* Open Graph для соцсетей (Facebook, VK, Telegram) */}
        <meta
          property="og:title"
          content="Терапевтический курс 'Исцеление Души' от Маржан Жунусбек"
        />
        <meta
          property="og:description"
          content="Освободитесь от блоков, проработайте страхи, наладьте отношения и исцелите тело с авторской методикой SOP."
        />
        <meta
          property="og:image"
          content="https://course.marzhanjunusbek.com/banner-sop.png"
        />
        <meta property="og:url" content="https://course.marzhanjunusbek.com/" />
        <meta property="og:type" content="website" />

        {/* Канонический URL */}
        <link rel="canonical" href="https://course.marzhanjunusbek.com/" />

        {/* Иконки */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </Head>

      <main>
        <HeroSection />
        <AboutSection />
        <SopSection />
        <TargetSection />

        <BenefitsSection />
        <ProgramSection />
        <CTASection
          title="Откройте путь к внутренней гармонии"
          description="Давайте вместе проработаем блоки и страхи"
          variant="outlined"
        />
        <AuthorSection />
        <PriceSection />
        <ReviewSection />
        <CTASection
          title="Готовы открыть новые возможности для себя?"
          description="Начните трансформацию с поддержки опытного проводника"
          variant="outlined"
        />
        <ContactSection />
      </main>
    </>
  );
}
