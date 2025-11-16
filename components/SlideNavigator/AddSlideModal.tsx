"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { SlideType } from "@/lib/types/carousel";

interface AddSlideModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectType: (type: SlideType) => void;
}

export function AddSlideModal({
  open,
  onOpenChange,
  onSelectType,
}: AddSlideModalProps) {
  const handleSelect = (type: SlideType) => {
    onSelectType(type);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Slide</DialogTitle>
          <DialogDescription>
            Choose the type of slide you want to add to your carousel.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* Intro Slide Option */}
          <button
            onClick={() => handleSelect("intro")}
            className="group flex flex-col items-start gap-2 rounded-lg border-2 border-gray-200 p-4 text-left transition-all hover:border-blue-500 hover:bg-blue-50"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:bg-blue-200">
                <span className="text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Intro Slide</h3>
                <p className="text-sm text-gray-500">
                  Start your carousel with a hook
                </p>
              </div>
            </div>
            <div className="ml-12 text-sm text-gray-600">
              Perfect for grabbing attention with a compelling tagline, title,
              and opening statement. Choose from standard text, emoji style,
              headshot, or background image.
            </div>
          </button>

          {/* Content Slide Option */}
          <button
            onClick={() => handleSelect("content")}
            className="group flex flex-col items-start gap-2 rounded-lg border-2 border-gray-200 p-4 text-left transition-all hover:border-green-500 hover:bg-green-50"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-600 group-hover:bg-green-200">
                <span className="text-xl font-bold">•••</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Content Slide</h3>
                <p className="text-sm text-gray-500">Share your main content</p>
              </div>
            </div>
            <div className="ml-12 text-sm text-gray-600">
              Use for your main message or story points. Supports text-only
              layouts, text with images, or full-image slides. Add taglines,
              titles, and paragraphs.
            </div>
          </button>

          {/* Outro Slide Option */}
          <button
            onClick={() => handleSelect("outro")}
            className="group flex flex-col items-start gap-2 rounded-lg border-2 border-gray-200 p-4 text-left transition-all hover:border-purple-500 hover:bg-purple-50"
          >
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-200">
                <span className="text-xl font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Outro Slide</h3>
                <p className="text-sm text-gray-500">
                  End with a call to action
                </p>
              </div>
            </div>
            <div className="ml-12 text-sm text-gray-600">
              Close your carousel with a thank you message, CTA button, and
              engagement prompts. Includes interaction icons for likes,
              comments, and shares.
            </div>
          </button>
        </div>
        <div className="flex justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
