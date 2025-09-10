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

  const titleEmoji = (() => {
    const lower = title.toLowerCase();
    if (lower.includes("ux") || lower.includes("design")) return "🎨";
    if (lower.includes("marketing")) return "📣";
    if (lower.includes("strategy")) return "🧭";
    if (lower.includes("copy")) return "✍️";
    return "✨";
  })();

  return (
    <Card className="p-4 md:p-5 rounded-2xl border border-border/20 bg-yellow-100 hover:shadow-lg hover:border-border/40 transition-all duration-300 h-[200px] w-[200px] md:h-[220px] md:w-[220px] flex flex-col justify-between">
      {/* Icon */}
      <div
        className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl mb-3 transition-colors duration-300 ${colorClasses[color as keyof typeof colorClasses]}`}
      >
        <Icon size={20} />
      </div>

      {/* Title */}
      <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5 flex items-center gap-2">
        <span>{title}</span>
        <span aria-hidden>{titleEmoji}</span>
      </h3>

      {/* Description */}
      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {description}
      </p>
    </Card>
  );
};
