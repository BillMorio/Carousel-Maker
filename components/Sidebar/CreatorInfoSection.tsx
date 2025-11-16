import { GlobalSettings } from "@/lib/types/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

interface CreatorInfoSectionProps {
  creatorName: string;
  creatorTitle: string;
  onChange: (updates: Partial<GlobalSettings>) => void;
}

export function CreatorInfoSection({
  creatorName,
  creatorTitle,
  onChange,
}: CreatorInfoSectionProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="creator">
        <AccordionTrigger className="text-sm font-medium">
          Creator Info
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="creator-name" className="text-xs">
                Creator Name
              </Label>
              <Input
                id="creator-name"
                value={creatorName}
                onChange={(e) => onChange({ creatorName: e.target.value })}
                placeholder="Your Name"
                className="text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="creator-title" className="text-xs">
                Creator Title
              </Label>
              <Input
                id="creator-title"
                value={creatorTitle}
                onChange={(e) => onChange({ creatorTitle: e.target.value })}
                placeholder="Your Title/Role"
                className="text-sm"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="creator-avatar" className="text-xs">
                Avatar
              </Label>
              <Button variant="outline" size="sm" className="w-full" disabled>
                <Upload className="mr-2 h-4 w-4" />
                Upload Avatar
              </Button>
              <p className="text-xs text-muted-foreground">Coming soon...</p>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
