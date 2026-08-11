export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex size-9 items-center justify-center rounded-xl bg-ember shadow-ember">
        <span className="font-display text-base font-bold text-primary-foreground">N</span>
      </span>
      {compact ? null : (
        <span className="font-display text-lg font-bold tracking-tight">
          Nukanda<span className="text-primary">Tec</span>
        </span>
      )}
    </span>
  );
}
