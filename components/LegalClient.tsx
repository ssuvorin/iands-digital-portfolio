"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Shield, FileText, Eye, Lock, Users, Globe } from 'lucide-react'

const legalSections = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your personal information.',
    content: [
      'Information Collection: We collect information you provide directly to us, such as when you fill out forms, contact us, or use our services.',
      'Use of Information: We use the information we collect to provide, maintain, and improve our services, communicate with you, and develop new features.',
      'Information Sharing: We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.',
      'Data Security: We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
      'Cookies and Tracking: We use cookies and similar technologies to enhance your experience and analyze how our services are used.',
      'Your Rights: You have the right to access, update, or delete your personal information. Contact us to exercise these rights.',
      'Updates to Policy: We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.',
    ],
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: 'Terms of Service',
    description: 'The terms and conditions governing your use of our services.',
    content: [
      'Acceptance of Terms: By accessing or using our services, you agree to be bound by these terms and conditions.',
      'Service Description: We provide digital marketing, web design, development, and related services as described on our website.',
      'User Responsibilities: You are responsible for providing accurate information and complying with all applicable laws and regulations.',
      'Intellectual Property: All content, designs, and intellectual property created by us remain our property unless otherwise agreed in writing.',
      'Payment Terms: Payment terms are as specified in individual project agreements. Late payments may result in service suspension.',
      'Limitation of Liability: Our liability is limited to the amount paid for our services. We are not liable for indirect or consequential damages.',
      'Termination: Either party may terminate services with written notice. Upon termination, you remain responsible for payment of completed work.',
      'Governing Law: These terms are governed by the laws of the United Arab Emirates.',
    ],
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: 'Cookie Policy',
    description: 'How we use cookies and similar technologies on our website.',
    content: [
      'What Are Cookies: Cookies are small text files stored on your device when you visit our website.',
      'Types of Cookies: We use essential cookies for website functionality, analytics cookies to understand usage, and marketing cookies for targeted advertising.',
      'Cookie Management: You can control cookies through your browser settings. Disabling cookies may affect website functionality.',
      'Third-Party Cookies: Some cookies are set by third-party services we use, such as Google Analytics and social media platforms.',
      'Cookie Duration: Session cookies expire when you close your browser, while persistent cookies remain until manually deleted or expired.',
      'Updates: We may update this cookie policy as our practices change. Check this page regularly for updates.',
    ],
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: 'Data Protection',
    description: 'Our commitment to protecting your data and privacy.',
    content: [
      'Data Protection Principles: We follow international data protection principles and UAE data protection regulations.',
      'Data Minimization: We only collect and process data that is necessary for providing our services.',
      'Data Retention: We retain your data only as long as necessary to provide services or comply with legal obligations.',
      'Data Processing: We process your data lawfully, fairly, and transparently, with appropriate security measures.',
      'International Transfers: If we transfer data internationally, we ensure adequate protection measures are in place.',
      'Breach Notification: In case of a data breach, we will notify affected individuals and authorities as required by law.',
      'Data Protection Officer: For data protection inquiries, contact our Data Protection Officer at dpo@isdigital.ae.',
    ],
  },
]

export default function LegalClient() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Legal <span className="gradient-text">Information</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transparency and trust are fundamental to our business. Here you'll find all the legal 
            information you need about our services, privacy practices, and terms of engagement.
          </motion.p>
        </div>
      </section>
      {/* Legal Sections */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {legalSections.map((section, index) => (
              <motion.div
                key={section.title}
                className="glass-card p-8 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4 mb-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <div className="text-accent">
                      {section.icon}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-2">
                      {section.title}
                    </h2>
                    <p className="text-white/70 text-lg">
                      {section.description}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-4 mt-3 flex-shrink-0" />
                      <p className="text-white/80 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Additional Information */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Need More <span className="gradient-text">Information</span>?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              If you have questions about our legal policies or need clarification on any terms, 
              don't hesitate to reach out to our legal team.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-6 h-6" />,
                title: 'Legal Team',
                description: 'Our experienced legal team is here to help with any questions.',
                contact: 'legal@isdigital.ae',
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: 'Compliance',
                description: 'We maintain compliance with international and local regulations.',
                contact: 'compliance@isdigital.ae',
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: 'Data Protection',
                description: 'For data protection and privacy inquiries.',
                contact: 'dpo@isdigital.ae',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                  <div className="text-accent">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-white/60 text-sm mb-4">
                  {item.description}
                </p>
                <a
                  href={`mailto:${item.contact}`}
                  className="text-accent hover:text-accent/80 transition-colors duration-300 text-sm font-medium"
                >
                  {item.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Ready to <span className="gradient-text">Work Together</span>?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Now that you understand our legal framework, let's discuss your project 
              and create something amazing together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent hover:bg-accent/90 text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 