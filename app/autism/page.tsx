import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MITA — For Autism",
  description:
    "Mental Imagery Therapy for Autism (MITA) — the first and only language therapy application supported by clinical data, with FDA Breakthrough Device Designation.",
};

const storeLinks = [
  {
    label: "Apple App Store",
    href: "https://apps.apple.com/us/app/id1020290425",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
      </svg>
    ),
  },
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.imagiration.mita",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.18 23.76A1.97 1.97 0 012 22V2a1.97 1.97 0 011.18-1.76l11.65 11.77L3.18 23.76zm13.24-6.69l-2.54-1.47-2.59 2.61 5.13 2.96a.97.97 0 00.47.13.94.94 0 00.47-.13l-0.94-.54V17.07zm2.98-8.26l-2.04-1.17-2.87 2.9 2.87 2.9 2.06-1.18a1.96 1.96 0 000-3.45zM4.44.58L15.6 6.93l-2.59 2.61L3.44.9A1.97 1.97 0 014.44.58z" />
      </svg>
    ),
  },
  {
    label: "Amazon App Store",
    href: "https://www.amazon.com/Mental-Imagery-Therapy-Autism-MITA/dp/B012P1OX36",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39.02.25.183-.98 1.084-2.17 1.916-3.57 2.496-1.4.58-2.87.87-4.4.87a17.3 17.3 0 01-12.27-5.143c-.165-.158-.124-.268.027-.383m-.39-3.34c.1-.14.22-.12.35-.02a15.74 15.74 0 0010.27 3.85c2.19 0 4.3-.42 6.35-1.26l.36-.15c.3-.13.47-.02.36.25-.57 1.43-1.36 2.53-2.38 3.3a8.87 8.87 0 01-4.74 1.54 11.7 11.7 0 01-10.69-7.33c-.04-.12-.02-.24.08-.18z" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Pivotal Response Treatment",
    description:
      "MITA puzzles help kids learn to mentally integrate multiple features of an object — a pivotal skill targeted by one of the best-supported therapies for ASD.",
    icon: "🎯",
  },
  {
    title: "Simple Interactions",
    description:
      "Drag-and-drop mechanism makes it easy for toddlers and kids to touch and move objects, keeping frustration low and engagement high.",
    icon: "👆",
  },
  {
    title: "Friendly & Engaging",
    description:
      "Exercises arranged into six fun themes with beautiful graphics that every child will love, ensuring long-term daily use.",
    icon: "🌈",
  },
];

export default function AutismPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-emerald-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-teal-100 bg-white/20 border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              FDA Breakthrough Device Designation
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              MITA
              <span className="block text-2xl sm:text-3xl font-normal text-teal-200 mt-1">
                Mental Imagery Therapy for Autism
              </span>
            </h1>
            <p className="text-lg text-teal-100 leading-relaxed">
              The first and only language therapy application supported by rigorous
              clinical data — showing 2.2× greater language improvement in children
              with autism.
            </p>
          </div>
        </div>
      </section>

      {/* Clinical evidence */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Clinical Evidence
            </p>
            <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-5">
              Backed by a 3-year, peer-reviewed clinical study
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In a 3-year clinical study of 6,454 children with autism, children who
              engaged with MITA showed{" "}
              <strong className="text-gray-800">2.2-fold greater language improvement</strong>{" "}
              than children with similar initial evaluations. This difference was
              statistically significant (<em>p</em>&lt;0.0001). The peer-reviewed
              manuscript has been published in the journal{" "}
              <a
                href="https://www.mdpi.com/2227-9032/8/4/566"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 underline underline-offset-2"
              >
                Healthcare
              </a>
              .
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              FDA has granted MITA a{" "}
              <a
                href="/images/2022/06/FDA_MITA_-breakthrough_Q210093.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 underline underline-offset-2"
              >
                breakthrough device designation
              </a>{" "}
              (Q210093). ImagiRation is in consultations with FDA on a path toward
              MITA becoming a Class II medical device.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              MITA is protected by patent{" "}
              <a
                href="https://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO2&Sect2=HITOFF&p=1&u=%2Fnetahtml%2FPTO%2Fsearch-adv.htm&r=1&f=G&l=50&d=PTXT&S1=20160210870&OS=20160210870&RS=20160210870"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 hover:text-teal-700 underline underline-offset-2"
              >
                US 20160210870
              </a>
              .
            </p>
            <a
              href="https://www.mdpi.com/2227-9032/8/4/566"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl shadow hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              Read the Study
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/2015/08/MainMenu_inIpad2.png"
              alt="MITA app main menu on iPad"
              data-animate
              className="w-full rounded-2xl shadow-lg mb-6"
            />
            <div className="space-y-4">
              {[
                { value: "6,454", label: "Children in the clinical study" },
                { value: "2.2×", label: "Greater language improvement vs. control" },
                { value: "p<0.0001", label: "Statistical significance" },
                { value: "3 years", label: "Study duration" },
              ].map((s) => (
                <div
                  key={s.label}
                  data-animate
                  className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-2xl p-6"
                >
                  <p className="text-4xl font-bold mb-1">{s.value}</p>
                  <p className="text-sm opacity-90">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="bg-teal-50 border-y border-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Download MITA
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Available on all major platforms. Free to start — designed for long-term,
            daily use.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {storeLinks.map((store) => (
              <a
                key={store.label}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl shadow hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
              >
                {store.icon}
                {store.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Science */}
      <section id="science" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
          The Science
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          How MITA works
        </h2>

        <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4 mb-12">
          <p>
            Visual puzzles have been used for centuries to facilitate early
            development in kids. MITA is a unique, early-intervention application for
            children with Autism Spectrum Disorder (ASD). The app includes bright,
            interactive puzzles designed to help children learn how to mentally
            integrate multiple features of an object — an ability that leads to vast
            improvements in general learning.
          </p>
          <p>
            MITA is based on Pivotal Response Treatment (PRT), one of the
            best-supported therapies for children diagnosed with ASD. MITA targets
            one of four pivotal skills: a child's ability to notice and respond to
            multiple visual cues simultaneously. This ability is typically impaired
            in individuals with autism, leading to what is described as stimulus
            overselectivity, or "tunnel vision." Improving this capacity has been
            shown to reduce stimulus overselectivity, which leads to vast improvements
            in general learning.
          </p>
          <p>
            The visual and verbal exercises follow a systematic approach — starting
            with one feature (e.g. size or color), progressing to two features
            simultaneously, then three, then more. As a child progresses, he or she
            develops the ability to simultaneously attend to a greater number of
            features, reducing tunnel vision and building an essential component of
            language comprehension and syntax.
          </p>
          <p>
            MITA is designed for early childhood and intended for long-term, daily
            use. It is engaging and educational, as well as adaptive and responsive
            to the individual abilities of each child.
          </p>
        </div>

        {/* Feature cards */}
        <h2 className="text-xl font-bold text-gray-900 mb-6">Why MITA</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              data-animate
              className="p-6 rounded-2xl bg-teal-50 border border-teal-100 hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-3xl mb-3 block">{f.icon}</span>
              <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials / More */}
      <section id="testimonials" className="bg-teal-50 border-t border-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <h3 className="font-bold text-gray-900 text-lg mb-3">Have questions?</h3>
              <p className="text-gray-600 text-sm mb-5">
                Find answers to the most common questions about MITA, how it works,
                and who it's for.
              </p>
              <a
                href="/autism/mita-faqs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700"
              >
                Read MITA FAQs
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-7">
              <h3 className="font-bold text-gray-900 text-lg mb-3">
                Community &amp; testimonials
              </h3>
              <p className="text-gray-600 text-sm mb-5">
                Read stories from parents and therapists using MITA every day.
              </p>
              <a
                href="/autism/testimonials-for-mita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700"
              >
                Read testimonials
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
