'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Project } from '@/lib/projects'
import MagneticButton from './MagneticButton'

interface CaseSectionProps {
  project: Project
  index: number
}

export default function CaseSection({ project, index }: CaseSectionProps) {
  return (
    <div
      className="w-screen h-full flex items-center justify-center relative"
      style={{ 
        background: `linear-gradient(135deg, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url(${project.cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Content */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center h-auto md:h-full py-4 md:py-8 lg:py-0">
        {/* Left side - Project info */}
        <motion.div
          className="space-y-4 md:space-y-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="space-y-2">
            <span className="text-accent text-xs md:text-sm font-medium tracking-wider uppercase">
              {project.industry} • {project.year}
            </span>
            <h3 className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-2 md:px-3 py-1 bg-white/10 text-white/80 rounded-full text-xs md:text-sm backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + tagIndex * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 md:px-3 py-1 bg-accent/20 text-accent rounded-full text-xs md:text-sm">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-3 gap-2 md:gap-3 lg:gap-4 pt-2 md:pt-4">
            {project.kpis.map((kpi, kpiIndex) => (
              <motion.div
                key={kpi.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + kpiIndex * 0.1 }}
              >
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-accent mb-1">
                  {kpi.value}
                </div>
                <div className="text-xs md:text-sm text-white/60 leading-tight">
                  {kpi.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="pt-2 md:pt-4 lg:pt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <MagneticButton
              href={`/projects/${project.id}`}
              className="bg-accent hover:bg-accent/90 text-black px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold inline-flex items-center space-x-2 text-sm md:text-base"
            >
              <span>View Case Study</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right side - Visual */}
        <motion.div
          className="relative hidden lg:block"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        >
          {/* Mock device frame */}
          <div className="relative max-w-md mx-auto">
            <motion.div
              className="glass-card p-4 rounded-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black/20">
                {/* Placeholder for project image */}
                <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
                  <span className="text-white/40 text-lg font-medium">
                    Project Preview
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-full backdrop-blur-sm"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-lg backdrop-blur-sm"
              animate={{
                x: [0, 10, 0],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          </div>
        </motion.div>

        {/* Mobile project image */}
        <motion.div
          className="relative lg:hidden mt-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
        >
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-black/20">
            <div className="w-full h-full bg-gradient-to-br from-accent/20 to-transparent flex items-center justify-center">
              <span className="text-white/40 text-xs font-medium">
                Project Preview
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 pointer-events-none" />
    </div>
  )
} 