import { brand } from "@/lib/config/brand";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="text-muted-foreground mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm sm:flex-row sm:justify-between">
        <p>
          {brand.name} — {brand.tagline}
        </p>
        <p>Launching in Doncaster, Sheffield and Manchester.</p>
      </div>
    </footer>
  );
}
