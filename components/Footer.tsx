import Link from "next/link";
import { EmbroideryBorder } from "./Flourish";

export default function Footer() {
  return (
    <footer className="gradient-rich text-earth-300">
      <EmbroideryBorder />
      <div className="section-padding !py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-display text-2xl text-white mb-4">Breaking Gravity</h3>
            <p className="text-sm leading-relaxed text-earth-400">
              Empowerment coaching and experiential learning. Turn fear into power
              and make lasting change.
            </p>
          </div>
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Pages
            </h4>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Nicoll" },
                { href: "/coaching", label: "Coaching" },
                { href: "/consulting", label: "Consulting" },
                { href: "/get-started", label: "Get Started" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-sm hover:text-terracotta-light transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <a
              href="mailto:nicoll@breaking-gravity.com"
              className="text-sm hover:text-terracotta-light transition-colors"
            >
              nicoll@breaking-gravity.com
            </a>
            <p className="text-xs mt-8 text-earth-500">
              © {new Date().getFullYear()} Breaking Gravity. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
