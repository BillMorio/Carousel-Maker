// ============================================================================
// SLIDE TYPES
// ============================================================================

export type SlideType = "intro" | "content" | "outro";

export interface BaseSlide {
  id: string;
  type: SlideType;
  theme: {
    backgroundColor: string;
    textColor: string;
    accentColor: string;
  };
}

// ----------------------------------------------------------------------------
// INTRO SLIDE
// ----------------------------------------------------------------------------

export type IntroStyle = "standard" | "emoji" | "headshot" | "image";

export interface IntroSlide extends BaseSlide {
  type: "intro";
  introStyle: IntroStyle;

  // Conditional: if introStyle === 'headshot'
  headshot?: string; // image URL/base64

  // Conditional: if introStyle === 'image'
  backgroundImage?: string;

  // Text content with individual toggles
  tagline: {
    text: string;
    enabled: boolean;
  };
  title: {
    text: string;
    enabled: boolean;
  };
  paragraph: {
    text: string;
    enabled: boolean;
  };
}

// ----------------------------------------------------------------------------
// CONTENT SLIDE (Middle Slides)
// ----------------------------------------------------------------------------

export type ContentSlideStyle = "text" | "text-image" | "image";
export type ImageSource = "search" | "generate" | "upload";
export type ImagePosition = "top" | "bottom" | "left" | "right" | "center";

export interface ContentSlide extends BaseSlide {
  type: "content";
  slideStyle: ContentSlideStyle;

  // Image properties (conditional based on slideStyle)
  image?: {
    url: string;
    source: ImageSource;
    scale: number; // 0.5 to 2.0
    position: ImagePosition;
    borderRadius: number; // 0 to 50 (px)
    shadow: number; // 0 to 50 (intensity)
  };

  // If imageSource === 'search'
  searchKeywords?: string;

  // Text content
  tagline: {
    text: string;
    enabled: boolean;
  };
  title: {
    text: string;
    enabled: boolean;
  };
  paragraph: {
    text: string;
    enabled: boolean;
  };
}

// ----------------------------------------------------------------------------
// OUTRO SLIDE
// ----------------------------------------------------------------------------

export type OutroStyle = "standard" | "headshot" | "image";

export interface OutroSlide extends BaseSlide {
  type: "outro";
  outroStyle: OutroStyle;

  // Conditional: if outroStyle === 'headshot'
  headshot?: string;

  // Conditional: if outroStyle === 'image'
  backgroundImage?: string;

  // Text content
  tagline: {
    text: string;
    enabled: boolean;
  };
  title: {
    text: string;
    enabled: boolean;
  };
  paragraph: {
    text: string;
    enabled: boolean;
  };

  // Call to action
  cta: {
    text: string;
    enabled: boolean;
  };

  // Social interaction icons (comment, heart, bookmark)
  showInteractionIcons: boolean;
}

// ----------------------------------------------------------------------------
// UNION TYPE
// ----------------------------------------------------------------------------

export type Slide = IntroSlide | ContentSlide | OutroSlide;

// ============================================================================
// CAROUSEL
// ============================================================================

export interface Theme {
  backgroundColor: string;
  textColor: string;
  accentColor: string;
}

export interface GlobalSettings {
  creatorName: string;
  creatorTitle: string;
  creatorAvatar?: string;
  aspectRatio: "4:5" | "1:1" | "16:9";
  defaultTheme: Theme;
}

export interface Carousel {
  id: string;
  name: string; // For saving/loading projects
  slides: Slide[];
  globalSettings: GlobalSettings;
  createdAt: Date;
  updatedAt: Date;
}

// ============================================================================
// TYPE GUARDS
// ============================================================================

export function isIntroSlide(slide: Slide): slide is IntroSlide {
  return slide.type === "intro";
}

export function isContentSlide(slide: Slide): slide is ContentSlide {
  return slide.type === "content";
}

export function isOutroSlide(slide: Slide): slide is OutroSlide {
  return slide.type === "outro";
}
