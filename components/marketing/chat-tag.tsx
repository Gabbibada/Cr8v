import { cn } from "cn";

// A speech-bubble handle tag, e.g. "@sam.sparks", floated over photos.
export function ChatTag({
  children,
  className,
  tone = "ink",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "blue" | "lime" | "brand";
}) {
  const tones = {
    ink: "bg-pop-ink text-white",
    blue: "bg-pop-blue text-white",
    lime: "bg-pop-lime text-pop-ink",
    brand: "bg-brand text-white",
  };
  return (
    <span
      className={cn(
        "pointer-events-none absolute z-10 inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-medium shadow-lg",
        "after:absolute after:-bottom-1 after:left-4 after:size-3 after:rotate-45 after:rounded-[2px] after:bg-inherit",
        tones[tone],
        className,
      )}
      aria-hidden
    >
      {children}
    </span>
  );
}
