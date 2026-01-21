import Link from 'next/link'
import Header from '@/components/Header'

export default function BusinessAgreementsPage() {
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
              Business Agreements
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Clear agreements that protect your business and support growth
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Business relationships work best when expectations are clearly defined. LiveLegal helps you put strong, practical business agreements in place so your dealings with clients, partners, and collaborators remain smooth, transparent, and legally secure.
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
              Why Business Agreements Matter
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Whether you're working with clients, partners, or collaborators, clear agreements set 
                expectations, define responsibilities, and protect interests. Without proper documentation, 
                business relationships can face misunderstandings, disputes, and legal risks that slow 
                growth and create avoidable problems. Well-drafted business agreements help ensure 
                transparency, accountability, and smooth operations.
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
                <p className="text-gray-700 text-lg">Client agreements that clearly define scope and terms</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Partnership agreements that protect all parties</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Collaboration agreements for joint projects</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Non-disclosure agreements (NDAs) to protect confidentiality</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Agreements that reflect your commercial terms</p>
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
                Business Agreements are designed for businesses working with clients, partners, or 
                collaborators — whether you're a service provider, consultant, startup, or established 
                company. If you need clear, protective agreements that define expectations and minimize 
                future conflicts, this service is for you.
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
                <p className="text-gray-700 text-lg">Protect your interests and minimize conflicts</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Define clear expectations from day one</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Ensure transparency in business relationships</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Support smooth operations and growth</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Build trust with clients and partners</p>
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
                <p className="text-gray-700 text-lg">Agreements tailored to your business needs</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Clear language that both parties can understand</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Practical terms that work in real business situations</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl">✓</span>
                <p className="text-gray-700 text-lg">Documents that reflect your commercial terms</p>
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

