import { Suspense } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Logo } from "./logo";
import { UserNav } from "./user-nav";

const NAV = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#categories", label: "Categories" },
  { href: "/#for-pros", label: "For pros" },
];

export function SiteHeader() {
  return (
    <header className="bg-background/85 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="text-muted-foreground hidden items-center gap-6 text-sm md:flex">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-foreground transition-colors">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <Suspense fallback={<Skeleton className="h-8 w-32" />}>
          <UserNav />
        </Suspense>
      </div>
    </header>
  );
}
