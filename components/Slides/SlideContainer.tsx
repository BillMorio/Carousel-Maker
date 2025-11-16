import { ReactNode } from "react";
import { GlobalSettings } from "@/lib/types/carousel";

interface SlideContainerProps {
  children: ReactNode;
  backgroundColor: string;
  aspectRatio: GlobalSettings["aspectRatio"];
  globalSettings: GlobalSettings;
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
}: SlideContainerProps) {
  // Check if backgroundColor is a gradient
  const isGradient = backgroundColor.includes("gradient");

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
      {children}

      {/* Creator Info Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
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
    </div>
  );
}
