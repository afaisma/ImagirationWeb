import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Brain Training",
  description:
    "Fun, adaptive brain-training apps for kids and adults — Math & Logic, Pooza for Preschoolers and Toddlers, and RecoverBrain therapy.",
};

const apps = [
  {
    href: "/math-logic",
    img: "/images/2018/12/Math320.jpg",
    name: "Math & Logic",
    tagline: "Adaptive math puzzles for ages 2–10",
    description:
      "Fun, interactive, adaptive puzzle games to help your child learn math and improve cognitive development. Each activity is adaptive and delivers exercises at the exact level of difficulty appropriate for your child at any given moment. Designed for preschoolers through age 10.",
    icon: "🔢",
    color: "bg-violet-50 border-violet-100",
    accent: "text-violet-600",
  },
  {
    href: "/pooza-preschoolers",
    img: "/images/2018/12/320x0w3.jpg",
    name: "POOZA for Preschoolers",
    tagline: "900+ educational puzzles for growing minds",
    description:
      "Kids learn best through play. This app includes 900+ educational puzzles designed to foster creativity, imagination, logical reasoning and critical thinking. Puzzles and exercises gradually increase in difficulty to facilitate optimal brain training.",
    icon: "🧩",
    color: "bg-amber-50 border-amber-100",
    accent: "text-amber-600",
  },
  {
    href: "/pooza-for-toddlers",
    img: "/images/2018/12/320x0w2.jpg",
    name: "POOZA for Toddlers",
    tagline: "600+ puzzles built for the earliest learners",
    description:
      "600+ educational puzzles for toddlers designed by brain scientists to improve your child's concentration & learning abilities, reasoning & logic skills, cognitive development, and visual & spatial processing in a fun, game environment.",
    icon: "🎮",
    color: "bg-emerald-50 border-emerald-100",
    accent: "text-emerald-600",
  },
  {
    href: "/recoverbrain-therapy",
    img: "/images/2018/12/320x0w4.jpg",
    name: "RecoverBrain Therapy",
    tagline: "Cognitive rehabilitation for adults",
    description:
      "Language Comprehension & Cognitive Therapy for Aphasia, Stroke, Dementia & Alzheimer's Disease. Designed to support adults on their recovery journey with engaging, adaptive exercises.",
    icon: "🫀",
    color: "bg-rose-50 border-rose-100",
    accent: "text-rose-600",
  },
];

export default function BrainTrainingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-500 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-violet-200 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Brain Training Apps
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              Apps for brain training!
            </h1>
            <p className="text-lg text-violet-100 leading-relaxed">
              Fun and educational puzzles — crafted by brain scientists, educators,
              artists and developers to build the neural networks essential for
              creativity and cognitive well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="bg-violet-50 rounded-3xl p-8">
          <div className="flex flex-col md:flex-row gap-10 items-center mb-10">
            <div className="md:w-1/2">
              <p className="text-gray-600 leading-relaxed text-lg">
                We are a group of brain scientists, educators, artists and developers
                who create educational puzzles for both kids &amp; adults. Our apps
                include an array of puzzles designed to facilitate the development of
                neural networks essential for creativity and cognitive well-being.
              </p>
            </div>
            <div className="md:w-1/2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/2014/03/FeatureImage2.png"
                alt="Hundreds of puzzles for your kids"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/2015/08/for_all_ages_v.jpg"
            alt="Educational puzzles for all ages"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Apps */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Check out our latest brain-training apps
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {apps.map((app) => (
            <Link
              key={app.href}
              href={app.href}
              className={`group rounded-2xl border p-7 ${app.color} transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={app.img}
                alt={app.name}
                className="w-24 h-24 rounded-2xl object-cover mb-5 shadow-sm"
              />
              <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${app.accent}`}>
                {app.tagline}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                {app.name}
                <svg className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${app.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Want to work with us?
          </h2>
          <p className="text-gray-600 mb-7 max-w-xl mx-auto">
            Interested in investing in the company? Have questions or comments about
            our products? We'd love to hear from you.
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
