import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";

export const metadata: Metadata = {
  title: "How it works",
  description: "Book a slot, buy a package or post a job for quotes. Your payment is held until the work is done.",
};

const STEPS = [
  {
    title: "Tell us what you need.",
    body: "Describe the job in your own words and add a photo or two. Our job assistant turns it into a clear brief and asks anything a pro would want to know.",
  },
  {
    title: "Choose your pro.",
    body: "Book a slot, buy a package, or compare quotes side by side. See reviews, portfolios and verified badges before you decide.",
  },
  {
    title: "Pay safely.",
    body: "Your payment is held, not handed over. Big jobs are split into stages, so you only fund the next bit when you're happy with the last.",
  },
  {
    title: "Confirm and review.",
    body: "When the work's done, confirm it and the pro is paid. Then you both leave a review.",
  },
];

const GOOD_TO_KNOW = [
  {
    title: "Questions before you hire",
    body: "Pros can ask about your job, and your answers are shared with everyone quoting, so you only explain once.",
  },
  {
    title: "Want a different price?",
    body: "Ask for a revised quote with a short note, and the pro can send you an updated one.",
  },
  {
    title: "On the day",
    body: "Once you've hired, you'll both see each other's phone number for things like parking or running late.",
  },
  {
    title: "Price guidance",
    body: "When you post a job, we show a rough price range for that kind of work in your area. It's a guide only: the pros will price your actual job.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="overflow-x-clip">
      <PageHero
        eyebrow={
          <>
            Book · Buy · <span className="text-brand">Brief</span>
          </>
        }
        title="Hiring, sorted in four steps."
        lead="Whether it's a 30-minute trim or a three-month extension, it works the same way."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ol className="grid gap-4 md:grid-cols-2">
          {STEPS.map(({ title, body }, i) => (
            <Reveal as="li" key={title} delay={i * 100} className="bg-card rounded-[1.75rem] border p-8 shadow-sm">
              <span className="text-display text-brand text-5xl">{i + 1}</span>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight">{title}</h2>
              <p className="text-muted-foreground mt-2">{body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-display text-4xl sm:text-5xl">Good to know.</h2>
        </Reveal>
        <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {GOOD_TO_KNOW.map(({ title, body }, i) => (
            <Reveal key={title} delay={i * 80} className="border-t pt-6">
              <dt className="font-semibold">{title}</dt>
              <dd className="text-muted-foreground mt-2">{body}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 pb-24 text-center sm:px-6">
        <Reveal>
          <h2 className="text-display text-4xl sm:text-5xl">Got a job in mind?</h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-md text-lg">
            It&apos;s free to post, and there&apos;s no obligation to hire.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <Link href="/sign-up">
              Get started <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
