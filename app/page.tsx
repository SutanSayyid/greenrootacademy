import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { ImpactStats } from "@/components/impact-stats";
import { CoursePreview } from "@/components/course-preview";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CoursePreview />
      <ImpactStats />
      <Footer />
    </main>
  );
}