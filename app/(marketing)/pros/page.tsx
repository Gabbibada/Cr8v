import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { proImages as img } from "@/components/marketing/images";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";

export const metadata: Metadata = {
  title: "For pros",
  description:
    "Free to join, no paying to quote. Founding Pros pay 0% commission for 6 months in Doncaster, Sheffield and Manchester.",
};

const REASONS = [
  {
    title: "No pay-to-quote.",
    body: "Every job takes a limited number of quotes, ranked by fit, not by who's fastest to the button. No race to the bottom.",
  },
  {
    title: "Guaranteed payment.",
    body: "The customer pays before you start. The money's held, and released to you when the work is confirmed, or automatically 5 days after you mark it delivered.",
  },
  {
    title: "Better briefs.",
    body: "Our job assistant gets customers to explain the job properly, with photos, so you waste fewer site visits.",
  },
  {
    title: "Your credentials, front and centre.",
    body: "Verified badges for ID, insurance and trade cards show customers you're the real deal.",
  },
  {
    title: "Run your business here.",
    body: "Quotes, bookings, staged payments and earnings in one dashboard.",
  },
  {
    title: "Writing help.",
    body: "Turn a few bullet points into a profile, a service description or a quote.",
  },
];

const PERKS = [
  "0% commission for 6 months or your first £3,000",
  "A permanent Founding Pro badge",
  "Priority placement at launch",
  "A direct line to the team to shape what we build",
];

const STEPS = [
  { title: "Build your profile", body: "Add your photo, services, prices, portfolio and where you work." },
  { title: "Get verified", body: "A quick ID check, plus your insurance and trade cards if your work needs them." },
  { title: "Win work", body: "Quote on jobs that match you, sell packages, or open your diary for bookings." },
  { title: "Get paid", body: "Payouts go straight to your bank after each job or stage." },
];

export default function ProsPage() {
  return (
    <div className="overflow-x-clip">
      <PageHero
        eyebrow="For tradespeople, stylists, makers and creatives"
        title="More work. No lead fees."
        lead="Free to join. You never pay to quote, list or receive a job. We only take a cut when you get paid."
      />
      <Reveal delay={300} className="-mt-4 flex flex-wrap justify-center gap-3 px-4">
        <Button size="lg" asChild>
          <Link href="/sign-up">
            Become a Founding Pro <ArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </Reveal>

      <section className="w-full px-4 py-20 sm:px-6 lg:px-10">
        <Reveal>
          <h2 className="text-display text-4xl sm:text-5xl">Why pros join.</h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ title, body }, i) => (
            <Reveal key={title} delay={(i % 3) * 100} className="bg-card rounded-[1.75rem] border p-7 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="founding" className="grid w-full scroll-mt-24 gap-4 px-4 py-12 sm:px-6 md:grid-cols-2 lg:px-10">
        <Reveal className="relative min-h-[26rem] overflow-hidden rounded-[2rem]">
          <Image
            src={img.carpenter}
            alt="A carpenter smiling in his workshop"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={120} className="bg-brand text-brand-foreground flex flex-col rounded-[2rem] p-8 sm:p-10">
          <Eyebrow className="text-brand-foreground/75">Founding Pro offer · limited places in each city</Eyebrow>
          <h2 className="text-display mt-4 text-4xl sm:text-5xl">Be one of the first. Keep everything you earn.</h2>
          <p className="text-brand-foreground/85 mt-4">
            Join in Doncaster, Sheffield or Manchester before we open to customers and you&apos;ll pay 0% commission for
            your first 6 months, or on your first £3,000 earned, whichever comes first.
          </p>
          <ul className="mt-6 grid gap-2.5">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-center gap-3 text-sm font-medium">
                <BadgeCheck className="size-4 shrink-0" aria-hidden />
                {perk}
              </li>
            ))}
          </ul>
          <Button
            size="lg"
            variant="outline"
            className="mt-8 w-fit border-white bg-white text-black hover:bg-white/90"
            asChild
          >
            <Link href="/sign-up">Claim my Founding Pro place</Link>
          </Button>
        </Reveal>
      </section>

      <section className="w-full px-4 pt-20 pb-24 sm:px-6 lg:px-10">
        <Reveal>
          <h2 className="text-display text-4xl sm:text-5xl">Up and running in four steps.</h2>
        </Reveal>
        <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ title, body }, i) => (
            <Reveal as="li" key={title} delay={i * 80} className="border-t pt-6">
              <span className="text-brand text-sm font-semibold">0{i + 1}</span>
              <h3 className="mt-2 font-semibold">{title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{body}</p>
            </Reveal>
          ))}
        </ol>
      </section>
    </div>
  );
}
