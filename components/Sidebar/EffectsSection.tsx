import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function EffectsSection() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="effects">
        <AccordionTrigger className="text-sm font-medium">
          Background Effects
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Label htmlFor="gradient" className="text-xs">
                Gradient Overlay
              </Label>
              <Switch id="gradient" disabled />
            </div>
            <p className="text-xs text-muted-foreground">
              Effects coming soon...
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
