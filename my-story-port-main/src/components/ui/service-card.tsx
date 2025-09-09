import { Card } from "./card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description,
  color = "primary"
}: ServiceCardProps) => {
  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    accent: "bg-accent/10 text-accent-foreground",
    secondary: "bg-secondary/10 text-secondary-foreground",
    portfolio: "bg-portfolio-accent/10 text-portfolio-accent"
  };

  return (
    <Card className="p-6 rounded-2xl border border-border/20 bg-white hover:shadow-lg hover:border-border/40 transition-all duration-300">
      {/* Icon */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-xl mb-4 transition-colors duration-300 ${colorClasses[color as keyof typeof colorClasses]}`}
      >
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-foreground mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
};
