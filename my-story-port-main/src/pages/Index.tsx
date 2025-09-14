import { HeroSection } from "@/components/ui/hero-section";
import { PortfolioSection } from "@/components/portfolio/portfolio-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { StatsSection } from "@/components/portfolio/stats-section";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className=" bg-body-dark min-h-screen bg-background ">
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-16">
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <StatsSection />
      </main>
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <Footer />
      </div>
    </div>
  );
};

export default Index;