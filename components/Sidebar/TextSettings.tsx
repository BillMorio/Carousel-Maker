import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TextSettings() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="text">
        <AccordionTrigger className="text-sm font-medium">
          Text Settings
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3">
            <p className="text-xs text-muted-foreground">
              Font customization coming soon...
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
