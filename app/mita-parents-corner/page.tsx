import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MITA Parent's Corner | ImagiRation",
  description:
    "The Parent's Corner gives you access to everything that is happening behind the scenes as your child progresses through MITA.",
};

const screenshots = [
  { src: "/images/2017/03/1_Home.png", caption: "Home Screen" },
  { src: "/images/2017/03/2_Progress.png", caption: "Progress Tab" },
  { src: "/images/2017/03/3_Cumulative.png", caption: "Cumulative Progress" },
  { src: "/images/2017/03/4_ProgressTable.png", caption: "Progress Table" },
  { src: "/images/2017/03/5_ProgressGraph.png", caption: "Progress Graph" },
  { src: "/images/2017/03/7_Number-of-Games.png", caption: "Number of Games" },
  { src: "/images/2017/03/8_Number-of-Puzzles.png", caption: "Number of Puzzles" },
  { src: "/images/2017/03/9_Add-Remove.png", caption: "Add/Remove Games" },
  { src: "/images/2017/03/10_Difficulty-level.png", caption: "Difficulty Level" },
  { src: "/images/2017/03/11_ATEC.png", caption: "ATEC Checklist" },
  { src: "/images/2017/03/12_About.png", caption: "About" },
];

export default function MitaParentsCornerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Track Your Child&apos;s Progress
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              MITA Parent&apos;s Corner
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              The Parent&apos;s Corner gives you access to everything that is happening behind the scenes as your child progresses through MITA.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
          Screenshots
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-5">
          {screenshots.map((s) => (
            <div key={s.src} className="flex flex-col gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.src}
                alt={s.caption}
                className="w-full rounded-xl shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300"
              />
              <p className="text-sm text-gray-600 text-center font-medium">{s.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-blue-50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 space-y-12">

          {/* Progress Tab */}
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Progress Tab</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                You can access the Parent&apos;s Corner any time from the Main Screen. In this section, you will be able to monitor your child&apos;s daily, weekly, monthly and yearly progress.
              </p>
              <p>
                At the top of the screen, you will find your child&apos;s Achievement Score, their Success Rate as well as the number of games completed and the number of puzzles solved in a given timeframe.
              </p>
              <p>
                The MITA Achievement Score measures your child&apos;s cumulative progress with MITA. As your child progresses through various levels of difficulty in MITA games, the MITA Achievement Score will increase.
              </p>
              <p>
                Your child&apos;s Success Rate is the measure of the number of errors made when solving puzzles. It is measured from 1 to 100%. To progress to the next level in a game, a child must maintain a Success Rate above a minimum threshold.
              </p>
              <p>
                You can tap on the Graph View to see a visual representation of your child&apos;s progress in each MITA game. A general increase in the graph curve indicates an overall cognitive improvement.
              </p>
            </div>
          </div>

          {/* Settings Tab */}
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">Settings Tab</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              MITA&apos;s adaptive algorithms have been designed to provide just the right amount of challenge for your child. The Settings tab allows you to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 leading-relaxed">
              <li>Select the number of games in a daily session (1 to 6 games per session)</li>
              <li>Select the number of puzzles your child must complete within each game (5 to 20 puzzles)</li>
              <li>Choose exactly which games your child encounters</li>
              <li>Adjust the difficulty level for each game</li>
            </ul>
          </div>

          {/* ATEC */}
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-5">ATEC</h2>
            <p className="text-gray-600 leading-relaxed">
              The Autism Therapy Evaluation Checklist (ATEC) is also located in the Parent&apos;s Corner. This evaluation allows you to document your child&apos;s symptoms and provide us with completely anonymous and invaluable data.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Questions?
          </h2>
          <p className="text-gray-600 mb-7 max-w-md mx-auto">
            We&apos;re happy to help with any questions about the Parent&apos;s Corner or MITA.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
          >
            Contact Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
