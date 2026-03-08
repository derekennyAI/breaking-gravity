"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/consulting", label: "Consulting" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className={`font-display text-xl font-bold tracking-tight transition-colors ${
            scrolled ? "text-earth-900" : "text-white"
          }`}
        >
          BREAKING GRAVITY
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-earth-600 hover:text-terracotta"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/get-started" className="btn-primary !py-3 !px-6 text-xs">
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 transition-all ${
                scrolled ? "bg-earth-800" : "bg-white"
              } ${
                open && i === 0
                  ? "rotate-45 translate-y-2"
                  : open && i === 1
                  ? "opacity-0"
                  : open && i === 2
                  ? "-rotate-45 -translate-y-2"
                  : ""
              }`}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-earth-100 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-earth-700"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/get-started"
            onClick={() => setOpen(false)}
            className="btn-primary block text-center mt-4"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
