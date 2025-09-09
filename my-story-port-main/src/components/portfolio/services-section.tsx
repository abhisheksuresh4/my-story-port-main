import { ServiceCard } from "@/components/ui/service-card";
import { PenTool, MessageSquare, Target, BarChart3 } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "UX Writing",
    description: "Crafting clear, user-first copy that guides users through seamless digital experiences and reduces friction.",
    color: "primary"
  },
  {
    icon: MessageSquare,
    title: "Product Marketing Copy",
    description: "Building compelling product narratives that drive adoption and user engagement across all touchpoints.",
    color: "accent"
  },
  {
    icon: Target,
    title: "Content Strategy",
    description: "Developing content frameworks that align user needs with business objectives and brand voice.",
    color: "secondary"
  },
  {
    icon: BarChart3,
    title: "Copy Optimization",
    description: "Testing and refining copy based on user behavior and conversion metrics to maximize impact.",
    color: "portfolio"
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-16 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Services
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            The services I offer are specifically<br />
            designed to bridge design and communication.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};