import Link from 'next/link'
import Header from '@/components/Header'

export default function HRWorkplacePoliciesPage() {
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
              HR & Workplace Policies
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Clear policies that support people and protect your business
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              As teams grow, clear workplace policies become essential. LiveLegal helps you put practical HR and workplace policies in place that set expectations, support employees, and keep your business compliant.
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
              Why HR & Workplace Policies Matter
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                As businesses grow and teams expand, clear workplace policies become essential. Well-drafted 
                HR and workplace policies set expectations, support employees, protect the business, and 
                ensure compliance with employment laws. Without proper policies, businesses face confusion, 
                conflicts, and legal risks that can affect operations and culture.
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
                <p className="text-gray-700 text-lg">Employee handbook and workplace policies</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Leave and attendance policies</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Code of conduct and behavioral expectations</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Grievance and disciplinary procedures</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Policies aligned with employment laws</p>
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
                HR & Workplace Policies are designed for businesses with employees — whether you're 
                a startup building your first team, a growing company expanding operations, or an 
                established business updating documentation. If you need clear, compliant workplace 
                policies that support your people and protect your business, this service is for you.
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
                <p className="text-gray-700 text-lg">Set clear expectations and standards</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Support employees and build a healthy culture</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Ensure compliance with employment laws</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Protect your business from legal risks</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Support efficient operations and decision-making</p>
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
                <p className="text-gray-700 text-lg">Practical policies that work for your workplace</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Clear, accessible language that employees understand</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Compliance with applicable employment laws</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Policies that support people and protect business</p>
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

