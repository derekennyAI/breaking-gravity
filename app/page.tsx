import Link from "next/link";
import { Flourish, FloralCorner, EmbroideryBorder } from "@/components/Flourish";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601024445121-e5b82f020549?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-plum-dark/70 via-earth-900/60 to-earth-900/90" />

        {/* Decorative corners */}
        <FloralCorner className="absolute top-4 left-4 opacity-60" />
        <FloralCorner className="absolute top-4 right-4 opacity-60" flip />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <Flourish className="mb-8" color="#d4a24e" />
          <p className="text-gold-light font-semibold text-sm uppercase tracking-[0.3em] mb-6">
            Empowerment Coaching &amp; Experiential Learning
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-8 text-white">
            Breaking
            <span className="block text-gold-light italic">Gravity</span>
          </h1>
          <p className="text-lg md:text-xl text-earth-200 leading-relaxed max-w-xl mx-auto mb-10">
            With years of experience in coaching, training, facilitating, and
            creating meaningful connections, I&apos;m passionate about guiding your
            personal and professional growth with strategies that truly work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-started" className="btn-primary">
              Let&apos;s Get Started
            </Link>
            <Link
              href="/coaching"
              className="inline-block border-2 border-gold/40 text-gold-light px-8 py-4 rounded-full font-semibold text-sm tracking-wide uppercase hover:bg-gold/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
          <Flourish className="mt-12" color="#d4a24e" />
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gold/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ─── Embroidery divider ─── */}
      <EmbroideryBorder />

      {/* ─── What We Do ─── */}
      <section className="section-padding gradient-warm bg-embroidery">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-terracotta font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              What I Do
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 leading-tight mb-6">
              Empowerment
              <span className="text-terracotta"> Coaching</span>
            </h2>
            <Flourish className="!justify-start mb-6" color="#c45d3e" />
            <p className="text-earth-600 leading-relaxed mb-6">
              Breaking Gravity&apos;s one-of-a-kind empowerment coaching and
              experiential learning program is designed to break through the barriers
              that hold you back. Together, we will turn fear into a source of power
              — to grow and make lasting change.
            </p>
            <p className="text-earth-600 leading-relaxed mb-8">
              You and I will design an original, immersive coaching program and
              learning experience personal to you and your barriers. Together we
              will reach your Breaking Gravity moment and follow through on your
              growth with accountability and replication tools.
            </p>
            <Link href="/coaching" className="btn-primary">
              Explore Coaching
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-terracotta/20 via-gold/10 to-sage-200/30 rounded-3xl" />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50">
              <img
                src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80"
                alt="Skydiving — facing fear and breaking through barriers"
                className="w-full h-full object-cover"
              />
            </div>
            <FloralCorner className="absolute -bottom-8 -right-8 rotate-180 opacity-40" />
          </div>
        </div>
      </section>

      {/* ─── Color band ─── */}
      <div className="h-2 bg-gradient-to-r from-terracotta via-gold to-plum" />

      {/* ─── Who I Am ─── */}
      <section className="section-padding bg-sage-50 bg-embroidery">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-sage-200/40 via-gold/10 to-plum/10 rounded-3xl" />
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-4 ring-white/50">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Nicoll Mishel — empowerment coach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-sage-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Who I Am
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-earth-900 leading-tight mb-6">
              Meet <span className="text-plum">Nicoll</span>
            </h2>
            <Flourish className="!justify-start mb-6" color="#7b4a6e" />
            <p className="text-earth-600 leading-relaxed mb-6">
              Hello, I&apos;m Nicoll. As a professional coach, learning designer, and
              community connector with vast experience in coaching, training, and
              leading transformative gatherings, I am devoted to empowering your
              personal and professional growth.
            </p>
            <p className="text-earth-600 leading-relaxed mb-6">
              From my childhood in California and Mexico, to my experiences as a
              young woman traveling solo across the globe and searching for my
              path, I know how difficult it can be to break through our blocks,
              scripts, and social constraints — especially for us women.
            </p>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border-l-4 border-gold mb-8">
              <p className="text-earth-800 font-display italic text-lg leading-relaxed">
                &ldquo;Skydiving did it for me — and I think it will for you too.&rdquo;
              </p>
            </div>
            <Link href="/about" className="btn-outline">
              Read My Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─── */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-plum-dark/80 via-terracotta-dark/70 to-plum-dark/80" />
        <FloralCorner className="absolute top-0 left-0 opacity-40" />
        <FloralCorner className="absolute bottom-0 right-0 rotate-180 opacity-40" />
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <Flourish className="mb-8" color="#d4a24e" />
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to <span className="text-gold-light italic">Break Through</span>?
          </h2>
          <p className="text-earth-200 text-lg leading-relaxed mb-10">
            While growth and healing aren&apos;t linear, powerful and joyful shifts can
            spring from facing fear. Let&apos;s design your Breaking Gravity moment
            together.
          </p>
          <Link href="/get-started" className="btn-gold">
            Take the Leap
          </Link>
          <Flourish className="mt-10" color="#d4a24e" />
        </div>
      </section>
    </>
  );
}
