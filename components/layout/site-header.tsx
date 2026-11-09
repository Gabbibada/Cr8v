import { Suspense } from "react";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { NAV_LINKS } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { UserNav } from "./user-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-3 pt-3 sm:px-4 lg:px-6">
      <div className="bg-background/75 flex h-14 w-full items-center justify-between gap-4 rounded-full border px-2 pl-4 shadow-[0_8px_30px_-12px_rgb(0_0_0/0.15)] backdrop-blur-xl">
        <Logo />
        <nav className="hidden items-center gap-1 text-sm md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-full px-3 py-1.5 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <ThemeToggle className="hidden md:inline-flex" />
          <Suspense fallback={<Skeleton className="h-9 w-28 rounded-full" />}>
            <UserNav />
          </Suspense>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
