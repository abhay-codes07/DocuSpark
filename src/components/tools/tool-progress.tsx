type ToolProgressProps = {
  value: number;
  isProcessing: boolean;
};

export function ToolProgress({ value, isProcessing }: ToolProgressProps) {
  return (
    <div className="space-y-2" aria-live="polite">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.12em] text-zinc-500">
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-zinc-200">
        <div
          className="h-full rounded-full bg-sky-500 transition-all duration-150 ease-out"
          style={{ width: `${value}%` }}
        />
      </div>
      <p className="text-sm text-zinc-600">{isProcessing ? "Processing files..." : "Ready"}</p>
    </div>
  );
}
