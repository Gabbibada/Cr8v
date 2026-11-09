import Image, { type StaticImageData } from "next/image";
import { cn } from "cn";

// A fanned stack of photo cards that spreads out on hover, like a hand of cards.
export function CardFan({
  cards,
  className,
}: {
  cards: { image: StaticImageData; alt: string }[];
  className?: string;
}) {
  const mid = (cards.length - 1) / 2;
  return (
    <div
      className={cn(
        "relative mx-auto h-64 w-full max-w-xl [--spread:30px] [--tilt:5deg] hover:[--spread:58px] hover:[--tilt:8deg] sm:h-80 sm:hover:[--spread:84px]",
        className,
      )}
    >
      {cards.map(({ image, alt }, i) => {
        const offset = i - mid;
        return (
          <div
            key={alt}
            className="absolute top-1/2 left-1/2 aspect-[4/5] w-36 transition-transform duration-700 ease-(--ease-fluid) sm:w-52"
            style={
              {
                "--o": offset,
                zIndex: 10 - Math.abs(Math.round(offset)),
                transform: `translate(calc(-50% + var(--spread) * var(--o)), -50%) rotate(calc(var(--o) * var(--tilt)))`,
              } as React.CSSProperties
            }
          >
            <Image
              src={image}
              alt={alt}
              sizes="(min-width: 640px) 208px, 144px"
              placeholder="blur"
              preload={i === Math.round(mid)}
              className="size-full rounded-2xl object-cover shadow-[0_20px_50px_-20px_rgb(0_0_0/0.45)] ring-4 ring-white dark:ring-white/10"
            />
          </div>
        );
      })}
    </div>
  );
}
