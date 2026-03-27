import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MITA Testimonials | ImagiRation",
  description: "Read what parents, therapists, and families say about MITA — Mental Imagery Therapy for Autism.",
};

const testimonials = [
  {
    quote:
      "My son Alexander who turned 3 in September, was recently diagnosed with Autism Spectrum Disorder... One of the most challenging problems I encounter when trying treatments for my son is keeping his attention. Most programs he only uses for a moment and then quickly moves on... What's also wonderful about this program, is being able to see the change in him... I have no doubt that one of the most profound changes came after he started the MITA program.",
    author: "Parent",
  },
  {
    quote:
      "I found the Mental Imagery therapy for Autism (MITA) program for my son who is now 7 years old shortly after his diagnosis of Autism Spectrum Disorder when he was only 3. We have continued to use this program and Alexander is now in 1st grade. He is mostly in a mainstream classroom with a very few pull outs and has many friends. He is able to think and solve problems and keeps up with his peers especially in math.",
    author: "Parent",
  },
  {
    quote:
      "My son Ahmed is now playing MITA language game highest difficulty level on his own as your suggestion without me interfering as little as possible, his Bengali language level increased to a noticeable extent.",
    author: "Parent",
  },
  {
    quote:
      "My grandson turned 3 last year and was not reaching some milestones. We were told by the doctors it was probably Autism. He was diagnosed definitely last year and we have been using this app and it has been a big help.",
    author: "Grandparent",
  },
  {
    quote:
      "I am a speech therapist and like to use [MITA] app as a reward for my students with autism in their last little bit of therapy. They love it. My personal children love to play it as well.",
    author: "Speech Therapist",
  },
  {
    quote:
      "We want to tell thanks to all developers of this magical app for ASD kids. I and my son grateful for your care.",
    author: "Мирослава Калашник, Україна, м. Харків",
  },
  {
    quote:
      "I would like to express my support of the ImagiRation application MITA, which is designed to improve the visual and language skills of young children as well as children with Autism Spectrum Disorders.",
    author: "Elizabeth Kalmanov, MA, CCC-SLP",
  },
  {
    quote:
      "My son Sam was diagnosed with autism when he was about 3 years old (he is now fourteen)... When we started using the MITA application developed by Dr. Vyshedsky and his team, I was utterly surprised to find that Sam was immediately interested and able to immerse himself in solving problems... My son displays intellectual capability, which I thought for a long time was missing.",
    author: "Parent of Sam",
  },
  {
    quote:
      "My son is talking to me! I can communicate with my son tenfold since this awesome app and our autismspeaks workshops.",
    author: "App Store Review",
  },
  {
    quote:
      "Very good app, my 2½ yr old son has autism & he loves this app. He is very fussy when it comes to apps but loves this one & it's good that you can adjust the level as he progresses.",
    author: "App Store Review",
  },
  {
    quote:
      "Novel therapeutic tool — A very interesting new therapy for autism. While remaining fun and engaging this app fuses cutting edge theoretical research with an interface children can love.",
    author: "App Store Review",
  },
  {
    quote:
      "My son is 4 and was DX at 18mths w/ ASD. He cannot get enough of this app. Seriously it is comparable to Nabi.",
    author: "App Store Review",
  },
  {
    quote:
      "This is truly fantastic. My 3 year old loves this. Took him just a few weeks to learn how to complete the puzzles before I had to add more via the parental settings. He has started putting his sentences together!",
    author: "App Store Review",
  },
  {
    quote:
      "My son uses this app as well as early intervention therapy, and I have seen so much progress it is amazing. I love that this app keeps up and adjusts to how well a child is doing.",
    author: "Yayas mommy (Apple Store review)",
  },
  {
    quote:
      "Hands down this is the only app that catches my son's attention and has got him to want to use the tablet.",
    author: "App Store Review",
  },
  {
    quote: "My son is able to stay focused and progress well with this app. Appreciated.",
    author: "App Store Review",
  },
  {
    quote:
      "Cool application develops the perception of a child with special needs, and teaches English through play. I would recommend!",
    author: "Monika Matczak-Słupecka",
  },
];

export default function MitaTestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Parent &amp; Therapist Stories
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              MITA Testimonials
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Read what parents, grandparents, therapists, and families say about MITA and the difference it has made.
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
          style={{ width: 120 }}
          className="h-auto"
        />
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <blockquote
              key={i}
              className="bg-gray-50 rounded-2xl border border-gray-200 p-6 flex flex-col gap-4"
            >
              <p className="text-gray-700 leading-relaxed text-sm flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="text-sm font-semibold text-blue-600">— {t.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* Link to POOZA Testimonials */}
      <section className="bg-blue-50 border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
          <Link
            href="/autism/pooza-testimonials"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 text-lg"
          >
            Check out POOZA Testimonials
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
