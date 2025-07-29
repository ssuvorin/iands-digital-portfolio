"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Palette, Code, Megaphone, Camera, BarChart3, ShoppingCart, Search, Lightbulb, CheckCircle, Users, Globe, Shield, MessageSquare, Target, Video, Monitor } from 'lucide-react'

const services = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'Social Media Management',
    description: 'Complete social media strategy and management for brand growth.',
    features: [
      'Strategy Development',
      'Content Calendar Planning',
      'Content Production & Curation',
      'Influencer Marketing & UGC',
      'Community Management',
    ],
    process: 'Strategy → Content → Engagement → Growth',
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: 'Advertisement & Lead Generation',
    description: 'Data-driven advertising campaigns that generate qualified leads.',
    features: [
      'Social Media Ads (Facebook, Instagram, TikTok, LinkedIn)',
      'Google Ads (Search, Display, YouTube)',
      'PPC Campaigns & Retargeting',
      '(P)OOH Advertisement',
      'Media Planning & Buying',
    ],
    process: 'Strategy → Campaign Setup → Optimization → Reporting',
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'Branding & Creative Solutions',
    description: 'Complete brand transformation from concept to execution.',
    features: [
      'Brand Strategy Development',
      'Concept Creation & Voice',
      'Corporate Identity',
      'Creative Campaigns',
      'Personal Branding for Executives',
    ],
    process: 'Discovery → Strategy → Design → Implementation',
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Media Production & Content Creation',
    description: 'Professional content creation and media production.',
    features: [
      'Pre-production: Concept, Casting, Scriptwriting',
      'Graphic Design',
      'Post-production: Editing, Retouching, Color Grading, Sound Design',
    ],
    process: 'Concept → Production → Post-production → Delivery',
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Web Development & SEO',
    description: 'Premium websites with SEO optimization for maximum visibility.',
    features: [
      'Website Design & Development (Landing Pages, Corporate, E-commerce)',
      'Responsive & Mobile Optimization',
      'UX/UI Design Optimized for Conversions',
      'SEO Optimization (Keywords, Technical SEO, Content)',
      'Local SEO',
    ],
    process: 'Planning → Design → Development → SEO → Launch',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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