'use client'

import { motion } from 'framer-motion'
import { useCountUp } from '@/lib/useOdometer'

const metrics = [
  {
    value: 150,
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Successful campaigns launched',
  },
  {
    value: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Happy clients worldwide',
  },
  {
    value: 2.4,
    suffix: 'M+',
    label: 'Revenue Generated',
    description: 'For our client partners',
    prefix: '$',
  },
]

function MetricCard({ metric, index }: { metric: typeof metrics[0]; index: number }) {
  const { count, ref } = useCountUp(metric.value, 0, 2)

  return (
    <motion.div
      ref={ref}
      className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div
        className="text-4xl md:text-5xl font-bold gradient-text mb-2"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
        viewport={{ once: true }}
      >
        {metric.prefix && metric.prefix}
        {count.toFixed(metric.value % 1 !== 0 ? 1 : 0)}
        {metric.suffix}
      </motion.div>
      
      <h3 className="text-lg font-semibold text-white mb-1">
        {metric.label}
      </h3>
      
      <p className="text-sm text-white/60">
        {metric.description}
      </p>

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  )
}

export default function FeaturedMetrics() {
  return (
    <section className="py-20 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="gradient-text">Proven Results</span> That Speak
          </motion.h2>
          
          <motion.p
            className="text-lg text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Numbers don&apos;t lie. Our data-driven approach consistently delivers 
            exceptional outcomes for brands across industries.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard key={metric.label} metric={metric} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-white/60 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to join our success stories?
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-black transition-all duration-300 rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Success Story
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 