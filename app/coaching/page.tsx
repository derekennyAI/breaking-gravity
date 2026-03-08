import Link from "next/link";
import type { Metadata } from "next";
import { Flourish, EmbroideryBorder, FloralCorner } from "@/components/Flourish";

export const metadata: Metadata = {
  title: "Empowerment Coaching — Breaking Gravity",
  description:
    "Breaking Gravity pairs coaching with experiential learning. Turn fear into power with 1:1 coaching, your Breaking Gravity Moment, and integration support. $350.",
};

const steps = [
  {
    num: "01", title: "Your Values & Strengths", color: "from-sage-400 to-sage-600",
    description: "We first start out with understanding your values and what you care deeply about in your life. Thinking about your career, your visions, your dreams, and what is holding you back from getting there. Then we do a Gallup StrengthsFinder assessment to understand your strengths and talents and how they show up in your life.",
  },
  {
    num: "02", title: "Your Script & Barriers", color: "from-plum to-plum-dark",
    description: "Our next work is to discover where your barriers lie. With boldness, we think together about the things that make you feel alive. If time and money were not an issue, what would you do? We get to the nitty gritty and start to understand the stories you're telling yourself and how to break out of those scripts.",
  },
  {
    num: "03", title: "Your Breaking Gravity Moment", color: "from-terracotta to-terracotta-dark",
    description: "This is the experiential learning piece — your bold, immersive moment designed to crack through the barrier. Whether it's skydiving, public speaking, or something uniquely yours, this is where fear becomes fuel and everything shifts.",
  },
  {
    num: "04", title: "Integration & Growth", color: "from-gold-dark to-gold",
    description: "After your Breaking Gravity moment, we come back together to process, integrate, and build on the breakthrough. With accountability tools and follow-up coaching, we make sure the transformation sticks and becomes part of your daily life.",
  },
];

export default function CoachingPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-plum-dark/80 via-terracotta-dark/60 to-earth-900/90" />
        <FloralCorner className="absolute top-4 left-4 opacity-50" />
        <FloralCorner className="absolute top-4 right-4 opacity-50" flip />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <Flourish className="mb-8" color="#d4a24e" />
          <p className="text-gold-light font-semibold text-sm uppercase tracking-[0.2em] mb-6">
            The Program
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Empowerment <span className="text-gold-light italic">Coaching</span>
          </h1>
          <p className="text-xl text-earth-200 leading-relaxed max-w-xl mx-auto">
            Breaking Gravity pairs coaching with experiential learning to help
            you get where you need to go. Together we will turn your fear into a
            source of power, to grow and make lasting change.
          </p>
          <p className="mt-6 text-terracotta-light font-display font-medium italic text-lg">
            aka Go Metaphorically Skydiving!
          </p>
          <Flourish className="mt-8" color="#d4a24e" />
        </div>
      </section>

      <EmbroideryBorder />

      {/* ─── How It Works ─── */}
      <section className="section-padding gradient-warm bg-embroidery">
        <div className="max-w-4xl mx-auto">
          <p className="text-terracotta font-semibold text-sm uppercase tracking-[0.2em] mb-4 text-center">
            The Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 text-center mb-4">
            How Does It Work?
          </h2>
          <Flourish className="mb-6" color="#c45d3e" />
          <p className="text-earth-500 text-center max-w-xl mx-auto mb-16">
            In order to embrace your fullest expression and facilitate your
            personal, soul, and professional growth, we will design your
            Breaking Gravity Moment together.
          </p>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 md:gap-8 items-start bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-earth-100 hover:border-gold/30 transition-all hover:shadow-lg">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <span className="text-white font-display text-2xl font-bold">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-earth-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-earth-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color band */}
      <div className="h-2 bg-gradient-to-r from-sage-500 via-terracotta to-gold" />

      {/* ─── What You Get ─── */}
      <section className="section-padding bg-sage-50 bg-embroidery">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold-dark font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Investment
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-earth-900 mb-4">
            What You Get
          </h2>
          <Flourish className="mb-12" color="#d4a24e" />

          <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 border border-gold/20 relative overflow-hidden">
            <FloralCorner className="absolute top-0 left-0 opacity-30" />
            <FloralCorner className="absolute top-0 right-0 opacity-30" flip />
            <div className="relative space-y-4 text-left mb-10">
              {[
                "1:1 Intro Coaching Sessions",
                "The Breaking Gravity Moment — your immersive experiential breakthrough",
                "1:1 Integration Coaching Sessions",
                "Gallup StrengthsFinder Assessment",
                "Accountability & replication tools",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-terracotta to-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-earth-700">{item}</span>
                </div>
              ))}
            </div>

            <Flourish className="mb-8" color="#d4a24e" />

            <div className="font-display text-5xl font-bold text-earth-900 mb-2">
              <span className="text-terracotta">$</span>350
            </div>
            <p className="text-sm text-earth-500 mb-8">
              Full program · Non-refundable — because we&apos;re committing to
              breaking barriers, and that commitment is priceless.
            </p>
            <Link href="/get-started" className="btn-primary">
              I&apos;m Ready — Let&apos;s Go
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
