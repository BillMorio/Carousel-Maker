import {
  Carousel,
  IntroSlide,
  ContentSlide,
  OutroSlide,
  Theme,
} from "@/lib/types/carousel";
import { generateId } from "./idGenerator";

const defaultTheme: Theme = {
  backgroundColor: "#7DD3C0", // Mint green
  textColor: "#2D3748", // Dark gray
  accentColor: "#FFFFFF", // White
};

export function getMockCarousel(): Carousel {
  const introSlide: IntroSlide = {
    id: generateId(),
    type: "intro",
    introStyle: "standard",
    theme: defaultTheme,
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
  };

  const contentSlide: ContentSlide = {
    id: generateId(),
    type: "content",
    slideStyle: "text",
    theme: defaultTheme,
    tagline: {
      text: "Pro Tip",
      enabled: true,
    },
    title: {
      text: "Amazing title here!",
      enabled: true,
    },
    paragraph: {
      text: "A message that will leave viewers wanting more.",
      enabled: true,
    },
  };

  const outroSlide: OutroSlide = {
    id: generateId(),
    type: "outro",
    outroStyle: "standard",
    theme: defaultTheme,
    tagline: {
      text: "That's all folks!",
      enabled: true,
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
  };

  return {
    id: generateId(),
    name: "My First Carousel",
    slides: [introSlide, contentSlide, outroSlide],
    globalSettings: {
      creatorName: "John Doe",
      creatorTitle: "Content Creator",
      creatorAvatar: undefined,
      aspectRatio: "4:5",
      defaultTheme: defaultTheme,
      showSwipeIndicator: true,
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}
