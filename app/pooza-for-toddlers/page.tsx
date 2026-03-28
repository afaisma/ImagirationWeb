import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pooza for Toddlers | ImagiRation",
  description:
    "600+ educational puzzles for toddlers designed by brain scientists to improve concentration, reasoning, cognitive development and visual & spatial processing.",
};

const features = [
  {
    img: "/images/2014/03/i_educational_elephant_pink.png",
    title: "Fun & Educational",
    body: "Puzzles gradually increase in difficulty to facilitate brain training",
  },
  {
    img: "/images/2014/03/i_interactive_s.png",
    title: "Simple Interactions",
    body: "Simple drag-and-drop mechanism makes it easy for toddlers and kids to touch and move objects",
  },
  {
    img: "/images/2014/03/i_fun_smiley.png",
    title: "Friendly & Engaging",
    body: "Intuitive and friendly interface with beautiful graphics that every child will love",
  },
];

const puzzleImages = [
  {
    src: "/images/2014/03/IMG_0059.png",
    alt: "Pooza toddler puzzle example",
  },
  {
    src: "/images/2014/03/IMG_0063.png",
    alt: "Pooza toddler puzzle cats",
  },
  {
    src: "/images/2014/11/IMG_0064.png",
    alt: "Pooza toddler puzzle sorting",
  },
  {
    src: "/images/2014/11/IMG_0065.png",
    alt: "Pooza toddler puzzle giraffe",
  },
  {
    src: "/images/2014/11/IMG_0071.png",
    alt: "Pooza toddler puzzle activity",
  },
  {
    src: "/images/2014/11/IMG_0077.png",
    alt: "Pooza toddler puzzle activity 2",
  },
  {
    src: "/images/2014/11/IMG_0084.png",
    alt: "Pooza toddler puzzle activity 3",
  },
];

export default function PoozaToddlersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Fun and Educational Puzzles
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              POOZA for Toddlers
            </h1>
            <p className="text-lg text-emerald-100 leading-relaxed mb-8">
              600+ educational puzzles designed by brain scientists to improve your child&apos;s concentration &amp; learning abilities, reasoning &amp; logic skills, cognitive development, and visual &amp; spatial processing.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://itunes.apple.com/gb/app/id1394571401"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl shadow-md hover:bg-emerald-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.imagiration.poozafortoddlers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-700 font-bold rounded-xl shadow-md hover:bg-emerald-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
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
            <strong>POOZA for Toddlers</strong> is made up of educational puzzles that are designed to improve your child&apos;s concentration &amp; learning abilities, reasoning &amp; logic skills, cognitive development and visual &amp; spatial processing in a fun, game environment.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            We&apos;ve developed a unique approach to child learning and cognitive growth. Our puzzles and exercises gradually increase in difficulty to facilitate optimal brain training. This technique has been shown to increase children&apos;s IQ by 10 to 20 points, dramatically improving their chances for academic success.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg">
            Kids learn best through play. This app includes 600+ educational puzzles designed to foster creativity, imagination, logical reasoning and critical thinking.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="aspect-video w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/y_t8GjANWrU"
            title="Educational puzzles for toddlers designed by brain scientists"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Features */}
      <section className="bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Why kids love it
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow duration-200 rounded-2xl p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.img} alt={f.title} className="w-20 h-20 object-contain" />
                <h3 className="font-bold text-gray-900 text-lg">{f.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
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
              className="w-full rounded-xl shadow-sm hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Still got questions about POOZA?
          </h2>
          <p className="text-gray-600 mb-7 max-w-xl mx-auto">
            We&apos;d love to hear from you. Reach out with any questions about our products.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-semibold rounded-xl shadow hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
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
