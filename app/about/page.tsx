import Link from "next/link";
import type { Metadata } from "next";
import { Flourish, EmbroideryBorder, FloralCorner } from "@/components/Flourish";

export const metadata: Metadata = {
  title: "About Nicoll — Breaking Gravity",
  description:
    "Meet Nicoll Mishel — professional coach, learning designer, and community connector. ICF certified with 150+ hours of coaching experience.",
};

const credentials = [
  {
    title: "Bachelor's Degree",
    detail: "BA in Child and Adolescent Development, Applied Developmental Science — California State University Northridge",
  },
  {
    title: "ICF Coaching Credential",
    detail: "Associate Certified Coach, International Coaching Federation — 150+ hours of adult coaching",
  },
  {
    title: "Professional Coaching Certification",
    detail: "Certified Professional Coaching, Institute of Professional Coaching — 320+ hours of training",
  },
  { title: "Zendo SIT Certification", detail: "" },
  { title: "Gallup StrengthsFinder Certification", detail: "" },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 gradient-rich text-white overflow-hidden">
        <div className="absolute inset-0 bg-embroidery opacity-30" />
        <FloralCorner className="absolute top-4 left-4 opacity-50" />
        <FloralCorner className="absolute top-4 right-4 opacity-50" flip />
        <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-plum/20 rounded-3xl" />
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-gold/20">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Nicoll Mishel — empowerment coach and learning designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <p className="text-gold-light font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Meet Your Coach
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-4">
              About <span className="text-gold-light italic">Nicoll</span>
            </h1>
            <Flourish className="!justify-start mb-6" color="#d4a24e" />
            <p className="text-earth-200 leading-relaxed mb-5">
              Nicoll Mishel is a professional coach, learning designer, and
              community connector, fueled by curiosity and a passion for
              connection. A traveler at heart, I find joy in the subtle, everyday
              nuances that make each corner of the world unique — whether it&apos;s the
              rhythm of a local market or the way a letter arrives in another country.
            </p>
            <p className="text-earth-200 leading-relaxed mb-5">
              As a coach and facilitator, my work centers on empowering people —
              especially women — to embrace their fullest selves, guiding them to
              discover new paths of growth and expression.
            </p>
            <p className="text-earth-300 leading-relaxed">
              From my childhood in California and Mexico, to my experiences as a
              young woman traveling solo across the globe and searching for my
              path, I know how difficult it can be to break through our blocks,
              scripts, and social constraints. While growth and healing aren&apos;t
              linear, I&apos;ve learned that powerful and joyful shifts can spring from
              facing fear.
            </p>
          </div>
        </div>
      </section>

      <EmbroideryBorder />

      {/* ─── Credentials ─── */}
      <section className="section-padding gradient-warm bg-embroidery">
        <div className="max-w-4xl mx-auto">
          <p className="text-terracotta font-semibold text-sm uppercase tracking-[0.2em] mb-4 text-center">
            Credentials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 text-center mb-4">
            Training &amp; Certifications
          </h2>
          <Flourish className="mb-12" color="#c45d3e" />
          <div className="space-y-4">
            {credentials.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-earth-100 hover:border-gold/30 transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-terracotta to-gold rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-earth-900">{c.title}</h3>
                  {c.detail && <p className="text-sm text-earth-500 mt-1">{c.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color band */}
      <div className="h-2 bg-gradient-to-r from-sage-500 via-gold to-terracotta" />

      {/* ─── Vision & Mission ─── */}
      <section className="section-padding bg-sage-50 bg-embroidery">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-sage-200">
            <p className="text-sage-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Vision
            </p>
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-4">
              Bolder, Braver, More <span className="text-plum">Badass</span>
            </h2>
            <Flourish className="!justify-start mb-6" color="#7b4a6e" />
            <p className="text-earth-600 leading-relaxed">
              I dream that Breaking Gravity will push the limits of our world, to
              create bolder, braver, more badass women out of all of us! So many
              of us women face barriers in ourselves, our relationships, our
              careers, and our communities. Breaking Gravity is here to challenge
              those barriers — through experiential learning, deep coaching, and
              the transformative power of facing fear head-on.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-sage-200">
            <p className="text-terracotta font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Mission
            </p>
            <h2 className="font-display text-3xl font-bold text-earth-900 mb-4">
              Fear Into <span className="text-terracotta">Power</span>
            </h2>
            <Flourish className="!justify-start mb-6" color="#c45d3e" />
            <p className="text-earth-600 leading-relaxed">
              To empower women to break through personal and professional barriers
              by pairing deep coaching with bold, experiential moments — turning
              fear into fuel for lasting transformation. Based in Colorado with my
              fluffy dog Margo, I am constantly seeking new experiences, always
              open to the unexpected lessons the world has to offer.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-plum-dark via-terracotta-dark to-plum-dark" />
        <div className="absolute inset-0 bg-embroidery opacity-20" />
        <div className="relative max-w-2xl mx-auto text-center">
          <Flourish className="mb-8" color="#d4a24e" />
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-earth-200 leading-relaxed mb-10">
            Let&apos;s discover your Breaking Gravity moment and create lasting
            change — together.
          </p>
          <Link href="/get-started" className="btn-gold">
            Work with Nicoll
          </Link>
        </div>
      </section>
    </>
  );
}
