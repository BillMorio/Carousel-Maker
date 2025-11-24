import {
  IntroSlide as IntroSlideType,
  GlobalSettings,
} from "@/lib/types/carousel";
import { SlideContainer } from "./SlideContainer";

interface IntroSlideProps {
  slide: IntroSlideType;
  globalSettings: GlobalSettings;
  currentSlideIndex?: number;
  totalSlides?: number;
}

export function IntroSlide({
  slide,
  globalSettings,
  currentSlideIndex,
  totalSlides,
}: IntroSlideProps) {
  // Render split-highlight layout
  if (slide.introStyle === "split-highlight") {
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
            padding: "48px",
            alignItems: "center",
          }}
        >
          {/* Left side - Title with highlights */}
          <div style={{ flex: 1, paddingRight: "32px" }}>
            {slide.tagline.enabled && slide.tagline.text && (
              <p
                style={{
                  marginBottom: "24px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: slide.theme.textColor,
                  opacity: 0.8,
                }}
              >
                {slide.tagline.text}
              </p>
            )}

            {slide.title.enabled && slide.title.text && (
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: slide.theme.textColor,
                  marginBottom: "32px",
                }}
              >
                {slide.title.text.split(" ").map((word, index) => {
                  const shouldHighlight =
                    slide.layoutData?.highlightWords?.includes(index);
                  const highlightIndex =
                    slide.layoutData?.highlightWords?.indexOf(index) ?? -1;
                  const highlightColor =
                    shouldHighlight &&
                    slide.layoutData?.highlightColors?.[highlightIndex]
                      ? slide.layoutData.highlightColors[highlightIndex]
                      : slide.theme.accentColor;

                  return shouldHighlight ? (
                    <span
                      key={index}
                      style={{
                        backgroundColor: highlightColor,
                        padding: "4px 12px",
                        display: "inline-block",
                        marginRight: "8px",
                        marginBottom: "8px",
                      }}
                    >
                      {word}
                    </span>
                  ) : (
                    <span key={index} style={{ marginRight: "8px" }}>
                      {word}
                    </span>
                  );
                })}
              </h1>
            )}

            {slide.paragraph.enabled && slide.paragraph.text && (
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.6,
                  color: slide.theme.textColor,
                  opacity: 0.9,
                }}
              >
                {slide.paragraph.text}
              </p>
            )}
          </div>

          {/* Right side - Portrait image if provided */}
          {slide.backgroundImage && (
            <div
              style={{
                width: "45%",
                height: "100%",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-end",
              }}
            >
              <img
                src={slide.backgroundImage}
                alt="Portrait"
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          )}
        </div>
      </SlideContainer>
    );
  }

  // Render side-portrait layout
  if (slide.introStyle === "side-portrait") {
    const imageOnRight = slide.layoutData?.imagePosition !== "left";

    return (
      <SlideContainer
        backgroundColor={slide.theme.backgroundColor}
        aspectRatio={globalSettings.aspectRatio}
        globalSettings={globalSettings}
        currentSlideIndex={currentSlideIndex}
        totalSlides={totalSlides}
      >
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: imageOnRight ? "row" : "row-reverse",
          }}
        >
          {/* Text side */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "48px",
            }}
          >
            {slide.tagline.enabled && slide.tagline.text && (
              <p
                style={{
                  marginBottom: "16px",
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: slide.theme.accentColor,
                }}
              >
                {slide.tagline.text}
              </p>
            )}

            {slide.title.enabled && slide.title.text && (
              <h1
                style={{
                  marginBottom: "24px",
                  fontSize: "42px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: slide.theme.textColor,
                }}
              >
                {slide.title.text}
              </h1>
            )}

            {slide.paragraph.enabled && slide.paragraph.text && (
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: slide.theme.textColor,
                  opacity: 0.9,
                }}
              >
                {slide.paragraph.text}
              </p>
            )}
          </div>

          {/* Image side */}
          {slide.backgroundImage && (
            <div
              style={{
                width: "50%",
                backgroundImage: `url(${slide.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          )}
        </div>
      </SlideContainer>
    );
  }

  // Standard centered layout (default)
  return (
    <SlideContainer
      backgroundColor={slide.theme.backgroundColor}
      aspectRatio={globalSettings.aspectRatio}
      globalSettings={globalSettings}
      currentSlideIndex={currentSlideIndex}
      totalSlides={totalSlides}
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
              fontSize: `${slide.tagline.fontSize ?? 14}px`,
              fontWeight: slide.tagline.fontWeight ?? 500,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: slide.theme.textColor,
              textAlign: slide.tagline.textAlign ?? "center",
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
              fontSize: `${slide.title.fontSize ?? 36}px`,
              fontWeight: slide.title.fontWeight ?? 700,
              lineHeight: 1.2,
              color: slide.theme.accentColor,
              textAlign: slide.title.textAlign ?? "center",
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
              fontSize: `${slide.paragraph.fontSize ?? 18}px`,
              fontWeight: slide.paragraph.fontWeight ?? 400,
              lineHeight: 1.6,
              color: slide.theme.textColor,
              textAlign: slide.paragraph.textAlign ?? "center",
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
