import Link from 'next/link'
import Header from '@/components/Header'

export default function VendorAgreementsPage() {
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
              Vendor Agreements
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Strong agreements for reliable vendor relationships
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Vendors play a key role in business operations. LiveLegal helps you put clear, well-structured vendor agreements in place so expectations, responsibilities, and risks are properly defined from the start.
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
              Why Vendor Agreements Matter
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Vendors play a crucial role in business operations, and clear agreements are essential 
                for managing these relationships effectively. Well-drafted vendor agreements define 
                scope, timelines, payments, responsibilities, and risks — helping you manage vendors 
                with confidence while reducing misunderstandings and legal risks.
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
                <p className="text-gray-700 text-lg">Vendor service agreements with clear scope</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Payment terms and timelines clearly defined</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Responsibilities and deliverables outlined</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Liability and risk allocation clauses</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Termination and dispute resolution provisions</p>
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
                Vendor Agreements are designed for businesses working with vendors — whether you're 
                engaging suppliers, service providers, contractors, or consultants. If you need clear, 
                protective vendor agreements that define expectations and minimize risks, this service 
                is for you.
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
                <p className="text-gray-700 text-lg">Manage vendors with confidence</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Reduce misunderstandings and conflicts</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Protect your business from legal risks</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Ensure clear expectations from the start</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Support smooth vendor relationships</p>
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
                <p className="text-gray-700 text-lg">Agreements tailored to your vendor relationships</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Clear structure that both parties understand</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Practical terms that work in real situations</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Documents that protect your interests</p>
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

