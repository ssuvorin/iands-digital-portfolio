import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import Navbar from '@/components/Navbar'
import FooterProgress from '@/components/FooterProgress'

// Dynamically import heavy components for performance
const Hero3D = dynamic(() => import('@/components/Hero3D'), {
  ssr: false,
  loading: () => <div className="h-screen bg-black flex items-center justify-center">
    <div className="text-4xl font-bold gradient-text">I&S Media and Digital</div>
  </div>,
})

const FeaturedMetrics = dynamic(() => import('@/components/FeaturedMetrics'), {
  ssr: false,
})

const InfiniteLogoMarquee = dynamic(() => import('@/components/InfiniteLogoMarquee'), {
  ssr: false,
})

const PortfolioScroller = dynamic(() => import('@/components/PortfolioScroller'), {
  ssr: false,
})

export default function HomePage() {
  return (
    <main>
      <Navbar />
      
      {/* Hero блок загружается без задержки */}
        <Hero3D />

      <Suspense fallback={<div className="h-40 bg-black" />}>
        <FeaturedMetrics />
      </Suspense>

      <Suspense fallback={<div className="h-32 bg-black" />}>
        <InfiniteLogoMarquee />
      </Suspense>

      <Suspense fallback={<div className="min-h-screen bg-black" />}>
        <PortfolioScroller />
      </Suspense>

      <FooterProgress />
    </main>
  )
} 