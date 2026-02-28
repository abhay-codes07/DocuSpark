"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Container } from "@/components/layout";
import { primaryNavItems } from "@/config/navigation";

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

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
          <button
            type="button"
            className="focus-ring ui-transition inline-flex size-10 items-center justify-center rounded-xl border border-zinc-200 md:hidden"
            aria-label="Toggle menu"
            aria-controls="mobile-menu-panel"
            aria-expanded={isMobileOpen}
            onClick={() => setIsMobileOpen((value) => !value)}
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </header>
  );
}
