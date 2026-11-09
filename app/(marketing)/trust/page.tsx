import type { Metadata } from "next";
import { BadgeCheck, EyeOff, Flag, LifeBuoy, ShieldCheck, Star } from "lucide-react";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { brand } from "@/lib/config/brand";

export const metadata: Metadata = {
  title: "Trust & safety",
  description: "ID-checked pros, verified credentials, honest reviews and payment held until the work is done.",
};

const PROMISES = [
  {
    icon: ShieldCheck,
    title: "Payment held until the work is done.",
    body: "Customers pay up front, pros know the money's there, and nobody hands over cash on the doorstep.",
  },
  {
    icon: BadgeCheck,
    title: "ID-checked pros.",
    body: "Every pro passes an identity check before they can take work.",
  },
  {
    icon: BadgeCheck,
    title: "Credentials we've looked at.",
    body: "Gas Safe, NICEIC, NAPIT, CSCS, DBS and insurance documents are reviewed by our team, and we track when they expire.",
  },
  {
    icon: Star,
    title: "Honest reviews.",
    body: "Only customers who've paid for a completed job can leave one. Both sides review blind, so neither can tit-for-tat.",
  },
  {
    icon: EyeOff,
    title: "Contact details stay private until you hire.",
    body: "We hide phone numbers and emails in questions and quotes, so everything stays protected.",
  },
  {
    icon: LifeBuoy,
    title: "Real people when it goes wrong.",
    body: "If a job isn't right, tell us. We'll look at the evidence from both sides and decide on a full or partial release, or a refund.",
  },
  {
    icon: Flag,
    title: "Report and block.",
    body: "On any profile, listing or review.",
  },
];

export default function TrustPage() {
  return (
    <div className="overflow-x-clip">
      <PageHero
        eyebrow="Trust & safety"
        title="Safe to hire. Safe to work."
        lead="Here's what we do, so you don't have to cross your fingers."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROMISES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 3) * 100} className="bg-card rounded-[1.75rem] border p-7 shadow-sm">
              <span className="bg-muted flex size-10 items-center justify-center rounded-xl">
                <Icon className="size-5" aria-hidden />
              </span>
              <h2 className="mt-5 text-lg font-semibold tracking-tight">{title}</h2>
              <p className="text-muted-foreground mt-2 text-sm">{body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 pb-24 sm:px-6">
        <Reveal className="bg-pop-lime text-pop-ink rounded-[2rem] p-8 sm:p-12">
          <p className="eyebrow">Our one rule</p>
          <h2 className="text-display mt-4 max-w-3xl text-4xl sm:text-5xl">Keep payment on {brand.name}.</h2>
          <p className="mt-4 max-w-xl text-lg">
            If anyone asks you to pay outside the platform, say no and report it. Off-platform payments aren&apos;t
            protected.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
