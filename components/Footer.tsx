import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="text-lg font-bold tracking-tight text-gray-900 hover:text-brand-600 transition-colors">
              ImagiRation
            </Link>
            <p className="mt-2 text-sm text-gray-500 leading-relaxed">
              Digital medicine startup developing adaptive language therapy and
              brain-training apps backed by rigorous clinical science.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Products
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/autism" className="text-gray-600 hover:text-brand-600 transition-colors">
                  MITA — For Autism
                </Link>
              </li>
              <li>
                <Link href="/brain-training#math-logic" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Math &amp; Logic Kids Games
                </Link>
              </li>
              <li>
                <Link href="/brain-training#pooza-preschoolers" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Pooza for Preschoolers
                </Link>
              </li>
              <li>
                <Link href="/brain-training#pooza-toddlers" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Pooza for Toddlers
                </Link>
              </li>
              <li>
                <Link href="/brain-training#recoverbrain" className="text-gray-600 hover:text-brand-600 transition-colors">
                  RecoverBrain Therapy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#science" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Science
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="/autism/mita-faqs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-brand-600 transition-colors"
                >
                  MITA FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} ImagiRation. All rights reserved.</p>
          <p>
            <a href="mailto:info@imagiration.com" className="hover:text-brand-600 transition-colors">
              info@imagiration.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
