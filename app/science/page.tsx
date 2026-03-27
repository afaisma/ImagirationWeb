import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Science | ImagiRation",
  description:
    "Clinical research and publications behind MITA and ImagiRation's brain training apps.",
};

const publications = [
  {
    title: "Are there distinct levels of language comprehension in autistic individuals – cluster analysis",
    journal: "npj Digital Medicine",
    year: "2024",
    url: null,
  },
  {
    title:
      "A Comparison of Parent Reports, the Mental Synthesis Evaluation Checklist (MSEC) and the Autism Treatment Evaluation Checklist (ATEC), with the Childhood Autism Rating Scale (CARS)",
    journal: "Pediatric Reports",
    year: null,
    url: null,
  },
  {
    title: "Critical period for first language acquisition may be shorter in autistic children than in typical children",
    journal: "Preprint",
    year: "2024",
    url: null,
  },
  {
    title: "Dietary Factors Impact Developmental Trajectories in Young Autistic Children",
    journal: "Journal of Autism and Developmental Disorders",
    year: "2023",
    url: null,
  },
  {
    title: "Joint engagement is associated with greater development of language and sensory awareness in children with autism",
    journal: "J Dev Phys Disabil",
    year: "2023",
    url: null,
  },
  {
    title: "Parent-reported assessment scores reflect the ASD severity level in 2- to 7-year-old children",
    journal: "Children",
    year: "2022",
    url: null,
  },
  {
    title: "Longitudinal developmental trajectories in young autistic children presenting with seizures",
    journal: "J Dev Phys Disabil",
    year: null,
    url: null,
  },
  {
    title: "Longitudinal developmental trajectories in young autistic children presenting with sleep problems",
    journal: "J Dev Phys Disabil",
    year: null,
    url: null,
  },
  {
    title: "Pretend play predicts language development in young children with Autism Spectrum Disorder",
    journal: "International Journal of Play",
    year: "2023",
    url: null,
  },
  {
    title:
      "Combinatorial language parent-report score differs significantly between typically developing children and those with Autism Spectrum Disorders",
    journal: "Journal of Autism and Developmental Disorders",
    year: "2022",
    url: null,
  },
  {
    title: "Novel prefrontal synthesis intervention improves language in children with autism",
    journal: "Journal Healthcare",
    year: "2020",
    url: "https://www.mdpi.com/2227-9032/8/4/566",
  },
  {
    title:
      "NEW BOOK: This Way to Language: Four Things to Do at the First Sign of Autism by Dr. Vyshedskiy",
    journal: "Available on Amazon",
    year: null,
    url: null,
  },
  {
    title: "Imagination in autism: a chance to improve early language therapy",
    journal: "Journal Healthcare",
    year: "2020",
    url: null,
  },
  {
    title:
      "Watching videos and television is related to a lower development of complex language comprehension in young children with autism",
    journal: "Journal Healthcare",
    year: "2020",
    url: null,
  },
  {
    title:
      "Novel linguistic evaluation of prefrontal synthesis (LEPS) test measures prefrontal synthesis acquisition in neurotypical children",
    journal: null,
    year: null,
    url: null,
  },
  {
    title: "Neuroscience of imagination and implications for human evolution",
    journal: "Current Neurobiology",
    year: "2020",
    url: null,
  },
  {
    title:
      "Longitudinal epidemiological study of autism subgroups using autism treatment evaluation checklist (ATEC) score",
    journal: "Journal of Autism and Developmental Disorders",
    year: null,
    url: null,
  },
  {
    title: "Development of the Mental Synthesis Evaluation Checklist (MSEC)",
    journal: "Children",
    year: "2018",
    url: null,
  },
  {
    title:
      "Autism Treatment Evaluation Checklist (ATEC) Norms: A 'Growth Chart' for ATEC Score Changes as a Function of Age",
    journal: "Children",
    year: "2018",
    url: null,
  },
  {
    title:
      "Comparison of Performance on Verbal and Nonverbal Multiple-Cue Responding Tasks in Children with ASD",
    journal: "Autism – Open Access",
    year: "2017",
    url: null,
  },
  {
    title:
      "Children with Autism Appear to Benefit from Parent-Administered Computerized Cognitive and Language Exercises",
    journal: "Autism – Open Access",
    year: "2017",
    url: null,
  },
  {
    title:
      "Linguistically-deprived children: Meta-analysis of published research underlines the importance of early syntactic language use",
    journal: "Research Ideas and Outcomes",
    year: "2017",
    url: null,
  },
  {
    title:
      "Tablet-Based Cognitive Exercises as an Early Parent-Administered Intervention Tool for Toddlers with Autism",
    journal: "Clinical Psychiatry",
    year: "2017",
    url: null,
  },
  {
    title:
      "Neurobiological mechanisms for nonverbal IQ tests: implications for instruction of nonverbal children with autism",
    journal: "Research Ideas and Outcomes",
    year: "2017",
    url: null,
  },
  {
    title: "The neuroscience of imagination, video for TED-ED",
    journal: "TED",
    year: "2016",
    url: null,
  },
  {
    title: "Mental synthesis involves the synchronization of independent neuronal ensembles",
    journal: "Research Ideas and Outcomes",
    year: "2015",
    url: null,
  },
  {
    title:
      "Mental Imagery Therapy for Autism (MITA) An Early Intervention Computerized Brain Training Program for Children with ASD",
    journal: "Autism Open Access",
    year: "2015",
    url: null,
  },
];

export default function SciencePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-indigo-100 bg-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              FDA Breakthrough Device Designation
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-5">
              Science
            </h1>
            <p className="text-lg text-indigo-100 leading-relaxed">
              MITA is the first and only language therapy application supported by clinical data.
            </p>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {[
            { value: "6,454 children", label: "3-year clinical study" },
            { value: "2.2× improvement", label: "Language score vs. control group" },
            { value: "FDA Breakthrough", label: "Device Designation Q210093" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 rounded-2xl bg-indigo-50 border border-indigo-100"
            >
              <p className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-2">{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl text-gray-600 leading-relaxed space-y-4">
          <p>
            In a 3-year clinical trial of 6,454 children with autism, language score in children who engaged with MITA has increased to levels that were 120% higher than in children with similar initial evaluations. The FDA has granted MITA a breakthrough device designation (Q210093). We are in consultations with FDA on a path toward MITA becoming a Class II medical device.
          </p>
        </div>
      </section>

      {/* Publications */}
      <section className="bg-indigo-50 border-y border-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-10">
            ImagiRation Publications
          </h2>
          <div className="space-y-4">
            {publications.map((pub, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-200 px-6 py-5 shadow-sm hover:shadow-md transition-shadow"
              >
                {pub.url ? (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-indigo-700 hover:text-indigo-800 leading-snug block mb-1.5 hover:underline"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <p className="font-semibold text-gray-900 leading-snug mb-1.5">{pub.title}</p>
                )}
                <div className="flex flex-wrap gap-2 text-sm">
                  {pub.journal && (
                    <span className="text-indigo-600 font-medium">{pub.journal}</span>
                  )}
                  {pub.journal && pub.year && <span className="text-gray-400">&middot;</span>}
                  {pub.year && <span className="text-gray-500">{pub.year}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Scientific Research */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            Independent Scientific Research
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              In 4-year-old children computerized training with puzzles that gradually increased in difficulty significantly improved their fluid intelligence compared to a control group.
            </p>
            <p>
              In children aged 7 to 9, reasoning training with puzzles similar to ImagiRation puzzles increased &ldquo;performance IQ by an average of 10 points, with four of the 17 children showing gains of over 20 points.&rdquo;
            </p>
            <p>
              There is also significant evidence of long-term benefits of cognitive training. Reference: Jaeggi, Susanne M., et al. Short- and long-term benefits of cognitive training. Proceedings of the National Academy of Sciences (2011).
            </p>
          </div>
          <div className="mt-8">
            <a
              href="https://www.mdpi.com/2227-9032/8/4/566"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Read the Clinical Paper
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-50 border-t border-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Learn more about MITA
          </h2>
          <p className="text-gray-600 mb-7 max-w-md mx-auto">
            Discover how MITA&apos;s evidence-based approach can help children with autism.
          </p>
          <Link
            href="/autism"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-colors shadow"
          >
            Learn About MITA
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
