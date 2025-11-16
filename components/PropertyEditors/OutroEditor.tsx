import { OutroSlide, OutroStyle } from "@/lib/types/carousel";
import { FieldWithToggle } from "@/components/PropertyControls/FieldWithToggle";
import { ImageUpload } from "@/components/PropertyControls/ImageUpload";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface OutroEditorProps {
  slide: OutroSlide;
  onUpdate: (updates: Partial<OutroSlide>) => void;
}

export function OutroEditor({ slide, onUpdate }: OutroEditorProps) {
  const handleStyleChange = (style: string) => {
    onUpdate({ outroStyle: style as OutroStyle });
  };

  return (
    <div className="space-y-6">
      {/* Style Selector */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Outro Style</Label>
        <Tabs value={slide.outroStyle} onValueChange={handleStyleChange}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="standard">Standard</TabsTrigger>
            <TabsTrigger value="headshot">Headshot</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Conditional: Headshot Upload */}
      {slide.outroStyle === "headshot" && (
        <ImageUpload
          label="Headshot"
          value={slide.headshot}
          onUpload={(imageData) => onUpdate({ headshot: imageData })}
          onRemove={() => onUpdate({ headshot: undefined })}
        />
      )}

      {/* Conditional: Background Image */}
      {slide.outroStyle === "image" && (
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
        placeholder="That's all folks!"
        onToggle={(enabled) =>
          onUpdate({ tagline: { ...slide.tagline, enabled } })
        }
        onChange={(text) => onUpdate({ tagline: { ...slide.tagline, text } })}
      />

      <FieldWithToggle
        label="Title"
        value={slide.title.text}
        enabled={slide.title.enabled}
        placeholder="Thank you!"
        onToggle={(enabled) => onUpdate({ title: { ...slide.title, enabled } })}
        onChange={(text) => onUpdate({ title: { ...slide.title, text } })}
      />

      <FieldWithToggle
        label="Paragraph"
        value={slide.paragraph.text}
        enabled={slide.paragraph.enabled}
        placeholder="Follow for more content like this."
        multiline
        onToggle={(enabled) =>
          onUpdate({ paragraph: { ...slide.paragraph, enabled } })
        }
        onChange={(text) =>
          onUpdate({ paragraph: { ...slide.paragraph, text } })
        }
      />

      <FieldWithToggle
        label="Call to Action"
        value={slide.cta.text}
        enabled={slide.cta.enabled}
        placeholder="Follow me for more"
        onToggle={(enabled) => onUpdate({ cta: { ...slide.cta, enabled } })}
        onChange={(text) => onUpdate({ cta: { ...slide.cta, text } })}
      />

      {/* Interaction Icons Toggle */}
      <div className="flex items-center justify-between">
        <Label htmlFor="interaction-icons" className="text-sm font-medium">
          Show Interaction Icons
        </Label>
        <Switch
          id="interaction-icons"
          checked={slide.showInteractionIcons}
          onCheckedChange={(checked) =>
            onUpdate({ showInteractionIcons: checked })
          }
        />
      </div>
    </div>
  );
}
