import Link from "next/link";
import { brand } from "@/lib/config/brand";
import { Logo } from "./logo";

type FooterLink = { label: string; href?: string; badge?: "New" | "Soon" };

const COLUMNS: { title: string; links: FooterLink[] }[] = [
  {
    title: "Hire",
    links: [
      { label: "How it works", href: "/how-it-works" },
      { label: "Categories", href: "/#categories" },
      { label: "Payment protection", href: "/trust" },
      { label: "Post a job", badge: "Soon" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Become a pro", href: "/pros" },
      { label: "Founding Pro offer", href: "/pros#founding", badge: "New" },
      { label: "Fees for pros", badge: "Soon" },
    ],
  },
  {
    title: brand.name,
    links: [
      { label: "About", href: "/about" },
      { label: "Trust & safety", href: "/trust" },
      { label: "Privacy", badge: "Soon" },
      { label: "Terms", badge: "Soon" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="px-3 pb-3 sm:px-4 sm:pb-4 lg:px-6 lg:pb-6">
      <div className="bg-muted grid w-full gap-12 rounded-[2rem] px-6 py-12 sm:px-10 md:grid-cols-[1.2fr_2fr] lg:px-14">
        <div className="grid content-start gap-4">
          <Logo />
          <p className="text-display text-3xl">{brand.tagline}</p>
          <p className="text-muted-foreground max-w-xs text-sm">
            On-site in Doncaster, Sheffield and Manchester. Remote work across the UK.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h2 className="text-muted-foreground mb-4 text-sm">{column.title}</h2>
              <ul className="grid gap-3 text-sm font-medium">
                {column.links.map(({ label, href, badge }) => (
                  <li key={label} className="flex items-center gap-2">
                    {href ? (
                      <Link href={href} className="hover:text-brand transition-colors">
                        {label}
                      </Link>
                    ) : (
                      <span className="text-muted-foreground">{label}</span>
                    )}
                    {badge && (
                      <span
                        className={
                          badge === "New"
                            ? "bg-brand/15 text-brand rounded-md px-1.5 py-0.5 text-[0.7rem]"
                            : "text-muted-foreground rounded-md border px-1.5 py-0.5 text-[0.7rem]"
                        }
                      >
                        {badge}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-muted-foreground text-xs md:col-span-2">© {brand.name}. Photos from Unsplash.</p>
      </div>
    </footer>
  );
}
