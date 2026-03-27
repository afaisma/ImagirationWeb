import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ImagiRation — Digital Medicine for Children",
  description:
    "ImagiRation has improved language in over 2.5 million children in 100+ countries using clinically validated adaptive apps.",
};

const stats = [
  { value: "2.5M+", label: "Children helped worldwide" },
  { value: "100+", label: "Countries" },
  { value: "2.2×", label: "Language improvement vs. control" },
  { value: "6,454", label: "Children in clinical study" },
];

const partners = [
  {
    name: "MIT, Tufts & Georgia State University",
    description:
      "POOZA, ImagiRation's educational app, was chosen for the Global Literacy Project's \u201cCurious Learning System,\u201d led by experts from MIT, Tufts and Georgia State University.",
    href: "/brain-training",
    linkLabel: "POOZA",
  },
  {
    name: "Boston University",
    description:
      "MITA has been chosen as one of two apps in Boston University's Apps for Language Enhancement Study (AppLES), led by Helen Tager-Flusberg, Ph.D., Director of the Center for Autism Research Excellence.",
    href: "/autism",
    linkLabel: "MITA",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08),_transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-brand-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Clinically validated &amp; FDA breakthrough designated
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              We improved language in over{" "}
              <span className="text-brand-200">2.5 million children</span> in
              100+ countries.
            </h1>
            <p className="text-lg sm:text-xl text-brand-100 leading-relaxed mb-10 max-w-2xl">
              ImagiRation, a digital medicine startup with links to MIT, Harvard,
              and Boston University, builds clinically backed adaptive apps for
              children with autism and for brain training.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/autism"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors shadow-lg"
              >
                Apps for Autism
              </Link>
              <Link
                href="/brain-training"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                Apps for Brain Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {stats.map((stat) => (
              <div key={stat.value} className="py-10 px-6 text-center">
                <p className="text-3xl sm:text-4xl font-bold text-brand-600">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section id="science" className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
              Peer-reviewed science
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
              Learn about the science behind our apps
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In a 3-year clinical study of 6,454 children with autism, children
              who engaged with MITA showed{" "}
              <strong className="text-gray-800">2.2-fold greater language improvement</strong>{" "}
              than children with similar initial evaluations. This difference was
              statistically significant (<em>p</em>&lt;0.0001).
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              The peer-reviewed manuscript has been published in the journal{" "}
              <em>Healthcare</em>.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.mdpi.com/2227-9032/8/4/566"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors text-sm"
              >
                Read the Study
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <Link
                href="/autism"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-lg hover:border-brand-300 hover:text-brand-600 transition-colors text-sm"
              >
                Learn about MITA
              </Link>
            </div>
          </div>

          {/* Feature callouts */}
          <div className="space-y-4">
            {[
              {
                icon: "🧠",
                title: "FDA Breakthrough Designation",
                body: "MITA has been granted FDA Breakthrough Device Designation (Q210093), and ImagiRation is in consultation with FDA on a path toward MITA becoming a Class II medical device.",
              },
              {
                icon: "🔬",
                title: "Patent Protected",
                body: "MITA's methodology is protected by US patent 20160210870, ensuring our clinically validated approach remains uniquely ours.",
              },
              {
                icon: "🌍",
                title: "Global Reach",
                body: "Used by over 2.5 million children across 100+ countries, MITA and our brain training suite span diverse languages and cultures.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <span className="text-2xl">{card.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-gray-50 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            Partnerships
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Our partners include
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partners.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-2xl border border-gray-200 p-7 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-gray-900 text-lg mb-3">{p.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Ready to get started?
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Explore our apps for autism therapy and brain training, or reach out to
          learn more about partnerships and investment opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/autism"
            className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow"
          >
            Explore MITA
          </Link>
          <Link
            href="/brain-training"
            className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-brand-300 hover:text-brand-600 transition-colors"
          >
            Brain Training Apps
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-brand-300 hover:text-brand-600 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
