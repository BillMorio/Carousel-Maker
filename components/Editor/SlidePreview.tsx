import { Slide, GlobalSettings } from "@/lib/types/carousel";
import { IntroSlide } from "@/components/Slides/IntroSlide";
import { ContentSlide } from "@/components/Slides/ContentSlide";
import { OutroSlide } from "@/components/Slides/OutroSlide";
import { Card } from "@/components/ui/card";

interface SlidePreviewProps {
  slide: Slide;
  globalSettings: GlobalSettings;
}

export function SlidePreview({ slide, globalSettings }: SlidePreviewProps) {
  const renderSlide = () => {
    switch (slide.type) {
      case "intro":
        return <IntroSlide slide={slide} globalSettings={globalSettings} />;
      case "content":
        return <ContentSlide slide={slide} globalSettings={globalSettings} />;
      case "outro":
        return <OutroSlide slide={slide} globalSettings={globalSettings} />;
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center px-12 py-8">
      <Card className="w-full max-w-[480px] overflow-hidden shadow-2xl">
        {renderSlide()}
      </Card>
    </div>
  );
}
