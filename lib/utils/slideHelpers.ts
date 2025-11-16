import {
  SlideType,
  IntroSlide,
  ContentSlide,
  OutroSlide,
  Slide,
  Theme,
} from "@/lib/types/carousel";
import { generateId } from "./idGenerator";

const defaultTheme: Theme = {
  backgroundColor: "#7DD3C0", // Mint green
  textColor: "#2D3748", // Dark gray
  accentColor: "#FFFFFF", // White
};

export function createDefaultSlide(type: SlideType, theme?: Theme): Slide {
  const slideTheme = theme || defaultTheme;

  switch (type) {
    case "intro":
      return {
        id: generateId(),
        type: "intro",
        introStyle: "standard",
        theme: slideTheme,
        tagline: {
          text: "And you will read this last",
          enabled: true,
        },
        title: {
          text: "You will read this first",
          enabled: true,
        },
        paragraph: {
          text: "Then you will read this.",
          enabled: true,
        },
      } as IntroSlide;

    case "content":
      return {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: slideTheme,
        tagline: {
          text: "Pro Tip",
          enabled: false,
        },
        title: {
          text: "Amazing title here!",
          enabled: true,
        },
        paragraph: {
          text: "A message that will leave viewers wanting more.",
          enabled: true,
        },
      } as ContentSlide;

    case "outro":
      return {
        id: generateId(),
        type: "outro",
        outroStyle: "standard",
        theme: slideTheme,
        tagline: {
          text: "That's all folks!",
          enabled: false,
        },
        title: {
          text: "Thank you!",
          enabled: true,
        },
        paragraph: {
          text: "Follow for more content like this.",
          enabled: true,
        },
        cta: {
          text: "Follow me for more",
          enabled: true,
        },
        showInteractionIcons: true,
      } as OutroSlide;
  }
}
