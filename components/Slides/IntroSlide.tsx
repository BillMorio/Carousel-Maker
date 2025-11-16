import {
  IntroSlide as IntroSlideType,
  GlobalSettings,
} from "@/lib/types/carousel";
import { SlideContainer } from "./SlideContainer";

interface IntroSlideProps {
  slide: IntroSlideType;
  globalSettings: GlobalSettings;
}

export function IntroSlide({ slide, globalSettings }: IntroSlideProps) {
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
          <h1
            style={{
              marginBottom: "24px",
              fontSize: "36px",
              fontWeight: 700,
              lineHeight: 1.2,
              color: slide.theme.accentColor,
            }}
          >
            {slide.title.text}
          </h1>
        )}

        {/* Paragraph */}
        {slide.paragraph.enabled && slide.paragraph.text && (
          <p
            style={{
              maxWidth: "448px",
              fontSize: "18px",
              lineHeight: 1.6,
              color: slide.theme.textColor,
            }}
          >
            {slide.paragraph.text}
          </p>
        )}

        {/* Headshot (if introStyle === 'headshot') */}
        {slide.introStyle === "headshot" && slide.headshot && (
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

      {/* Background Image (if introStyle === 'image') */}
      {slide.introStyle === "image" && slide.backgroundImage && (
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
