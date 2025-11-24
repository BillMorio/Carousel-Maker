import { IntroSlide, IntroStyle } from "@/lib/types/carousel";
import { FieldWithToggle } from "@/components/PropertyControls/FieldWithToggle";
import { ImageUpload } from "@/components/PropertyControls/ImageUpload";
import { TextStyleControls } from "@/components/PropertyControls/TextStyleControls";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface IntroEditorProps {
  slide: IntroSlide;
  onUpdate: (updates: Partial<IntroSlide>) => void;
}

export function IntroEditor({ slide, onUpdate }: IntroEditorProps) {
  const handleStyleChange = (style: string) => {
    onUpdate({ introStyle: style as IntroStyle });
  };

  return (
    <div className="space-y-6">
      {/* Style Selector */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Intro Layout</Label>
        <Tabs value={slide.introStyle} onValueChange={handleStyleChange}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="standard">Centered</TabsTrigger>
            <TabsTrigger value="split-highlight">Split</TabsTrigger>
            <TabsTrigger value="side-portrait">Side</TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs value={slide.introStyle} onValueChange={handleStyleChange}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="emoji">Emoji</TabsTrigger>
            <TabsTrigger value="headshot">Headshot</TabsTrigger>
            <TabsTrigger value="image">Image BG</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Conditional: Headshot Upload */}
      {slide.introStyle === "headshot" && (
        <ImageUpload
          label="Headshot"
          value={slide.headshot}
          onUpload={(imageData) => onUpdate({ headshot: imageData })}
          onRemove={() => onUpdate({ headshot: undefined })}
        />
      )}

      {/* Conditional: Portrait Image for split-highlight */}
      {slide.introStyle === "split-highlight" && (
        <ImageUpload
          label="Portrait Illustration"
          value={slide.backgroundImage}
          onUpload={(imageData) => onUpdate({ backgroundImage: imageData })}
          onRemove={() => onUpdate({ backgroundImage: undefined })}
        />
      )}

      {/* Conditional: Side Image for side-portrait */}
      {slide.introStyle === "side-portrait" && (
        <ImageUpload
          label="Side Image"
          value={slide.backgroundImage}
          onUpload={(imageData) => onUpdate({ backgroundImage: imageData })}
          onRemove={() => onUpdate({ backgroundImage: undefined })}
        />
      )}

      {/* Conditional: Background Image */}
      {slide.introStyle === "image" && (
        <ImageUpload
          label="Background Image"
          value={slide.backgroundImage}
          onUpload={(imageData) => onUpdate({ backgroundImage: imageData })}
          onRemove={() => onUpdate({ backgroundImage: undefined })}
        />
      )}

      {/* Text Fields */}
      <FieldWithToggle
        label="Tagline"
        value={slide.tagline.text}
        enabled={slide.tagline.enabled}
        placeholder="And you will read this last"
        onToggle={(enabled) =>
          onUpdate({ tagline: { ...slide.tagline, enabled } })
        }
        onChange={(text) => onUpdate({ tagline: { ...slide.tagline, text } })}
      />

      <FieldWithToggle
        label="Title"
        value={slide.title.text}
        enabled={slide.title.enabled}
        placeholder="You will read this first"
        onToggle={(enabled) => onUpdate({ title: { ...slide.title, enabled } })}
        onChange={(text) => onUpdate({ title: { ...slide.title, text } })}
      />

      {/* Title Styling */}
      {slide.title.enabled && (
        <TextStyleControls
          label="Title"
          fontSize={slide.title.fontSize ?? 36}
          fontWeight={slide.title.fontWeight ?? 700}
          textAlign={slide.title.textAlign ?? "center"}
          onFontSizeChange={(size) =>
            onUpdate({ title: { ...slide.title, fontSize: size } })
          }
          onFontWeightChange={(weight) =>
            onUpdate({ title: { ...slide.title, fontWeight: weight } })
          }
          onTextAlignChange={(align) =>
            onUpdate({ title: { ...slide.title, textAlign: align } })
          }
        />
      )}

      <FieldWithToggle
        label="Paragraph"
        value={slide.paragraph.text}
        enabled={slide.paragraph.enabled}
        placeholder="Then you will read this."
        multiline
        onToggle={(enabled) =>
          onUpdate({ paragraph: { ...slide.paragraph, enabled } })
        }
        onChange={(text) =>
          onUpdate({ paragraph: { ...slide.paragraph, text } })
        }
      />

      {/* Paragraph Styling */}
      {slide.paragraph.enabled && (
        <TextStyleControls
          label="Paragraph"
          fontSize={slide.paragraph.fontSize ?? 18}
          fontWeight={slide.paragraph.fontWeight ?? 400}
          textAlign={slide.paragraph.textAlign ?? "center"}
          onFontSizeChange={(size) =>
            onUpdate({ paragraph: { ...slide.paragraph, fontSize: size } })
          }
          onFontWeightChange={(weight) =>
            onUpdate({ paragraph: { ...slide.paragraph, fontWeight: weight } })
          }
          onTextAlignChange={(align) =>
            onUpdate({ paragraph: { ...slide.paragraph, textAlign: align } })
          }
        />
      )}
    </div>
  );
}
