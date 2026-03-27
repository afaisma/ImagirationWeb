import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "POOZA Testimonials | ImagiRation",
  description: "Read what parents and children say about POOZA — the educational puzzle app.",
};

const testimonials = [
  {
    quote:
      "My four year old son loves these puzzles. I think he is getting better than me at solving them. Thank you for making this app!",
    author: "Parent",
  },
  {
    quote:
      "I really loved how this application made my daughter think outside the box. She is two years old and I am always looking for different types of mental stimuli for her.",
    author: "Parent",
  },
  {
    quote:
      "My five year old loves the app. Some puzzles are quite difficult. Sometimes I see how his brain is working hard. I think challenge is good for him!",
    author: "Parent",
  },
  {
    quote:
      "My son absolutely loves this app and I do too! we often spend time together working on the puzzle. It's a lot of fun with benefits: I've noticed significant improvement in concentration and attention.",
    author: "Parent",
  },
  {
    quote: "My son spent longer solving these puzzles than playing with some of his favorite toys.",
    author: "Parent",
  },
  {
    quote:
      "My son, 6, got a hang of it right away. Can't pull him away now. And it is good for his brain! Perfect.",
    author: "App Store Review",
  },
  {
    quote:
      "Really a great game for development of cognitive skills and unlike other puzzles we tried, my kids actually loved it. The images are fun and never boring. I find my 5 year old son keeping coming back to it.",
    author: "App Store Review",
  },
  {
    quote:
      "My 3 year old son made huge progress forward after using the application for 4 weeks. His focus and attention span has increased, he is listening better to stories, recognizing letters and numbers.",
    author: "Parent",
  },
  {
    quote: "I am 10 years old but i love this game.",
    author: "Young user",
  },
];

export default function PoozaTestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-amber-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Parent &amp; User Stories
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              POOZA Testimonials
            </h1>
            <p className="text-lg text-amber-100 leading-relaxed">
              Read what parents, caregivers, and children say about POOZA and its impact on learning.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col gap-4"
            >
              <p className="text-gray-700 leading-relaxed text-sm flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-amber-600">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Link to MITA Testimonials */}
      <section className="bg-amber-50 border-t border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
          <Link
            href="/autism/testimonials-for-mita"
            className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 text-lg"
          >
            Check out MITA Testimonials
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
