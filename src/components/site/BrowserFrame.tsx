import { Lock } from "lucide-react";
import type { ReactNode } from "react";

export function BrowserFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]">
      <div className="flex items-center gap-3 border-b border-border bg-secondary/60 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="mx-auto flex items-center gap-2 rounded-md bg-background/80 px-3 py-1 text-xs text-muted-foreground">
          <Lock className="h-3 w-3" />
          {url}
        </div>
        <div className="w-12" />
      </div>
      <div className="max-h-[700px] overflow-y-auto">{children}</div>
    </div>
  );
}
