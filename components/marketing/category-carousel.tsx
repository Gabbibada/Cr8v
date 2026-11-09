"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Category = { name: string; examples: string; image: StaticImageData };

// Horizontally scrolling category cards with arrow buttons and a progress bar.
export function CategoryCarousel({ categories }: { categories: Category[] }) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      setProgress(max > 0 ? track.scrollLeft / max : 1);
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div>
      <ul
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory [scrollbar-width:none] gap-4 overflow-x-auto scroll-smooth px-4 pb-2 sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden"
        aria-label="Categories"
      >
        {categories.map(({ name, examples, image }) => (
          <li key={name} className="group w-64 shrink-0 snap-start sm:w-72">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src={image}
                alt=""
                fill
                sizes="288px"
                placeholder="blur"
                className="object-cover transition-transform duration-700 ease-(--ease-fluid) group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16 text-white">
                <div className="text-lg font-semibold tracking-tight">{name}</div>
                <div className="text-sm text-white/80">{examples}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-center gap-4">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={() => scrollBy(-1)} aria-label="Previous categories">
            <ChevronLeft />
          </Button>
          <Button variant="outline" size="icon" onClick={() => scrollBy(1)} aria-label="Next categories">
            <ChevronRight />
          </Button>
        </div>
        <div className="bg-border relative h-0.5 flex-1 overflow-hidden rounded-full" aria-hidden>
          <div
            className="bg-foreground absolute inset-y-0 left-0 w-1/4 rounded-full transition-transform duration-300"
            style={{ transform: `translateX(${progress * 300}%)` }}
          />
        </div>
      </div>
    </div>
  );
}
