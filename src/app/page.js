import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResultsSection from "@/components/ResultsSection";
import NewsSection from "@/components/NewsSection";
import StepsSection from "@/components/StepsSection";
import FreeToolsSection from "@/components/FreeToolsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <ResultsSection />
    <NewsSection />
    <StepsSection />
    <FreeToolsSection />
    <TestimonialsSection />
    <FaqSection />
    <GetInTouchSection />
    <CTA />
    <Footer />
    </>
  );
}
