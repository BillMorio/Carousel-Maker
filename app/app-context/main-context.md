# Carousel Maker - Comprehensive Specification Document

## Project Overview

A Next.js-based carousel maker application that allows users to create LinkedIn/Instagram carousel posts through a visual editor. Unlike traditional design tools (Canva, Fabric.js), this uses a **property-based editing model** where users edit slide properties through form controls rather than manipulating canvas objects directly.

### Core Philosophy

- **Data-driven**: Slides are React components rendered from data structures
- **Simple editing**: Edit properties (text, toggles, dropdowns) not canvas objects
- **No drag-and-drop canvas**: All manipulation through property panels
- **Type-safe**: Full TypeScript implementation

---

## Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand (recommended)
- **Export**: html2canvas (images), jspdf (PDF generation)
- **Image Handling**: Next.js Image component, FileReader API

---

## Application Architecture

### High-Level Structure

```
┌─────────────────────────────────────────────────────────┐
│                     App Header                           │
│  (Logo, Export Button, Templates, Settings)             │
├─────────────────────────────────────────────────────────┤
│                                                          │
│                  SLIDE PREVIEW                           │
│            (Live React Component)                        │
│                                                          │
├─────────────────────────────────────────────────────────┤
│     SLIDE NAVIGATOR                                      │
│  ← Reorder | 🗑️ Delete | Slide #3 | Add Slide + | Reorder → │
├─────────────────────────────────────────────────────────┤
│                                                          │
│               PROPERTY PANEL                             │
│     (Context-aware editor for current slide)            │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Folder Structure

```
carousel-maker/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Main editor page
│   ├── globals.css
│   └── api/                        # Future: server actions for AI generation
│
├── components/
│   ├── Editor/
│   │   ├── EditorLayout.tsx        # Main split-view container
│   │   ├── AppHeader.tsx           # Top toolbar
│   │   ├── SlidePreview.tsx        # Preview area wrapper
│   │   └── PropertyPanel.tsx       # Bottom panel (conditional renderer)
│   │
│   ├── SlideNavigator/
│   │   ├── SlideNavigator.tsx      # Navigation controls
│   │   └── AddSlideModal.tsx       # Modal for choosing slide type
│   │
│   ├── Slides/
│   │   ├── IntroSlide.tsx          # Renders intro slide
│   │   ├── ContentSlide.tsx        # Renders content/middle slide
│   │   ├── OutroSlide.tsx          # Renders outro slide
│   │   └── SlideContainer.tsx      # Common wrapper with aspect ratio
│   │
│   ├── PropertyEditors/
│   │   ├── IntroEditor.tsx         # Property editor for intro slides
│   │   ├── ContentEditor.tsx       # Property editor for content slides
│   │   ├── OutroEditor.tsx         # Property editor for outro slides
│   │   └── GlobalEditor.tsx        # Creator info, global settings
│   │
│   ├── PropertyControls/
│   │   ├── FieldWithToggle.tsx     # Reusable text field + toggle
│   │   ├── StyleSelector.tsx       # Tab-based style picker
│   │   ├── ImageManager.tsx        # Image upload/search/AI generate
│   │   ├── ColorPicker.tsx         # Theme color selector
│   │   └── ImageScaleControl.tsx   # Image scale/position controls
│   │
│   ├── Templates/
│   │   ├── TemplateSelector.tsx    # Template gallery
│   │   └── TemplateCard.tsx        # Preview of template
│   │
│   └── UI/
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Toggle.tsx
│       ├── Modal.tsx
│       └── Tabs.tsx
│
├── lib/
│   ├── store/
│   │   └── carouselStore.ts        # Zustand store for carousel state
│   │
│   ├── types/
│   │   └── carousel.ts             # All TypeScript interfaces
│   │
│   ├── utils/
│   │   ├── slideHelpers.ts         # Create default slides, validation
│   │   ├── exportHelpers.ts        # Export to PNG/PDF functions
│   │   └── idGenerator.ts          # Unique ID generation
│   │
│   ├── templates/
│   │   └── defaultTemplates.ts     # Pre-built carousel templates
│   │
│   └── constants/
│       └── themes.ts               # Default color themes
│
└── public/
    └── placeholders/               # Default placeholder images
```

---

## Data Structures

### Core Types

```typescript
// ============================================================================
// SLIDE TYPES
// ============================================================================

type SlideType = "intro" | "content" | "outro";

interface BaseSlide {
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

type IntroStyle = "standard" | "emoji" | "headshot" | "image";

interface IntroSlide extends BaseSlide {
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

type ContentSlideStyle = "text" | "text-image" | "image";
type ImageSource = "search" | "generate" | "upload";
type ImagePosition = "top" | "bottom" | "left" | "right" | "center";

interface ContentSlide extends BaseSlide {
  type: "content";
  slideStyle: ContentSlideStyle;

  // Image properties (conditional based on slideStyle)
  image?: {
    url: string;
    source: ImageSource;
    scale: number; // 0.5 to 2.0
    position: ImagePosition;
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

type OutroStyle = "standard" | "headshot" | "image";

interface OutroSlide extends BaseSlide {
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

type Slide = IntroSlide | ContentSlide | OutroSlide;

// ============================================================================
// CAROUSEL
// ============================================================================

interface GlobalSettings {
  creatorName: string;
  creatorTitle: string;
  creatorAvatar?: string;
  aspectRatio: "4:5" | "1:1" | "16:9";
  defaultTheme: Theme;
}

interface Theme {
  backgroundColor: string;
  textColor: string;
  accentColor: string;
}

interface Carousel {
  id: string;
  name: string; // For saving/loading projects
  slides: Slide[];
  globalSettings: GlobalSettings;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## State Management (Zustand)

```typescript
// lib/store/carouselStore.ts

interface CarouselState {
  // State
  carousel: Carousel;
  currentSlideIndex: number;
  history: Carousel[]; // For undo/redo
  historyIndex: number;

  // Slide CRUD
  addSlide: (type: SlideType, position: "before" | "after") => void;
  deleteSlide: (slideId: string) => void;
  duplicateSlide: (slideId: string) => void;
  updateSlide: (slideId: string, updates: Partial<Slide>) => void;

  // Reordering
  moveSlide: (fromIndex: number, toIndex: number) => void;
  moveSlideLeft: () => void; // Shorthand for current slide
  moveSlideRight: () => void; // Shorthand for current slide

  // Navigation
  setCurrentSlide: (index: number) => void;
  nextSlide: () => void;
  previousSlide: () => void;

  // Global settings
  updateGlobalSettings: (settings: Partial<GlobalSettings>) => void;

  // History
  undo: () => void;
  redo: () => void;

  // Persistence
  saveCarousel: () => Promise<void>;
  loadCarousel: (id: string) => Promise<void>;

  // Export
  exportToPNG: () => Promise<void>;
  exportToPDF: () => Promise<void>;
}

// Implementation pattern
const useCarouselStore = create<CarouselState>((set, get) => ({
  carousel: getDefaultCarousel(),
  currentSlideIndex: 0,
  history: [],
  historyIndex: -1,

  addSlide: (type, position) => {
    const { carousel, currentSlideIndex } = get();
    const newSlide = createDefaultSlide(type);
    const insertIndex =
      position === "after" ? currentSlideIndex + 1 : currentSlideIndex;

    const newSlides = [
      ...carousel.slides.slice(0, insertIndex),
      newSlide,
      ...carousel.slides.slice(insertIndex),
    ];

    set({
      carousel: { ...carousel, slides: newSlides },
      currentSlideIndex: insertIndex,
    });
  },

  // ... other methods
}));
```

---

## Component Specifications

### 1. EditorLayout.tsx

Main container for the entire editor interface.

```typescript
interface EditorLayoutProps {
  // No props needed, connects to store internally
}

// Layout structure:
// - App header (fixed top)
// - Slide preview (flex-grow, centered)
// - Slide navigator (fixed, between preview and panel)
// - Property panel (fixed bottom, scrollable)
```

### 2. SlidePreview.tsx

Renders the current slide with proper aspect ratio.

```typescript
interface SlidePreviewProps {
  slide: Slide;
  globalSettings: GlobalSettings;
}

// Responsibilities:
// - Maintain aspect ratio (4:5, 1:1, 16:9)
// - Render appropriate slide component (Intro/Content/Outro)
// - Apply theme colors
// - Show creator info overlay (bottom left)
// - Responsive scaling to fit viewport
```

### 3. PropertyPanel.tsx

Conditional renderer that shows the correct editor.

```typescript
interface PropertyPanelProps {
  currentSlide: Slide;
  onUpdate: (updates: Partial<Slide>) => void;
}

// Logic:
// Switch based on slide.type:
//   case 'intro': return <IntroEditor />
//   case 'content': return <ContentEditor />
//   case 'outro': return <OutroEditor />
```

### 4. IntroEditor.tsx / ContentEditor.tsx / OutroEditor.tsx

Property editors for each slide type.

```typescript
interface SlideEditorProps {
  slide: IntroSlide | ContentSlide | OutroSlide;
  onUpdate: (updates: Partial<Slide>) => void;
}

// Common structure:
// 1. Style selector tabs (at top)
// 2. Conditional controls based on style
// 3. Image controls (if applicable)
// 4. Text fields with toggles
// 5. Additional options (CTA, icons, etc.)
```

### 5. SlideNavigator.tsx

Navigation and slide management controls.

```typescript
interface SlideNavigatorProps {
  currentIndex: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
  onReorderLeft: () => void;
  onReorderRight: () => void;
  onDelete: () => void;
  onAddSlide: () => void;
}

// Layout (horizontal):
// [← Reorder] [🗑️ Delete] [Slide #X] [Add Slide +] [Reorder →]
```

### 6. FieldWithToggle.tsx

Reusable component for text fields with enable/disable toggle.

```typescript
interface FieldWithToggleProps {
  label: string;
  value: string;
  enabled: boolean;
  placeholder?: string;
  multiline?: boolean;
  onToggle: (enabled: boolean) => void;
  onChange: (value: string) => void;
}

// Visual structure:
// [✓] Label
//     [Text input or textarea]
```

### 7. ImageManager.tsx

Handles all image-related operations.

```typescript
interface ImageManagerProps {
  image?: {
    url: string;
    scale: number;
    position: ImagePosition;
  };
  onImageUpdate: (image: ImageData) => void;
}

// Tabs:
// - Search Image (keyword input + search button)
// - Generate with AI (prompt input + generate button)
// - Upload Image (file picker)
//
// Below tabs:
// - Image scale controls (zoom in/out)
// - Image position controls (top/center/bottom, etc.)
```

---

## Default Slide Templates

```typescript
// lib/utils/slideHelpers.ts

function createDefaultSlide(type: SlideType): Slide {
  const baseTheme: Theme = {
    backgroundColor: "#7DD3C0", // Mint green
    textColor: "#2D3748", // Dark gray
    accentColor: "#FFFFFF", // White
  };

  switch (type) {
    case "intro":
      return {
        id: generateId(),
        type: "intro",
        introStyle: "standard",
        theme: baseTheme,
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

    case "content":
      return {
        id: generateId(),
        type: "content",
        slideStyle: "text",
        theme: baseTheme,
        tagline: { text: "", enabled: false },
        title: {
          text: "Amazing title here!",
          enabled: true,
        },
        paragraph: {
          text: "A message that will leave viewers wanting more.",
          enabled: true,
        },
      };

    case "outro":
      return {
        id: generateId(),
        type: "outro",
        outroStyle: "standard",
        theme: baseTheme,
        tagline: { text: "", enabled: false },
        title: {
          text: "Thank you!",
          enabled: true,
        },
        paragraph: {
          text: "Follow for more content like this.",
          enabled: true,
        },
        cta: {
          text: "Call to action",
          enabled: true,
        },
        showInteractionIcons: true,
      };
  }
}
```

---

## Feature Implementation Priority

### Phase 1: MVP (Core Functionality)

1. ✅ Basic data structures (TypeScript interfaces)
2. ✅ Zustand store setup
3. ✅ Slide components (Intro, Content, Outro - basic rendering)
4. ✅ Property editors (text fields, toggles)
5. ✅ Slide navigation (prev/next)
6. ✅ Add/delete slides
7. ✅ Basic export to PNG

### Phase 2: Essential Features

8. Image upload functionality
9. Reorder slides (move left/right)
10. Style variants (standard, headshot, image)
11. Theme color picker
12. Creator info editor
13. Export to PDF

### Phase 3: Polish & Advanced

14. Image search integration
15. AI image generation
16. Duplicate slide
17. Undo/redo
18. Template system (pre-built carousels)
19. Save/load projects (localStorage, then DB)
20. Keyboard shortcuts
21. Slide thumbnail filmstrip
22. Drag-to-reorder slides

---

## Validation Rules

1. **Minimum slides**: At least 1 slide required (cannot delete last slide)
2. **Text validation**: No validation needed (empty text is allowed)
3. **Image validation**: Valid URLs or base64 strings
4. **Reorder boundaries**: Cannot move first slide left or last slide right
5. **Deletion confirmation**: Warn if deleting slide with content

---

## Future Enhancements

### AI Integration

- AI-powered text suggestions (headlines, hooks)
- AI image generation (DALL-E, Midjourney API)
- Smart template recommendations based on content
- Auto-generate entire carousel from topic

### Collaboration

- Real-time collaboration (multiple users editing)
- Comments and feedback on slides
- Version history
- Share draft links

### Analytics

- Track which slides perform best
- A/B testing different slide orders
- Engagement metrics integration

### Platform Integration

- Direct publish to LinkedIn API
- Direct publish to Instagram API
- Schedule posts
- Cross-post to multiple platforms

---
