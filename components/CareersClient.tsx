"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Heart, Trophy, Users, Coffee, MapPin, Clock, DollarSign } from 'lucide-react'

const benefits = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Work-Life Balance',
    description: 'Flexible hours and remote work options to maintain a healthy work-life balance.',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Growth Opportunities',
    description: 'Continuous learning programs and career advancement paths.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Collaborative Culture',
    description: 'Work with talented individuals in a supportive, creative environment.',
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: 'Great Perks',
    description: 'Competitive salary, health benefits, and team building activities.',
  },
]

const openings = [
  {
    title: 'Senior UX/UI Designer',
    department: 'Design',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Lead design projects for premium brands and create exceptional user experiences.',
    requirements: [
      'Expert in Figma, Adobe Creative Suite',
      'Strong portfolio showcasing UX/UI projects',
      'Experience with design systems',
      'Understanding of web and mobile design principles',
    ],
  },
  {
    title: 'Frontend Developer',
    department: 'Development',
    location: 'Dubai, UAE / Remote',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Build responsive, high-performance websites using modern technologies.',
    requirements: [
      'Proficiency in React, Next.js, TypeScript',
      'Experience with TailwindCSS, Framer Motion',
      'Understanding of web performance optimization',
      'Knowledge of modern build tools',
    ],
  },
  {
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '2-3 years',
    description: 'Develop and execute digital marketing strategies for our clients.',
    requirements: [
      'Experience with Meta Ads, Google Ads, TikTok Ads',
      'Strong analytical and reporting skills',
      'Knowledge of SEO and content marketing',
      'Creative thinking and problem-solving abilities',
    ],
  },
  {
    title: 'Project Manager',
    department: 'Operations',
    location: 'Dubai, UAE',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Oversee project delivery and ensure client satisfaction.',
    requirements: [
      'Experience managing digital projects',
      'Strong communication and leadership skills',
      'Familiarity with project management tools',
      'Ability to work under pressure and meet deadlines',
    ],
  },
]

export default function CareersClient() {
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
            Shape the <span className="gradient-text">Future</span> with Us
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join a team of passionate creators, innovators, and problem-solvers who are 
            redefining what's possible in digital experiences.
          </motion.p>
        </div>
      </section>
      {/* Why Join Us */}
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
              Why <span className="gradient-text">I&S Digital</span>?
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're not just a workplace – we're a community of innovators building the future of digital experiences.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                  <div className="text-accent">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Open Positions */}
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
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-white/70">
              Ready to make an impact? Explore our current openings and find your perfect role.
            </p>
          </motion.div>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <motion.div
                key={job.title}
                className="glass-card p-8 rounded-2xl group hover:bg-white/10 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-white/60 text-sm">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1" />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 lg:mt-0"
                  >
                    <Link
                      href="/contact"
                      className="inline-flex items-center bg-accent hover:bg-accent/90 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                    >
                      Apply Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </motion.div>
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">
                  {job.description}
                </p>
                <div>
                  <h4 className="font-semibold mb-3 text-accent">Requirements:</h4>
                  <ul className="space-y-2 text-white/70">
                    {job.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
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
              Don't See Your <span className="gradient-text">Perfect Role</span>?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for 
              innovation and excellence. Send us your portfolio and let's talk!
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center bg-accent hover:bg-accent/90 text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 