import type { Metadata } from 'next'
import AboutClient from '@/components/AboutClient'

export const metadata: Metadata = {
  title: 'About I&S Digital - Creative Digital Agency',
  description: 'Learn about I&S Digital - a creative digital agency specializing in next-level digital experiences for premium brands.',
}

export default function AboutPage() {
  return <AboutClient />
} 