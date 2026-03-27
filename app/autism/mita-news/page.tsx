import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MITA News | ImagiRation",
  description: "Latest news and press releases about MITA — the Mental Imagery Therapy for Autism application.",
};

export default function MitaNewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-blue-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              Press &amp; Media
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              MITA News
            </h1>
            <p className="text-lg text-blue-100 leading-relaxed">
              Latest news and press coverage about MITA and ImagiRation&apos;s clinical research.
            </p>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">MITA in the News — NewsWatch Television</h2>
        <div className="aspect-video w-full max-w-3xl rounded-2xl overflow-hidden shadow-lg">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/giZymh3rMHc"
            title="MITA in the News — NewsWatch Television"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Key Stat Banner */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-center">
          <p className="text-lg sm:text-xl font-bold">
            MITA is the FIRST AND ONLY language therapy application supported by{" "}
            <span className="underline decoration-blue-300">CLINICAL DATA</span>
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 space-y-10">
        {/* Article 1 */}
        <article className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-blue-50 border-b border-blue-100 px-8 py-5">
            <p className="text-sm text-blue-600 font-medium mb-1">December 21, 2020 &middot; PRWEB</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              Novel prefrontal synthesis intervention improves language in children with autism
            </h2>
          </div>
          <div className="px-8 py-7 text-gray-600 leading-relaxed space-y-4">
            <p>
              ImagiRation, a startup with links to MIT, Harvard, and Boston University, has developed a highly innovative adaptive language therapy application for children with autism, Mental Imagery Therapy for Autism (MITA).
            </p>
            <p>
              <strong className="text-gray-800">MITA IS THE FIRST AND ONLY LANGUAGE THERAPY APPLICATION SUPPORTED BY CLINICAL DATA:</strong> In a 3-year clinical study of 6,454 children with autism, children who engaged with MITA showed 2.2-fold greater language improvement than children with similar initial evaluations.
            </p>
            <p>
              FDA has granted MITA a breakthrough device designation (Q210093). We are in consultations with FDA on a path toward MITA becoming a Class II medical device.
            </p>
            <p>
              The CDC estimates that 1 in 54 children is affected by autism, a neurological disorder that disrupts early development in cognition and communication.
            </p>
            <p>
              The MITA application includes both verbal and nonverbal exercises aiming to develop Prefrontal Synthesis (PFS), the neurological mechanism responsible for the juxtaposition of mental visuospatial objects.
            </p>
            <p>
              Dr. Andrey Vyshedsky, a neuroscientist from Boston University and co-founder of ImagiRation, notes that &ldquo;the significant improvement of language observed in the MITA study brings hope to many families dealing with autism.&rdquo;
            </p>
            <p>
              Dr. Vyshedskiy has recently published a book &lsquo;This way to language: four things to do at the first sign of autism&rsquo; (ISBN: 978-1-716-34999-7). Contact: <a href="mailto:vysha@bu.edu" className="text-blue-600 hover:text-blue-700 underline">vysha@bu.edu</a>
            </p>
          </div>
        </article>

        {/* Article 2 */}
        <article className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-blue-50 border-b border-blue-100 px-8 py-5">
            <p className="text-sm text-blue-600 font-medium mb-1">February 10, 2016 &middot; PRWEB</p>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
              ImagiRation redesigns the app &lsquo;Mental Imagery Therapy for Autism&rsquo; (MITA), with new brain-training exercises for children with autism
            </h2>
          </div>
          <div className="px-8 py-7 text-gray-600 leading-relaxed space-y-4">
            <p>
              ImagiRation announced a major update to Mental Imagery Therapy for Autism (MITA), an early-intervention application for children with Autism Spectrum Disorder (ASD). The new version of the app uses adaptive algorithms to tailor the difficulty of the exercises to the individual abilities of each child.
            </p>
            <p>
              MITA is designed for early childhood and intended for long-term, daily use. The app&apos;s bright, interactive puzzles are based on therapeutic techniques that have been shown to be effective for individuals with ASD.
            </p>
            <p>
              MITA is based on Pivotal Response Treatment (PRT), one of the best-supported therapies for children diagnosed with ASD.
            </p>
            <p>
              MITA is developed by Dr. Andrey Vyshedskiy, a neuroscientist from Boston University; Rita Dunn, a Harvard University-educated early-childhood specialist; MIT-educated Jonah Elgart and a group of award-winning artists and software developers.
            </p>
          </div>
        </article>
      </section>

      {/* CTA to Science */}
      <section className="bg-blue-50 border-t border-blue-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
          <p className="text-gray-700 mb-5 text-lg">
            Interested in the full body of research behind MITA?
          </p>
          <Link
            href="/science"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors shadow"
          >
            See All Publications
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
