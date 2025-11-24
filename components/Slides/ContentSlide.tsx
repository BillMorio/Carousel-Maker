import {
  ContentSlide as ContentSlideType,
  GlobalSettings,
} from "@/lib/types/carousel";
import { SlideContainer } from "./SlideContainer";

interface ContentSlideProps {
  slide: ContentSlideType;
  globalSettings: GlobalSettings;
  currentSlideIndex?: number;
  totalSlides?: number;
}

export function ContentSlide({
  slide,
  globalSettings,
  currentSlideIndex,
  totalSlides,
}: ContentSlideProps) {
  const hasImage = slide.slideStyle !== "text" && slide.image;

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
          padding: "32px",
        }}
      >
        {/* Text-only layout */}
        {slide.slideStyle === "text" && (
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {slide.tagline.enabled && slide.tagline.text && (
              <p
                style={{
                  marginBottom: "12px",
                  fontSize: "12px",
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
              <h2
                style={{
                  marginBottom: "16px",
                  fontSize: "30px",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: slide.theme.textColor,
                }}
              >
                {slide.title.text}
              </h2>
            )}

            {slide.paragraph.enabled && slide.paragraph.text && (
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: slide.theme.textColor,
                }}
              >
                {slide.paragraph.text}
              </p>
            )}
          </div>
        )}

        {/* Text + Image layout */}
        {slide.slideStyle === "text-image" && (
          <div
            style={{
              display: "flex",
              height: "100%",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div style={{ flex: 1 }}>
              {slide.tagline.enabled && slide.tagline.text && (
                <p
                  style={{
                    marginBottom: "8px",
                    fontSize: "12px",
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
                <h2
                  style={{
                    marginBottom: "12px",
                    fontSize: "24px",
                    fontWeight: 700,
                    lineHeight: 1.2,
                    color: slide.theme.textColor,
                  }}
                >
                  {slide.title.text}
                </h2>
              )}

              {slide.paragraph.enabled && slide.paragraph.text && (
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: 1.6,
                    color: slide.theme.textColor,
                  }}
                >
                  {slide.paragraph.text}
                </p>
              )}
            </div>

            {hasImage && (
              <div
                style={{
                  height: "192px",
                  overflow: "hidden",
                  borderRadius: `${slide.image!.borderRadius ?? 8}px`,
                  boxShadow:
                    slide.image!.shadow && slide.image!.shadow > 0
                      ? `0 ${slide.image!.shadow / 4}px ${
                          slide.image!.shadow
                        }px rgba(0, 0, 0, ${0.1 + slide.image!.shadow / 100})`
                      : "none",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${slide.image!.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: `scale(${slide.image!.scale || 1})`,
                  }}
                />
              </div>
            )}
          </div>
        )}

        {/* Image-only layout */}
        {slide.slideStyle === "image" && hasImage && (
          <div
            style={{
              position: "relative",
              height: "100%",
              overflow: "hidden",
              borderRadius: `${slide.image!.borderRadius || 8}px`,
              boxShadow:
                slide.image!.shadow && slide.image!.shadow > 0
                  ? `0 ${slide.image!.shadow / 4}px ${
                      slide.image!.shadow
                    }px rgba(0, 0, 0, ${0.1 + slide.image!.shadow / 100})`
                  : "none",
            }}
          >
            <div
              style={{
                height: "100%",
                width: "100%",
                backgroundImage: `url(${slide.image!.url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: `scale(${slide.image!.scale || 1})`,
              }}
            />
          </div>
        )}
      </div>
    </SlideContainer>
  );
}
