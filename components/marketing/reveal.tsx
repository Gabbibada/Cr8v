"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "cn";

type RevealProps = {
  as?: "div" | "section" | "li" | "span" | "p" | "h1" | "h2";
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

// Fades and lifts its children in the first time they scroll into view (styles in globals.css).
export function Reveal({ as: Tag = "div", delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const visible = useInView(ref);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      data-reveal=""
      data-visible={visible}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={className}
    >
      {children}
    </Tag>
  );
}

// Reveals a sentence word by word.
export function WordReveal({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const visible = useInView(ref);

  return (
    <p ref={ref} className={cn(className)} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          aria-hidden
          data-reveal=""
          data-visible={visible}
          style={{ "--reveal-delay": `${delay + i * 35}ms` } as React.CSSProperties}
          className="inline-block whitespace-pre"
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
}

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return visible;
}
