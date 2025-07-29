import type { Metadata } from 'next'
import CareersClient from '@/components/CareersClient'

export const metadata: Metadata = {
  title: 'Careers at I&S Media and Digital - Join Our Team',
  description: 'Join I&S Media and Digital and be part of a creative team that\'s pushing the boundaries of digital innovation.',
}

export default function CareersPage() {
  return <CareersClient />
} 