import { CarouselTemplate } from "../defaultTemplates";
import { generateId } from "@/lib/utils/idGenerator";
import { Theme } from "@/lib/types/carousel";

// Custom theme for Modern Business template
const businessTheme: Theme = {
  backgroundColor: "#0A0E27",
  textColor: "#FFFFFF",
  accentColor: "#6366F1",
};

const accentTheme: Theme = {
  backgroundColor: "#6366F1",
  textColor: "#FFFFFF",
  accentColor: "#A5B4FC",
};

export const modernBusinessTemplate: CarouselTemplate = {
  id: "modern-business-v2",
  name: "Modern Business",
  description:
    "Professional side-portrait layout for business and personal branding",
  category: "marketing",
  carousel: {
    id: generateId(),
    name: "Modern Business",
    globalSettings: {
      creatorName: "Business Pro",
      creatorTitle: "Entrepreneur",
      creatorAvatar: "",
      aspectRatio: "4:5",
      defaultTheme: businessTheme,
      showSwipeIndicator: true,
    },
    slides: [
      {
        id: generateId(),
        type: "intro",
        introStyle: "side-portrait",
        theme: businessTheme,
        layoutData: {
          imagePosition: "right",
        },
        tagline: { text: "PROFESSIONAL SERVICES", enabled: true },
        title: {
          text: "Transform Your Business Strategy",
          enabled: true,
        },
        paragraph: {
          text: "Expert consulting and innovative solutions for modern enterprises",
          enabled: true,
        },
        backgroundImage: "", // User would upload professional photo
      },
      {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: businessTheme,
        tagline: { text: "OUR APPROACH", enabled: true },
        title: { text: "Data-Driven Decisions", enabled: true },
        paragraph: {
          text: "We analyze your metrics, understand your market, and create actionable strategies based on real insights.",
          enabled: true,
        },
      },
      {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: accentTheme,
        tagline: { text: "WHAT WE OFFER", enabled: true },
        title: { text: "End-to-End Solutions", enabled: true },
        paragraph: {
          text: "From initial consultation to implementation and ongoing support. We're with you every step of the way.",
          enabled: true,
        },
      },
      {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: businessTheme,
        tagline: { text: "PROVEN RESULTS", enabled: true },
        title: { text: "300% Average ROI", enabled: true },
        paragraph: {
          text: "Our clients see measurable growth within 6 months. Real results from real partnerships.",
          enabled: true,
        },
      },
      {
        id: generateId(),
        type: "outro",
        outroStyle: "standard",
        theme: accentTheme,
        tagline: { text: "", enabled: false },
        title: { text: "Let's Work Together", enabled: true },
        paragraph: {
          text: "Schedule a free consultation today",
          enabled: true,
        },
        cta: { text: "Book Your Call", enabled: true },
        showInteractionIcons: true,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};
