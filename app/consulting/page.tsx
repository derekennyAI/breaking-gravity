import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting Services — Breaking Gravity",
  description:
    "Individual coaching, learning design, strategic ideation, training & facilitation, events, and experiential skydiving programs. Partner with Nicoll Mishel.",
};

const services = [
  {
    num: "01",
    title: "Individual Coaching",
    description:
      "We will design your Breaking Gravity moment together. With deep assessments, authentic connection, and experiential learning, we will face fear and move past barriers towards personal and professional growth. Using values and Gallup StrengthsFinder assessment as a way to guide our work and your goals.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "02",
    title: "Learning Design",
    description:
      "I specialize in creating experiential learning programs that inspire curiosity and drive growth. Whether it's for clients, partners, employees, or teams, I create learning journeys that stick. Cohort-style training and learning design fuels me.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "03",
    title: "Strategic Ideation",
    description:
      "I help teams and individuals move from idea to action by asking the right questions and helping them see different perspectives. As an organizer for social change, I love sitting down with a group to brainstorm, ideate, strategize, and map out a plan that works.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "04",
    title: "Training & Facilitation",
    description:
      "I design and deliver impactful training sessions, whether for small teams or large conferences. My approach blends interactive exercises, real-world application, and the kind of energy that keeps people engaged and inspired long after the session ends.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "05",
    title: "Events & Gatherings",
    description:
      "From intimate retreats to large-scale events, I create experiences that bring people together in meaningful ways. Every gathering is designed with intention — to connect, to challenge, and to transform.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "06",
    title: "Experiential Skydiving",
    description:
      "The signature Breaking Gravity experience. This isn't just a skydive — it's a carefully designed coaching journey that culminates in a literal leap of faith. Face your fear at 14,000 feet and land as a different person.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-6">
            Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
            Consulting Services
          </h1>
          <p className="text-lg text-stone-600 leading-relaxed max-w-xl mx-auto">
            No matter what the container is, I&apos;m passionate about helping
            individuals and organizations learn, grow, and experience life fully
            and authentically. I bring empathy, strategic thinking, and an
            entrepreneurial fast-paced mindset to every project.
          </p>
          <p className="text-stone-700 font-medium mt-4">
            With me, you&apos;ll have a partner who cares deeply.
          </p>
        </div>
      </section>

      {/* ─── Services Grid ─── */}
      <section className="section-padding bg-brand-50 !pt-4">
        <div className="max-w-6xl mx-auto space-y-20">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? "md:direction" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-accent/30 font-display text-5xl font-bold">
                    {s.num}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-900">
                    {s.title}
                  </h2>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section-padding bg-stone-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-4xl font-bold mb-6">
            Let&apos;s Build Something Transformative
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed mb-10">
            Whether you need coaching, facilitation, learning design, or a bold
            experiential program — I&apos;d love to hear what you&apos;re working on.
          </p>
          <Link href="/get-started" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
