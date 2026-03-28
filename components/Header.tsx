"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    label: "For Brain Training",
    href: "/brain-training",
    dropdown: [
      { label: "Math & Logic Kids Games", href: "/math-logic" },
      { label: "Pooza for Preschoolers", href: "/pooza-preschoolers" },
      { label: "Pooza for Toddlers", href: "/pooza-for-toddlers" },
      { label: "RecoverBrain Therapy", href: "/recoverbrain-therapy" },
    ],
  },
  {
    label: "For Autism",
    href: "/autism",
    dropdown: [
      { label: "MITA Games", href: "/autism/mita-games" },
      { label: "MITA Parent's Corner", href: "/mita-parents-corner" },
      { label: "MITA FAQs", href: "/autism/mita-faqs" },
      { label: "MITA Testimonials", href: "/autism/testimonials-for-mita" },
      { label: "MITA News", href: "/autism/mita-news" },
      { label: "VADA – Speech Therapy Step 1", href: "/vada" },
      { label: "SITA – Speech Therapy Step 2", href: "/sita-speech-therapy-step-2" },
      { label: "Donate", href: "/autism#donate" },
    ],
  },
  {
    label: "Testimonials",
    href: "/autism/testimonials-for-mita",
    dropdown: [
      { label: "MITA Testimonials", href: "/autism/testimonials-for-mita" },
      { label: "POOZA Testimonials", href: "/autism/pooza-testimonials" },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/2016/09/logo_horizontal-2.png"
              alt="ImagiRation"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(i)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-brand-600 hover:bg-brand-50 transition-colors"
                >
                  {item.label}
                  <svg
                    className="w-3.5 h-3.5 opacity-60"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {openDropdown === i && (
                  <div className="absolute left-0 top-full pt-1">
                    <div className="bg-white rounded-xl shadow-lg ring-1 ring-gray-200 py-1.5 min-w-48">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          target={"external" in sub && sub.external ? "_blank" : undefined}
                          rel={"external" in sub && sub.external ? "noopener noreferrer" : undefined}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <Link
              href="/science"
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-brand-600 hover:bg-brand-50 transition-colors"
            >
              Science
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-brand-600 hover:bg-brand-50 transition-colors"
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="ml-2 px-4 py-2 text-sm font-semibold text-white bg-brand-600 rounded-lg hover:bg-brand-700 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-gray-100 py-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2 text-sm font-semibold text-gray-800"
                >
                  {item.label}
                </Link>
                {item.dropdown.map((sub) => (
                  <Link
                    key={sub.label}
                    href={sub.href}
                    target={"external" in sub && sub.external ? "_blank" : undefined}
                    rel={"external" in sub && sub.external ? "noopener noreferrer" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className="block pl-8 pr-4 py-1.5 text-sm text-gray-600 hover:text-brand-600"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/science"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 text-sm font-semibold text-gray-800"
            >
              Science
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 text-sm font-semibold text-gray-800"
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block mx-4 mt-2 px-4 py-2.5 text-sm font-semibold text-white bg-brand-600 rounded-lg text-center"
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
