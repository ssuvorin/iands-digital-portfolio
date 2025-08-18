import type { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

export const metadata: Metadata = {
  title: 'Contact I&S Media and Digital - Get Your Offer',
  description: 'Get in touch with I&S Media and Digital to discuss your next digital project. We\'re ready to help transform your brand.',
}

export default function ContactPage() {
  return <ContactClient />
} 