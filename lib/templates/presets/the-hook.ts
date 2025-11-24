import { CarouselTemplate } from "../defaultTemplates";
import { generateId } from "@/lib/utils/idGenerator";
import { blueTheme } from "../themes";

export const theHookTemplate: CarouselTemplate = {
  id: "the-hook-v2",
  name: "The Hook (Enhanced)",
  description: "Attention-grabbing intro with 3 key points and strong CTA",
  category: "marketing",
  carousel: {
    id: generateId(),
    name: "The Hook Template",
    globalSettings: {
      creatorName: "",
      creatorTitle: "",
      aspectRatio: "4:5",
      defaultTheme: blueTheme,
      showSwipeIndicator: true,
    },
    slides: [
      {
        id: generateId(),
        type: "intro",
        introStyle: "standard",
        theme: blueTheme,
        tagline: { text: "This Could Change Everything", enabled: true },
        title: { text: "Stop Scrolling", enabled: true },
        paragraph: { text: "", enabled: false },
      },
      {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: blueTheme,
        tagline: { text: "Point #1", enabled: true },
        title: { text: "Your first powerful message", enabled: true },
        paragraph: {
          text: "that resonates with your audience",
          enabled: true,
        },
      },
      {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: blueTheme,
        tagline: { text: "Point #2", enabled: true },
        title: { text: "Your second compelling reason", enabled: true },
        paragraph: { text: "they can't ignore", enabled: true },
      },
      {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: blueTheme,
        tagline: { text: "Point #3", enabled: true },
        title: { text: "The final piece", enabled: true },
        paragraph: { text: "that seals the deal", enabled: true },
      },
      {
        id: generateId(),
        type: "outro",
        outroStyle: "standard",
        theme: blueTheme,
        tagline: { text: "", enabled: false },
        title: { text: "Ready to Get Started?", enabled: true },
        paragraph: { text: "", enabled: false },
        cta: { text: "Click the Link Below", enabled: true },
        showInteractionIcons: true,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};
