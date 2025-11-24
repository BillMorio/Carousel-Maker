import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

interface TextStyleControlsProps {
  label: string;
  fontSize?: number;
  fontWeight?: number;
  textAlign?: "left" | "center" | "right";
  onFontSizeChange: (size: number) => void;
  onFontWeightChange: (weight: number) => void;
  onTextAlignChange: (align: "left" | "center" | "right") => void;
}

export function TextStyleControls({
  label,
  fontSize = 16,
  fontWeight = 400,
  textAlign = "left",
  onFontSizeChange,
  onFontWeightChange,
  onTextAlignChange,
}: TextStyleControlsProps) {
  return (
    <div className="space-y-3 rounded-md border p-3 bg-muted/30">
      <div className="text-xs font-medium text-muted-foreground">
        {label} Style
      </div>

      {/* Font Size */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label className="text-xs">Size</Label>
          <span className="text-xs text-muted-foreground">{fontSize}px</span>
        </div>
        <input
          type="range"
          min="10"
          max="72"
          value={fontSize}
          onChange={(e) => onFontSizeChange(parseInt(e.target.value))}
          className="w-full"
        />
      </div>

      {/* Font Weight */}
      <div className="space-y-2">
        <Label className="text-xs">Weight</Label>
        <Tabs
          value={fontWeight.toString()}
          onValueChange={(v) => onFontWeightChange(parseInt(v))}
        >
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="400" className="text-xs">
              Normal
            </TabsTrigger>
            <TabsTrigger value="500" className="text-xs">
              Medium
            </TabsTrigger>
            <TabsTrigger value="600" className="text-xs">
              Semi
            </TabsTrigger>
            <TabsTrigger value="700" className="text-xs">
              Bold
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Text Align */}
      <div className="space-y-2">
        <Label className="text-xs">Alignment</Label>
        <Tabs
          value={textAlign}
          onValueChange={(v) =>
            onTextAlignChange(v as "left" | "center" | "right")
          }
        >
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="left">
              <AlignLeft className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="center">
              <AlignCenter className="h-4 w-4" />
            </TabsTrigger>
            <TabsTrigger value="right">
              <AlignRight className="h-4 w-4" />
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
