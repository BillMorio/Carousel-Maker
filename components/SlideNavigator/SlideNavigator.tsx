import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Trash2,
  Plus,
  MoveLeft,
  MoveRight,
} from "lucide-react";

interface SlideNavigatorProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onReorderLeft: () => void;
  onReorderRight: () => void;
  onDelete: () => void;
  onAddSlide: () => void;
}

export function SlideNavigator({
  currentIndex,
  totalSlides,
  onPrevious,
  onNext,
  onReorderLeft,
  onReorderRight,
  onDelete,
  onAddSlide,
}: SlideNavigatorProps) {
  const canMoveLeft = currentIndex > 0;
  const canMoveRight = currentIndex < totalSlides - 1;
  const canDelete = totalSlides > 1;

  return (
    <div className="py-3">
      <div className="mx-auto flex w-full max-w-[480px] items-center justify-between bg-background px-12">
        <div className="flex items-center gap-2">
          {/* Navigation */}y
          <Button
            variant="outline"
            size="sm"
            onClick={onPrevious}
            disabled={!canMoveLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onNext}
            disabled={!canMoveRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          {/* Current slide indicator */}
          <span className="mx-2 text-sm font-medium">
            Slide {currentIndex + 1} of {totalSlides}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Reorder */}
          <Button
            variant="outline"
            size="sm"
            onClick={onReorderLeft}
            disabled={!canMoveLeft}
            title="Move slide left"
          >
            <MoveLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onReorderRight}
            disabled={!canMoveRight}
            title="Move slide right"
          >
            <MoveRight className="h-4 w-4" />
          </Button>

          {/* Delete */}
          <Button
            variant="outline"
            size="sm"
            onClick={onDelete}
            disabled={!canDelete}
            title="Delete slide"
          >
            <Trash2 className="h-4 w-4" />
          </Button>

          {/* Add */}
          <Button size="sm" onClick={onAddSlide}>
            <Plus className="mr-2 h-4 w-4" />
            Add Slide
          </Button>
        </div>
      </div>
    </div>
  );
}
