'use client'

import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react'

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
          {/* Brand */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text">I&S Media and Digital</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              We don&apos;t just build digital experiences — we build obsession.
              <br />
              Stories that spark curiosity. Funnels that convert. Ideas that <em>live</em> in minds.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/iandsagency"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@iandsagency"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.85V1h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/i-s-digital/"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:text-accent hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </motion.div>

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
                'Web Development & SEO',
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

          {/* Contact */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
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