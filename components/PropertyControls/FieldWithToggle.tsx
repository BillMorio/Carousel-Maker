import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

interface FieldWithToggleProps {
  label: string;
  value: string;
  enabled: boolean;
  placeholder?: string;
  multiline?: boolean;
  onToggle: (enabled: boolean) => void;
  onChange: (value: string) => void;
}

export function FieldWithToggle({
  label,
  value,
  enabled,
  placeholder,
  multiline = false,
  onToggle,
  onChange,
}: FieldWithToggleProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={`field-${label}`} className="text-sm font-medium">
          {label}
        </Label>
        <Switch
          id={`toggle-${label}`}
          checked={enabled}
          onCheckedChange={onToggle}
        />
      </div>

      {multiline ? (
        <Textarea
          id={`field-${label}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={!enabled}
          className="min-h-20 resize-none text-sm"
        />
      ) : (
        <Input
          id={`field-${label}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={!enabled}
          className="text-sm"
        />
      )}
    </div>
  );
}
