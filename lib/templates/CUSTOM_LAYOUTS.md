# Custom Slide Layouts

We've extended the carousel system to support custom layouts beyond the generic centered design.

## 🎨 New Layout Types

### 1. **Split-Highlight Layout** (`split-highlight`)

- **Best for**: Educational content, guides, tutorials
- **Features**:
  - Title split with individual word highlighting
  - Custom colors for each highlighted word
  - Portrait illustration on the right
  - Horizontal split layout
- **Example**: AI Agents Guide template

### 2. **Side-Portrait Layout** (`side-portrait`)

- **Best for**: Personal branding, business profiles, testimonials
- **Features**:
  - 50/50 split with text on one side
  - Full-height image on other side
  - Configurable image position (left/right)
  - Professional appearance
- **Example**: Modern Business template

### 3. **Standard Centered** (existing)

- Simple centered text layout
- Still available for traditional carousels

## 🔧 Technical Implementation

### Type System Extensions

Added to `lib/types/carousel.ts`:

```typescript
export type IntroStyle =
  | "standard"
  | "emoji"
  | "headshot"
  | "image"
  | "split-highlight"
  | "side-portrait";

interface IntroSlide {
  // ...existing fields
  layoutData?: {
    highlightWords?: number[]; // Word indices to highlight
    highlightColors?: string[]; // Colors for highlights
    imagePosition?: "left" | "right"; // Image side
  };
}
```

### Component Updates

**IntroSlide.tsx** now renders different layouts based on `introStyle`:

- Detects layout type
- Renders appropriate HTML structure
- Applies custom styling per layout

**IntroEditor.tsx** updated with:

- New layout selector tabs
- Context-aware image upload labels
- Proper conditional rendering

## 📝 Creating Templates with Custom Layouts

### Split-Highlight Example:

```typescript
{
  type: "intro",
  introStyle: "split-highlight",
  layoutData: {
    highlightWords: [2, 3, 4],  // Which words to highlight
    highlightColors: ["#8B5A3C", "#E07C4A", "#1A1A1A"],
  },
  title: { text: "how to build AI Agents", enabled: true },
  backgroundImage: "portrait-url.png",  // Right side portrait
}
```

### Side-Portrait Example:

```typescript
{
  type: "intro",
  introStyle: "side-portrait",
  layoutData: {
    imagePosition: "right",  // or "left"
  },
  title: { text: "Transform Your Business", enabled: true },
  backgroundImage: "professional-photo.jpg",
}
```

## 🚀 New Templates Created

1. **AI Agents Guide** (`ai-agents-guide.ts`)

   - Uses split-highlight layout
   - Vintage educational aesthetic
   - Brown/orange color scheme

2. **Modern Business** (`modern-business.ts`)
   - Uses side-portrait layout
   - Professional dark theme
   - Indigo accent colors

## 🎯 Benefits

- **Flexibility**: No longer limited to centered layouts
- **Customization**: Each template can have unique visual structure
- **Scalability**: Easy to add more layout types
- **Design Freedom**: Match specific brand aesthetics
- **User Choice**: Templates offer varied visual experiences

## 🔮 Future Layout Ideas

- **Grid Layout**: Multiple content blocks
- **Timeline**: Vertical progression
- **Comparison**: Side-by-side columns
- **Stats Dashboard**: Data visualization focus
- **Magazine**: Editorial-style layout
