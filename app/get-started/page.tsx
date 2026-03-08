"use client";
import { useState } from "react";
import type { Metadata } from "next";

export default function GetStartedPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-32 pb-20 min-h-screen bg-brand-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-accent font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Take the Leap
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
              Get Started
            </h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-xl mx-auto">
              Ready to break through your barriers? Tell me a little about
              yourself and what you&apos;re looking for. I&apos;ll be in touch within 48
              hours.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-stone-900 mb-4">
                You&apos;re on Your Way
              </h2>
              <p className="text-stone-600">
                Thank you for reaching out. I&apos;ll review your message and get back
                to you within 48 hours. In the meantime, take a deep breath — your
                Breaking Gravity moment is closer than you think.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                // In production, this would POST to an API
                // For now, mailto fallback
                const name = data.get("name");
                const email = data.get("email");
                const interest = data.get("interest");
                const message = data.get("message");
                window.location.href = `mailto:nicoll@breaking-gravity.com?subject=New inquiry from ${name}&body=Name: ${name}%0AEmail: ${email}%0AInterested in: ${interest}%0A%0A${message}`;
                setSubmitted(true);
              }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-stone-800"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-stone-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-stone-800"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="interest"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  What are you interested in?
                </label>
                <select
                  id="interest"
                  name="interest"
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-stone-800 bg-white"
                >
                  <option value="empowerment-coaching">
                    Empowerment Coaching (1:1)
                  </option>
                  <option value="learning-design">Learning Design</option>
                  <option value="strategic-ideation">Strategic Ideation</option>
                  <option value="training-facilitation">
                    Training &amp; Facilitation
                  </option>
                  <option value="events">Events &amp; Gatherings</option>
                  <option value="skydiving">
                    Experiential Skydiving Program
                  </option>
                  <option value="not-sure">Not sure yet — let&apos;s talk</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-stone-700 mb-2"
                >
                  Tell me a bit about what&apos;s holding you back
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-stone-800 resize-none"
                  placeholder="What barriers are you facing? What would breaking through look like for you?"
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full text-center !py-4"
              >
                Send My Message
              </button>

              <p className="text-xs text-stone-400 text-center">
                Or email directly:{" "}
                <a
                  href="mailto:nicoll@breaking-gravity.com"
                  className="text-accent hover:underline"
                >
                  nicoll@breaking-gravity.com
                </a>
              </p>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
