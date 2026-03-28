import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ImagiRation — Digital Medicine for Children",
  description:
    "ImagiRation has improved language in over 2.5 million children in 100+ countries using clinically validated adaptive apps.",
};

const stats = [
  { value: "2.5M+", label: "Children helped worldwide", color: "from-blue-500 to-blue-600", icon: "🌍" },
  { value: "100+", label: "Countries", color: "from-teal-500 to-emerald-600", icon: "🗺️" },
  { value: "2.2×", label: "Language improvement vs. control", color: "from-violet-500 to-purple-600", icon: "📈" },
  { value: "6,454", label: "Children in clinical study", color: "from-amber-500 to-orange-500", icon: "🔬" },
];

const partners = [
  {
    name: "MIT, Tufts & Georgia State University",
    description:
      "POOZA, ImagiRation's educational app, was chosen for the Global Literacy Project's \"Curious Learning System,\" led by experts from MIT, Tufts and Georgia State University.",
    href: "/brain-training",
    linkLabel: "POOZA",
    accent: "border-l-violet-400",
  },
  {
    name: "Boston University",
    description:
      "MITA has been chosen as one of two apps in Boston University's Apps for Language Enhancement Study (AppLES), led by Helen Tager-Flusberg, Ph.D., Director of the Center for Autism Research Excellence.",
    href: "/autism",
    linkLabel: "MITA",
    accent: "border-l-teal-400",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-700 text-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/2014/03/girls.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/85 to-brand-700/60" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-36">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-white/15 rounded-full px-4 py-2 mb-8 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Clinically validated &amp; FDA breakthrough designated
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              We improved language in over{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text text-transparent">2.5 million children</span> in
              100+ countries.
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 leading-relaxed mb-10 max-w-2xl">
              ImagiRation, a digital medicine startup with links to MIT, Harvard,
              and Boston University, builds clinically backed adaptive apps for
              children with autism and for brain training.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/autism"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-700 font-bold rounded-xl shadow-md hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Apps for Autism
              </Link>
              <Link
                href="/brain-training"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/25 transition-all duration-200"
              >
                Brain Training Apps
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.value}
              data-animate
              data-animate-delay={i === 0 ? undefined : i === 1 ? "100" : i === 2 ? "200" : "300"}
              className={`bg-gradient-to-br ${stat.color} text-white rounded-3xl p-6 sm:p-8 text-center shadow-lg`}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <p className="text-3xl sm:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-xs sm:text-sm opacity-90 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Science */}
      <section id="science" className="bg-indigo-50 border-y border-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="mb-14">
            <p className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-3">
              Peer-reviewed science
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Learn about the <strong>SCIENCE</strong> behind our apps
            </h2>
            <div className="aspect-video w-full max-w-3xl rounded-3xl overflow-hidden shadow-xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/e7uXAlXdTe4"
                title="The science of imagination - Andrey Vyshedskiy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-5">
                Our clinical results
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                In a 3-year clinical study of 6,454 children with autism, children
                who engaged with MITA showed{" "}
                <strong className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">2.2-fold greater language improvement</strong>{" "}
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
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 text-sm"
                >
                  Read the Study
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <Link
                  href="/autism"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-indigo-300 hover:text-indigo-600 hover:shadow-sm transition-all duration-200 text-sm"
                >
                  Learn about MITA
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "🧠",
                  title: "FDA Breakthrough Designation",
                  body: "MITA has been granted FDA Breakthrough Device Designation (Q210093), and ImagiRation is in consultation with FDA on a path toward MITA becoming a Class II medical device.",
                  bg: "bg-indigo-100 border-indigo-200",
                  iconBg: "bg-indigo-200",
                },
                {
                  icon: "🔬",
                  title: "Patent Protected",
                  body: "MITA's methodology is protected by US patent 20160210870, ensuring our clinically validated approach remains uniquely ours.",
                  bg: "bg-violet-100 border-violet-200",
                  iconBg: "bg-violet-200",
                },
                {
                  icon: "🌍",
                  title: "Global Reach",
                  body: "Used by over 2.5 million children across 100+ countries, MITA and our brain training suite span diverse languages and cultures.",
                  bg: "bg-emerald-100 border-emerald-200",
                  iconBg: "bg-emerald-200",
                },
              ].map((card, i) => (
                <div
                  key={card.title}
                  data-animate
                  data-animate-delay={i === 0 ? "100" : i === 1 ? "200" : "300"}
                  className={`flex gap-4 p-5 ${card.bg} rounded-2xl border hover:shadow-md transition-shadow duration-200`}
                >
                  <span className={`text-2xl w-12 h-12 flex items-center justify-center rounded-xl ${card.iconBg} flex-shrink-0`}>{card.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{card.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <p className="text-sm font-bold text-brand-600 uppercase tracking-wider mb-3">
          Partnerships
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
          Our partners include
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {partners.map((p) => (
            <div
              key={p.name}
              data-animate
              className={`bg-white rounded-3xl border border-gray-200 border-l-4 ${p.accent} p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-200`}
            >
              <h3 className="font-bold text-gray-900 text-lg mb-3">{p.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-brand-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto text-lg">
            Explore our apps for autism therapy and brain training, or reach out to
            learn more about partnerships and investment opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/autism"
              className="px-6 py-3 bg-white text-brand-700 font-bold rounded-xl shadow-md hover:bg-blue-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Explore MITA
            </Link>
            <Link
              href="/brain-training"
              className="px-6 py-3 bg-white/15 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/25 transition-all duration-200"
            >
              Brain Training Apps
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white/15 border border-white/25 text-white font-semibold rounded-xl hover:bg-white/25 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
