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
    <Card className="p-0 overflow-hidden hover:shadow-card transition-all duration-300 bg-card border-border/50">
      {image && (
        <div className="h-48 bg-gradient-card flex items-center justify-center">
          <div className="w-full h-full bg-muted/30 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">Portfolio Preview</span>
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
          {description}
        </p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {metrics.length > 0 && (
          <div className="flex gap-4 pt-4 border-t border-border/50">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-bold text-foreground">
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};