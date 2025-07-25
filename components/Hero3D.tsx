'use client'

import { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Float, Text3D, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'
import MagneticButton from './MagneticButton'

// 3D Logo Component
function Logo3D() {
  const meshRef = useRef<THREE.Group>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation based on time
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.1
      
      // Subtle mouse interaction
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mousePosition.y * 0.1,
        0.02
      )
      meshRef.current.rotation.z = THREE.MathUtils.lerp(
        meshRef.current.rotation.z,
        mousePosition.x * 0.1,
        0.02
      )
    }
  })

  return (
    <group ref={meshRef}>
      <Float
        speed={1.4}
        rotationIntensity={0.4}
        floatIntensity={0.4}
        floatingRange={[0, 0.2]}
      >
        {/* Main sphere */}
        <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color="#FF8040"
            metalness={0.8}
            roughness={0.2}
            envMapIntensity={1}
          />
        </Sphere>

        {/* Orbiting dots */}
        {[...Array(8)].map((_, i) => {
          const angle = (i / 8) * Math.PI * 2
          const radius = 2.5
          return (
            <Float
              key={i}
              speed={2 + i * 0.1}
              rotationIntensity={0.2}
              floatIntensity={0.2}
            >
              <Sphere
                args={[0.1, 16, 16]}
                position={[
                  Math.cos(angle) * radius,
                  Math.sin(angle * 0.5) * 0.5,
                  Math.sin(angle) * radius,
                ]}
              >
                <meshStandardMaterial
                  color="white"
                  emissive="#FF8040"
                  emissiveIntensity={0.2}
                />
              </Sphere>
            </Float>
          )
        })}
      </Float>
    </group>
  )
}

// Fallback component for when WebGL is not available
function Fallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <motion.div
        className="text-8xl font-bold gradient-text"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        I&S
      </motion.div>
    </div>
  )
}

export default function Hero3D() {
  const [webglSupported, setWebglSupported] = useState(true)

  useEffect(() => {
    // Check WebGL support
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl')
    setWebglSupported(!!gl)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-black via-black to-accent/10">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 128, 64, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 128, 64, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0">
        {webglSupported ? (
          <Canvas
            camera={{ position: [0, 0, 6], fov: 50 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.4} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <pointLight position={[-10, -10, -5]} intensity={0.5} color="#FF8040" />
              
              <Logo3D />
              
              <Environment preset="city" />
              <ContactShadows 
                position={[0, -2, 0]} 
                opacity={0.4} 
                scale={20} 
                blur={1.5} 
                far={4.5} 
              />
            </Suspense>
          </Canvas>
        ) : (
          <Fallback />
        )}
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="gradient-text">Next-Level</span><br />
            Digital Experiences
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            We craft immersive digital experiences that captivate audiences, 
            drive engagement, and deliver measurable results for forward-thinking brands.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <MagneticButton
              href="#projects"
              className="bg-accent hover:bg-accent/90 text-black px-8 py-4 rounded-lg font-semibold text-lg"
            >
              View Our Work
            </MagneticButton>
            <MagneticButton
              href="/contact"
              className="border border-white/30 hover:border-accent text-white hover:text-accent px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Start Your Project
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <motion.div
              className="w-1 h-3 bg-accent rounded-full mt-2"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 