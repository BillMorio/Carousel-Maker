import { GlobalSettings } from "@/lib/types/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

interface PlatformSettingsProps {
  aspectRatio: GlobalSettings["aspectRatio"];
  onChange: (aspectRatio: GlobalSettings["aspectRatio"]) => void;
}

export function PlatformSettings({
  aspectRatio,
  onChange,
}: PlatformSettingsProps) {
  return (
    <Accordion type="single" collapsible defaultValue="platform">
      <AccordionItem value="platform">
        <AccordionTrigger className="text-sm font-medium">
          Platform Format
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="aspect-ratio" className="text-xs">
                Aspect Ratio
              </Label>
              <Select value={aspectRatio} onValueChange={onChange}>
                <SelectTrigger id="aspect-ratio">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4:5">
                    LinkedIn (4:5 - Recommended)
                  </SelectItem>
                  <SelectItem value="1:1">Instagram Square (1:1)</SelectItem>
                  <SelectItem value="16:9">YouTube/Twitter (16:9)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
