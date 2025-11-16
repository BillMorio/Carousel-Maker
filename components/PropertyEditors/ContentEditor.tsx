import { ContentSlide, ContentSlideStyle } from "@/lib/types/carousel";
import { FieldWithToggle } from "@/components/PropertyControls/FieldWithToggle";
import { ImageUpload } from "@/components/PropertyControls/ImageUpload";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Search, Sparkles } from "lucide-react";

interface ContentEditorProps {
  slide: ContentSlide;
  onUpdate: (updates: Partial<ContentSlide>) => void;
}

export function ContentEditor({ slide, onUpdate }: ContentEditorProps) {
  const handleStyleChange = (style: string) => {
    onUpdate({ slideStyle: style as ContentSlideStyle });
  };

  const hasImageStyle =
    slide.slideStyle === "text-image" || slide.slideStyle === "image";

  return (
    <div className="space-y-6">
      {/* Style Selector */}
      <div className="space-y-2">
        <Label className="text-sm font-medium">Slide Style</Label>
        <Tabs value={slide.slideStyle} onValueChange={handleStyleChange}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="text">Text</TabsTrigger>
            <TabsTrigger value="text-image">Text + Image</TabsTrigger>
            <TabsTrigger value="image">Image</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Conditional: Image Controls */}
      {hasImageStyle && (
        <div className="space-y-4">
          <ImageUpload
            label="Image"
            value={slide.image?.url}
            onUpload={(imageData) =>
              onUpdate({
                image: {
                  url: imageData,
                  source: "upload",
                  scale: 1,
                  position: "center",
                },
              })
            }
            onRemove={() => onUpdate({ image: undefined })}
          />
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" disabled>
              <Search className="mr-2 h-4 w-4" />
              Search (Coming Soon)
            </Button>
            <Button variant="outline" size="sm" className="flex-1" disabled>
              <Sparkles className="mr-2 h-4 w-4" />
              Generate (Coming Soon)
            </Button>
          </div>
        </div>
      )}

      {/* Text Fields */}
      <FieldWithToggle
        label="Tagline"
        value={slide.tagline.text}
        enabled={slide.tagline.enabled}
        placeholder="Pro Tip"
        onToggle={(enabled) =>
          onUpdate({ tagline: { ...slide.tagline, enabled } })
        }
        onChange={(text) => onUpdate({ tagline: { ...slide.tagline, text } })}
      />

      <FieldWithToggle
        label="Title"
        value={slide.title.text}
        enabled={slide.title.enabled}
        placeholder="Amazing title here!"
        onToggle={(enabled) => onUpdate({ title: { ...slide.title, enabled } })}
        onChange={(text) => onUpdate({ title: { ...slide.title, text } })}
      />

      <FieldWithToggle
        label="Paragraph"
        value={slide.paragraph.text}
        enabled={slide.paragraph.enabled}
        placeholder="A message that will leave viewers wanting more."
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
