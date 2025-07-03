import type { Metadata } from 'next'
import LegalClient from '@/components/LegalClient'

export const metadata: Metadata = {
  title: 'Legal Information - I&S Digital',
  description: 'Privacy policy, terms of service, cookie policy, and data protection information for I&S Digital.',
}

export default function LegalPage() {
  return <LegalClient />
} 