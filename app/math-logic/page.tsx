import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Math & Logic – Kids Brain Games | ImagiRation",
  description:
    "Adaptive math and logic education games, art activities and learning puzzles for preschoolers to age 10. Free brain training app by ImagiRation.",
};

const features = [
  {
    img: "https://imagiration.com/wp-content/uploads/2014/03/i_educational_elephant_pink.png",
    title: "Fun & Educational",
    body: "Puzzles gradually increase in difficulty to facilitate brain training",
  },
  {
    img: "https://imagiration.com/wp-content/uploads/2014/03/i_interactive_s.png",
    title: "Simple Interactions",
    body: "Simple drag-and-drop mechanism makes it easy for toddlers and kids to touch and move objects",
  },
  {
    img: "https://imagiration.com/wp-content/uploads/2014/03/i_fun_smiley.png",
    title: "Friendly & Engaging",
    body: "Intuitive and friendly interface with beautiful graphics that every child will love",
  },
];

const researchImages = [
  {
    src: "https://imagiration.com/wp-content/uploads/2018/12/IQ-510x382.png",
    alt: "IQ improvement validated by research",
  },
  {
    src: "https://imagiration.com/wp-content/uploads/2018/12/improvereasoning-510x382.png",
    alt: "Improves reasoning",
  },
  {
    src: "https://imagiration.com/wp-content/uploads/2018/12/spatialthinking-510x382.png",
    alt: "Spatial thinking",
  },
  {
    src: "https://imagiration.com/wp-content/uploads/2018/12/validatedbyresearch-510x382.png",
    alt: "Validated by research",
  },
  {
    src: "https://imagiration.com/wp-content/uploads/2018/12/visualreasoning-510x382.png",
    alt: "Visual reasoning",
  },
];

export default function MathLogicPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-violet-200 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Brain Training App
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              Math &amp; Logic
            </h1>
            <p className="text-lg text-violet-100 leading-relaxed mb-8">
              Education Games, Art Activities and Learning Puzzles — Adaptive Brain Training for Preschoolers to Age 10.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://itunes.apple.com/us/app/id1439945439"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-50 transition-colors shadow"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.imagiration.math"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-violet-700 font-semibold rounded-xl hover:bg-violet-50 transition-colors shadow"
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

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="max-w-3xl">
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Introducing our exciting new app: <strong>Math &amp; Logic</strong> — Education Games, Art Activities and Learning Puzzles: Adaptive Brain Training for Preschoolers to Age 10.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            ImagiRation&apos;s free math and brain training program consists of fun and interactive puzzle games to help your child learn math and improve cognitive development.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            This app teaches your child through a variety of interactive learning activities including games, animations, art activities, and puzzles — all of which can be monitored by parents and administrators through the Progress Tracker.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="aspect-video w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/KlRbjKV00ac"
            title="Math & Logic Kids Brain Games"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-violet-50 border-y border-violet-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Why kids love it
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.img} alt={f.title} className="w-20 h-20 object-contain" />
                <h3 className="font-bold text-gray-900 text-lg">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research images */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Our Math &amp; Logic app is validated by research
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {researchImages.map((img) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              className="w-full rounded-xl shadow-sm"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Questions about our Math &amp; Logic app?
          </h2>
          <p className="text-gray-600 mb-7 max-w-xl mx-auto">
            Interested in learning more or have questions about our products? We&apos;d love to hear from you.
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
