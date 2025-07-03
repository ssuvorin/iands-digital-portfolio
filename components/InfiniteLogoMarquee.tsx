'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const clientLogos = [
  { name: 'Metropolitan Real Estate', logo: '/logos/metropolitan.svg' },
  { name: 'Lounge 17', logo: '/logos/lounge17.svg' },
  { name: 'NStyle International', logo: '/logos/nstyle.svg' },
  { name: 'TechCorp', logo: '/logos/techcorp.svg' },
  { name: 'CreativeStudio', logo: '/logos/creative.svg' },
  { name: 'HealthPlus', logo: '/logos/health.svg' },
  { name: 'EcoGreen', logo: '/logos/eco.svg' },
  { name: 'FinanceFlow', logo: '/logos/finance.svg' },
]

// Duplicate logos for seamless loop
const allLogos = [...clientLogos, ...clientLogos]

export default function InfiniteLogoMarquee() {
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

        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex space-x-12 items-center"
            animate={{
              x: [0, -50 * clientLogos.length + '%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            whileHover={{
              animationPlayState: 'paused',
            }}
            style={{
              width: `${200 * clientLogos.length}%`,
            }}
          >
            {allLogos.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-40 h-20 group"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-32 h-12 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300 overflow-hidden">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={120}
                    height={48}
                    className="object-contain h-10 w-auto"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            <span className="text-2xl font-bold text-accent">150+</span>
            <span className="block text-sm">Happy Clients</span>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-white/60">
            <span className="text-2xl font-bold text-accent">25+</span>
            <span className="block text-sm">Industries</span>
          </div>
          <div className="w-px h-8 bg-white/20" />
          <div className="text-white/60">
            <span className="text-2xl font-bold text-accent">5</span>
            <span className="block text-sm">Years Experience</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 