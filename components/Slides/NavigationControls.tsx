import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationControlsProps {
  currentSlide: number;
  totalSlides: number;
  showNavigationButtons?: boolean;
  navigationButtonStyle?: "arrows" | "dots" | "both" | "none";
  navigationButtonColor?: string;
  showSlideNumbers?: boolean;
  showSwipeIndicator?: boolean;
  onPrevious?: () => void;
  onNext?: () => void;
  onGoToSlide?: (index: number) => void;
}

export function NavigationControls({
  currentSlide,
  totalSlides,
  showNavigationButtons = false,
  navigationButtonStyle = "none",
  navigationButtonColor = "#FFFFFF",
  showSlideNumbers = false,
  showSwipeIndicator = false,
  onPrevious,
  onNext,
  onGoToSlide,
}: NavigationControlsProps) {
  if (
    navigationButtonStyle === "none" &&
    !showSlideNumbers &&
    !showSwipeIndicator
  ) {
    return null;
  }

  const showArrows =
    showNavigationButtons &&
    (navigationButtonStyle === "arrows" || navigationButtonStyle === "both");
  const showDots =
    showNavigationButtons &&
    (navigationButtonStyle === "dots" || navigationButtonStyle === "both");

  return (
    <>
      {/* Left Arrow */}
      {showArrows && onPrevious && currentSlide > 0 && (
        <button
          onClick={onPrevious}
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${navigationButtonColor}`,
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <ChevronLeft style={{ color: navigationButtonColor }} size={24} />
        </button>
      )}

      {/* Right Arrow */}
      {showArrows && onNext && currentSlide < totalSlides - 1 && (
        <button
          onClick={onNext}
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(8px)",
            border: `1px solid ${navigationButtonColor}`,
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 10,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
          }}
        >
          <ChevronRight style={{ color: navigationButtonColor }} size={24} />
        </button>
      )}

      {/* Slide Number Indicator */}
      {showSlideNumbers && (
        <div
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            backdropFilter: "blur(8px)",
            color: navigationButtonColor,
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "12px",
            fontWeight: 600,
            zIndex: 10,
          }}
        >
          {currentSlide + 1} / {totalSlides}
        </div>
      )}

      {/* Swipe Indicator */}
      {showSwipeIndicator && currentSlide === 0 && (
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: navigationButtonColor,
            fontSize: "14px",
            fontWeight: 500,
            opacity: 0.8,
            zIndex: 10,
            animation: "pulse 2s infinite",
          }}
        >
          <span>Swipe</span>
          <ChevronRight size={20} />
        </div>
      )}

      {/* Dot Navigation */}
      {showDots && (
        <div
          style={{
            position: "absolute",
            bottom: "16px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: "8px",
            zIndex: 10,
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onGoToSlide?.(index)}
              style={{
                width: currentSlide === index ? "24px" : "8px",
                height: "8px",
                borderRadius: "4px",
                backgroundColor:
                  currentSlide === index
                    ? navigationButtonColor
                    : `${navigationButtonColor}40`,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
