import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Nicoll — Breaking Gravity",
  description:
    "Meet Nicoll Mishel — professional coach, learning designer, and community connector. ICF certified with 150+ hours of coaching experience.",
};

const credentials = [
  {
    title: "Bachelor's Degree",
    detail:
      "BA in Child and Adolescent Development, Applied Developmental Science — California State University Northridge",
  },
  {
    title: "ICF Coaching Credential",
    detail:
      "Associate Certified Coach, International Coaching Federation — 150+ hours of adult coaching",
  },
  {
    title: "Professional Coaching Certification",
    detail:
      "Certified Professional Coaching, Institute of Professional Coaching — 320+ hours of training",
  },
  { title: "Zendo SIT Certification", detail: "" },
  { title: "Gallup StrengthsFinder Certification", detail: "" },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 bg-brand-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">
          <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Nicoll Mishel — empowerment coach and learning designer"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Meet Your Coach
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-8">
              About Nicoll
            </h1>
            <p className="text-stone-600 leading-relaxed mb-5">
              Nicoll Mishel is a professional coach, learning designer, and
              community connector, fueled by curiosity and a passion for
              connection. A traveler at heart, I find joy in the subtle, everyday
              nuances that make each corner of the world unique — whether it&apos;s the
              rhythm of a local market or the way a letter arrives in another
              country.
            </p>
            <p className="text-stone-600 leading-relaxed mb-5">
              As a coach and facilitator, my work centers on empowering people —
              especially women — to embrace their fullest selves, guiding them to
              discover new paths of growth and expression.
            </p>
            <p className="text-stone-600 leading-relaxed">
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

      {/* ─── Credentials ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 text-center">
            Credentials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 text-center mb-12">
            Training &amp; Certifications
          </h2>
          <div className="space-y-6">
            {credentials.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-brand-50 rounded-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-stone-900">{c.title}</h3>
                  {c.detail && (
                    <p className="text-sm text-stone-500 mt-1">{c.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Vision & Mission ─── */}
      <section className="section-padding bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-accent-light font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Vision
            </p>
            <h2 className="font-display text-3xl font-bold mb-6">
              Bolder, Braver, More Badass
            </h2>
            <p className="text-stone-300 leading-relaxed">
              I dream that Breaking Gravity will push the limits of our world, to
              create bolder, braver, more badass women out of all of us! So many
              of us women face barriers in ourselves, our relationships, our
              careers, and our communities. Breaking Gravity is here to challenge
              those barriers — through experiential learning, deep coaching, and
              the transformative power of facing fear head-on.
            </p>
          </div>
          <div>
            <p className="text-accent-light font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Mission
            </p>
            <h2 className="font-display text-3xl font-bold mb-6">
              Fear Into Power
            </h2>
            <p className="text-stone-300 leading-relaxed">
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
      <section className="section-padding bg-brand-50 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-stone-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-stone-600 leading-relaxed mb-10">
            Let&apos;s discover your Breaking Gravity moment and create lasting
            change — together.
          </p>
          <Link href="/get-started" className="btn-primary">
            Work with Nicoll
          </Link>
        </div>
      </section>
    </>
  );
}
