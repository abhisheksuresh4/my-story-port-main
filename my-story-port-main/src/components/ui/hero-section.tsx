import { Button } from "./button";
import heroPortrait from "@/assets/hero-portrait.jpg";

interface HeroSectionProps {
  name?: string;
  title?: string;
  description?: string;
}

export const HeroSection = ({ 
  name = "Abhijith Suresh Kumar", 
  title = "UI/UX Writer & Product Marketing Writer", 
  description = "I bridge product design and communication, crafting clear user-first experiences and compelling product narratives that drive adoption and growth." 
}: HeroSectionProps) => {
  return (
    <section className="bg-hero-bg rounded-3xl p-8 lg:p-12 min-h-[500px] flex flex-col justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-6 right-6 w-16 h-16 border-2 border-primary/20 rounded-full"></div>
      <div className="absolute bottom-6 left-6 w-8 h-8 bg-portfolio-accent/30 rounded-full"></div>
      <div className="absolute top-1/2 right-12 w-4 h-4 bg-accent/40 rounded-full"></div>
      
      <div className="flex flex-col lg:flex-row items-center gap-8 relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-4 py-2 bg-card rounded-full text-sm font-medium text-muted-foreground mb-6">
            👋 Hi there
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
            I'm {name},<br />
            <span className="text-primary">a {title.toLowerCase()}</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            {description}
          </p>
          
          <Button 
            size="lg" 
            className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 rounded-full font-medium"
          >
            See My Work
          </Button>
        </div>
        
        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary rounded-full scale-110 blur-xl opacity-30"></div>
            <img 
              src={heroPortrait} 
              alt={`${name} - ${title}`}
              className="relative w-80 h-80 object-cover rounded-full border-4 border-card shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};