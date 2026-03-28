import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "VADA – Speech Therapy Step 1 | ImagiRation",
  description:
    "Voice Adventures App (VADA) is for toddlers and preverbal or nonverbal children. Children use their voice to interact with characters on the screen.",
};

const features = [
  {
    img: "/images/2014/03/i_educational_elephant_pink.png",
    title: "Fun & Educational",
    body: "Each activity is adaptive and delivers exercises at the exact level of difficulty appropriate for you at any given point in time",
  },
  {
    img: "/images/2014/03/i_interactive_s.png",
    title: "Simple Interactions",
    body: "Simple drag-and-drop mechanism makes it easy to touch and move objects",
  },
  {
    img: "/images/2014/03/i_fun_smiley.png",
    title: "Friendly & Engaging",
    body: "Intuitive and friendly interface with beautiful graphics that everyone will love",
  },
];

export default function VadaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-teal-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Speech Therapy Step 1
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-5">
              <span className="bg-gradient-to-r from-white to-teal-200 bg-clip-text text-transparent">VADA – Speech Therapy Step 1</span>
            </h1>
            <p className="text-lg text-teal-100 leading-relaxed mb-8">
              Voice Adventures App for toddlers and preverbal or nonverbal children.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://apps.apple.com/us/app/id1609133787"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 font-bold rounded-xl shadow-md hover:bg-teal-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.imagiration.vada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-teal-700 font-bold rounded-xl shadow-md hover:bg-teal-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.36.6 1.24 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z" />
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* App Image + Intro */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/2022/06/314x0w-1.webp"
              alt="VADA app"
              className="w-full max-w-xs mx-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Voice Adventures App (VADA) is for toddlers and preverbal or nonverbal children. Children use their voice to interact with characters on the screen: animals, lights, stars, and other objects.
            </p>
            <p>
              VADA has been developed to help your child control his voice. As he sits in his usual shelter, he will hear a calm, quiet, and affectionate voice calling on him to respond. On the screen, everything is fun, and filled with magic!
            </p>
            <p>
              Encouraging your toddler vocalizations may help him develop better control of his speech apparatus and improve word pronunciation.
            </p>
          </div>
        </div>
      </section>

      {/* Speech Therapy for Nonverbal Section */}
      <section className="bg-teal-50 border-y border-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Speech Therapy for Nonverbal Children with Language Delay and Autism
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Why is your child not speaking? He sits alone in a dark and safe space. He doesn&apos;t want to leave this safe shelter. He flinches when called upon. He trembles when looked at. The sounds are too harsh. The lights are too bright.
              </p>
              <p>
                Isn&apos;t there something you can do? Yes, there is. Help him understand that his voice can have a fun impact on the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
          Why children love VADA
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow duration-200 rounded-2xl p-4">
              <div className="bg-teal-100 rounded-xl p-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={f.img} alt={f.title} className="w-20 h-20 object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{f.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-50 border-t border-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            Have questions about VADA?
          </h2>
          <p className="text-gray-600 mb-7 max-w-md mx-auto">
            We&apos;d love to hear from you. Reach out with any questions about our speech therapy apps.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl shadow hover:bg-teal-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
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
