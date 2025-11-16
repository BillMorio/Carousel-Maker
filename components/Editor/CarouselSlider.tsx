"use client";

import { Slide, GlobalSettings } from "@/lib/types/carousel";
import { IntroSlide } from "@/components/Slides/IntroSlide";
import { ContentSlide } from "@/components/Slides/ContentSlide";
import { OutroSlide } from "@/components/Slides/OutroSlide";

interface CarouselSliderProps {
  slides: Slide[];
  currentSlideIndex: number;
  globalSettings: GlobalSettings;
}

export function CarouselSlider({
  slides,
  currentSlideIndex,
  globalSettings,
}: CarouselSliderProps) {
  const renderSlide = (slide: Slide) => {
    switch (slide.type) {
      case "intro":
        return <IntroSlide slide={slide} globalSettings={globalSettings} />;
      case "content":
        return <ContentSlide slide={slide} globalSettings={globalSettings} />;
      case "outro":
        return <OutroSlide slide={slide} globalSettings={globalSettings} />;
    }
  };

  const cardWidth = 480; // matches max-w-[480px]
  const gap = 32; // 2rem = 32px (gap-8)
  const translateAmount = currentSlideIndex * (cardWidth + gap);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <div
        className="absolute inset-0 flex items-center py-12"
        style={{ left: `calc(50% - 240px)` }}
      >
        {/* Slides container with transform animation */}
        <div
          className="flex items-center gap-8 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${translateAmount}px)`,
          }}
        >
          {slides.map((slide, index) => {
            const isActive = index === currentSlideIndex;
            const offset = Math.abs(index - currentSlideIndex);

            return (
              <div
                key={slide.id}
                className="shrink-0 transition-all duration-500"
                style={{
                  width: `${cardWidth}px`,
                  opacity: offset > 1 ? 0.3 : isActive ? 1 : 0.6,
                  scale: isActive ? 1 : 0.85,
                  filter: isActive ? "none" : "brightness(0.9)",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    borderRadius: "8px",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div data-carousel-slide={isActive ? "true" : undefined}>
                    {renderSlide(slide)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
