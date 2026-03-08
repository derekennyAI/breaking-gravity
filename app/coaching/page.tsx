import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empowerment Coaching — Breaking Gravity",
  description:
    "Breaking Gravity pairs coaching with experiential learning. Turn fear into power with 1:1 coaching sessions, your Breaking Gravity Moment, and integration support. $350.",
};

const steps = [
  {
    num: "01",
    title: "Your Values & Strengths",
    description:
      "We first start out with understanding your values and what you care deeply about in your life. Thinking about your career, your visions, your dreams, and what is holding you back from getting there. Then we do a Gallup StrengthsFinder assessment to understand your strengths and talents and how they show up in your life.",
  },
  {
    num: "02",
    title: "Your Script & Barriers",
    description:
      "Our next work is to discover where your barriers lie. With boldness, we think together about the things that make you feel alive. If time and money were not an issue, what would you do? We get to the nitty gritty and start to understand the stories you're telling yourself and how to break out of those scripts.",
  },
  {
    num: "03",
    title: "Your Breaking Gravity Moment",
    description:
      "This is the experiential learning piece — your bold, immersive moment designed to crack through the barrier. Whether it's skydiving, public speaking, or something uniquely yours, this is where fear becomes fuel and everything shifts.",
  },
  {
    num: "04",
    title: "Integration & Growth",
    description:
      "After your Breaking Gravity moment, we come back together to process, integrate, and build on the breakthrough. With accountability tools and follow-up coaching, we make sure the transformation sticks and becomes part of your daily life.",
  },
];

export default function CoachingPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 bg-stone-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <p className="text-accent-light font-semibold text-sm uppercase tracking-[0.2em] mb-6">
            The Program
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold leading-tight mb-6">
            Empowerment Coaching
          </h1>
          <p className="text-xl text-stone-300 leading-relaxed max-w-xl mx-auto">
            Breaking Gravity pairs coaching with experiential learning to help
            you get where you need to go. Together we will turn your fear into a
            source of power, to grow and make lasting change.
          </p>
          <p className="mt-6 text-accent-light font-medium italic text-lg">
            aka Go Metaphorically Skydiving!
          </p>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4 text-center">
            The Process
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 text-center mb-4">
            How Does It Work?
          </h2>
          <p className="text-stone-500 text-center max-w-xl mx-auto mb-16">
            In order to embrace your fullest expression and facilitate your
            personal, soul, and professional growth, we will design your
            Breaking Gravity Moment together.
          </p>

          <div className="space-y-12">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-8 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <span className="text-accent font-display text-2xl font-bold">
                    {step.num}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-stone-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What You Get ─── */}
      <section className="section-padding bg-brand-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Investment
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-900 mb-12">
            What You Get
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14">
            <div className="space-y-4 text-left mb-10">
              {[
                "1:1 Intro Coaching Sessions",
                "The Breaking Gravity Moment — your immersive experiential breakthrough",
                "1:1 Integration Coaching Sessions",
                "Gallup StrengthsFinder Assessment",
                "Accountability & replication tools",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-stone-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-stone-200 pt-8">
              <div className="font-display text-5xl font-bold text-stone-900 mb-2">
                $350
              </div>
              <p className="text-sm text-stone-500 mb-8">
                Full program · Non-refundable — because we&apos;re committing to
                breaking barriers, and that commitment is priceless.
              </p>
              <Link href="/get-started" className="btn-primary">
                I&apos;m Ready — Let&apos;s Go
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
