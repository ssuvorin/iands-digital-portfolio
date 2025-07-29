"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, Users, Lightbulb, Target } from 'lucide-react'

const values = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovation First',
    description: 'We stay ahead of digital trends, constantly exploring new technologies and creative approaches.',
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Results Driven',
    description: 'Every strategy is designed with measurable outcomes in mind. Your success is our success.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Client Partnership',
    description: 'We work as an extension of your team, deeply understanding your brand and business goals.',
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: 'Excellence Standard',
    description: 'We deliver premium quality work that stands out in competitive markets.',
  },
]

const stats = [
  { number: '150+', label: 'Projects Delivered' },
  { number: '8+', label: 'Industries Served' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '5', label: 'Years Experience' },
]

export default function AboutClient() {
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
            Crafting <span className="gradient-text">Digital Excellence</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We&apos;re I&S Media and Digital - a creative agency that transforms ambitious brands through 
            innovative digital strategies and cutting-edge design.
          </motion.p>
        </div>
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-white/10 rounded-lg blur-lg"
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </section>
      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Founded with a vision to bridge the gap between creative excellence and digital innovation, 
                  I&S Media and Digital has grown into a trusted partner for premium brands across multiple industries.
                </p>
                <p>
                  From luxury real estate to cutting-edge F&B concepts, we&apos;ve helped ambitious businesses 
                  transform their digital presence and achieve remarkable growth through strategic thinking 
                  and flawless execution.
                </p>
                <p>
                  Our approach combines deep industry insights with creative innovation, delivering 
                  solutions that not only look exceptional but drive measurable business results.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-3xl font-bold text-accent mb-2">
                        {stat.number}
                      </div>
                      <div className="text-white/60 text-sm">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Our Values */}
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
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              These principles guide every project we undertake and every relationship we build.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                  <div className="text-accent">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
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
            <h2 className="text-4xl font-bold mb-6">
              Ready to <span className="gradient-text">Transform</span> Your Brand?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help your business achieve its digital potential 
              and drive meaningful growth.
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