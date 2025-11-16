import { ReactNode } from "react";
import { Slide, GlobalSettings } from "@/lib/types/carousel";
import { CarouselSlider } from "./CarouselSlider";

interface MainEditorAreaProps {
  children: ReactNode;
  slides: Slide[];
  currentSlideIndex: number;
  globalSettings: GlobalSettings;
}

export function MainEditorArea({
  children,
  slides,
  currentSlideIndex,
  globalSettings,
}: MainEditorAreaProps) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden pb-8"
      style={{
        backgroundColor: "#f8f9fa",
        backgroundImage:
          "radial-gradient(circle, #d1d5db 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Carousel slider area */}
      <div className="flex-1 overflow-hidden">
        <CarouselSlider
          slides={slides}
          currentSlideIndex={currentSlideIndex}
          globalSettings={globalSettings}
        />
      </div>

      {/* Property Panel with dotted background visible on sides */}
      {children}
    </div>
  );
}
