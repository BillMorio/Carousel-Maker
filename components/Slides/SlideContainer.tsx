import { ReactNode } from "react";
import { GlobalSettings } from "@/lib/types/carousel";
import { ChevronRight } from "lucide-react";

interface SlideContainerProps {
  children: ReactNode;
  backgroundColor: string;
  aspectRatio: GlobalSettings["aspectRatio"];
  globalSettings: GlobalSettings;
  currentSlideIndex?: number;
  totalSlides?: number;
}

const aspectRatioStyles = {
  "4:5": { aspectRatio: "4/5" },
  "1:1": { aspectRatio: "1/1" },
  "16:9": { aspectRatio: "16/9" },
};

export function SlideContainer({
  children,
  backgroundColor,
  aspectRatio,
  globalSettings,
  currentSlideIndex = 0,
  totalSlides = 1,
}: SlideContainerProps) {
  // Check if backgroundColor is a gradient
  const isGradient = backgroundColor.includes("gradient");

  // Check if this is a mesh gradient that needs grain overlay
  const isMeshGradient = backgroundColor.includes("radial-gradient");

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        ...(isGradient ? { background: backgroundColor } : { backgroundColor }),
        ...aspectRatioStyles[aspectRatio],
      }}
    >
      {/* Grain overlay for mesh gradients using CSS backdrop filter */}
      {isMeshGradient && (
        <>
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              opacity: 0.25,
              pointerEvents: "none",
              zIndex: 1,
              mixBlendMode: "overlay",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,.03) 2px, rgba(0,0,0,.03) 4px)",
              pointerEvents: "none",
              zIndex: 1,
              opacity: 0.3,
            }}
          />
        </>
      )}

      <div style={{ position: "relative", zIndex: 2, height: "100%" }}>
        {children}
      </div>

      {/* Creator Info Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          zIndex: 3,
        }}
      >
        <div
          style={{
            height: "40px",
            width: "40px",
            border: "2px solid white",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 600,
            color: "white",
          }}
        >
          {globalSettings.creatorName
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)}
        </div>
        <div style={{ color: "white" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: 1.2,
            }}
          >
            {globalSettings.creatorName}
          </p>
          <p
            style={{
              fontSize: "12px",
              lineHeight: 1.2,
              opacity: 0.9,
            }}
          >
            {globalSettings.creatorTitle}
          </p>
        </div>
      </div>

      {/* Decorative Swipe Indicator */}
      {globalSettings.showSwipeIndicator &&
        currentSlideIndex < totalSlides - 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 16px",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
              borderRadius: "30px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              fontSize: "14px",
              fontWeight: "500",
              color: "#FFFFFF",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
            }}
          >
            <span>Swipe</span>
            <ChevronRight size={18} strokeWidth={2.5} />
          </div>
        )}
    </div>
  );
}
