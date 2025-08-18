'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ExternalLink, Calendar, Target, Award } from 'lucide-react'
import { projects } from '@/lib/projects'
import { useState, useEffect } from 'react'

interface PageProps {
  params: {
    slug: string
  }
}

// Компонент для безопасной загрузки изображения
function SafeImage({ src, alt, ...props }: any) {
  const [imageExists, setImageExists] = useState(true)
  const [imageSrc, setImageSrc] = useState(src)

  useEffect(() => {
    const checkImage = async () => {
      try {
        const response = await fetch(src, { method: 'HEAD' })
        if (!response.ok) {
          setImageExists(false)
        }
      } catch (error) {
        setImageExists(false)
      }
    }
    checkImage()
  }, [src])

  if (!imageExists) {
    return null
  }

  return (
    <Image
      src={imageSrc}
      alt={alt}
      onError={() => setImageExists(false)}
      {...props}
    />
  )
}

export default function ProjectPage({ params }: PageProps) {
  const project = projects.find(p => p.id === params.slug)

  if (!project) {
    notFound()
  }

  // Фильтруем только существующие изображения
  const [existingImages, setExistingImages] = useState<string[]>([])

  useEffect(() => {
    const checkImages = async () => {
      if (!project.gallery) return
      
      const checkedImages: string[] = []
      
      for (const imagePath of project.gallery) {
        try {
          const response = await fetch(imagePath, { method: 'HEAD' })
          if (response.ok) {
            checkedImages.push(imagePath)
          }
        } catch (error) {
          // Изображение не существует, пропускаем
        }
      }
      
      setExistingImages(checkedImages)
    }
    
    checkImages()
  }, [project.gallery])

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent" />
        
        {/* Back Navigation */}
        <div className="max-w-6xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center text-white/70 hover:text-accent transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Projects
            </Link>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                  {project.industry}
                </span>
                <span className="flex items-center text-white/60 text-sm">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.year}
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-white/80 leading-relaxed mb-8">
                {project.description}
              </p>

              {project.url && (
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-accent hover:bg-accent/90 text-black px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                  >
                    View Live Site
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </motion.div>
              )}
            </div>

            {/* Project Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-black/10">
                <SafeImage
                  src={project.cover}
                  alt={`${project.title} - Project cover`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* KPIs Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Results That <span className="gradient-text">Matter</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Measurable outcomes that demonstrate the impact of our strategic approach 
              and creative execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.kpis.map((kpi, index) => (
              <motion.div
                key={kpi.label}
                className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-3">
                  {kpi.value}
                </div>
                
                <h3 className="text-lg font-semibold text-white/90">
                  {kpi.label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Quote */}
      {project.quote && (
        <section className="py-20 px-4 bg-black/50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-6xl text-accent/20 mb-6">&quot;</div>
              <blockquote className="text-2xl md:text-3xl font-light text-white/90 leading-relaxed mb-8">
                {project.quote}
              </blockquote>
              <cite className="text-white/60 font-medium">
                — {project.title} Client
              </cite>
            </motion.div>
          </div>
        </section>
      )}

      {/* Project Tags */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Services <span className="gradient-text">Delivered</span>
            </h2>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {project.tags.map((tag, index) => (
              <motion.span
                key={tag}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/80 hover:bg-accent/10 hover:border-accent/30 transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Gallery */}
      {existingImages.length > 0 && (
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Project <span className="gradient-text">Gallery</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Visual showcase of our work and the results we achieved for {project.title}.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {existingImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="relative overflow-hidden rounded-2xl bg-black/10">
                    <SafeImage
                      src={image}
                      alt={`${project.title} - Project image ${index + 1}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Projects / CTA */}
      <section className="py-20 px-4 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. Get in touch to discuss 
              how we can help transform your brand and drive real results.
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
                  Get Your Offer
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center border border-accent text-accent hover:bg-accent hover:text-black px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
                >
                  View All Projects
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 