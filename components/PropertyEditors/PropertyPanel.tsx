import { Slide } from "@/lib/types/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IntroEditor } from "./IntroEditor";
import { ContentEditor } from "./ContentEditor";
import { OutroEditor } from "./OutroEditor";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Trash2,
  Plus,
  MoveLeft,
  MoveRight,
  Copy,
} from "lucide-react";

interface PropertyPanelProps {
  currentSlide: Slide;
  onUpdate: (updates: Partial<Slide>) => void;
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onReorderLeft: () => void;
  onReorderRight: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onAddSlide: () => void;
}

export function PropertyPanel({
  currentSlide,
  onUpdate,
  currentIndex,
  totalSlides,
  onPrevious,
  onNext,
  onReorderLeft,
  onReorderRight,
  onDelete,
  onDuplicate,
  onAddSlide,
}: PropertyPanelProps) {
  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < totalSlides - 1;
  const canDelete = totalSlides > 1;

  const renderEditor = () => {
    switch (currentSlide.type) {
      case "intro":
        return <IntroEditor slide={currentSlide} onUpdate={onUpdate} />;
      case "content":
        return <ContentEditor slide={currentSlide} onUpdate={onUpdate} />;
      case "outro":
        return <OutroEditor slide={currentSlide} onUpdate={onUpdate} />;
    }
  };

  return (
    <div className="flex h-72 w-full items-start justify-center pt-0">
      <div className="mx-auto w-full max-w-[480px] bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-t px-6 py-3">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onPrevious}
              disabled={!canMoveLeft}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">
              Slide {currentIndex + 1} of {totalSlides}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onNext}
              disabled={!canMoveRight}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={onDuplicate}
              title="Duplicate"
            >
              <Copy className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onDelete}
              disabled={!canDelete}
              title="Delete"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <Button size="sm" onClick={onAddSlide}>
              <Plus className="mr-1 h-4 w-4" />
              Add Slide
            </Button>
          </div>
        </div>
        <ScrollArea className="h-[calc(18rem-49px)]">
          <div className="px-6 py-4">{renderEditor()}</div>
        </ScrollArea>
      </div>
    </div>
  );
}
