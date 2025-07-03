import type { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

export const metadata: Metadata = {
  title: 'Contact I&S Digital - Start Your Project',
  description: 'Get in touch with I&S Digital to discuss your next digital project. We\'re ready to help transform your brand.',
}

export default function ContactPage() {
  return <ContactClient />
} 