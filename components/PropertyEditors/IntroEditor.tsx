import { IntroSlide, IntroStyle } from "@/lib/types/carousel";
import { FieldWithToggle } from "@/components/PropertyControls/FieldWithToggle";
import { ImageUpload } from "@/components/PropertyControls/ImageUpload";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";

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
        <Label className="text-sm font-medium">Intro Style</Label>
        <Tabs value={slide.introStyle} onValueChange={handleStyleChange}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="emoji">Emoji</TabsTrigger>
            <TabsTrigger value="headshot">Headshot</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
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
    </div>
  );
}
