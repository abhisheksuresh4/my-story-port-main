import { Card } from "./card";

interface PortfolioCardProps {
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  metrics?: { label: string; value: string }[];
}

export const PortfolioCard = ({ 
  title, 
  description, 
  image, 
  tags = [], 
  metrics = [] 
}: PortfolioCardProps) => {
  return (
<Card className="bg-card p-0 overflow-hidden hover:shadow-card transition-all duration-300 border border-border/50 w-full h-full flex flex-col">
      {image && (
        <div className=" fh-48 bg-gradient-card flex items-center justify-center">
          <div className="w-full h-full bg-muted/30 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Portfolio Preview</span>
          </div>
        </div>
      )}
      
      <div className="p-4 md:p-5 flex flex-col flex-1 min-h-0">
        <h3 className="text-base md:text-lg font-semibold text-foreground mb-1.5">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-3 text-xs md:text-sm leading-relaxed line-clamp-4">
          {description}
        </p>

        {metrics.length > 0 && (
          <div className="flex gap-3 pt-2 mb-2 flex-shrink-0">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-xs md:text-sm font-bold text-foreground">{metric.value}</div>
                <div className="text-[10px] text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-auto pt-2 border-t border-border/40 min-h-[44px] flex-shrink-0">
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-0.5 rounded-md text-[10px] md:text-xs font-semibold bg-accent/15 text-accent border border-accent/30"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};