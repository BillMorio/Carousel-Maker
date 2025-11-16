import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TemplateCard } from "./TemplateCard";
import { Carousel } from "@/lib/types/carousel";
import { defaultTemplates } from "@/lib/templates";

// Define the template interface locally
interface CarouselTemplate {
  id: string;
  name: string;
  description: string;
  category: "marketing" | "education" | "storytelling" | "social";
  carousel: Carousel;
}

interface TemplateSelectorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectTemplate: (template: CarouselTemplate) => void;
}

export function TemplateSelectorModal({
  open,
  onOpenChange,
  onSelectTemplate,
}: TemplateSelectorModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredTemplates =
    selectedCategory === "all"
      ? defaultTemplates
      : defaultTemplates.filter(
          (t: CarouselTemplate) => t.category === selectedCategory
        );

  const handleSelectTemplate = (template: CarouselTemplate) => {
    onSelectTemplate(template);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>Choose a Template</DialogTitle>
          <DialogDescription>
            Start with a professionally designed carousel template
          </DialogDescription>
        </DialogHeader>

        {/* Category Filter */}
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="marketing">Marketing</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="storytelling">Story</TabsTrigger>
            <TabsTrigger value="social">Social</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Templates Grid */}
        <div className="overflow-y-auto flex-1 -mx-6 px-6">
          <div className="grid grid-cols-2 gap-4 pb-4">
            {filteredTemplates.map((template: CarouselTemplate) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={handleSelectTemplate}
              />
            ))}
          </div>
          {filteredTemplates.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No templates found in this category
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
