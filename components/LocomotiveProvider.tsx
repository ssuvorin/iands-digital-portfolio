'use client'

import { useEffect, useRef, useState } from 'react'

interface LocomotiveProviderProps {
  children: React.ReactNode
}

export default function LocomotiveProvider({ children }: LocomotiveProviderProps) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  )
} 