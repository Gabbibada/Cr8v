import Image, { type StaticImageData } from "next/image";
import { cn } from "cn";

type MarqueeItem = { label: string; image?: StaticImageData };

// An endlessly scrolling band of words with small photo chips between them.
export function Marquee({ items, className }: { items: MarqueeItem[]; className?: string }) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center gap-6 pr-6" aria-hidden={hidden || undefined}>
      {items.map(({ label, image }) => (
        <span key={label} className="flex items-center gap-6">
          <span className="text-display text-4xl whitespace-nowrap sm:text-6xl">{label}</span>
          {image && (
            <Image
              src={image}
              alt=""
              sizes="64px"
              className="size-12 rotate-[-6deg] rounded-xl object-cover shadow-md sm:size-16"
            />
          )}
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn("overflow-hidden", className)}>
      <div className="animate-marquee flex w-max hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
