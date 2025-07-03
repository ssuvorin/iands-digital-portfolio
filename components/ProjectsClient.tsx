"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight, Target } from 'lucide-react'
import { projects } from '@/lib/projects'

export default function ProjectsClient() {
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
            Our <span className="gradient-text">Portfolio</span>
          </motion.h1>
          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover how we&apos;ve helped brands across industries achieve 
            remarkable growth through strategic digital solutions.
          </motion.p>
        </div>
      </section>
      {/* Projects Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="glass-card group hover:scale-105 transition-all duration-300 overflow-hidden">
                    {/* Project Image */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-white/10 flex items-center justify-center relative overflow-hidden">
                      <div className="text-white/40 text-center">
                        <div className="w-16 h-16 bg-white/10 rounded-lg mx-auto mb-4 flex items-center justify-center">
                          <Target className="w-8 h-8" />
                        </div>
                        <p className="font-medium">{project.title}</p>
                        <p className="text-sm">Case Study</p>
                      </div>
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                          {project.industry}
                        </span>
                        <span className="flex items-center text-white/60 text-sm">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      {/* KPIs Preview */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {project.kpis.slice(0, 3).map((kpi, kpiIndex) => (
                          <div key={kpiIndex} className="text-center">
                            <div className="text-lg font-bold text-accent">
                              {kpi.value}
                            </div>
                            <div className="text-xs text-white/50 truncate">
                              {kpi.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-white/5 text-white/60 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 2 && (
                          <span className="px-2 py-1 bg-white/5 text-white/60 rounded text-xs">
                            +{project.tags.length - 2} more
                          </span>
                        )}
                      </div>
                      {/* CTA */}
                      <div className="flex items-center justify-between">
                        <span className="text-accent font-medium group-hover:underline">
                          View Case Study
                        </span>
                        <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats Section */}
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
              Portfolio <span className="gradient-text">Overview</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: projects.length, label: 'Projects Completed' },
              { value: new Set(projects.map(p => p.industry)).size, label: 'Industries Served' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '2024', label: 'Active Year' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/70">
                  {stat.label}
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
              Ready to Join Our <span className="gradient-text">Success Stories</span>?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your brand and achieve 
              remarkable growth like our featured clients.
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