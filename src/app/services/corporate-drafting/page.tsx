import Link from 'next/link'
import Header from '@/components/Header'

export default function CorporateDraftingPage() {
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
              Corporate Drafting
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Build with Confidence — Corporate Drafting that Works for You
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Clear, practical legal documentation designed to support your business at every stage — from setup to scaling.
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
              Why Corporate Drafting Matters
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Strong legal foundations are essential from day one. Whether you're setting up a company, 
                restructuring operations, or preparing for growth, well-drafted corporate documents support 
                clarity, compliance, and smooth operations. Without proper documentation, businesses face 
                confusion, legal risks, and operational inefficiencies that can slow growth and create 
                avoidable problems.
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
                <p className="text-gray-700 text-lg">Company incorporation documents that meet legal requirements</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Corporate governance documents tailored to your structure</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Shareholder agreements that define rights and responsibilities</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Board resolutions and meeting minutes documentation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Documents aligned with your business operations and goals</p>
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
                Corporate Drafting is designed for businesses at different stages — startups setting up 
                their structure, growing companies restructuring operations, and established businesses 
                updating documentation to reflect current needs. If you need clear, compliant corporate 
                documents that support your operations, this service is for you.
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
                <p className="text-gray-700 text-lg">Establish clear legal foundations from the start</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Ensure compliance with corporate law requirements</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Define ownership, governance, and operational structure</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Support smooth operations and decision-making</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Prepare documentation that scales with your business</p>
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
                <p className="text-gray-700 text-lg">Practical documentation designed for your business needs</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Clear, accessible language that your team can understand</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Compliance with applicable corporate laws and regulations</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Documentation that supports your business goals</p>
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

