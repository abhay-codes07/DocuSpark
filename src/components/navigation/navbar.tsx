"use client";

import Link from "next/link";
import { Container } from "@/components/layout";
import { primaryNavItems } from "@/config/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            DocuSpark
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {primaryNavItems.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-2 text-sm font-medium">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
