# Templates Organization

This directory contains all carousel templates organized in a modular, scalable structure.

## 📁 Directory Structure

```
lib/templates/
├── index.ts                    # Main export file
├── defaultTemplates.ts         # Legacy file (will be deprecated)
├── themes/
│   └── index.ts               # All color themes (solid, gradient, paper, mesh)
└── presets/
    ├── index.ts               # Aggregates all template presets
    ├── the-hook.ts            # Individual template files
    ├── quick-tips.ts
    ├── story-arc.ts
    ├── quote-series.ts
    ├── product-launch.ts
    ├── before-after.ts
    ├── gradient-vibes.ts
    ├── paper-notes.ts
    └── mesh-gradient.ts
```

## 🎨 Themes (`themes/index.ts`)

All color themes are centralized in one file for easy reuse:

- **Solid Colors**: `blueTheme`, `greenTheme`, `purpleTheme`, `orangeTheme`, `pinkTheme`
- **Gradients**: `gradientTheme1-5` (Linear gradients)
- **Paper**: `paperTheme1-5` (Warm, textured backgrounds)
- **Mesh Gradients**: `grainMeshTheme1-5` (Modern grainy SaaS aesthetic)

## 📝 Template Presets (`presets/`)

Each template is in its own file for better organization and maintainability.

### Creating a New Template

1. Create a new file in `presets/` (e.g., `my-template.ts`)
2. Import required dependencies:

   ```typescript
   import { CarouselTemplate } from "../defaultTemplates";
   import { generateId } from "@/lib/utils/idGenerator";
   import { blueTheme } from "../themes";
   ```

3. Export your template:

   ```typescript
   export const myTemplate: CarouselTemplate = {
     id: "my-template-id",
     name: "My Template Name",
     description: "Brief description",
     category: "marketing",
     carousel: {
       // ... template configuration
     },
   };
   ```

4. Add to `presets/index.ts`:

   ```typescript
   import { myTemplate } from "./my-template";

   export const allTemplates: CarouselTemplate[] = [
     // ... existing templates
     myTemplate,
   ];
   ```

## 🔄 Migration Status

**Current State**: Templates are still in `defaultTemplates.ts` (912 lines)

**Target State**: Each template in separate file (60-80 lines each)

### Migration Plan

1. ✅ Create directory structure
2. ✅ Extract themes to `themes/index.ts`
3. ✅ Create `presets/the-hook.ts` (example)
4. ⏳ Extract remaining templates:
   - `quick-tips.ts` (5 Quick Tips - education)
   - `story-arc.ts` (Story Arc - storytelling)
   - `quote-series.ts` (Quote Series - storytelling)
   - `product-launch.ts` (Product Launch - marketing)
   - `before-after.ts` (Before & After - storytelling)
   - `gradient-vibes.ts` (Gradient Vibes - social)
   - `paper-notes.ts` (Paper Notes - education)
   - `mesh-gradient.ts` (Mesh Gradient - marketing)
5. ⏳ Update `presets/index.ts` to import all templates
6. ⏳ Update `lib/templates/index.ts` to use new structure
7. ⏳ Deprecate and remove `defaultTemplates.ts`

## 🎯 Benefits

- **Scalability**: Add new templates without bloating a single file
- **Maintainability**: Easy to find and edit specific templates
- **Reusability**: Themes can be shared across templates
- **Collaboration**: Multiple people can work on different templates
- **Performance**: Potential for code splitting and lazy loading
- **Organization**: Clear categorization and structure

## 🚀 Usage

```typescript
// Import all templates
import { defaultTemplates } from "@/lib/templates";

// Import specific template
import { theHookTemplate } from "@/lib/templates/presets/the-hook";

// Import themes
import { blueTheme, gradientTheme1 } from "@/lib/templates/themes";
```
