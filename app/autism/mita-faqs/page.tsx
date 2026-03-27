import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MITA FAQs | ImagiRation",
  description: "Frequently asked questions about MITA — the Mental Imagery Therapy for Autism app.",
};

const gettingStarted = [
  {
    q: "How do I get MITA?",
    a: "MITA app is available for free on Google Play, iTunes App Store, and Amazon App Store.",
  },
  {
    q: "What devices can I install MITA on?",
    a: "You can install MITA on almost any smartphone or tablet, however, kids often perform better on larger tablets such as the iPad, or Kindle Fire.",
  },
  {
    q: "I plan to purchase a tablet to administer MITA to my child. What is the least-expensive tablet I can buy?",
    a: "We recommend the Kindle Fire, 7\" Display, Wi-Fi, 8 GB for $49.99.",
  },
  {
    q: "Does MITA need WiFi to work?",
    a: "You do not need WiFi to enjoy MITA. You will only need WiFi connection when you initially download the app.",
  },
];

const howMitaWorks = [
  {
    q: "What age(s) is MITA suited for?",
    a: "We expect MITA to have the greatest benefit for kids ages 2-12, and moderate benefit for older kids. MITA uses adaptive-learning technologies, meaning that the games will automatically adjust to the specific ability level of your child.",
  },
  {
    q: "What type of games are available in the MITA app?",
    a: "There are thousands of activities assembled into 70+ educational games. All of the educational games in MITA target a child's ability to combine mental images — the key skill for language development.",
  },
  {
    q: "Why do all the answers have to be dragged into place? Why not just tap the correct answer?",
    a: "All ImagiRation games involve dragging the answer into the correct position for three reasons: (1) drag-and-drop avoids accidental answers, (2) tapping encourages trial-and-error rather than active thinking, and (3) drag-and-drop improves fine-motor control which is associated with cognitive development.",
  },
  {
    q: "How long is the MITA app good for?",
    a: "With consistent usage, a child could complete all MITA games in 5 to 10 years.",
  },
  {
    q: "English is not my family's native language. Can my child still use MITA?",
    a: "MITA is available in English, Spanish, Portuguese, Russian, German, French, Italian, Arabic, Farsi, Chinese, and Korean.",
  },
];

const progressAndTroubleshooting = [
  {
    q: "How will I know how my child is doing?",
    a: "The Progress Report tab in the Parent's Corner features a number of parameters to help you track how your child is progressing, including Achievement Score, Success Rate, and game-by-game breakdowns.",
  },
  {
    q: "My child gets tired and isn't able to complete a daily MITA path. What can I do?",
    a: "You can reduce the number of games per session in Settings. You can also try allowing physical breaks between puzzles, supplementing MITA's Playtime with a rewarding activity, or splitting into two shorter sessions per day.",
  },
  {
    q: "How can I lock my device so that my child doesn't get distracted with other apps?",
    a: "For iPhone/iPad: Launch Settings → Accessibility → Guided Access. Toggle Guided Access On and set a passcode. For Android: Launch Settings → Search → Pin → Turn Screen Pinning On.",
  },
  {
    q: "What shall I do if my child reached the maximum level in a game?",
    a: "Once your child reaches the maximum level and consistently shows understanding, the game can be turned off in Settings.",
  },
  {
    q: "My child has sensory issues and prefers that MITA sound is OFF. What can I do?",
    a: "Parent's Corner → Settings → Switch to PlayTime Settings → Disable Smiley Response.",
  },
];

function FaqGroup({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-blue-100">
        {title}
      </h2>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.q} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg leading-snug">{item.q}</h3>
            <p className="text-gray-600 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MitaFaqsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Frequently Asked Questions
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              MITA FAQs
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Find answers to the most common questions about MITA, how it works, and who it&apos;s for.
            </p>
          </div>
        </div>
      </section>

      {/* MITA Logo */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="http://imagiration.com/wp-content/uploads/2015/08/mita.png"
          alt="MITA"
          className="w-30 h-auto"
          style={{ width: 120 }}
        />
      </section>

      {/* FAQs */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <FaqGroup title="Getting Started" items={gettingStarted} />
        <FaqGroup title="How MITA Works" items={howMitaWorks} />
        <FaqGroup title="Progress & Troubleshooting" items={progressAndTroubleshooting} />
      </section>

      {/* CTA */}
      <section className="bg-blue-50 border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Ready to get started with MITA?
          </h2>
          <p className="text-gray-600 mb-7 max-w-md mx-auto">
            Download MITA for free and start your child&apos;s therapy journey today.
          </p>
          <Link
            href="/autism"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow"
          >
            Download MITA
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
