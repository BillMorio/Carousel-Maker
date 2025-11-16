import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slide, Carousel } from "@/lib/types/carousel";

interface CarouselTemplate {
  id: string;
  name: string;
  description: string;
  category: "marketing" | "education" | "storytelling" | "social";
  carousel: Carousel;
}

interface TemplateCardProps {
  template: CarouselTemplate;
  onSelect: (template: CarouselTemplate) => void;
}

export function TemplateCard({ template, onSelect }: TemplateCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "marketing":
        return "bg-blue-500/10 text-blue-700 border-blue-200";
      case "education":
        return "bg-green-500/10 text-green-700 border-green-200";
      case "storytelling":
        return "bg-purple-500/10 text-purple-700 border-purple-200";
      case "social":
        return "bg-orange-500/10 text-orange-700 border-orange-200";
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-200";
    }
  };

  return (
    <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer group">
      {/* Preview Area */}
      <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center relative overflow-hidden">
        {/* Mini slide indicators */}
        <div className="flex gap-1 items-center">
          {template.carousel.slides.map((slide: Slide) => (
            <div
              key={slide.id}
              className={`h-12 w-8 rounded-sm ${
                slide.type === "intro"
                  ? "bg-blue-400"
                  : slide.type === "outro"
                  ? "bg-purple-400"
                  : "bg-green-400"
              } opacity-80`}
              title={`${slide.type} slide`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {/* Template Info */}
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-lg">{template.name}</h3>
          <Badge
            variant="outline"
            className={getCategoryColor(template.category)}
          >
            {template.category}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {template.description}
        </p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-muted-foreground">
            {template.carousel.slides.length} slides •{" "}
            {template.carousel.globalSettings.aspectRatio}
          </span>
          <Button
            size="sm"
            onClick={() => onSelect(template)}
            className="opacity-0 group-hover:opacity-100 transition-opacity"
          >
            Use Template
          </Button>
        </div>
      </div>
    </Card>
  );
}
