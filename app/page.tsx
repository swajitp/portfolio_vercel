import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CompetenciesSection } from "@/components/competencies-section";
import { CaseStudiesSection } from "@/components/case-studies-section";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CompetenciesSection />
      <CaseStudiesSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
