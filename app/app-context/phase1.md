Implementation Plan - Phase 1: Foundation
Step 1: Core Types & Mock Data
Files to create:

lib/types/carousel.ts - All TypeScript interfaces
lib/utils/mockData.ts - Sample carousel with 3 slides for testing
lib/utils/idGenerator.ts - Simple ID generation utility
What this includes:

Complete type definitions (IntroSlide, ContentSlide, OutroSlide, Carousel, GlobalSettings)
Mock carousel data to render while building UI
No state management yet
Step 2: Install Required shadcn Components
Components needed:

npx shadcn@latest add button input label switch textarea tabs select accordion separator avatar scroll-area card
Step 3: Main Layout Container
Files to create:

components/Editor/EditorLayout.tsx

Three-column grid: Sidebar | Main Editor | (empty for now)
Sidebar: ~260px fixed width
Main editor: Flex-grow
Background: Dotted/grid pattern CSS
page.tsx - Update to use EditorLayout with mock data

Step 4: Sidebar Components
Files to create:

components/Sidebar/AppSidebar.tsx - Main sidebar container with scroll-area
components/Sidebar/PlatformSettings.tsx - Aspect ratio selector (4:5, 1:1, 16:9)
components/Sidebar/ColorPaletteSection.tsx - Theme color pickers (bg, text, accent)
components/Sidebar/TextSettings.tsx - Font family, sizes (future)
components/Sidebar/EffectsSection.tsx - Background effects toggle (future)
components/Sidebar/CreatorInfoSection.tsx - Name, title, avatar inputs
Structure:

┌─────────────┬──────────────────────────────────────────────┐
│ │ APP HEADER │
│ │ [Logo] [Export] [Templates] │
│ ├───────────────────────────────────────────────┤
│ │ ░░░░░░ DOTTED/GRID BACKGROUND ░░░░░░░░ │
│ SIDEBAR │ ░░░┌────────────────────────────┐░░░░ │
│ │ ░░░│ │░░░░ │
│ Template │ ░░░│ SLIDE PREVIEW │░░░░ │
│ Settings │ ░░░│ (Island/Card) │░░░░ │
│ │ ░░░│ [Rendered Slide] │░░░░ │
│ Platform │ ░░░│ │░░░░ │
│ Format │ ░░░└────────────────────────────┘░░░░ │
│ │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ Color │ ░░░ [←] [🗑️] [Slide #1] [+] [→] ░░ │
│ Palette │ ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│ ├───────────────────────────────────────────────┤
│ Text │ │
│ Settings │ PROPERTY PANEL (Bottom) │
│ │ [Slide-specific editors] │
│ Effects │ │
│ │ │
│ Creator │ │
│ Info │ │
│ │ │
└─────────────┴───────────────────────────────────────────────┘
Each section wrapped in Accordion for collapsibility
Sections accept onChange callbacks but won't modify state yet
Use shadcn's Select, Input, Label components
Step 5: Main Editor Area
Files to create:

components/Editor/AppHeader.tsx

Logo, Export button, Templates button (all disabled/placeholder)
Fixed at top of main editor area
components/Editor/MainEditorArea.tsx

Dotted/grid background (CSS: background-image: radial-gradient())
Centers the slide preview "island"
Contains slide preview + navigator
components/Editor/SlidePreview.tsx

White card/island with shadow
Maintains aspect ratio based on globalSettings
Renders appropriate slide component
Shows creator info overlay at bottom-left
Step 6: Slide Components
Files to create:

components/Slides/SlideContainer.tsx

Wrapper that handles aspect ratio (4:5, 1:1, 16:9)
Applies theme colors from slide data
Contains creator info overlay
components/Slides/IntroSlide.tsx

Renders intro slide based on introStyle
Shows tagline, title, paragraph (conditionally based on enabled)
Handles headshot/image variants
components/Slides/ContentSlide.tsx

Renders content slide based on slideStyle
Text-only, text-image, or image layouts
Shows tagline, title, paragraph
components/Slides/OutroSlide.tsx

Renders outro slide based on outroStyle
Shows CTA button
Interaction icons (comment, heart, bookmark)
Styling approach:

Use absolute positioning for text overlays
Responsive font sizes based on container
Conditional rendering based on enabled flags
Step 7: Slide Navigator
File to create:

components/SlideNavigator/SlideNavigator.tsx
Horizontal bar above property panel
Buttons: [← Reorder] [🗑️ Delete] [Slide #X of Y] [+ Add Slide] [Reorder →]
Floats above dotted background
Buttons accept onClick props but won't work yet
Step 8: Property Panel (Bottom)
Files to create:

components/PropertyEditors/PropertyPanel.tsx

Fixed height at bottom (~300px), scrollable
Conditional renderer based on current slide type
White background, shadow at top
components/PropertyEditors/IntroEditor.tsx

Tabs for style selection (Standard, Emoji, Headshot, Image)
Text fields with toggles for tagline, title, paragraph
Image upload section (conditional)
components/PropertyEditors/ContentEditor.tsx

Tabs for style selection (Text, Text+Image, Image)
Text fields with toggles
Image controls section
components/PropertyEditors/OutroEditor.tsx

Tabs for style selection
Text fields with toggles
CTA field
Interaction icons toggle
Structure:

Each editor accepts slide prop and onChange callback
Use tabs component for style variants
All inputs disabled/non-functional for now
Step 9: Reusable Property Controls
File to create:

components/PropertyControls/FieldWithToggle.tsx
Label + Switch (toggle on/off)
Input or Textarea below
Grayed out when disabled
Props:

interface FieldWithToggleProps {  label: string;  value: string;  enabled: boolean;  multiline?: boolean;  placeholder?: string;  onToggle: (enabled: boolean) => void;  onChange: (value: string) => void;}
Visual Details
Dotted Background Pattern:

background-color: #f8f9fa;background-image:   radial-gradient(circle, #d1d5db 1px, transparent 1px);background-size: 20px 20px;
Slide Preview Island:
White background (bg-white)
Rounded corners (rounded-lg)
Shadow (shadow-xl)
Padding around the actual slide
Centered in the main editor area
Creator Info Overlay:
Position: absolute bottom-left of slide
Shows avatar (circle), name, and title
Semi-transparent background or direct on slide based on style
What You'll Have After This Phase
✅ Complete visual structure

Sidebar with all settings sections
Main editor with dotted background
Slide preview as an "island"
Property panel at bottom
Slide navigator
✅ All components render correctly

Can see mock slides with different data
All text fields visible but non-functional
Style tabs show but don't switch styles
✅ Type-safe architecture

Complete TypeScript types
All props properly typed
❌ No interactivity yet

Can't edit text
Can't switch slides
Can't change colors
Can't add/delete slides
File Creation Order
Types & mock data
EditorLayout (main structure)
Sidebar components (top to bottom)
Slide components (IntroSlide, ContentSlide, OutroSlide)
SlidePreview wrapper
MainEditorArea (with dotted background)
SlideNavigator
PropertyPanel components
FieldWithToggle
Wire everything in page.tsx
Ready to proceed? Should I start implementing?
