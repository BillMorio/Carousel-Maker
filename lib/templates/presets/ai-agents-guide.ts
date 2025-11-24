import { CarouselTemplate } from "../defaultTemplates";
import { generateId } from "@/lib/utils/idGenerator";
import { Theme } from "@/lib/types/carousel";

// Custom theme for AI Agents template
const aiAgentsTheme: Theme = {
  backgroundColor: "#F5EDE4",
  textColor: "#1A1A1A",
  accentColor: "#E07C4A",
};

const brownBoxTheme: Theme = {
  backgroundColor: "#8B5A3C",
  textColor: "#FFFFFF",
  accentColor: "#E07C4A",
};

const orangeBoxTheme: Theme = {
  backgroundColor: "#E07C4A",
  textColor: "#1A1A1A",
  accentColor: "#8B5A3C",
};

export const aiAgentsGuideTemplate: CarouselTemplate = {
  id: "ai-agents-guide-v2",
  name: "AI Agents Guide",
  description:
    "Educational guide with split-highlight layout and vintage illustration style",
  category: "education",
  carousel: {
    id: generateId(),
    name: "AI Agents Guide",
    globalSettings: {
      creatorName: "Open AI",
      creatorTitle: "AI Education",
      creatorAvatar: "",
      aspectRatio: "1:1",
      defaultTheme: aiAgentsTheme,
      showSwipeIndicator: true,
    },
    slides: [
      {
        id: generateId(),
        type: "intro",
        introStyle: "split-highlight",
        theme: aiAgentsTheme,
        layoutData: {
          highlightWords: [3, 4, 5, 6], // "AI Agents", "Without", "Previous", "Knowledge"
          highlightColors: ["#8B5A3C", "#E07C4A", "#E07C4A", "#1A1A1A"],
        },
        tagline: { text: "OPEN AI'S GUIDE", enabled: true },
        title: {
          text: "how to build AI Agents Without Previous Knowledge",
          enabled: true,
        },
        paragraph: { text: "Carousel by", enabled: true },
        backgroundImage: "", // User would upload portrait illustration
      },
      {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: aiAgentsTheme,
        tagline: { text: "STEP 01", enabled: true },
        title: { text: "Understanding AI Agents", enabled: true },
        paragraph: {
          text: "AI agents are autonomous programs that perceive their environment and take actions to achieve specific goals. No coding experience required to get started.",
          enabled: true,
        },
      },
      {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: aiAgentsTheme,
        tagline: { text: "STEP 02", enabled: true },
        title: { text: "Choose Your Framework", enabled: true },
        paragraph: {
          text: "Select from user-friendly platforms like LangChain, AutoGPT, or AgentGPT. These tools provide visual interfaces and pre-built templates.",
          enabled: true,
        },
      },
      {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: aiAgentsTheme,
        tagline: { text: "STEP 03", enabled: true },
        title: { text: "Define Your Agent's Purpose", enabled: true },
        paragraph: {
          text: "Clearly describe what you want your agent to do. Be specific about tasks, goals, and constraints. The clearer your instructions, the better results.",
          enabled: true,
        },
      },
      {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: aiAgentsTheme,
        tagline: { text: "STEP 04", enabled: true },
        title: { text: "Test and Iterate", enabled: true },
        paragraph: {
          text: "Start small, test frequently, and refine based on results. AI agents learn from feedback and improve over time with proper guidance.",
          enabled: true,
        },
      },
      {
        id: generateId(),
        type: "outro",
        outroStyle: "standard",
        theme: brownBoxTheme,
        tagline: { text: "", enabled: false },
        title: { text: "Ready to Build Your First Agent?", enabled: true },
        paragraph: {
          text: "Start experimenting today with no-code tools",
          enabled: true,
        },
        cta: { text: "Get the Full Guide", enabled: true },
        showInteractionIcons: true,
      },
    ],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};
