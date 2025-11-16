import { GlobalSettings } from "@/lib/types/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlatformSettings } from "./PlatformSettings";
import { ColorPaletteSection } from "./ColorPaletteSection";
import { TextSettings } from "./TextSettings";
import { EffectsSection } from "./EffectsSection";
import { CreatorInfoSection } from "./CreatorInfoSection";

interface AppSidebarProps {
  globalSettings: GlobalSettings;
  onUpdate: (settings: Partial<GlobalSettings>) => void;
}

export function AppSidebar({ globalSettings, onUpdate }: AppSidebarProps) {
  return (
    <div className="h-full w-64 border-r bg-background">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">Template Settings</h2>
      </div>

      <ScrollArea className="h-[calc(100vh-73px)]">
        <div className="space-y-1 p-4">
          <PlatformSettings
            aspectRatio={globalSettings.aspectRatio}
            onChange={(aspectRatio) => onUpdate({ aspectRatio })}
          />

          <ColorPaletteSection
            theme={globalSettings.defaultTheme}
            onChange={(defaultTheme) => onUpdate({ defaultTheme })}
          />

          <TextSettings />

          <EffectsSection />

          <CreatorInfoSection
            creatorName={globalSettings.creatorName}
            creatorTitle={globalSettings.creatorTitle}
            onChange={(updates) => onUpdate(updates)}
          />
        </div>
      </ScrollArea>
    </div>
  );
}
