import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { Reveal } from "@/components/marketing/reveal";
import { brand } from "@/lib/config/brand";

export const metadata: Metadata = {
  title: "About",
  description: `${brand.name} puts every kind of skilled work in one place: trades, stylists, makers and creatives.`,
};

export default function AboutPage() {
  return (
    <div className="overflow-x-clip">
      <PageHero
        eyebrow={`About ${brand.name}`}
        title="Built for people who make things happen."
        lead="One account, one safe way to pay, and one reputation that follows a pro from job to job."
      />

      <section className="mx-auto grid max-w-3xl gap-6 px-4 py-12 text-lg sm:px-6">
        <Reveal as="p">
          Opening a café takes a shopfitter, an electrician, a signwriter, a photographer and a web designer. Today,
          that&apos;s four or five different apps, each with its own account, its own way of paying and its own reviews.
        </Reveal>
        <Reveal as="p" delay={80}>
          {brand.name} puts every kind of skilled work in one place: the trades, the stylists, the makers and the
          creatives. One account, one way to pay safely, and one reputation that follows a pro from job to job.
        </Reveal>
        <Reveal as="p" delay={160}>
          We&apos;re starting in Doncaster, Sheffield and Manchester, with remote work open across the UK. We&apos;re
          signing pros up first, so when you post a job, there&apos;s someone great ready to quote.
        </Reveal>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 pb-24 sm:px-6">
        <Reveal className="bg-card rounded-[2rem] border p-8 sm:p-12">
          <p className="eyebrow text-muted-foreground">Why &ldquo;{brand.name}&rdquo;?</p>
          <h2 className="text-display mt-4 max-w-3xl text-4xl sm:text-5xl">
            Because creating isn&apos;t only for designers.
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg">
            A new kitchen, a perfect fade and a first-dance playlist all get made by someone skilled.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/sign-up">
                Join free <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-card" asChild>
              <Link href="/pros">I&apos;m a pro</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
