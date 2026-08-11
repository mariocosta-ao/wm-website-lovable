/**
 * Logótipo Mukanda Tec — três figuras interligadas formando um "M",
 * com a palavra "Mukanda" sempre por baixo do símbolo (nunca ao lado).
 * Sem sombras, brilhos, rotações ou cores fora da paleta oficial.
 */
export function Logo({
  compact = false,
  tone = "default",
}: {
  compact?: boolean;
  tone?: "default" | "night";
}) {
  const wordColor = tone === "night" ? "text-night-foreground" : "text-foreground";
  const symbolBlue = tone === "night" ? "var(--night-foreground)" : "var(--primary)";

  return (
    <span className="inline-flex flex-col items-center gap-1 leading-none">
      <svg
        viewBox="0 0 64 44"
        role="img"
        aria-label="Mukanda Tec"
        className="h-9 w-auto"
        style={{ minHeight: 32 }}
      >
        <circle cx="10" cy="10" r="7" fill={symbolBlue} />
        <circle cx="32" cy="17" r="7" fill="var(--accent)" />
        <circle cx="54" cy="10" r="7" fill={symbolBlue} />
        <path
          d="M10 18 L10 40 M10 18 L32 30 M32 30 L54 18 M54 18 L54 40"
          fill="none"
          stroke={symbolBlue}
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {compact ? null : (
        <span className={`font-display text-sm font-bold tracking-tight ${wordColor}`}>
          Mukanda<span className="text-ubuntu"> Tec</span>
        </span>
      )}
    </span>
  );
}
