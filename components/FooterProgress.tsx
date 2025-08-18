'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function FooterProgress() {
  const [currentYear] = useState(new Date().getFullYear())
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Services */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              {[
                'Social Media Management',
                'Advertisement & Lead Generation',
                'Branding & Creative Solutions',
                'Media Production & Content Creation',
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-white/60 hover:text-accent transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Work', href: '/projects' },
                { name: 'Careers', href: '/careers' },
                { name: 'Services', href: '/services' },
                { name: 'Contact', href: '/contact' },
                { name: 'Privacy Policy', href: '/legal' },
              ].map(({ name, href }) => (
                <li key={name}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-accent transition-colors duration-300"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-white/60">
                <Mail size={16} className="text-accent" />
                <a
                  href="mailto:hello@ins.digital"
                  className="hover:text-accent transition-colors duration-300"
                >
                  hello@ins.digital
                </a>
              </div>
              <div className="flex items-center space-x-3 text-white/60">
                <Phone size={16} className="text-accent" />
                <a
                  href="tel:+971502322949"
                  className="hover:text-accent transition-colors duration-300"
                >
                  +971 50 232 2949
                </a>
              </div>
              <div className="flex items-start space-x-3 text-white/60">
                <MapPin size={16} className="text-accent mt-0.5" />
                <span>
                  Dubai, Dusseldorf Business Point,<br />
                  office 903
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Lead Form (on the right of contact info) */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <QuickLeadForm />
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm">
            © {currentYear} I&S Media and Digital. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              href="/legal"
              className="text-white/40 hover:text-accent transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal"
              className="text-white/40 hover:text-accent transition-colors duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
} 

function QuickLeadForm() {
  const [name, setName] = useState('')
  const [niche, setNiche] = useState('')
  const [customNiche, setCustomNiche] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const resolvedNiche = niche === 'Other' ? customNiche : niche

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    try {
      const payload = {
        name,
        email: 'lead@ins.digital',
        company: '',
        service: 'Quick Lead',
        budget: '',
        message: `Phone: ${phone}\nNiche: ${resolvedNiche || 'N/A'}`,
      }
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to submit')
      }
      setSubmitted(true)
      setName('')
      setNiche('')
      setCustomNiche('')
      setPhone('')
    } catch (err: any) {
      setError(err?.message || 'Submission error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="glass-card p-4 rounded-lg text-sm text-white/70">
        Thanks! We’ll reach out shortly.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-4 rounded-lg space-y-3">
      {error && (
        <div className="text-red-400 text-xs">{error}</div>
      )}
      <div>
        <label className="block text-white/80 mb-1 text-xs">Name *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:border-accent focus:outline-none text-sm"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-white/80 mb-1 text-xs">Niche</label>
        <select
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:border-accent focus:outline-none text-sm"
        >
          <option value="" className="bg-black">Select niche</option>
          <option value="Real Estate" className="bg-black">Real Estate</option>
          <option value="F&B" className="bg-black">F&amp;B</option>
          <option value="Beauty" className="bg-black">Beauty</option>
          <option value="Other" className="bg-black">Other</option>
        </select>
      </div>
      {niche === 'Other' && (
        <div>
          <label className="block text-white/80 mb-1 text-xs">Other niche</label>
          <input
            type="text"
            value={customNiche}
            onChange={(e) => setCustomNiche(e.target.value)}
            className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:border-accent focus:outline-none text-sm"
            placeholder="Type your niche"
          />
        </div>
      )}
      <div>
        <label className="block text-white/80 mb-1 text-xs">Phone *</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-md focus:border-accent focus:outline-none text-sm"
          placeholder="+971 ..."
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-black px-4 py-2 rounded-md font-semibold text-sm transition-colors duration-300"
      >
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
      <p className="text-[10px] text-white/40">By submitting, you agree to our Privacy Policy.</p>
    </form>
  )
}