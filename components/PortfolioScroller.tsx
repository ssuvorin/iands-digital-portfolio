'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '@/lib/projects'
import CaseSection from './CaseSection'

export default function PortfolioScroller() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentProject, setCurrentProject] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollContainerRef.current) return
      
      const container = scrollContainerRef.current
      const scrollLeft = container.scrollLeft
      const itemWidth = container.clientWidth
      const newIndex = Math.round(scrollLeft / itemWidth)
      
      if (newIndex !== currentProject && newIndex >= 0 && newIndex < projects.length) {
        setCurrentProject(newIndex)
      }
    }

    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [currentProject])

  // Touch/swipe handling
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && currentProject < projects.length - 1) {
      // Swipe left - next project
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: (currentProject + 1) * scrollContainerRef.current.clientWidth,
          behavior: 'smooth'
        })
      }
    } else if (isRightSwipe && currentProject > 0) {
      // Swipe right - previous project
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTo({
          left: (currentProject - 1) * scrollContainerRef.current.clientWidth,
          behavior: 'smooth'
        })
      }
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  return (
    <div className="relative">
      {/* Section Header */}
      <motion.div
        className="py-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          <span className="gradient-text">Featured</span> Projects
        </h2>
        <p className="text-lg text-white/70 max-w-2xl mx-auto">
          Dive into our most impactful work. Each project represents a unique challenge 
          and innovative solution that drove real business results.
        </p>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div className="relative mobile-optimized min-h-[80vh] md:min-h-0" id="projects">
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide touch-scroll swipe-container min-h-[80vh] md:min-h-0"
          style={{ 
            height: isMobile ? undefined : '100vh',
            minHeight: isMobile ? '80vh' : undefined,
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch', // iOS momentum scrolling
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="w-full md:w-screen h-auto flex-shrink-0 snap-start touch-scroll-item px-0 md:px-0"
            >
              <CaseSection
                project={project}
                index={index}
              />
            </div>
          ))}
        </div>

        {/* Project Navigation Dots */}
        <div className={`absolute ${isMobile ? 'bottom-4' : 'bottom-8'} left-1/2 transform -translate-x-1/2 flex space-x-3 z-20 ${isMobile ? 'mb-8' : 'mb-16'}`}>
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  scrollContainerRef.current.scrollTo({
                    left: index * scrollContainerRef.current.clientWidth,
                    behavior: 'smooth'
                  })
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? 'bg-accent scale-125' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Navigation buttons - hidden on mobile */}
        {!isMobile && (
          <>
            <button
              onClick={() => {
                if (scrollContainerRef.current && currentProject > 0) {
                  scrollContainerRef.current.scrollTo({
                    left: (currentProject - 1) * scrollContainerRef.current.clientWidth,
                    behavior: 'smooth'
                  })
                }
              }}
              className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 z-20"
              disabled={currentProject === 0}
            >
              <span className="text-white text-xl">←</span>
            </button>

            <button
              onClick={() => {
                if (scrollContainerRef.current && currentProject < projects.length - 1) {
                  scrollContainerRef.current.scrollTo({
                    left: (currentProject + 1) * scrollContainerRef.current.clientWidth,
                    behavior: 'smooth'
                  })
                }
              }}
              className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 z-20"
              disabled={currentProject === projects.length - 1}
            >
              <span className="text-white text-xl">→</span>
            </button>
          </>
        )}
      </div>

      {/* Navigation hints - mobile optimized */}
      <motion.div
        className={`fixed ${isMobile ? 'bottom-4 right-4' : 'bottom-8 right-8'} z-20 glass-card p-4 rounded-lg ${isMobile ? 'text-xs' : 'text-sm'}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="flex items-center space-x-2 text-white/60">
          <span>{isMobile ? 'Swipe to navigate' : 'Swipe or scroll horizontally'}</span>
          <motion.div
            className="swipe-indicator"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            →
          </motion.div>
        </div>
      </motion.div>

      {/* Mobile project counter */}
      {isMobile && (
        <motion.div
          className="fixed top-4 right-4 z-20 glass-card px-3 py-2 rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="text-white/80 text-sm font-medium">
            {currentProject + 1} / {projects.length}
          </div>
        </motion.div>
      )}

      {/* Quote for current project - always under slider, adaptive */}
      {projects[currentProject]?.quote && (
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <blockquote
            className="text-white/80 italic max-w-2xl mx-auto text-center px-4 pb-8 pt-6 text-base sm:text-lg md:text-xl lg:text-2xl"
            style={{
              position: 'relative',
              zIndex: 10,
            }}
          >
            &quot;{projects[currentProject].quote}&quot;
          </blockquote>
        </motion.div>
      )}
    </div>
  )
} 