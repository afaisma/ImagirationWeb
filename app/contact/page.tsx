import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | ImagiRation",
  description:
    "Get in touch with ImagiRation — questions about our products, investment opportunities, or just want to say hello.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-indigo-200 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              ImagiRation
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              Contact Us
            </h1>
            <p className="text-lg text-indigo-100 leading-relaxed">
              We&apos;d love to hear from you! Whether you have questions about our
              products, are interested in partnering, or just want to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl">
          {/* Email */}
          <a
            href="mailto:imagiration@gmail.com"
            className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
              <svg className="w-6 h-6 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="font-bold text-gray-900 mb-1">Email</h2>
            <p className="text-brand-600 text-sm font-medium">imagiration@gmail.com</p>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/ImagiRation/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h2 className="font-bold text-gray-900 mb-1">Facebook</h2>
            <p className="text-blue-600 text-sm font-medium">@ImagiRation</p>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/imagiration"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-md hover:-translate-y-0.5 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center mb-4 group-hover:bg-sky-100 transition-colors">
              <svg className="w-6 h-6 text-sky-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <h2 className="font-bold text-gray-900 mb-1">LinkedIn</h2>
            <p className="text-sky-700 text-sm font-medium">ImagiRation</p>
          </a>
        </div>
      </section>

      {/* Meet the team CTA */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Meet the Team
          </h2>
          <p className="text-gray-600 mb-7 max-w-xl mx-auto">
            Learn more about the brain scientists, educators, artists and
            developers behind ImagiRation.
          </p>
          <Link
            href="/our-team"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors shadow"
          >
            Our Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
