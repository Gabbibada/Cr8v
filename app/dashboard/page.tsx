import { Suspense } from "react";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Briefcase, Search, UserRound } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { getCurrentUser } from "@/lib/auth";

export const metadata: Metadata = { title: "Dashboard" };

const NEXT_STEPS = [
  { icon: Search, title: "Find a pro", body: "Search and browse pros near you.", milestone: "M2" },
  { icon: Briefcase, title: "Post a job", body: "Describe your job and get quotes.", milestone: "M3" },
  { icon: UserRound, title: "Offer your services", body: "Set up your pro profile and portfolio.", milestone: "M1" },
];

async function Greeting() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in?next=/dashboard");

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight">Hello, {user.displayName.split(" ")[0]}</h1>
      <p className="text-muted-foreground mt-1">This is your dashboard. More arrives with each milestone.</p>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="grid gap-8">
      <Suspense fallback={<Skeleton className="h-14 w-72" />}>
        <Greeting />
      </Suspense>
      <div className="grid gap-4 md:grid-cols-3">
        {NEXT_STEPS.map(({ icon: Icon, title, body, milestone }) => (
          <Card key={title}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Icon className="text-primary size-5" aria-hidden />
                <Badge variant="outline">Coming in {milestone}</Badge>
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{body}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
