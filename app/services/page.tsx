import type { Metadata } from 'next'
import ServicesClient from '@/components/ServicesClient'

export const metadata: Metadata = {
  title: 'Our Services - I&S Media and Digital Agency',
  description: 'Comprehensive digital services including web design, development, branding, digital marketing, and more.',
}

export default function ServicesPage() {
  return <ServicesClient />
} 