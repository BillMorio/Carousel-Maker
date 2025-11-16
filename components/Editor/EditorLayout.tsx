import { ReactNode } from "react";
import { Carousel, Slide } from "@/lib/types/carousel";
import { AppSidebar } from "@/components/Sidebar/AppSidebar";
import { AppHeader } from "./AppHeader";
import { MainEditorArea } from "./MainEditorArea";

interface EditorLayoutProps {
  carousel: Carousel;
  currentSlideIndex: number;
  onUpdateGlobalSettings: (
    updates: Partial<Carousel["globalSettings"]>
  ) => void;
  onExport: () => void;
  onExportAll: () => void;
  onOpenTemplates: () => void;
  children: ReactNode;
}

export function EditorLayout({
  carousel,
  currentSlideIndex,
  onUpdateGlobalSettings,
  onExport,
  onExportAll,
  onOpenTemplates,
  children,
}: EditorLayoutProps) {
  return (
    <div className="flex h-screen flex-col">
      <AppHeader
        onExport={onExport}
        onExportAll={onExportAll}
        onOpenTemplates={onOpenTemplates}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <AppSidebar
          globalSettings={carousel.globalSettings}
          onUpdate={onUpdateGlobalSettings}
        />

        {/* Main Editor Area */}
        <div className="flex-1">
          <MainEditorArea
            slides={carousel.slides}
            currentSlideIndex={currentSlideIndex}
            globalSettings={carousel.globalSettings}
          >
            {children}
          </MainEditorArea>
        </div>
      </div>
    </div>
  );
}
