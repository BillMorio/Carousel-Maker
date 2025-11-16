import {
  OutroSlide as OutroSlideType,
  GlobalSettings,
} from "@/lib/types/carousel";
import { SlideContainer } from "./SlideContainer";
import { MessageCircle, Heart, Bookmark } from "lucide-react";

interface OutroSlideProps {
  slide: OutroSlideType;
  globalSettings: GlobalSettings;
}

export function OutroSlide({ slide, globalSettings }: OutroSlideProps) {
  return (
    <SlideContainer
      backgroundColor={slide.theme.backgroundColor}
      aspectRatio={globalSettings.aspectRatio}
      globalSettings={globalSettings}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px",
          textAlign: "center",
        }}
      >
        {/* Tagline */}
        {slide.tagline.enabled && slide.tagline.text && (
          <p
            style={{
              marginBottom: "16px",
              fontSize: "14px",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: slide.theme.textColor,
            }}
          >
            {slide.tagline.text}
          </p>
        )}

        {/* Title */}
        {slide.title.enabled && slide.title.text && (
          <h2
            style={{
              marginBottom: "24px",
              fontSize: "36px",
              fontWeight: 700,
              lineHeight: 1.2,
              color: slide.theme.accentColor,
            }}
          >
            {slide.title.text}
          </h2>
        )}

        {/* Paragraph */}
        {slide.paragraph.enabled && slide.paragraph.text && (
          <p
            style={{
              marginBottom: "32px",
              maxWidth: "448px",
              fontSize: "18px",
              lineHeight: 1.6,
              color: slide.theme.textColor,
            }}
          >
            {slide.paragraph.text}
          </p>
        )}

        {/* CTA Button */}
        {slide.cta.enabled && slide.cta.text && (
          <button
            style={{
              borderRadius: "9999px",
              padding: "12px 32px",
              fontWeight: 600,
              backgroundColor: slide.theme.accentColor,
              color: slide.theme.backgroundColor,
              border: "none",
              cursor: "pointer",
              transition: "opacity 0.2s",
            }}
          >
            {slide.cta.text}
          </button>
        )}

        {/* Interaction Icons */}
        {slide.showInteractionIcons && (
          <div
            style={{
              marginTop: "48px",
              display: "flex",
              gap: "32px",
            }}
          >
            <MessageCircle
              style={{
                height: "32px",
                width: "32px",
                color: slide.theme.textColor,
              }}
            />
            <Heart
              style={{
                height: "32px",
                width: "32px",
                color: slide.theme.textColor,
              }}
            />
            <Bookmark
              style={{
                height: "32px",
                width: "32px",
                color: slide.theme.textColor,
              }}
            />
          </div>
        )}

        {/* Headshot (if outroStyle === 'headshot') */}
        {slide.outroStyle === "headshot" && slide.headshot && (
          <div style={{ marginTop: "32px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.headshot}
              alt="Headshot"
              style={{
                height: "128px",
                width: "128px",
                borderRadius: "50%",
                border: `4px solid ${slide.theme.accentColor}`,
                objectFit: "cover",
              }}
            />
          </div>
        )}
      </div>

      {/* Background Image (if outroStyle === 'image') */}
      {slide.outroStyle === "image" && slide.backgroundImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          />
        </div>
      )}
    </SlideContainer>
  );
}
