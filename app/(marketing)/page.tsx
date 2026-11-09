import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, CalendarCheck, ClipboardList, Package, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CardFan } from "@/components/marketing/card-fan";
import { CategoryCarousel } from "@/components/marketing/category-carousel";
import { ChatTag } from "@/components/marketing/chat-tag";
import { Eyebrow } from "@/components/marketing/eyebrow";
import { proImages as img } from "@/components/marketing/images";
import { Marquee } from "@/components/marketing/marquee";
import { Reveal, WordReveal } from "@/components/marketing/reveal";
import { cn } from "cn";

const HERO_CARDS = [
  { image: img.electrician, alt: "An electrician testing a socket" },
  { image: img.hairSalon, alt: "A hairstylist blow-drying a client's hair" },
  { image: img.carpenter, alt: "A carpenter smiling in his workshop" },
  { image: img.decorator, alt: "Paint rollers striping a wall in bright colours" },
  { image: img.photographer, alt: "A photographer taking a picture" },
  { image: img.removals, alt: "A van being loaded for a house move" },
  { image: img.cleaner, alt: "A cleaner mopping a bright living room" },
];

const HIRING_MODES = [
  {
    icon: CalendarCheck,
    title: "Book",
    lead: "Pick a time, done.",
    body: "Choose a pro and a free slot at a clear fixed or hourly price. Ideal for cleaning, handyman jobs and haircuts.",
    image: img.barber,
    tone: "bg-card",
  },
  {
    icon: Package,
    title: "Buy",
    lead: "Packages, priced up front.",
    body: "A logo, a product shoot, a website: choose a ready-made package with the price and delivery date shown.",
    image: img.designer,
    tone: "bg-pop-blue text-white",
  },
  {
    icon: ClipboardList,
    title: "Brief",
    lead: "Describe it, compare quotes.",
    body: "Post your project, get a handful of structured quotes from vetted pros, and pay in stages as the work gets done.",
    image: img.plumber,
    tone: "bg-card",
  },
];

const CATEGORIES = [
  { name: "Building & Trades", examples: "Electricians, plumbers, decorators", image: img.electrician },
  { name: "Home Services", examples: "Handymen, cleaners, gardeners", image: img.cleaner },
  { name: "Hair & Beauty", examples: "Mobile and salon stylists, barbers", image: img.hairSalon },
  { name: "Hire & Transport", examples: "Van & driver, small removals", image: img.removals },
  { name: "Creative & Design", examples: "Photographers, designers, videographers", image: img.photographer },
  { name: "Digital & Tech", examples: "Web design, development, marketing", image: img.designer },
  { name: "Artisans & Makers", examples: "Bespoke furniture, signwriting", image: img.carpenter },
  { name: "Events & Lifestyle", examples: "DJs, caterers, tutors", image: img.dj },
];

const MARQUEE = [
  { label: "Electricians", image: img.electrician },
  { label: "Hairstylists", image: img.barber },
  { label: "Van & driver", image: img.removals },
  { label: "Decorators", image: img.decorator },
  { label: "Photographers", image: img.photographer },
  { label: "Gardeners", image: img.gardener },
  { label: "Bakers", image: img.baker },
  { label: "Plumbers", image: img.plumber },
];

const PROMISES = [
  {
    label: "Customers",
    figure: "£0",
    detail: "to post a job or ask for quotes",
    className: "-rotate-2 sm:translate-y-4 sm:rotate-[-4deg]",
  },
  {
    label: "Founding Pros",
    figure: "0%",
    detail: "commission for 6 months or your first £3,000",
    className: "bg-brand text-brand-foreground z-10 sm:-translate-y-2 sm:scale-105",
    badge: "Limited",
  },
  {
    label: "Every job",
    figure: "100%",
    detail: "of your payment held until the work is done",
    className: "rotate-2 sm:translate-y-6 sm:rotate-[4deg]",
  },
];

const CAFE_CREW = ["Shopfitter", "Electrician", "Signwriter", "Photographer", "Web designer", "Baker"];

const PRO_BENEFITS = [
  "A professional profile and portfolio",
  "Quotes, bookings and staged payments in one place",
  "Verified badges for ID, insurance and trade cards",
  "AI help writing your profile and quotes",
];

export default function HomePage() {
  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section className="w-full px-4 pt-16 pb-20 text-center sm:px-6 sm:pt-24 lg:px-10">
        <Reveal>
          <Eyebrow>
            Founding Pros wanted · <span className="text-brand">South Yorkshire & Manchester</span>
          </Eyebrow>
        </Reveal>
        <Reveal
          as="h1"
          delay={80}
          className="text-display mx-auto mt-5 max-w-4xl text-5xl sm:text-7xl lg:text-[5.5rem] 2xl:max-w-6xl 2xl:text-[7.5rem]"
        >
          Skilled people for every job.
        </Reveal>
        <WordReveal
          delay={250}
          className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg text-pretty"
          text="Trusted tradespeople, stylists and creatives near you. Compare quotes, book in minutes and pay safely: your money is held until the work is done."
        />
        <Reveal delay={450} className="mt-8 flex flex-wrap justify-center gap-3">
          <Button size="lg" asChild>
            <Link href="/sign-up">
              Find a pro <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="bg-card" asChild>
            <Link href="#for-pros">I&apos;m a pro</Link>
          </Button>
        </Reveal>
        <Reveal delay={550} className="relative mx-auto mt-14 max-w-3xl 2xl:max-w-4xl">
          <CardFan cards={HERO_CARDS} />
          <ChatTag className="top-2 left-[6%] rotate-[-6deg] sm:left-[18%]">@sam.sparks</ChatTag>
          <ChatTag tone="blue" className="top-10 right-[4%] rotate-[5deg] sm:right-[16%]">
            @leah.styles
          </ChatTag>
          <ChatTag tone="lime" className="bottom-0 left-1/2 -translate-x-1/2 rotate-[-2deg]">
            Quotes, not callouts
          </ChatTag>
        </Reveal>
      </section>

      {/* Three ways to hire */}
      <section id="how-it-works" className="w-full scroll-mt-24 px-4 py-20 sm:px-6 lg:px-10">
        <Reveal className="text-center">
          <Eyebrow>
            Your job, <span className="text-pop-blue">your way</span>
          </Eyebrow>
          <h2 className="text-display mx-auto mt-4 max-w-3xl text-4xl sm:text-6xl">
            Three ways to hire. One safe way to pay.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {HIRING_MODES.map(({ icon: Icon, title, lead, body, image, tone }, i) => (
            <Reveal key={title} delay={i * 120} className={cn("rounded-[1.75rem] p-3 shadow-sm", tone)}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem]">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  placeholder="blur"
                  className="object-cover"
                />
                <span className="bg-card/90 text-foreground absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-medium backdrop-blur">
                  <Icon className="size-4" aria-hidden /> {title}
                </span>
              </div>
              <div className="px-3 pt-5 pb-4">
                <h3 className="text-xl font-semibold tracking-tight">{lead}</h3>
                <p
                  className={cn(
                    "mt-2 text-sm",
                    tone.includes("text-white") ? "text-white/80" : "text-muted-foreground",
                  )}
                >
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="w-full scroll-mt-24 px-4 py-20 sm:px-6 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>
              Eight categories · <span className="text-brand">one account</span>
            </Eyebrow>
            <h2 className="text-display mt-4 max-w-xl text-4xl sm:text-6xl">Every kind of skilled work.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            From a rewire to a wedding DJ. On-site pros in Doncaster, Sheffield and Manchester; remote work UK-wide.
          </p>
        </Reveal>
        <Reveal delay={150} className="mt-12">
          <CategoryCarousel categories={CATEGORIES} />
        </Reveal>
      </section>

      {/* Marquee band */}
      <section aria-label="Pros on the platform" className="px-3 py-8 sm:px-4 lg:px-6">
        <Marquee items={MARQUEE} className="bg-pop-lime text-pop-ink w-full rounded-[2rem] py-8 sm:py-10" />
      </section>

      {/* Payment protection */}
      <section
        id="protection"
        className="grid w-full scroll-mt-24 items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-10"
      >
        <Reveal>
          <span className="bg-card flex size-11 items-center justify-center rounded-2xl border shadow-sm">
            <ShieldCheck className="size-5" aria-hidden />
          </span>
          <h2 className="text-display mt-6 text-4xl sm:text-6xl">Paid safely, every time.</h2>
          <p className="text-muted-foreground mt-5 max-w-md text-lg">
            You pay into a secure holding account, and the pro is paid when you confirm the job&apos;s done. No cash in
            hand, no chasing invoices, no awkward conversations.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-0">
          {PROMISES.map(({ label, figure, detail, className, badge }, i) => (
            <Reveal key={label} delay={i * 120}>
              <div
                className={cn(
                  "bg-card relative flex min-h-44 flex-col rounded-3xl border p-5 shadow-[0_24px_60px_-28px_rgb(0_0_0/0.35)] transition-transform duration-500 ease-(--ease-fluid) hover:rotate-0 sm:min-h-52",
                  className,
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium">{label}</span>
                  {badge && (
                    <span className="bg-card text-foreground rounded-full px-2 py-0.5 text-xs font-semibold">
                      {badge}
                    </span>
                  )}
                </div>
                <span className="text-display mt-4 text-6xl">{figure}</span>
                <span className="mt-auto pt-6 text-xs opacity-75">{detail}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* One account */}
      <section className="w-full px-4 py-20 sm:px-6 lg:px-10">
        <Reveal className="bg-pop-ink grid gap-10 rounded-[2rem] p-8 text-white sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow className="text-white/60">
              One account. <span className="text-pop-lime">Every trade.</span>
            </Eyebrow>
            <h2 className="text-display mt-4 text-4xl sm:text-5xl">
              Opening a café? That&apos;s six pros, not six apps.
            </h2>
            <p className="mt-5 max-w-md text-white/75">
              A shopfitter, an electrician, a signwriter, a photographer, a web designer and someone to bake the first
              batch. Hire all of them here, pay them all the same safe way, and keep every receipt in one place.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Pros a new café might hire">
            {CAFE_CREW.map((role, i) => (
              <li
                key={role}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium",
                  i % 3 === 0 ? "bg-pop-lime text-pop-ink" : i % 3 === 1 ? "bg-white/10" : "bg-pop-blue",
                )}
              >
                {role}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* For pros */}
      <section id="for-pros" className="grid w-full scroll-mt-24 gap-4 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-10">
        <Reveal className="relative min-h-[28rem] overflow-hidden rounded-[2rem] text-white">
          <Image
            src={img.tradesman}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            placeholder="blur"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className="relative flex h-full flex-col justify-end p-8">
            <BadgeCheck className="size-6" aria-hidden />
            <h2 className="text-display mt-4 text-4xl sm:text-5xl">Grow your business.</h2>
            <p className="mt-3 max-w-sm text-white/80">
              Free to join. No paying for leads or to quote: you only pay commission when you earn.
            </p>
            <Button
              size="lg"
              variant="outline"
              className="mt-6 w-fit border-white bg-white text-black hover:bg-white/90"
              asChild
            >
              <Link href="/pros#founding">Become a Founding Pro</Link>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={120} className="bg-card flex flex-col rounded-[2rem] border p-8">
          <Eyebrow>
            Founding Pro offer · <span className="text-brand">limited places</span>
          </Eyebrow>
          <h2 className="text-display mt-4 text-4xl sm:text-5xl">Everything you need to win work.</h2>
          <ul className="mt-8 grid gap-3">
            {PRO_BENEFITS.map((item) => (
              <li key={item} className="bg-muted flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium">
                <ShieldCheck className="text-brand size-4 shrink-0" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
          <Button size="lg" className="mt-8 w-fit" asChild>
            <Link href="/sign-up">
              Create a free account <ArrowRight data-icon="inline-end" />
            </Link>
          </Button>
        </Reveal>
      </section>

      {/* Closing */}
      <section className="w-full px-4 pt-8 pb-24 text-center sm:px-6 lg:px-10">
        <Reveal>
          <h2 className="text-display text-4xl sm:text-6xl">Got a job in mind?</h2>
          <p className="text-muted-foreground mx-auto mt-5 max-w-md text-lg">
            Tell us about it in a sentence. It&apos;s free, and there&apos;s no obligation to hire.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button size="lg" asChild>
              <Link href="/sign-up">
                Get started <ArrowRight data-icon="inline-end" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-card" asChild>
              <Link href="/how-it-works">How it works</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
