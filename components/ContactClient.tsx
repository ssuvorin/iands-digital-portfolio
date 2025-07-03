"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react'

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: 'Email Us',
    info: 'hello@isdigital.ae',
    link: 'mailto:hello@isdigital.ae',
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: 'Call Us',
    info: '+971 50 232 2949',
    link: 'tel:+971502322949',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Visit Us',
    info: 'Dubai, Dusseldorf Business Point, office 903',
    link: 'https://maps.google.com/?q=Dubai,+Dusseldorf+Business+Point,+office+903',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Working Hours',
    info: 'Sun - Thu: 9:00 AM - 6:00 PM',
    link: '#',
  },
]

const services = [
  'Web Design & Development',
  'Brand Identity & Strategy',
  'Digital Marketing',
  'Social Media Management',
  'Content Creation',
  'E-commerce Solutions',
  'SEO & Analytics',
  'Consulting',
]

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      budget: '',
      message: '',
    })
    setIsSubmitting(false)
    
    // You would typically send this to your backend here
    alert('Thank you for your message! We\'ll get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
            Let's Create Something <span className="gradient-text">Amazing</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Ready to transform your digital presence? We're here to help bring your vision to life 
            with innovative strategies and exceptional execution.
          </motion.p>
        </div>
      </section>
      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Start Your <span className="gradient-text">Project</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-white/80 mb-2 text-sm font-medium">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-white/80 mb-2 text-sm font-medium">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service} className="bg-black">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-white/80 mb-2 text-sm font-medium">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k" className="bg-black">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-black">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-black">$25,000 - $50,000</option>
                      <option value="50k+" className="bg-black">$50,000+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-accent focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">
                Get In <span className="gradient-text">Touch</span>
              </h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start space-x-4 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                      <div className="text-accent">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      {item.link !== '#' ? (
                        <a href={item.link} className="text-white/70 hover:text-accent transition-colors duration-300">
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-white/70">{item.info}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Quick Info */}
              <motion.div
                className="glass-card p-6 rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-accent" />
                  Why Choose I&S Digital?
                </h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    5+ years of proven results
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    150+ successful projects delivered
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    98% client satisfaction rate
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                    24/7 project support
                  </li>
                </ul>
              </motion.div>
              {/* Socials */}
              <div className="flex space-x-4 mt-8 justify-center">
                <a href="https://www.instagram.com/iandsagency" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/60 hover:text-accent transition-colors duration-300 text-2xl">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5a4.25 4.25 0 0 1-4.25 4.25h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@iandsagency" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white/60 hover:text-accent transition-colors duration-300 text-2xl">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.5 2a.75.75 0 0 0-.75.75v10.5a3.25 3.25 0 1 1-3.25-3.25.75.75 0 0 0 0-1.5A4.75 4.75 0 1 0 18 14.25V8.56a6.25 6.25 0 0 0 3.25.94.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75h-3.75Zm.75 2.06c.7.4 1.5.64 2.25.69v3.02a7.75 7.75 0 0 1-2.25-.6V4.06ZM13.5 17.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5Z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/i-s-digital/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/60 hover:text-accent transition-colors duration-300 text-2xl">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-7 7.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm-4.25 7.25h2.5v-5.5h-2.5v5.5Zm7.5 0h2.5v-3.25c0-1.24-.99-2.25-2.25-2.25s-2.25 1.01-2.25 2.25V18h2.5v-3.25c0-.41.34-.75.75-.75s.75.34.75.75V18Z"/></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
} 