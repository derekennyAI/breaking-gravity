import Link from "next/link";
import type { Metadata } from "next";
import { Flourish, EmbroideryBorder, FloralCorner } from "@/components/Flourish";

export const metadata: Metadata = {
  title: "Consulting Services — Breaking Gravity",
  description:
    "Individual coaching, learning design, strategic ideation, training & facilitation, events, and experiential skydiving programs.",
};

const services = [
  {
    num: "01", title: "Individual Coaching", accent: "terracotta",
    description: "We will design your Breaking Gravity moment together. With deep assessments, authentic connection, and experiential learning, we will face fear and move past barriers towards personal and professional growth. Using values and Gallup StrengthsFinder assessment as a way to guide our work and your goals.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "02", title: "Learning Design", accent: "sage-600",
    description: "I specialize in creating experiential learning programs that inspire curiosity and drive growth. Whether it's for clients, partners, employees, or teams, I create learning journeys that stick. Cohort-style training and learning design fuels me.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "03", title: "Strategic Ideation", accent: "plum",
    description: "I help teams and individuals move from idea to action by asking the right questions and helping them see different perspectives. As an organizer for social change, I love sitting down with a group to brainstorm, ideate, strategize, and map out a plan that works.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "04", title: "Training & Facilitation", accent: "gold-dark",
    description: "I design and deliver impactful training sessions, whether for small teams or large conferences. My approach blends interactive exercises, real-world application, and the kind of energy that keeps people engaged and inspired long after the session ends.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "05", title: "Events & Gatherings", accent: "terracotta",
    description: "From intimate retreats to large-scale events, I create experiences that bring people together in meaningful ways. Every gathering is designed with intention — to connect, to challenge, and to transform.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "06", title: "Experiential Skydiving", accent: "plum",
    description: "The signature Breaking Gravity experience. This isn't just a skydive — it's a carefully designed coaching journey that culminates in a literal leap of faith. Face your fear at 14,000 feet and land as a different person.",
    image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ConsultingPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-20 gradient-rich text-white overflow-hidden">
        <div className="absolute inset-0 bg-embroidery opacity-20" />
        <FloralCorner className="absolute top-4 left-4 opacity-50" />
        <FloralCorner className="absolute top-4 right-4 opacity-50" flip />
        <div className="relative max-w-3xl mx-auto text-center px-6">
          <Flourish className="mb-8" color="#d4a24e" />
          <p className="text-gold-light font-semibold text-sm uppercase tracking-[0.2em] mb-6">
            Services
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
            Consulting <span className="text-gold-light italic">Services</span>
          </h1>
          <p className="text-lg text-earth-200 leading-relaxed max-w-xl mx-auto">
            No matter what the container is, I&apos;m passionate about helping
            individuals and organizations learn, grow, and experience life fully
            and authentically. I bring empathy, strategic thinking, and an
            entrepreneurial fast-paced mindset to every project.
          </p>
          <p className="text-gold-light font-medium mt-4 font-display italic">
            With me, you&apos;ll have a partner who cares deeply.
          </p>
          <Flourish className="mt-8" color="#d4a24e" />
        </div>
      </section>

      <EmbroideryBorder />

      {/* ─── Services ─── */}
      <section className="section-padding gradient-warm bg-embroidery">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`grid md:grid-cols-2 gap-12 items-center`}
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <span className={`text-${s.accent}/30 font-display text-5xl font-bold`}>
                    {s.num}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-earth-900">
                    {s.title}
                  </h2>
                </div>
                <Flourish className="!justify-start mb-4" color={s.accent === "terracotta" ? "#c45d3e" : s.accent === "plum" ? "#7b4a6e" : s.accent === "sage-600" ? "#3f5f3f" : "#b8862e"} />
                <p className="text-earth-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <div className="relative">
                  <div className={`absolute -inset-3 bg-gradient-to-br ${i % 3 === 0 ? "from-terracotta/20 to-gold/10" : i % 3 === 1 ? "from-sage-200/40 to-plum/10" : "from-gold/20 to-terracotta/10"} rounded-2xl`} />
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-2 ring-white/50">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative section-padding overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-plum-dark via-terracotta-dark to-plum-dark" />
        <div className="absolute inset-0 bg-embroidery opacity-15" />
        <div className="relative max-w-2xl mx-auto">
          <Flourish className="mb-8" color="#d4a24e" />
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Let&apos;s Build Something <span className="text-gold-light italic">Transformative</span>
          </h2>
          <p className="text-earth-200 text-lg leading-relaxed mb-10">
            Whether you need coaching, facilitation, learning design, or a bold
            experiential program — I&apos;d love to hear what you&apos;re working on.
          </p>
          <Link href="/get-started" className="btn-gold">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
