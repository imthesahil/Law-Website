import Link from 'next/link'
import Header from '@/components/Header'

export default function PoshCompliancePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section - Dark green background - CENTER ALIGNED */}
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
              POSH Compliance
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Building safe, respectful, and compliant workplaces
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Creating a safe and respectful workplace is both a legal responsibility and a core part of good governance. LiveLegal helps organisations implement effective POSH (Prevention of Sexual Harassment) compliance frameworks and provides external member support for Internal Committees.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-10">
              Our approach is practical, sensitive, and aligned with the requirements of the POSH Act.
            </p>
            <Link 
              href="/contact-us"
              className="inline-block bg-[#d4a373] text-white px-8 py-4 rounded-lg hover:bg-[#b8915f] transition-colors font-medium text-lg"
            >
              📩 Book a Call
            </Link>
          </div>
        </section>

        {/* Why POSH Compliance Matters Section - LEFT ALIGNED */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              Why POSH Compliance Matters
            </h2>
            <div className="prose prose-lg max-w-none text-left mb-8">
              <p className="text-gray-700 text-lg mb-6">
                Every organisation with employees is required to comply with the POSH Act. Inadequate policies, missing committees, or improper handling of complaints can lead to legal penalties, reputational damage, and loss of trust.
              </p>
              <p className="text-gray-700 text-lg mb-6 font-semibold">
                POSH compliance helps you:
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Create a safe and inclusive work environment</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Meet statutory obligations under the POSH Act</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Handle complaints in a fair and structured manner</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Protect the organisation from legal and reputational risk</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mt-8 font-medium">
              Strong POSH frameworks protect both employees and the organisation.
            </p>
          </div>
        </section>

        {/* Who This Is For Section - LEFT ALIGNED */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              Who This Is For
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Companies with 10 or more employees</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Startups and growing organisations setting up POSH frameworks</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Businesses forming or restructuring Internal Committees</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Organisations seeking an external member for their IC</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mt-8 font-medium">
              If you have employees, POSH compliance is mandatory — not optional.
            </p>
          </div>
        </section>

        {/* How This Helps You Section - LEFT ALIGNED */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              How This Helps You
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Ensures statutory compliance with the POSH Act</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Builds employee trust and workplace safety</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Reduces legal and reputational exposure</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Creates a structured, transparent grievance process</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Strengthens governance and organisational culture</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mt-8 font-medium">
              You stay compliant while building a safer workplace.
            </p>
          </div>
        </section>

        {/* What You Get Section - LEFT ALIGNED */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              What You Get
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              With LiveLegal's POSH Compliance & External Member Support, you receive:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">POSH policy drafting and implementation support</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Assistance in setting up or reviewing the Internal Committee</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">External member services for IC as per statutory requirement</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Guidance on complaint handling and inquiry processes</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Support in documentation and reporting obligations</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mt-8 font-medium">
              All handled with confidentiality, neutrality, and care.
            </p>
          </div>
        </section>

        {/* What We Do Section - LEFT ALIGNED */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              What We Do
            </h2>
            <div className="prose prose-lg max-w-none text-left">
              <p className="text-gray-700 text-lg mb-6">
                We work closely with organisations to understand their structure, workforce, and existing policies before designing a POSH compliance framework. Our role may include drafting policies, supporting committee formation, acting as an external member, and advising on inquiry procedures.
              </p>
              <p className="text-gray-700 text-lg font-medium">
                Our approach balances legal compliance with sensitivity and fairness.
              </p>
            </div>
          </div>
        </section>

        {/* Why LiveLegal Section - LEFT ALIGNED */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-left">
              Why LiveLegal
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Strong understanding of POSH law and practice</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Neutral, independent external member support</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Practical and confidential handling</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Tailored frameworks for your organisation</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#d4a373] text-2xl flex-shrink-0">✓</span>
                <p className="text-gray-700 text-lg">Trusted guidance in sensitive matters</p>
              </div>
            </div>
            
            <p className="text-gray-700 text-lg mt-8 font-medium">
              We help you manage POSH compliance with care, clarity, and credibility.
            </p>
            
            <p className="text-gray-700 text-lg mt-6">
              If you're setting up POSH compliance, appointing an external member, or reviewing your existing framework, we'd be happy to assist.
            </p>
          </div>
        </section>

        {/* CTA Section - Dark green background - CENTER ALIGNED */}
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

