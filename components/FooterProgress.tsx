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
            <h3 className="text-2xl font-bold gradient-text">I&S Digital</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Crafting next-level digital experiences that captivate, engage, 
              and drive measurable results for forward-thinking brands.
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
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 2a.75.75 0 0 0-.75.75v10.5a3.25 3.25 0 1 1-3.25-3.25.75.75 0 0 0 0-1.5A4.75 4.75 0 1 0 18 14.25V8.56a6.25 6.25 0 0 0 3.25.94.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75h-3.75Zm.75 2.06c.7.4 1.5.64 2.25.69v3.02a7.75 7.75 0 0 1-2.25-.6V4.06ZM13.5 17.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"/></svg>
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
                'Web Design & Development',
                'Brand Identity & Strategy',
                'Digital Marketing',
                'E-commerce Solutions',
                'UI/UX Design',
                'Content Creation',
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
                  href="mailto:hello@isdigital.ae"
                  className="hover:text-accent transition-colors duration-300"
                >
                  hello@isdigital.ae
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
            © {currentYear} I&S Digital. All rights reserved.
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