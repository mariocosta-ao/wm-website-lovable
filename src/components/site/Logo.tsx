/**
 * Logótipo WIN MAC — losango duplo (símbolo) + wordmark "WIN MAC"
 * com a assinatura "Tecnologia e Comércio Geral".
 */
export function Logo({
  tone = "default",
  compact = false,
}: {
  tone?: "default" | "night";
  compact?: boolean;
}) {
  const word = tone === "night" ? "text-night-foreground" : "text-night";
  const stroke = tone === "night" ? "var(--night-foreground)" : "var(--night)";

  return (
    <span className="inline-flex items-center gap-3 leading-none">
      <svg viewBox="0 0 48 48" role="img" aria-label="WIN MAC" className="h-10 w-10 shrink-0">
        <rect
          x="24"
          y="2"
          width="31.1"
          height="31.1"
          rx="3"
          transform="rotate(45 24 2)"
          fill="none"
          stroke={stroke}
          strokeWidth="2.5"
        />
        <rect
          x="24"
          y="12"
          width="17"
          height="17"
          rx="2"
          transform="rotate(45 24 12)"
          fill="var(--primary)"
        />
      </svg>

      <span className="flex flex-col gap-1">
        <span className={`font-display text-lg font-bold tracking-tight ${word}`}>
          WIN<span className="text-primary"> MAC</span>
        </span>
        {compact ? null : (
          <span
            className={`text-[9px] font-semibold uppercase tracking-[0.18em] ${
              tone === "night" ? "text-night-foreground/60" : "text-muted-foreground"
            }`}
          >
            Tecnologia e Comércio Geral
          </span>
        )}
      </span>
    </span>
  );
}
