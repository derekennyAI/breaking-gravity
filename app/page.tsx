import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center justify-center bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1601024445121-e5b82f020549?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900" />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <p className="text-accent-light font-semibold text-sm uppercase tracking-[0.25em] mb-6">
            Empowerment Coaching &amp; Experiential Learning
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
            Breaking
            <br />
            Gravity
          </h1>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-xl mx-auto mb-10">
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
              className="inline-block border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-sm tracking-wide uppercase hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ─── What We Do ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              What We Do
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
              Empowerment
              <br />
              Coaching
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Breaking Gravity&apos;s one-of-a-kind empowerment coaching and
              experiential learning program is designed to break through the barriers
              that hold you back. Together, we will turn fear into a source of power
              — to grow and make lasting change.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
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
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=800&q=80"
                alt="Skydiving — facing fear and breaking through barriers"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full -z-10" />
          </div>
        </div>
      </section>

      {/* ─── Who We Are ─── */}
      <section className="section-padding bg-brand-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                alt="Nicoll Mishel — empowerment coach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Who I Am
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
              Meet Nicoll
            </h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Hello, I&apos;m Nicoll. As a professional coach, learning designer, and
              community connector with vast experience in coaching, training, and
              leading transformative gatherings, I am devoted to empowering your
              personal and professional growth.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6">
              From my childhood in California and Mexico, to my experiences as a
              young woman traveling solo across the globe and searching for my
              path, I know how difficult it can be to break through our blocks,
              scripts, and social constraints — especially for us women.
            </p>
            <p className="text-stone-700 font-medium italic text-lg leading-relaxed mb-8">
              &ldquo;Skydiving did it for me — and I think it will for you too.&rdquo;
            </p>
            <Link href="/about" className="btn-outline">
              Read My Full Story
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA Band ─── */}
      <section className="relative py-28 bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto text-center px-6">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Ready to Break Through?
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed mb-10">
            While growth and healing aren&apos;t linear, powerful and joyful shifts can
            spring from facing fear. Let&apos;s design your Breaking Gravity moment
            together.
          </p>
          <Link href="/get-started" className="btn-primary">
            Take the Leap
          </Link>
        </div>
      </section>
    </>
  );
}
