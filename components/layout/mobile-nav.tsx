"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="bg-card md:hidden" aria-label="Open menu">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="rounded-b-3xl px-6 pt-6 pb-8">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav className="mt-8 grid gap-1">
          {NAV_LINKS.map((item) => (
            <SheetClose key={item.href} asChild>
              <Link href={item.href} className="text-display rounded-xl py-2 text-3xl">
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>
        <div className="mt-6 flex items-center gap-3 border-t pt-6 text-sm">
          <ThemeToggle />
          Light or dark mode
        </div>
      </SheetContent>
    </Sheet>
  );
}
