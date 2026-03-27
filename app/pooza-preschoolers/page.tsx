import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pooza for Preschoolers | ImagiRation",
  description:
    "Fun and educational puzzles for preschoolers. Designed to improve concentration, reasoning, cognitive development and visual & spatial processing.",
};

const features = [
  "Puzzles gradually increase in difficulty to facilitate brain training",
  "Simple drag-and-drop mechanism makes it easy for toddlers and kids to touch and move objects",
  "Intuitive and friendly interface with beautiful graphics that every child will love",
];

const puzzleImages = [
  {
    src: "https://imagiration.com/wp-content/uploads/2014/03/IMG_0059.png",
    alt: "Pooza puzzle example",
  },
  {
    src: "https://imagiration.com/wp-content/uploads/2014/03/IMG_0063.png",
    alt: "Pooza puzzle cats",
  },
  {
    src: "https://imagiration.com/wp-content/uploads/2014/11/IMG_0064.png",
    alt: "Pooza puzzle sorting",
  },
  {
    src: "https://imagiration.com/wp-content/uploads/2014/11/IMG_0065.png",
    alt: "Pooza puzzle giraffe",
  },
  {
    src: "https://imagiration.com/wp-content/uploads/2014/11/IMG_0071.png",
    alt: "Pooza puzzle activity",
  },
  {
    src: "https://imagiration.com/wp-content/uploads/2014/11/IMG_0077.png",
    alt: "Pooza puzzle activity 2",
  },
  {
    src: "https://imagiration.com/wp-content/uploads/2014/11/IMG_0084.png",
    alt: "Pooza puzzle activity 3",
  },
];

export default function PoozaPreschoolersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-amber-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Fun and Educational Puzzles
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              POOZA for Preschoolers
            </h1>
            <p className="text-lg text-amber-100 leading-relaxed mb-8">
              Educational puzzles designed to improve your child&apos;s concentration &amp; learning abilities, reasoning &amp; logic skills, cognitive development, and visual &amp; spatial processing — in a fun, game environment.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://itunes.apple.com/gb/app/id921324035"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-amber-700 font-semibold rounded-xl hover:bg-amber-50 transition-colors shadow"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.imagiRation.imagiRation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-amber-700 font-semibold rounded-xl hover:bg-amber-50 transition-colors shadow"
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
            <strong>POOZA for Preschoolers</strong> is made up of educational puzzles that are designed to improve your child&apos;s concentration &amp; learning abilities, reasoning &amp; logic skills, cognitive development and visual &amp; spatial processing in a fun, game environment.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Children can use this app at home or on the go. Allow your child to play and have fun while developing cognitive skills they will use throughout their lives.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="aspect-video w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/o8VL0lm5FtE"
            title="Pooza for Preschoolers"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-amber-50 border-y border-amber-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Why kids love it
          </h2>
          <ul className="space-y-4 max-w-2xl">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">✓</span>
                <span className="text-gray-700 leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Puzzle gallery */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Check out some of our puzzles
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {puzzleImages.map((img) => (
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
            Still got questions about POOZA?
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
