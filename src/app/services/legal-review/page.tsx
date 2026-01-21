import Link from 'next/link'
import Header from '@/components/Header'

export default function LegalReviewPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Dark green background */}
        <section className="bg-[#1B4332] py-20 pt-32 text-center">
          <div className="container mx-auto px-4">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 text-[#d4a373] hover:text-[#b8915f] transition-colors mb-8"
            >
              <span>←</span>
              <span>Back to Services</span>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Legal Review
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Know what you're signing. Fix risks before they become problems.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Legal documents can look fine on the surface but still carry hidden risks. LiveLegal's Legal Review service helps you understand your documents clearly, identify gaps, and make informed decisions before you commit.
            </p>
            <Link 
              href="/contact-us"
              className="inline-block bg-[#d4a373] text-white px-8 py-4 rounded-lg hover:bg-[#b8915f] transition-colors font-medium text-lg"
            >
              Get a Consultation
            </Link>
          </div>
        </section>

        {/* Why It Matters Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              Why Legal Review Matters
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Legal documents often contain complex language, hidden risks, and clauses that may not 
                align with your interests. Without proper review, you might sign agreements that create 
                unnecessary liabilities, limit your rights, or fail to protect your interests. A thorough 
                legal review helps you understand what you're agreeing to, identify potential problems, 
                and make informed decisions before you commit.
              </p>
            </div>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              What You Get
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Clear explanation of key terms and conditions</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Identification of risks, gaps, and potential issues</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Compliance check with applicable laws and regulations</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Recommendations for improvements or modifications</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Plain-language summary of complex clauses</p>
              </div>
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              Who This Is For
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Legal Review is designed for businesses and individuals who need to understand documents 
                before signing — whether it's contracts, agreements, leases, employment documents, or 
                other legal paperwork. If you want clarity on what you're agreeing to and need to identify 
                risks before they become problems, this service is for you.
              </p>
            </div>
          </div>
        </section>

        {/* How This Helps You Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              How This Helps You
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Understand your obligations and rights clearly</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Identify risks and potential problems early</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Make informed decisions before committing</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Ensure compliance with applicable laws</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Avoid issues that could cost time and money later</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why LiveLegal Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              Why LiveLegal
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Clear, accessible explanations in plain language</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Thorough review that identifies risks and opportunities</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Practical recommendations that work for your situation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Focus on helping you make informed decisions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Dark green background */}
        <section className="bg-[#1B4332] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Let's Get Started
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact-us"
                className="inline-block bg-[#d4a373] text-white px-8 py-4 rounded-lg hover:bg-[#b8915f] transition-colors font-medium"
              >
                📩 Book a Call
              </Link>
              <Link 
                href="/contact-us"
                className="inline-block bg-transparent border-2 border-[#d4a373] text-[#d4a373] px-8 py-4 rounded-lg hover:bg-[#d4a373] hover:text-white transition-colors font-medium"
              >
                📞 Contact LiveLegal
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

