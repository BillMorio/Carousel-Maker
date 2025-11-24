import { Carousel, Theme } from "@/lib/types/carousel";
import { generateId } from "@/lib/utils/idGenerator";

export interface CarouselTemplate {
  id: string;
  name: string;
  description: string;
  category: "marketing" | "education" | "storytelling" | "social";
  thumbnail?: string;
  carousel: Carousel;
}

const blueTheme: Theme = {
  backgroundColor: "#3B82F6",
  textColor: "#FFFFFF",
  accentColor: "#60A5FA",
};

const greenTheme: Theme = {
  backgroundColor: "#10B981",
  textColor: "#FFFFFF",
  accentColor: "#34D399",
};

const purpleTheme: Theme = {
  backgroundColor: "#8B5CF6",
  textColor: "#FFFFFF",
  accentColor: "#A78BFA",
};

const orangeTheme: Theme = {
  backgroundColor: "#F59E0B",
  textColor: "#FFFFFF",
  accentColor: "#FBBF24",
};

const pinkTheme: Theme = {
  backgroundColor: "#EC4899",
  textColor: "#FFFFFF",
  accentColor: "#F472B6",
};

// Gradient themes for the new minimal gradient template
const gradientTheme1: Theme = {
  backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  textColor: "#FFFFFF",
  accentColor: "#A78BFA",
};

const gradientTheme2: Theme = {
  backgroundColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  textColor: "#FFFFFF",
  accentColor: "#FDE68A",
};

const gradientTheme3: Theme = {
  backgroundColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  textColor: "#FFFFFF",
  accentColor: "#DBEAFE",
};

const gradientTheme4: Theme = {
  backgroundColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  textColor: "#FFFFFF",
  accentColor: "#A7F3D0",
};

const gradientTheme5: Theme = {
  backgroundColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  textColor: "#FFFFFF",
  accentColor: "#FEF3C7",
};

// Paper texture themes with subtle grain and warm tones
const paperTheme1: Theme = {
  backgroundColor: "#F7F3E9",
  textColor: "#2D3748",
  accentColor: "#8B7355",
};

const paperTheme2: Theme = {
  backgroundColor: "#FFF8F0",
  textColor: "#3D2817",
  accentColor: "#C19A6B",
};

const paperTheme3: Theme = {
  backgroundColor: "#FAF6F0",
  textColor: "#4A3F35",
  accentColor: "#A67C52",
};

const paperTheme4: Theme = {
  backgroundColor: "#FBF7F4",
  textColor: "#3E3530",
  accentColor: "#D4AF37",
};

const paperTheme5: Theme = {
  backgroundColor: "#F5F1E8",
  textColor: "#2B2620",
  accentColor: "#B8956A",
};

// Grainy gradient mesh themes for modern SaaS aesthetic
const grainMeshTheme1: Theme = {
  backgroundColor:
    "radial-gradient(at 20% 30%, #8B4513 0%, transparent 50%), radial-gradient(at 80% 70%, #6B46C1 0%, transparent 50%), radial-gradient(at 40% 80%, #0891B2 0%, transparent 50%), #1a1625",
  textColor: "#FFFFFF",
  accentColor: "#22D3EE",
};

const grainMeshTheme2: Theme = {
  backgroundColor:
    "radial-gradient(at 30% 20%, #A0522D 0%, transparent 50%), radial-gradient(at 70% 60%, #7C3AED 0%, transparent 50%), radial-gradient(at 50% 90%, #14B8A6 0%, transparent 50%), #1e1b2e",
  textColor: "#FFFFFF",
  accentColor: "#C084FC",
};

const grainMeshTheme3: Theme = {
  backgroundColor:
    "radial-gradient(at 60% 40%, #8B4513 0%, transparent 50%), radial-gradient(at 20% 70%, #5B21B6 0%, transparent 50%), radial-gradient(at 80% 20%, #0E7490 0%, transparent 50%), #1a1a2e",
  textColor: "#FFFFFF",
  accentColor: "#5EEAD4",
};

const grainMeshTheme4: Theme = {
  backgroundColor:
    "radial-gradient(at 40% 60%, #CD853F 0%, transparent 50%), radial-gradient(at 70% 30%, #6D28D9 0%, transparent 50%), radial-gradient(at 30% 90%, #06B6D4 0%, transparent 50%), #1c1625",
  textColor: "#FFFFFF",
  accentColor: "#A78BFA",
};

const grainMeshTheme5: Theme = {
  backgroundColor:
    "radial-gradient(at 50% 50%, #A0522D 0%, transparent 50%), radial-gradient(at 90% 40%, #7C3AED 0%, transparent 50%), radial-gradient(at 10% 80%, #0891B2 0%, transparent 50%), #1a1829",
  textColor: "#FFFFFF",
  accentColor: "#67E8F9",
};

export const defaultTemplates: CarouselTemplate[] = [
  {
    id: "the-hook",
    name: "The Hook",
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
  },
  {
    id: "educational-tips",
    name: "5 Quick Tips",
    description: "Educational carousel with numbered tips and clear structure",
    category: "education",
    carousel: {
      id: generateId(),
      name: "5 Quick Tips",
      globalSettings: {
        creatorName: "",
        creatorTitle: "",
        aspectRatio: "1:1",
        defaultTheme: greenTheme,
      },
      slides: [
        {
          id: generateId(),
          type: "intro",
          introStyle: "standard",
          theme: greenTheme,
          tagline: { text: "", enabled: false },
          title: { text: "5 Tips to Master", enabled: true },
          paragraph: { text: "Your Topic", enabled: true },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: greenTheme,
          tagline: { text: "Tip #1", enabled: true },
          title: { text: "Start with the basics", enabled: true },
          paragraph: {
            text: "and build a strong foundation",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: greenTheme,
          tagline: { text: "Tip #2", enabled: true },
          title: { text: "Practice consistently", enabled: true },
          paragraph: {
            text: "even if it's just 10 minutes a day",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: greenTheme,
          tagline: { text: "Tip #3", enabled: true },
          title: { text: "Learn from others", enabled: true },
          paragraph: {
            text: "who have already succeeded",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: greenTheme,
          tagline: { text: "Tip #4", enabled: true },
          title: { text: "Track your progress", enabled: true },
          paragraph: { text: "and celebrate small wins", enabled: true },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: greenTheme,
          tagline: { text: "Tip #5", enabled: true },
          title: { text: "Stay patient", enabled: true },
          paragraph: { text: "and trust the process", enabled: true },
        },
        {
          id: generateId(),
          type: "outro",
          outroStyle: "standard",
          theme: greenTheme,
          tagline: { text: "", enabled: false },
          title: { text: "Keep Learning!", enabled: true },
          paragraph: { text: "", enabled: false },
          cta: { text: "Follow for More Tips", enabled: true },
          showInteractionIcons: true,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "story-arc",
    name: "Story Arc",
    description: "Problem → Solution → Result narrative structure",
    category: "storytelling",
    carousel: {
      id: generateId(),
      name: "Story Arc",
      globalSettings: {
        creatorName: "",
        creatorTitle: "",
        aspectRatio: "4:5",
        defaultTheme: purpleTheme,
      },
      slides: [
        {
          id: generateId(),
          type: "intro",
          introStyle: "standard",
          theme: purpleTheme,
          tagline: { text: "And you probably do too", enabled: true },
          title: { text: "I Had a Problem", enabled: true },
          paragraph: { text: "", enabled: false },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: purpleTheme,
          tagline: { text: "The Problem", enabled: true },
          title: { text: "Stuck in the same cycle", enabled: true },
          paragraph: {
            text: "doing the same things, getting the same results",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: purpleTheme,
          tagline: { text: "The Discovery", enabled: true },
          title: { text: "I found a different approach", enabled: true },
          paragraph: { text: "that changed everything", enabled: true },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: purpleTheme,
          tagline: { text: "The Solution", enabled: true },
          title: { text: "Here's exactly what I did", enabled: true },
          paragraph: { text: "and how you can do it too", enabled: true },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: purpleTheme,
          tagline: { text: "The Result", enabled: true },
          title: { text: "Now I'm seeing results", enabled: true },
          paragraph: {
            text: "I never thought possible",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "outro",
          outroStyle: "standard",
          theme: purpleTheme,
          tagline: { text: "", enabled: false },
          title: { text: "Your Turn", enabled: true },
          paragraph: { text: "", enabled: false },
          cta: { text: "Start Your Journey Today", enabled: true },
          showInteractionIcons: true,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "motivational-quote",
    name: "Quote Series",
    description: "Inspirational quotes with clean, minimal design",
    category: "social",
    carousel: {
      id: generateId(),
      name: "Quote Series",
      globalSettings: {
        creatorName: "",
        creatorTitle: "",
        aspectRatio: "1:1",
        defaultTheme: orangeTheme,
      },
      slides: [
        {
          id: generateId(),
          type: "intro",
          introStyle: "standard",
          theme: orangeTheme,
          tagline: { text: "Words to Inspire", enabled: true },
          title: { text: "Daily Motivation", enabled: true },
          paragraph: { text: "", enabled: false },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: orangeTheme,
          tagline: { text: "", enabled: false },
          title: { text: '"Believe You Can"', enabled: true },
          paragraph: { text: "And you're halfway there", enabled: true },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: orangeTheme,
          tagline: { text: "", enabled: false },
          title: { text: '"Success Is Not Final"', enabled: true },
          paragraph: {
            text: "Failure is not fatal: it is the courage to continue that counts",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: orangeTheme,
          tagline: { text: "", enabled: false },
          title: { text: '"The Only Way"', enabled: true },
          paragraph: {
            text: "To do great work is to love what you do",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "outro",
          outroStyle: "standard",
          theme: orangeTheme,
          tagline: { text: "", enabled: false },
          title: { text: "Stay Inspired", enabled: true },
          paragraph: { text: "", enabled: false },
          cta: { text: "Share the Motivation", enabled: true },
          showInteractionIcons: true,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "product-launch",
    name: "Product Launch",
    description: "Intro → Features → Benefits → Call to Action",
    category: "marketing",
    carousel: {
      id: generateId(),
      name: "Product Launch",
      globalSettings: {
        creatorName: "",
        creatorTitle: "",
        aspectRatio: "4:5",
        defaultTheme: blueTheme,
      },
      slides: [
        {
          id: generateId(),
          type: "intro",
          introStyle: "standard",
          theme: blueTheme,
          tagline: { text: "Introducing", enabled: true },
          title: { text: "Your Amazing Product", enabled: true },
          paragraph: { text: "", enabled: false },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: blueTheme,
          tagline: { text: "Feature #1", enabled: true },
          title: { text: "Lightning-fast performance", enabled: true },
          paragraph: { text: "that saves you time", enabled: true },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: blueTheme,
          tagline: { text: "Feature #2", enabled: true },
          title: { text: "Intuitive design", enabled: true },
          paragraph: { text: "that anyone can master", enabled: true },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: blueTheme,
          tagline: { text: "Feature #3", enabled: true },
          title: { text: "Seamless integration", enabled: true },
          paragraph: {
            text: "with tools you already use",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: blueTheme,
          tagline: { text: "Why Choose Us?", enabled: true },
          title: {
            text: "Join thousands of satisfied customers",
            enabled: true,
          },
          paragraph: {
            text: "who have transformed their workflow",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "outro",
          outroStyle: "standard",
          theme: blueTheme,
          tagline: { text: "", enabled: false },
          title: { text: "Get Started Today", enabled: true },
          paragraph: { text: "Limited Time Offer - 50% Off", enabled: true },
          cta: { text: "Claim Your Discount", enabled: true },
          showInteractionIcons: true,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: "before-after",
    name: "Before & After",
    description: "Transformation story with visual contrast",
    category: "storytelling",
    carousel: {
      id: generateId(),
      name: "Before & After",
      globalSettings: {
        creatorName: "",
        creatorTitle: "",
        aspectRatio: "1:1",
        defaultTheme: pinkTheme,
      },
      slides: [
        {
          id: generateId(),
          type: "intro",
          introStyle: "standard",
          theme: pinkTheme,
          tagline: { text: "Before & After", enabled: true },
          title: { text: "Transformation", enabled: true },
          paragraph: { text: "", enabled: false },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: pinkTheme,
          tagline: { text: "Before", enabled: true },
          title: { text: "Where I started", enabled: true },
          paragraph: { text: "and the struggles I faced", enabled: true },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: pinkTheme,
          tagline: { text: "The Turning Point", enabled: true },
          title: { text: "What changed?", enabled: true },
          paragraph: {
            text: "The moment I decided enough was enough",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: pinkTheme,
          tagline: { text: "After", enabled: true },
          title: { text: "Where I am now", enabled: true },
          paragraph: { text: "and what became possible", enabled: true },
        },
        {
          id: generateId(),
          type: "outro",
          outroStyle: "standard",
          theme: pinkTheme,
          tagline: { text: "", enabled: false },
          title: { text: "You Can Do This Too", enabled: true },
          paragraph: { text: "", enabled: false },
          cta: { text: "Start Your Transformation", enabled: true },
          showInteractionIcons: true,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: generateId(),
    name: "Gradient Vibes",
    description:
      "A minimal gradient aesthetic with smooth color transitions and clean typography",
    category: "social",
    carousel: {
      id: generateId(),
      name: "Gradient Vibes",
      globalSettings: {
        creatorName: "Design Studio",
        creatorTitle: "Creative Designer",
        creatorAvatar: "",
        aspectRatio: "1:1",
        defaultTheme: gradientTheme1,
      },
      slides: [
        {
          id: generateId(),
          type: "intro",
          introStyle: "image",
          theme: gradientTheme1,
          backgroundImage:
            "data:image/svg+xml,%3Csvg width='1080' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1080' height='1080' fill='url(%23grad1)'/%3E%3Cline x1='100' y1='200' x2='400' y2='200' stroke='white' stroke-width='2' opacity='0.3'/%3E%3Cline x1='700' y1='800' x2='950' y2='800' stroke='white' stroke-width='2' opacity='0.3'/%3E%3Ccircle cx='150' cy='900' r='40' fill='none' stroke='white' stroke-width='2' opacity='0.2'/%3E%3Cpath d='M 850 150 Q 900 200 850 250' fill='none' stroke='white' stroke-width='2' opacity='0.25'/%3E%3C/svg%3E",
          tagline: { text: "CREATIVE SERIES", enabled: true },
          title: { text: "Gradient Flow", enabled: true },
          paragraph: {
            text: "A minimal aesthetic experience",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: gradientTheme2,
          tagline: { text: "INSIGHT 01", enabled: true },
          title: { text: "Design with intention", enabled: true },
          paragraph: {
            text: "Every element serves a purpose. Every color tells a story. Let your work breathe.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: gradientTheme3,
          tagline: { text: "INSIGHT 02", enabled: true },
          title: { text: "Simplicity speaks volumes", enabled: true },
          paragraph: {
            text: "Remove the noise. Focus on what matters. Clean lines and bold gradients create impact.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: gradientTheme4,
          tagline: { text: "INSIGHT 03", enabled: true },
          title: { text: "Colors evoke emotion", enabled: true },
          paragraph: {
            text: "Choose your palette wisely. Gradients add depth and movement to static designs.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: gradientTheme5,
          tagline: { text: "INSIGHT 04", enabled: true },
          title: { text: "Consistency builds trust", enabled: true },
          paragraph: {
            text: "Maintain visual harmony across all touchpoints. Your brand deserves coherence.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "outro",
          outroStyle: "image",
          theme: gradientTheme1,
          backgroundImage:
            "data:image/svg+xml,%3Csvg width='1080' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='gradOutro' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23764ba2;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1080' height='1080' fill='url(%23gradOutro)'/%3E%3Ccircle cx='540' cy='200' r='80' fill='none' stroke='white' stroke-width='3' opacity='0.25'/%3E%3Cline x1='200' y1='900' x2='880' y2='900' stroke='white' stroke-width='2' opacity='0.3'/%3E%3Cpath d='M 100 400 L 200 400 L 200 500' fill='none' stroke='white' stroke-width='2' opacity='0.2'/%3E%3Cpath d='M 980 600 L 880 600 L 880 700' fill='none' stroke='white' stroke-width='2' opacity='0.2'/%3E%3C/svg%3E",
          tagline: { text: "", enabled: false },
          title: { text: "Create Something Beautiful", enabled: true },
          paragraph: {
            text: "Start your design journey today",
            enabled: true,
          },
          cta: { text: "Follow for More", enabled: true },
          showInteractionIcons: true,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: generateId(),
    name: "Paper Notes",
    description:
      "Warm paper textures with handwritten feel and organic aesthetic",
    category: "education",
    carousel: {
      id: generateId(),
      name: "Paper Notes",
      globalSettings: {
        creatorName: "Knowledge Keeper",
        creatorTitle: "Educator",
        creatorAvatar: "",
        aspectRatio: "1:1",
        defaultTheme: paperTheme1,
      },
      slides: [
        {
          id: generateId(),
          type: "intro",
          introStyle: "standard",
          theme: paperTheme1,
          tagline: { text: "LESSON OF THE DAY", enabled: true },
          title: { text: "Write It Down", enabled: true },
          paragraph: {
            text: "The art of learning through notes",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: paperTheme2,
          tagline: { text: "NOTE #1", enabled: true },
          title: { text: "Clarity comes from writing", enabled: true },
          paragraph: {
            text: "When you write things down, you process them deeper. Your thoughts become tangible.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: paperTheme3,
          tagline: { text: "NOTE #2", enabled: true },
          title: { text: "Memory needs anchors", enabled: true },
          paragraph: {
            text: "Notes serve as mental bookmarks. They help you recall not just facts, but the moment of learning.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: paperTheme4,
          tagline: { text: "NOTE #3", enabled: true },
          title: { text: "Handwriting connects ideas", enabled: true },
          paragraph: {
            text: "The physical act of writing creates neural pathways. Your hand and brain work together.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: paperTheme5,
          tagline: { text: "NOTE #4", enabled: true },
          title: { text: "Review builds mastery", enabled: true },
          paragraph: {
            text: "Your notes are living documents. Return to them, refine them, and watch your understanding grow.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "outro",
          outroStyle: "standard",
          theme: paperTheme1,
          tagline: { text: "", enabled: false },
          title: { text: "Start Your Learning Journal", enabled: true },
          paragraph: {
            text: "One note at a time",
            enabled: true,
          },
          cta: { text: "Follow for More Wisdom", enabled: true },
          showInteractionIcons: true,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
  {
    id: generateId(),
    name: "Mesh Gradient",
    description: "Modern grainy gradient mesh with premium SaaS aesthetic",
    category: "marketing",
    carousel: {
      id: generateId(),
      name: "Mesh Gradient",
      globalSettings: {
        creatorName: "Premium Studio",
        creatorTitle: "Design Agency",
        creatorAvatar: "",
        aspectRatio: "1:1",
        defaultTheme: grainMeshTheme1,
      },
      slides: [
        {
          id: generateId(),
          type: "intro",
          introStyle: "image",
          theme: grainMeshTheme1,
          backgroundImage:
            "data:image/svg+xml,%3Csvg width='1080' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='g1' cx='20%25' cy='30%25'%3E%3Cstop offset='0%25' style='stop-color:%238B4513;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%238B4513;stop-opacity:0' /%3E%3C/radialGradient%3E%3CradialGradient id='g2' cx='80%25' cy='70%25'%3E%3Cstop offset='0%25' style='stop-color:%236B46C1;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%236B46C1;stop-opacity:0' /%3E%3C/radialGradient%3E%3CradialGradient id='g3' cx='40%25' cy='80%25'%3E%3Cstop offset='0%25' style='stop-color:%230891B2;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%230891B2;stop-opacity:0' /%3E%3C/radialGradient%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeBlend mode='multiply' in2='SourceGraphic'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='1080' height='1080' fill='%231a1625'/%3E%3Crect width='1080' height='1080' fill='url(%23g1)'/%3E%3Crect width='1080' height='1080' fill='url(%23g2)'/%3E%3Crect width='1080' height='1080' fill='url(%23g3)'/%3E%3Crect width='1080' height='1080' fill='white' filter='url(%23noise)' opacity='0.15'/%3E%3C/svg%3E",
          tagline: { text: "NEXT GENERATION", enabled: true },
          title: { text: "Build The Future", enabled: true },
          paragraph: {
            text: "Modern tools for modern teams",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: grainMeshTheme2,
          tagline: { text: "FEATURE 01", enabled: true },
          title: { text: "Lightning Fast Performance", enabled: true },
          paragraph: {
            text: "Experience blazing speed with our optimized architecture. Built for scale, designed for efficiency.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: grainMeshTheme3,
          tagline: { text: "FEATURE 02", enabled: true },
          title: { text: "Seamless Integration", enabled: true },
          paragraph: {
            text: "Connect with your favorite tools in minutes. One platform, infinite possibilities.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: grainMeshTheme4,
          tagline: { text: "FEATURE 03", enabled: true },
          title: { text: "Enterprise Security", enabled: true },
          paragraph: {
            text: "Bank-level encryption and compliance. Your data is protected at every layer.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "content",
          slideStyle: "text",
          theme: grainMeshTheme5,
          tagline: { text: "FEATURE 04", enabled: true },
          title: { text: "24/7 Support", enabled: true },
          paragraph: {
            text: "Real humans, real help. Our team is here whenever you need us, day or night.",
            enabled: true,
          },
        },
        {
          id: generateId(),
          type: "outro",
          outroStyle: "image",
          theme: grainMeshTheme1,
          backgroundImage:
            "data:image/svg+xml,%3Csvg width='1080' height='1080' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='og1' cx='20%25' cy='30%25'%3E%3Cstop offset='0%25' style='stop-color:%238B4513;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%238B4513;stop-opacity:0' /%3E%3C/radialGradient%3E%3CradialGradient id='og2' cx='80%25' cy='70%25'%3E%3Cstop offset='0%25' style='stop-color:%236B46C1;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%236B46C1;stop-opacity:0' /%3E%3C/radialGradient%3E%3CradialGradient id='og3' cx='40%25' cy='80%25'%3E%3Cstop offset='0%25' style='stop-color:%230891B2;stop-opacity:1' /%3E%3Cstop offset='50%25' style='stop-color:%230891B2;stop-opacity:0' /%3E%3C/radialGradient%3E%3Cfilter id='onoise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeBlend mode='multiply' in2='SourceGraphic'/%3E%3C/filter%3E%3C/defs%3E%3Crect width='1080' height='1080' fill='%231a1625'/%3E%3Crect width='1080' height='1080' fill='url(%23og1)'/%3E%3Crect width='1080' height='1080' fill='url(%23og2)'/%3E%3Crect width='1080' height='1080' fill='url(%23og3)'/%3E%3Crect width='1080' height='1080' fill='white' filter='url(%23onoise)' opacity='0.15'/%3E%3C/svg%3E",
          tagline: { text: "", enabled: false },
          title: { text: "Ready to Transform?", enabled: true },
          paragraph: {
            text: "Join thousands of teams already building better",
            enabled: true,
          },
          cta: { text: "Start Free Trial", enabled: true },
          showInteractionIcons: true,
        },
      ],
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  },
];
