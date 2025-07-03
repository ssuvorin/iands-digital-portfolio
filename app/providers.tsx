'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

// Dynamically import heavy components
const LocomotiveProvider = dynamic(() => import('@/components/LocomotiveProvider'), {
  ssr: false,
})

const CustomCursor = dynamic(() => import('@/components/CustomCursor'), {
  ssr: false,
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <LocomotiveProvider>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </LocomotiveProvider>
    </>
  )
} 