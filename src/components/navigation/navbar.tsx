"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/layout";
import { primaryNavItems } from "@/config/navigation";

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);
    return () => window.removeEventListener("keydown", onEscape);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-transparent">
      <Container>
        <div
          className={`nav-shell flex h-16 items-center justify-between rounded-b-2xl px-1 ${
            isScrolled ? "nav-shell-scrolled" : ""
          }`}
        >
          <Link href="/" className="text-lg font-semibold tracking-tight">
            DocuSpark
          </Link>
          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {primaryNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="ui-transition focus-ring rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
              >
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
            {isMobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <div
        className={`fixed inset-0 z-40 bg-zinc-950/30 md:hidden ${isMobileOpen ? "block" : "hidden"}`}
        onClick={() => setIsMobileOpen(false)}
      />
      <div
        id="mobile-menu-panel"
        className={`fixed right-0 top-0 z-50 h-dvh w-72 border-l border-zinc-200 bg-white p-6 shadow-lg transition-transform duration-150 ease-out md:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav aria-label="Mobile primary" className="mt-10 flex flex-col gap-2">
          {primaryNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-zinc-800"
              onClick={() => setIsMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
