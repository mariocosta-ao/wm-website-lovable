import blueLogo from "@/assets/winmac-logo-horizontal-blue.png.asset.json";
import whiteLogo from "@/assets/winmac-logo-horizontal-white.png.asset.json";

export function Logo({
  tone = "default",
  compact = false,
}: {
  tone?: "default" | "night";
  compact?: boolean;
}) {
  return (
    <img
      src={tone === "night" ? whiteLogo.url : blueLogo.url}
      alt="WIN MAC"
      width={1126}
      height={420}
      className={compact ? "h-8 w-auto" : "h-11 w-auto"}
    />
  );
}
