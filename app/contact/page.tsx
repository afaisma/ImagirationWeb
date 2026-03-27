import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact & Our Team",
  description:
    "Get in touch with ImagiRation. Want to work with us, invest, or have questions about our products?",
};

const contactReasons = [
  {
    icon: "🤝",
    title: "Partner with us",
    description:
      "Research collaborations, clinical partnerships, and integration opportunities with educational institutions.",
  },
  {
    icon: "💼",
    title: "Invest",
    description:
      "Learn about investment opportunities in ImagiRation's digital medicine platform.",
  },
  {
    icon: "💬",
    title: "Product questions",
    description:
      "Questions or feedback about MITA, POOZA, Math & Logic, or RecoverBrain.",
  },
  {
    icon: "📰",
    title: "Press & media",
    description:
      "Media inquiries, interview requests, and press kit access.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              ImagiRation Team
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">
              We're a team of brain scientists, clinicians, developers and educators
              building the future of digital medicine for children. We'd love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: reasons */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-7">
              How can we help?
            </h2>
            <div className="space-y-5">
              {contactReasons.map((r) => (
                <div key={r.title} className="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-100">
                  <span className="text-2xl">{r.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{r.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{r.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact card */}
          <div>
            <div className="bg-brand-600 rounded-2xl p-8 text-white mb-6">
              <h2 className="text-xl font-bold mb-2">Email us</h2>
              <p className="text-brand-100 text-sm mb-5">
                The fastest way to reach us. We typically respond within 1–2
                business days.
              </p>
              <a
                href="mailto:info@imagiration.com"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white text-brand-700 font-semibold rounded-xl hover:bg-brand-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@imagiration.com
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-7">
              <h3 className="font-bold text-gray-900 mb-4">Quick links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/autism" className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors">
                    <span>→</span> MITA — Mental Imagery Therapy for Autism
                  </Link>
                </li>
                <li>
                  <Link href="/brain-training" className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors">
                    <span>→</span> Brain Training Apps
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.imagiration.com/autism/mita-faqs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    <span>→</span> MITA FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mdpi.com/2227-9032/8/4/566"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-brand-600 transition-colors"
                  >
                    <span>→</span> Clinical Study (MDPI Healthcare)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About the team */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            About us
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
            Digital medicine rooted in science
          </h2>
          <p className="text-gray-600 max-w-2xl leading-relaxed mb-8">
            ImagiRation is a digital medicine startup with research ties to MIT,
            Harvard, and Boston University. Our multidisciplinary team of brain
            scientists, clinicians, educators and engineers creates adaptive apps
            that deliver measurable, clinically validated outcomes for children
            worldwide.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/autism"
              className="px-5 py-2.5 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors text-sm"
            >
              Explore MITA
            </Link>
            <Link
              href="/brain-training"
              className="px-5 py-2.5 border border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-brand-300 hover:text-brand-600 transition-colors text-sm"
            >
              Brain Training Apps
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
