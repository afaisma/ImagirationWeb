import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MITA Games | ImagiRation",
  description:
    "Explore 70+ educational MITA games designed for children with autism. Games train multiple cue responding, mental integration and language skills.",
};

const easyGames = [
  { name: "Language", img: "/images/2016/07/button_game_language.png" },
  { name: "Matching Cars", img: "/images/2016/07/button_game_3.png" },
  { name: "Outlines", img: "/images/2016/07/button_game_wooden_puzzles.png" },
  { name: "Matching Animals", img: "/images/2016/07/button_game_1.png" },
  { name: "Patches", img: "/images/2016/07/button_game_2.png" },
];

const intermediateGames = [
  { name: "Combine Elephants", img: "/images/2016/07/button_game_5.png" },
  { name: "Arithmetics", img: "/images/2018/12/ArithmeticGame.png" },
  { name: "Combine Butterflies", img: "/images/2018/12/CombineButterflies.png" },
  { name: "Count Everything", img: "/images/2016/07/button_game_4.png" },
  { name: "Odd-One-Out", img: "/images/2018/12/icon_gm16.png" },
  { name: "Combine Trains", img: "/images/2016/07/button_game_6.png" },
];

const advancedGames = [
  { name: "Spatial Prepositions: On top / Inside / Under", img: "/images/2018/12/CombineToysOntopInsideUnder.png" },
  { name: "Flexible Language w/Auditory Memory", img: "/images/2018/12/FlexibleLanguagewithAuditoryMemory.png" },
  { name: "Time Prepositions: Before/After", img: "/images/2020/02/icon_gm17.png" },
  { name: "Perspective Taking: Left / Inside / Right", img: "/images/2018/12/CombineToysLeftInsideRight.png" },
  { name: "Flexible Language, Nested Logic", img: "/images/2018/12/FlexibleLanguageNestedLogicGame.png" },
  { name: "Time Prepositions: Memory Training", img: "/images/2020/03/icon_gm18.png" },
  { name: "Spatial Prepositions: In front / Inside / Behind", img: "/images/2018/12/icon_gm9.png" },
  { name: "Auditory Memory Game", img: "/images/2016/07/button_game_7.png" },
  { name: "Analogies", img: "/images/2020/03/icon_gm19.png" },
  { name: "Passive Verb Tense: Catch Up Game", img: "/images/2020/03/icon_gm20.png" },
  { name: "Catch Up Game: Memory Training", img: "/images/2020/02/icon_gm21.png" },
  { name: "Subject/Object: Garden Hose Game", img: "/images/2020/02/icon_gm22.png" },
  { name: "Memory Training: Garden Hose Game", img: "/images/2020/02/icon_gm24.png" },
  { name: "Selective Attention", img: "/images/2020/02/icon_gm25.png" },
  { name: "Carries or Rides?", img: "/images/2020/02/icon_gm26.png" },
  { name: "Count Everything (advanced)", img: "/images/2020/02/icon_gm23.png" },
];

function GameCard({ name, img, difficulty }: { name: string; img: string; difficulty: "Easy" | "Intermediate" | "Advanced" }) {
  const badgeColor =
    difficulty === "Easy"
      ? "bg-green-100 text-green-700"
      : difficulty === "Intermediate"
      ? "bg-yellow-100 text-yellow-700"
      : "bg-blue-100 text-blue-700";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col items-center gap-3 shadow-sm hover:shadow-md transition-shadow">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt={name} className="w-20 h-20 object-contain rounded-xl hover:scale-105 transition-transform duration-300" />
      <p className="text-sm font-semibold text-gray-800 text-center leading-snug">{name}</p>
      <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badgeColor}`}>{difficulty}</span>
    </div>
  );
}

export default function MitaGamesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              70+ Educational Games
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              MITA Games
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              There&apos;s a lot going on behind the scenes of the MITA application that makes it truly stand out from other digital puzzles for kids.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="max-w-3xl space-y-5 text-gray-600 leading-relaxed text-lg">
          <p>
            All of the puzzles in MITA include playful, enticing graphics that are sure to appeal to every young child. However, behind the fun visuals lies an evidence-based, systematic approach for developing{" "}
            <strong className="text-gray-800">MULTIPLE CUE RESPONDING</strong>,{" "}
            <strong className="text-gray-800">MENTAL INTEGRATION</strong> and{" "}
            <strong className="text-gray-800">LANGUAGE SKILLS</strong>.
          </p>
          <p>
            Children with ASD often focus on a single cue at a time, ignoring all other important features of an object. For example, a child who is asked to pick up a red crayon may over-attend to the cue &ldquo;red&rdquo; and pick up any available red object. This limitation is known as stimulus over-selectivity or &ldquo;tunnel vision&rdquo; and it can affect virtually every area of the child&apos;s functioning.
          </p>
          <p>
            Studies have shown that improving multiple cue responding and mental integration leads to a reduction in stimulus overselectivity, which in turn leads to vast improvements in general learning and language acquisition.
          </p>
          <p>
            MITA games have been meticulously designed to incrementally train a child&apos;s ability to notice multiple features of objects and to mentally integrate those objects into a single gestalt. MITA is designed for early childhood and intended for long-term, daily use. It is designed to be engaging and educational, as well as adaptive and responsive to the individual abilities of each child.
          </p>
        </div>
      </section>

      {/* Video */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-14">
        <div className="aspect-video w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/GX51xUiixag"
            title="MITA Games Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Games Grid */}
      <section className="bg-blue-50 border-y border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            Let&apos;s take a closer look at each of the MITA games
          </h2>

          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              Easy Games
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {easyGames.map((game) => (
                <GameCard key={game.name} name={game.name} img={game.img} difficulty="Easy" />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
              Intermediate Games
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {intermediateGames.map((game) => (
                <GameCard key={game.name} name={game.name} img={game.img} difficulty="Intermediate" />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-5 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600 inline-block" />
              Advanced Games
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {advancedGames.map((game) => (
                <GameCard key={game.name} name={game.name} img={game.img} difficulty="Advanced" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Questions about MITA?
          </h2>
          <p className="text-gray-600 mb-7 max-w-md mx-auto">
            We&apos;d love to hear from you. Reach out with any questions about MITA and our games.
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
