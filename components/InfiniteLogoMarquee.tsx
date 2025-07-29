'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const clientLogos = [
  { name: 'Metropolitan Premium Properties' },
  { name: 'Lounge 17' },
  { name: 'NStyle International' },
  { name: 'Novvi Properties' },
  { name: 'Binghatti Developers' },
  { name: 'Breaking Bread' },
  { name: 'Vota Properties' },
  { name: 'Spiridon' },
]

// Duplicate for seamless loop - need more copies for smooth infinite scroll
const allLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos]

export default function InfiniteLogoMarquee() {
  const [isVisible, setIsVisible] = useState(true)

  // Reset animation if it gets stuck
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => setIsVisible(true), 100)
    }, 30000) // Reset every 30 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-black/50 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-white/60">
            Join hundreds of brands that have transformed their digital presence with us
          </p>
        </motion.div>

        {/* Infinite Marquee */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />

          {isVisible && (
          <motion.div
              key={isVisible ? 'visible' : 'hidden'}
              className="flex space-x-20 items-center"
            animate={{
                x: [0, -100 * clientLogos.length + '%'],
            }}
            transition={{
                duration: 4000,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
                width: `${600 * clientLogos.length}%`,
            }}
          >
            {allLogos.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                  <div className="text-center">
                    <div className="text-white font-semibold text-lg">
                      {client.name}
                    </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          )}
        </div>

        {/* Stats below marquee */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-8 mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-white/60">
            <span className="text-2xl font-bold text-accent">8+</span>
            <span className="block text-sm">Industries Served</span>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-white/60">
            <span className="text-2xl font-bold text-accent">150+</span>
            <span className="block text-sm">Projects Delivered</span>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-white/60">
            <span className="text-2xl font-bold text-accent">98%</span>
            <span className="block text-sm">Client Satisfaction</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 