"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Palette, Code, Megaphone, Camera, BarChart3, ShoppingCart, Search, Lightbulb, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Brand Identity & Strategy',
    description: 'Complete brand transformation from concept to execution.',
    features: [
      'Logo Design & Brand Guidelines',
      'Visual Identity Systems',
      'Brand Strategy & Positioning',
      'Packaging & Collateral Design',
    ],
    process: 'Discovery → Strategy → Design → Implementation',
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Web Design & Development',
    description: 'Premium websites that convert visitors into customers.',
    features: [
      'Custom Website Design',
      'Responsive Development',
      'CMS Integration',
      'Performance Optimization',
    ],
    process: 'Planning → Design → Development → Launch',
  },
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that deliver measurable results.',
    features: [
      'Meta & TikTok Advertising',
      'Google Ads & PPC',
      'Social Media Strategy',
      'Email Marketing Automation',
    ],
    process: 'Strategy → Campaign Setup → Optimization → Reporting',
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Content Creation',
    description: 'Compelling content that engages and converts.',
    features: [
      'Photography & Videography',
      'Graphic Design',
      'Copywriting & Content Strategy',
      'Social Media Content',
    ],
    process: 'Brief → Creation → Review → Delivery',
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Analytics & Optimization',
    description: 'Turn data into actionable insights for growth.',
    features: [
      'Performance Tracking',
      'Conversion Rate Optimization',
      'User Behavior Analysis',
      'Custom Reporting Dashboards',
    ],
    process: 'Setup → Monitoring → Analysis → Optimization',
  },
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: 'E-commerce Solutions',
    description: 'Complete online stores that drive sales.',
    features: [
      'Shopify & WooCommerce',
      'Payment Gateway Integration',
      'Inventory Management',
      'Order Fulfillment Systems',
    ],
    process: 'Planning → Setup → Design → Integration',
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'SEO & Search Marketing',
    description: 'Improve visibility and drive organic traffic.',
    features: [
      'Technical SEO Audits',
      'Keyword Research & Strategy',
      'Content Optimization',
      'Local SEO',
    ],
    process: 'Audit → Strategy → Implementation → Monitoring',
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Digital Consulting',
    description: 'Strategic guidance for digital transformation.',
    features: [
      'Digital Strategy Planning',
      'Technology Recommendations',
      'Process Optimization',
      'Growth Strategy Development',
    ],
    process: 'Assessment → Strategy → Planning → Implementation',
  },
]

const industries = [
  'Real Estate',
  'Hospitality & F&B',
  'Beauty & Wellness',
  'Luxury Retail',
  'Healthcare',
  'Technology',
  'Professional Services',
  'E-commerce',
]

export default function ServicesClient() {
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
            Full-Service <span className="gradient-text">Digital Agency</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From strategy to execution, we provide comprehensive digital solutions 
            that drive growth and deliver exceptional results for premium brands.
          </motion.p>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We offer a complete suite of digital services designed to transform your brand 
              and accelerate your business growth.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="glass-card p-6 group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-accent/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                  <div className="text-accent">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {service.title}
                </h3>
                <p className="text-white/70 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-white/60">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs text-white/50 font-medium">
                    {service.process}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Industries We Serve */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our expertise spans across various industries, allowing us to deliver 
              tailored solutions that meet specific market needs.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                className="glass-card p-4 text-center group hover:bg-accent/10 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-medium group-hover:text-accent transition-colors duration-300">
                  {industry}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We follow a proven methodology that ensures every project delivers 
              exceptional results on time and within budget.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your goals, challenges, and target audience.',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing a comprehensive plan and creative direction.',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Bringing the strategy to life with flawless implementation.',
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous improvement based on data and feedback.',
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  {phase.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Business?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              We&apos;re passionate about helping brands grow. Let&apos;s build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center border border-accent text-accent hover:bg-accent hover:text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  Learn More About Us
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 