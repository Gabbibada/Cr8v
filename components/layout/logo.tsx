import Link from "next/link";
import { Hammer } from "lucide-react";
import { brand } from "@/lib/config/brand";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-[1.05rem] font-semibold tracking-tight">
      <span className="bg-brand text-brand-foreground flex size-8 rotate-[-8deg] items-center justify-center rounded-xl shadow-sm">
        <Hammer className="size-4" aria-hidden />
      </span>
      {brand.name}
    </Link>
  );
}
