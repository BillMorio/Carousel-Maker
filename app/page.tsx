"use client";

import { useState } from "react";
import { toPng } from "html-to-image";
import JSZip from "jszip";
import { jsPDF } from "jspdf";
import { EditorLayout } from "@/components/Editor/EditorLayout";
import { PropertyPanel } from "@/components/PropertyEditors/PropertyPanel";
import { AddSlideModal } from "@/components/SlideNavigator/AddSlideModal";
import { TemplateSelectorModal } from "@/components/Templates/TemplateSelectorModal";
import { getMockCarousel } from "@/lib/utils/mockData";
import { createDefaultSlide } from "@/lib/utils/slideHelpers";
import { Carousel, SlideType } from "@/lib/types/carousel";

// Define template interface locally
interface CarouselTemplate {
  carousel: Carousel;
}

export default function Home() {
  const [carousel, setCarousel] = useState<Carousel>(getMockCarousel());
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAddSlideModalOpen, setIsAddSlideModalOpen] = useState(false);
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);

  const currentSlide = carousel.slides[currentSlideIndex];

  const handleUpdateGlobalSettings = (
    updates: Partial<Carousel["globalSettings"]>
  ) => {
    setCarousel((prev) => ({
      ...prev,
      globalSettings: { ...prev.globalSettings, ...updates },
    }));
  };

  const handleUpdateSlide = (updates: Record<string, unknown>) => {
    setCarousel((prev) => ({
      ...prev,
      slides: prev.slides.map((slide, index) =>
        index === currentSlideIndex ? { ...slide, ...updates } : slide
      ),
    }));
  };

  const handlePrevious = () => {
    setCurrentSlideIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) =>
      Math.min(carousel.slides.length - 1, prev + 1)
    );
  };

  const handleReorderLeft = () => {
    if (currentSlideIndex === 0) return;

    setCarousel((prev) => {
      const newSlides = [...prev.slides];
      [newSlides[currentSlideIndex - 1], newSlides[currentSlideIndex]] = [
        newSlides[currentSlideIndex],
        newSlides[currentSlideIndex - 1],
      ];
      return { ...prev, slides: newSlides };
    });
    setCurrentSlideIndex((prev) => prev - 1);
  };

  const handleReorderRight = () => {
    if (currentSlideIndex === carousel.slides.length - 1) return;

    setCarousel((prev) => {
      const newSlides = [...prev.slides];
      [newSlides[currentSlideIndex], newSlides[currentSlideIndex + 1]] = [
        newSlides[currentSlideIndex + 1],
        newSlides[currentSlideIndex],
      ];
      return { ...prev, slides: newSlides };
    });
    setCurrentSlideIndex((prev) => prev + 1);
  };

  const handleDelete = () => {
    if (carousel.slides.length <= 1) return;

    setCarousel((prev) => ({
      ...prev,
      slides: prev.slides.filter((_, index) => index !== currentSlideIndex),
    }));

    setCurrentSlideIndex((prev) =>
      prev >= carousel.slides.length - 1 ? prev - 1 : prev
    );
  };

  const handleDuplicate = () => {
    const duplicatedSlide = {
      ...currentSlide,
      id: Math.random().toString(36).substring(2, 15),
    };

    setCarousel((prev) => {
      const newSlides = [...prev.slides];
      newSlides.splice(currentSlideIndex + 1, 0, duplicatedSlide);
      return { ...prev, slides: newSlides };
    });

    // Use setTimeout to allow DOM to update before triggering animation
    setTimeout(() => {
      setCurrentSlideIndex((prev) => prev + 1);
    }, 0);
  };

  const handleAddSlide = () => {
    setIsAddSlideModalOpen(true);
  };

  const handleSelectSlideType = (type: SlideType) => {
    const newSlide = createDefaultSlide(
      type,
      carousel.globalSettings.defaultTheme
    );

    setCarousel((prev) => {
      const newSlides = [...prev.slides];
      newSlides.splice(currentSlideIndex + 1, 0, newSlide);
      return { ...prev, slides: newSlides };
    });

    // Use setTimeout to allow DOM to update before triggering animation
    setTimeout(() => {
      setCurrentSlideIndex((prev) => prev + 1);
    }, 0);
  };

  // Get PDF dimensions based on aspect ratio
  const getPDFDimensions = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "1:1":
        return { width: 1080, height: 1080 }; // Square
      case "4:5":
        return { width: 1080, height: 1350 }; // Portrait
      case "16:9":
        return { width: 1280, height: 720 }; // Landscape
      default:
        return { width: 1080, height: 1080 };
    }
  };

  // Main export: Multi-page PDF (LinkedIn format)
  const handleExport = async () => {
    try {
      const originalIndex = currentSlideIndex;
      const { width, height } = getPDFDimensions(
        carousel.globalSettings.aspectRatio
      );

      // Create PDF with correct dimensions (convert px to mm for jsPDF)
      const pdf = new jsPDF({
        orientation: width > height ? "landscape" : "portrait",
        unit: "px",
        format: [width, height],
      });

      // Export each slide as a page in the PDF
      for (let i = 0; i < carousel.slides.length; i++) {
        // Navigate to the slide
        setCurrentSlideIndex(i);

        // Wait for the slide to render
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Get the slide element
        const slideElement = document.querySelector(
          '[data-carousel-slide="true"]'
        ) as HTMLElement;

        if (slideElement) {
          const dataUrl = await toPng(slideElement, {
            quality: 1,
            pixelRatio: 2,
            backgroundColor: "#FFFFFF",
            cacheBust: true,
            filter: (node) => {
              if (node instanceof HTMLElement) {
                return !node.classList?.contains("lucide");
              }
              return true;
            },
          });

          // Add page (except for first slide)
          if (i > 0) {
            pdf.addPage(
              [width, height],
              width > height ? "landscape" : "portrait"
            );
          }

          // Add image to PDF page
          pdf.addImage(dataUrl, "PNG", 0, 0, width, height, undefined, "FAST");
        }
      }

      // Restore original slide
      setCurrentSlideIndex(originalIndex);

      // Save the PDF
      pdf.save(`${carousel.name || "carousel"}-linkedin.pdf`);
    } catch (error) {
      console.error("Error exporting PDF:", error);
      alert("Failed to export PDF. Please try again.");
    }
  };

  // Optional: Export all slides as individual PNGs in a ZIP
  const handleExportAll = async () => {
    try {
      const zip = new JSZip();
      const originalIndex = currentSlideIndex;

      // Export each slide
      for (let i = 0; i < carousel.slides.length; i++) {
        // Navigate to the slide
        setCurrentSlideIndex(i);

        // Wait for the slide to render
        await new Promise((resolve) => setTimeout(resolve, 300));

        // Get the slide element
        const slideElement = document.querySelector(
          '[data-carousel-slide="true"]'
        ) as HTMLElement;

        if (slideElement) {
          const dataUrl = await toPng(slideElement, {
            quality: 1,
            pixelRatio: 2,
            backgroundColor: "#FFFFFF",
            cacheBust: true,
            filter: (node) => {
              if (node instanceof HTMLElement) {
                return !node.classList?.contains("lucide");
              }
              return true;
            },
          });

          // Convert data URL to blob and add to zip
          const base64Data = dataUrl.split(",")[1];
          zip.file(`slide-${i + 1}.png`, base64Data, { base64: true });
        }
      }

      // Restore original slide
      setCurrentSlideIndex(originalIndex);

      // Generate and download zip file
      const zipBlob = await zip.generateAsync({ type: "blob" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(zipBlob);
      link.download = `${carousel.name || "carousel"}-images.zip`;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error("Error exporting images:", error);
      alert("Failed to export images. Please try again.");
    }
  };

  const handleLoadTemplate = (template: CarouselTemplate) => {
    setCarousel(template.carousel);
    setCurrentSlideIndex(0);
  };

  const handleOpenTemplates = () => {
    setIsTemplateModalOpen(true);
  };

  return (
    <>
      <EditorLayout
        carousel={carousel}
        currentSlideIndex={currentSlideIndex}
        onUpdateGlobalSettings={handleUpdateGlobalSettings}
        onExport={handleExport}
        onExportAll={handleExportAll}
        onOpenTemplates={handleOpenTemplates}
      >
        <PropertyPanel
          currentSlide={currentSlide}
          onUpdate={handleUpdateSlide}
          currentIndex={currentSlideIndex}
          totalSlides={carousel.slides.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onReorderLeft={handleReorderLeft}
          onReorderRight={handleReorderRight}
          onDelete={handleDelete}
          onDuplicate={handleDuplicate}
          onAddSlide={handleAddSlide}
        />
      </EditorLayout>
      <AddSlideModal
        open={isAddSlideModalOpen}
        onOpenChange={setIsAddSlideModalOpen}
        onSelectType={handleSelectSlideType}
      />
      <TemplateSelectorModal
        open={isTemplateModalOpen}
        onOpenChange={setIsTemplateModalOpen}
        onSelectTemplate={handleLoadTemplate}
      />
    </>
  );
}
