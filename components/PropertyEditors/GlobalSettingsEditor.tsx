import { GlobalSettings } from "@/lib/types/carousel";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface GlobalSettingsEditorProps {
  settings: GlobalSettings;
  onUpdate: (updates: Partial<GlobalSettings>) => void;
}

export function GlobalSettingsEditor({
  settings,
  onUpdate,
}: GlobalSettingsEditorProps) {
  return (
    <div className="space-y-6">
      <div className="text-sm font-semibold">Carousel Settings</div>

      {/* Swipe Indicator */}
      <div className="flex items-center justify-between">
        <div>
          <Label className="text-sm">Show Swipe Indicator</Label>
          <p className="text-xs text-muted-foreground mt-1">
            Display swipe indicator on slides
          </p>
        </div>
        <Switch
          checked={settings.showSwipeIndicator ?? false}
          onCheckedChange={(checked) =>
            onUpdate({ showSwipeIndicator: checked })
          }
        />
      </div>
    </div>
  );
}
