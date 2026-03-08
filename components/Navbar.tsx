"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/coaching", label: "Coaching" },
  { href: "/consulting", label: "Consulting" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="font-display text-xl font-bold tracking-tight text-stone-900">
          BREAKING GRAVITY
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
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
          <span className={`block w-6 h-0.5 bg-stone-800 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-stone-800 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-stone-800 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-stone-100 px-6 py-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-medium text-stone-700"
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
