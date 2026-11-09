import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Briefcase, Search, UserRound } from "lucide-react";
import { Reveal } from "@/components/marketing/reveal";
import { Skeleton } from "@/components/ui/skeleton";
import { getCurrentUser } from "@/lib/auth";
import { cn } from "cn";

export const metadata: Metadata = { title: "Dashboard" };

const NEXT_STEPS = [
  {
    icon: Search,
    title: "Find a pro",
    body: "Search and browse pros near you.",
    milestone: "M2",
    tone: "bg-pop-blue text-white",
  },
  {
    icon: Briefcase,
    title: "Post a job",
    body: "Describe your job and get quotes.",
    milestone: "M3",
    tone: "bg-pop-lime text-pop-ink",
  },
  {
    icon: UserRound,
    title: "Offer your services",
    body: "Set up your pro profile and portfolio.",
    milestone: "M1",
    tone: "bg-brand text-brand-foreground",
  },
];

async function Greeting() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in?next=/dashboard");

  return (
    <div>
      <p className="eyebrow text-muted-foreground">Your dashboard</p>
      <h1 className="text-display mt-3 text-5xl sm:text-6xl">Hello, {user.displayName.split(" ")[0]}.</h1>
      <p className="text-muted-foreground mt-3">More arrives here with each milestone.</p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="grid gap-12">
      <Suspense fallback={<Skeleton className="h-28 w-80 rounded-2xl" />}>
        <Greeting />
      </Suspense>
      <div className="grid gap-4 md:grid-cols-3">
        {NEXT_STEPS.map(({ icon: Icon, title, body, milestone, tone }, i) => (
          <Reveal key={title} delay={i * 100} className="bg-card flex min-h-56 flex-col rounded-[1.75rem] border p-6">
            <div className="flex items-center justify-between">
              <span className={cn("flex size-11 items-center justify-center rounded-2xl", tone)}>
                <Icon className="size-5" aria-hidden />
              </span>
              <span className="text-muted-foreground rounded-full border px-2.5 py-1 text-xs">
                Coming in {milestone}
              </span>
            </div>
            <h2 className="mt-auto pt-8 text-xl font-semibold tracking-tight">{title}</h2>
            <p className="text-muted-foreground mt-1 text-sm">{body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
