import Link from "next/link";
import { Hammer } from "lucide-react";
import { brand } from "@/lib/config/brand";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="bg-primary text-primary-foreground flex size-7 items-center justify-center rounded-lg">
        <Hammer className="size-4" aria-hidden />
      </span>
      {brand.name}
    </Link>
  );
}
