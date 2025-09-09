import { HeroSection } from "@/components/ui/hero-section";
import { PortfolioSection } from "@/components/portfolio/portfolio-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { StatsSection } from "@/components/portfolio/stats-section";

const Index = () => {
  return (
    <div className="min-h-screen bg-background bg-red-100">
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-16">
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <StatsSection />
      </main>
    </div>
  );
};

export default Index;