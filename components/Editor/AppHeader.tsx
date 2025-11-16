import { Button } from "@/components/ui/button";
import { Download, Layout, Settings, Package } from "lucide-react";

interface AppHeaderProps {
  onExport: () => void;
  onExportAll: () => void;
  onOpenTemplates: () => void;
}

export function AppHeader({
  onExport,
  onExportAll,
  onOpenTemplates,
}: AppHeaderProps) {
  return (
    <header className="border-b bg-background px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <Layout className="h-5 w-5" />
          </div>
          <h1 className="text-xl font-bold">Carousel Maker</h1>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={onOpenTemplates}>
            <Layout className="mr-2 h-4 w-4" />
            Templates
          </Button>
          <Button variant="outline" size="sm" disabled>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
          <Button size="sm" onClick={onExport}>
            <Download className="mr-2 h-4 w-4" />
            Export PDF
          </Button>
          <Button variant="outline" size="sm" onClick={onExportAll}>
            <Package className="mr-2 h-4 w-4" />
            Export PNGs
          </Button>
        </div>
      </div>
    </header>
  );
}
