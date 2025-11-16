import { Theme } from "@/lib/types/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ColorPaletteSectionProps {
  theme: Theme;
  onChange: (theme: Theme) => void;
}

export function ColorPaletteSection({
  theme,
  onChange,
}: ColorPaletteSectionProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="colors">
        <AccordionTrigger className="text-sm font-medium">
          Color Palette
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="bg-color" className="text-xs">
                Background Color
              </Label>
              <div className="flex gap-2">
                <Input
                  id="bg-color"
                  type="color"
                  value={theme.backgroundColor}
                  onChange={(e) =>
                    onChange({ ...theme, backgroundColor: e.target.value })
                  }
                  className="h-10 w-16 cursor-pointer"
                />
                <Input
                  type="text"
                  value={theme.backgroundColor}
                  onChange={(e) =>
                    onChange({ ...theme, backgroundColor: e.target.value })
                  }
                  className="flex-1 text-xs"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="text-color" className="text-xs">
                Text Color
              </Label>
              <div className="flex gap-2">
                <Input
                  id="text-color"
                  type="color"
                  value={theme.textColor}
                  onChange={(e) =>
                    onChange({ ...theme, textColor: e.target.value })
                  }
                  className="h-10 w-16 cursor-pointer"
                />
                <Input
                  type="text"
                  value={theme.textColor}
                  onChange={(e) =>
                    onChange({ ...theme, textColor: e.target.value })
                  }
                  className="flex-1 text-xs"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accent-color" className="text-xs">
                Accent Color
              </Label>
              <div className="flex gap-2">
                <Input
                  id="accent-color"
                  type="color"
                  value={theme.accentColor}
                  onChange={(e) =>
                    onChange({ ...theme, accentColor: e.target.value })
                  }
                  className="h-10 w-16 cursor-pointer"
                />
                <Input
                  type="text"
                  value={theme.accentColor}
                  onChange={(e) =>
                    onChange({ ...theme, accentColor: e.target.value })
                  }
                  className="flex-1 text-xs"
                />
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
