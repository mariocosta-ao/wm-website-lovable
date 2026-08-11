export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="relative inline-flex size-9 items-center justify-center rounded-xl bg-ubuntu shadow-ubuntu">
        <span className="font-display text-base font-bold text-primary-foreground">N</span>
      </span>
      {compact ? null : (
        <span className="font-display text-lg font-bold tracking-tight">
          Mukanda<span className="text-primary">Tec</span>
        </span>
      )}
    </span>
  );
}
