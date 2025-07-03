import type { Metadata } from 'next'
import ProjectsClient from '@/components/ProjectsClient'

export const metadata: Metadata = {
  title: 'Our Projects - I&S Digital Portfolio',
  description: 'Explore our portfolio of successful digital projects across various industries.',
}

export default function ProjectsPage() {
  return <ProjectsClient />
} 