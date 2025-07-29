'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Максимально быстрые настройки для мгновенного отклика
  const springConfig = { damping: 5, stiffness: 2000, mass: 0.1 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  // Оптимизированный обработчик движения мыши
  const moveCursor = useCallback((e: MouseEvent) => {
    // Прямое позиционирование без задержек
    cursorX.set(e.clientX - 8)
    cursorY.set(e.clientY - 8)
    
    if (!isVisible) {
      setIsVisible(true)
    }
  }, [cursorX, cursorY, isVisible])

  const handleMouseEnter = useCallback(() => setIsHovering(true), [])
  const handleMouseLeave = useCallback(() => setIsHovering(false), [])

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      return
    }

    // Используем passive: true для лучшей производительности
    window.addEventListener('mousemove', moveCursor, { passive: true })

    // Добавляем обработчики для интерактивных элементов
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .magnetic-button, input, textarea, select'
    )

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter, { passive: true })
      el.addEventListener('mouseleave', handleMouseLeave, { passive: true })
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [moveCursor, handleMouseEnter, handleMouseLeave])

  if (!isVisible) return null

  return (
    <motion.div
      className="cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      animate={{
        scale: isHovering ? 1.5 : 1,
        opacity: isHovering ? 0.9 : 0.7,
      }}
      transition={{
        scale: { duration: 0.02 },
        opacity: { duration: 0.02 },
      }}
    />
  )
} 