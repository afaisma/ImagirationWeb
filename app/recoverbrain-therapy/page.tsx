import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RecoverBrain Therapy for Aphasia, Stroke, Dementia | ImagiRation",
  description:
    "Language Comprehension & Cognitive Therapy for Aphasia, Stroke, Dementia & Alzheimer's Disease. Adaptive training modules for all rehabilitation phases.",
};

const features = [
  "Each activity is adaptive and delivers exercises at the exact level of difficulty appropriate for you at any given point in time",
  "Simple drag-and-drop mechanism makes it easy to touch and move objects",
  "Intuitive and friendly interface with beautiful graphics that everyone will love",
];

const cognitiveFields = [
  "Language comprehension",
  "Comprehension of complex sentences",
  "Understanding of grammar",
  "Attention",
  "Alertness",
  "Responsiveness",
  "Neglect",
  "Memory",
  "Executive function",
  "Visual field",
  "Attention to details",
  "Auditory working memory",
];

export default function RecoverBrainPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-600 to-pink-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-rose-200 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Cognitive Rehabilitation
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              RecoverBrain Therapy
            </h1>
            <p className="text-lg text-rose-100 leading-relaxed mb-8">
              Language Comprehension &amp; Cognitive Therapy for Aphasia, Stroke, Dementia &amp; Alzheimer&apos;s Disease.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://itunes.apple.com/gb/app/id1442101626"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-rose-700 font-semibold rounded-xl hover:bg-rose-50 transition-colors shadow"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.imagiration.aphasia&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-rose-700 font-semibold rounded-xl hover:bg-rose-50 transition-colors shadow"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* App screenshot */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://imagiration.com/wp-content/uploads/2018/12/2732x2048.png"
              alt="RecoverBrain Therapy app screenshot"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Individualized cognitive therapy
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              During all rehabilitation phases, people need specific and target-oriented cognitive training according to their personal needs. RecoverBrain offers individualized solutions for language comprehension and cognitive therapy.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Various training modules are available for easy use in the following cognitive fields:
            </p>
            <div className="grid grid-cols-2 gap-2">
              {cognitiveFields.map((field) => (
                <div key={field} className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                  {field}
                </div>
              ))}
              <div className="flex items-center gap-2 text-sm text-gray-500 italic col-span-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-300 flex-shrink-0" />
                and more
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adaptive training */}
      <section className="bg-rose-50 border-y border-rose-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
              Adaptive &amp; structured approach
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              Each training module inside <em>RecoverBrain</em> is adaptive and delivers exercises that are at the exact level of difficulty appropriate for you at any given point in time.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              <em>RecoverBrain</em> provides a structured approach to cognitive therapy, with a set number of training modules in each daily session.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Designed for ease of use
        </h2>
        <ul className="space-y-4 max-w-2xl">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-xs font-bold">✓</span>
              <span className="text-gray-700 leading-relaxed">{f}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Questions about RecoverBrain Therapy?
          </h2>
          <p className="text-gray-600 mb-7 max-w-xl mx-auto">
            We&apos;d love to hear from you. Reach out with any questions about our products.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
