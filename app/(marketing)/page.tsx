import Link from "next/link";
import {
  Brush,
  CalendarCheck,
  ClipboardList,
  Code,
  Hammer,
  House,
  Package,
  Scissors,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HIRING_MODES = [
  {
    icon: CalendarCheck,
    title: "Book",
    body: "Pick a pro and a time slot at a clear fixed or hourly price. Ideal for cleaning, handyman jobs and haircuts.",
  },
  {
    icon: Package,
    title: "Buy",
    body: "Choose a ready-made package — a logo, a product shoot, a website — with the price and delivery time up front.",
  },
  {
    icon: ClipboardList,
    title: "Brief",
    body: "Describe your project, get structured quotes from vetted pros, and pay in stages as the work gets done.",
  },
];

const CATEGORIES = [
  { icon: Wrench, name: "Building & Trades", examples: "Electricians, plumbers, decorators" },
  { icon: House, name: "Home Services", examples: "Handymen, cleaners, gardeners" },
  { icon: Scissors, name: "Hair & Beauty", examples: "Mobile and salon stylists, barbers" },
  { icon: Truck, name: "Hire & Transport", examples: "Van & driver, small removals" },
  { icon: Brush, name: "Creative & Design", examples: "Designers, photographers, videographers" },
  { icon: Code, name: "Digital & Tech", examples: "Web design, development, marketing" },
  { icon: Hammer, name: "Artisans & Makers", examples: "Bespoke furniture, signwriting" },
  { icon: Sparkles, name: "Events & Lifestyle", examples: "DJs, caterers, tutors" },
];

export default function HomePage() {
  return (
    <>
      <section className="from-primary/8 to-background border-b bg-gradient-to-b">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-20 sm:py-28">
          <Badge variant="secondary">Now recruiting Founding Pros in South Yorkshire</Badge>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            Hire skilled people for any job — from a logo to a loft conversion.
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg text-pretty">
            Trusted tradespeople, creatives and local pros in one place. Compare quotes, book in minutes, and pay
            safely: your money is held until the work is done.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" asChild>
              <Link href="/sign-up">Create a free account</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#for-pros">I&apos;m a pro</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Three ways to hire</h2>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Every job, however you start it, is protected the same way.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {HIRING_MODES.map(({ icon: Icon, title, body }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="text-primary size-6" aria-hidden />
                <CardTitle className="text-lg">{title}</CardTitle>
                <CardDescription>{body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="bg-muted/40 mt-6 flex items-start gap-3 rounded-xl border p-4 text-sm">
          <ShieldCheck className="text-primary mt-0.5 size-5 shrink-0" aria-hidden />
          <p>
            <span className="font-medium">Payment protection on every job.</span> You pay into a secure holding account
            and the pro is paid once you confirm the work is done.
          </p>
        </div>
      </section>

      <section id="categories" className="bg-muted/30 scroll-mt-20 border-y">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Every kind of skilled work</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map(({ icon: Icon, name, examples }) => (
              <Card key={name} size="sm">
                <CardContent className="flex items-start gap-3">
                  <Icon className="text-primary mt-0.5 size-5 shrink-0" aria-hidden />
                  <div>
                    <div className="font-medium">{name}</div>
                    <div className="text-muted-foreground">{examples}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="for-pros" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Free to join. Pay only when you earn.</h2>
            <p className="text-muted-foreground mt-4">
              No paying for leads, no paying to quote. Show your work, set your prices and diary, and get paid reliably.
              Founding Pros in Doncaster, Sheffield and Manchester pay 0% commission for their first 6 months or first
              £3,000 earned.
            </p>
            <Button className="mt-6" size="lg" asChild>
              <Link href="/sign-up">Become a Founding Pro</Link>
            </Button>
          </div>
          <ul className="grid gap-3 text-sm">
            {[
              "Professional profile and portfolio",
              "Quotes, bookings and staged payments in one place",
              "Verified badges for ID, insurance and trade credentials",
              "AI help writing your profile and quotes",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-lg border p-3">
                <ShieldCheck className="text-primary size-4 shrink-0" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
