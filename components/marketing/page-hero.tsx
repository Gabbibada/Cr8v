import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

export function PageHero({ eyebrow, title, lead }: { eyebrow: React.ReactNode; title: string; lead: string }) {
  return (
    <section className="w-full px-4 pt-16 pb-12 text-center sm:px-6 sm:pt-24 lg:px-10">
      <Reveal>
        <Eyebrow>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal
        as="h1"
        delay={80}
        className="text-display mx-auto mt-5 max-w-4xl text-5xl sm:text-7xl 2xl:max-w-5xl 2xl:text-8xl"
      >
        {title}
      </Reveal>
      <Reveal as="p" delay={200} className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg text-pretty">
        {lead}
      </Reveal>
    </section>
  );
}
