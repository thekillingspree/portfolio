import { ToggleGroup, ToggleGroupItem } from "@/src/components/ui/toggle-group";
import { MoonIcon, SunIcon } from "../Icons";
import { IconDeviceMobile } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export default function MobileThemeToggle() {
  const { setTheme, theme } = useTheme();
  return (
    <ToggleGroup
      size={"lg"}
      type="single"
      variant="outline"
      value={theme}
      onValueChange={setTheme}
    >
      <ToggleGroupItem value="dark" aria-label="Toggle bold">
        <MoonIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Toggle italic">
        <IconDeviceMobile className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Toggle strikethrough">
        <SunIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
