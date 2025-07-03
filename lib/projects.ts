export interface Project {
  id: string;
  title: string;
  industry: string;
  year: number;
  description: string;
  tags: string[];
  cover: string;
  kpis: Array<{
    value: string;
    label: string;
  }>;
  quote?: string;
  url?: string;
  gallery?: string[];
  video?: string;
}

export const projects: Project[] = [
  {
    id: 'metropolitan',
    title: 'Metropolitan Premium Properties',
    industry: 'Real Estate',
    year: 2024,
    description: 'Comprehensive digital strategy for luxury real estate development, focusing on high-net-worth client acquisition and premium property showcase.',
    tags: ['Real Estate Marketing', 'Lead Generation', 'Luxury Branding', 'CRM Integration'],
    cover: '/projects/metropolitan-cover.jpg',
    kpis: [
      { value: '8', label: 'Deals Closed (3 months)' },
      { value: '$400K', label: 'Total Sales Volume' },
      { value: '+65%', label: 'Conversion Growth' },
    ],
    quote: 'I&S Digital transformed our approach to luxury real estate marketing. The results exceeded our expectations.',
    url: 'https://metropolitan-realestate.com',
    gallery: ['/projects/metropolitan/1.jpg', '/projects/metropolitan/2.jpg'],
    video: '/projects/metropolitan/demo.mp4',
  },
  {
    id: 'lounge17',
    title: 'Lounge 17',
    industry: 'F&B / Night Lounge',
    year: 2024,
    description: 'Pre-launch digital campaign and brand positioning for an exclusive night lounge, building anticipation and securing bookings before opening.',
    tags: ['Social Media', 'Pre-Launch Campaign', 'Brand Building', 'Influencer Marketing'],
    cover: '/projects/lounge17-cover.jpg',
    kpis: [
      { value: '805', label: 'Pre-Launch Followers' },
      { value: '40+', label: 'Daily Guests at Launch' },
      { value: '78%', label: 'Booking Conversion Rate' },
    ],
    quote: 'The buzz they created before our opening was incredible. We had queues from day one.',
    url: 'https://lounge17.com',
    gallery: ['/projects/lounge17/1.jpg', '/projects/lounge17/2.jpg'],
  },
  {
    id: 'nstyle',
    title: 'NStyle International',
    industry: 'Beauty & Wellness',
    year: 2024,
    description: 'Comprehensive digital marketing strategy across Meta and TikTok platforms, focusing on lead generation and brand awareness for beauty services.',
    tags: ['Meta Ads', 'TikTok Marketing', 'Lead Generation', 'Beauty Industry'],
    cover: '/projects/nstyle-cover.jpg',
    kpis: [
      { value: '14,646', label: 'Incoming Messages' },
      { value: '80%', label: 'Quality Lead Rate' },
      { value: 'AED 72.5K', label: 'Annual Marketing Budget' },
    ],
    quote: 'Their multi-platform approach generated exceptional ROI and quality leads for our beauty services.',
    url: 'https://nstyle-international.com',
    gallery: ['/projects/nstyle/1.jpg', '/projects/nstyle/2.jpg'],
  },
  {
    id: 'novvi',
    title: 'Novvi Properties',
    industry: 'Real Estate',
    year: 2024,
    description: 'Cost optimization and performance improvement for real estate lead generation campaigns, achieving significant reduction in customer acquisition costs.',
    tags: ['Performance Marketing', 'CPA Optimization', 'Real Estate', 'Analytics'],
    cover: '/projects/novvi-cover.jpg',
    kpis: [
      { value: '-45%', label: 'CPA Reduction' },
      { value: '150%', label: 'Lead Quality Improvement' },
      { value: '200%', label: 'Campaign Efficiency' },
    ],
    quote: 'The CPA optimization results were game-changing for our lead generation strategy.',
    gallery: [],
  },
  {
    id: 'binghati',
    title: 'Binghati',
    industry: 'Luxury Development',
    year: 2024,
    description: 'Project details are under NDA.',
    tags: ['Viral Marketing', 'Content Strategy', 'Luxury Real Estate', 'Community Building'],
    cover: '/projects/binghati-cover.jpg',
    kpis: [],
    gallery: [],
  },
  {
    id: 'breaking-bread',
    title: 'Breaking Bread',
    industry: 'Restaurant',
    year: 2024,
    description: 'Instagram growth strategy and local community engagement for restaurant brand, focusing on food photography and customer experience.',
    tags: ['Instagram Marketing', 'Food Photography', 'Local Marketing', 'Community Engagement'],
    cover: '/projects/breaking-bread-cover.jpg',
    kpis: [
      { value: '+200%', label: 'Instagram Reach Growth' },
      { value: '3 months', label: 'Achievement Timeline' },
      { value: '450%', label: 'Engagement Rate Boost' },
    ],
    quote: 'Our Instagram presence went from zero to hero in just three months. Amazing work!',
    gallery: [],
  },
  {
    id: 'vota',
    title: 'Vota Properties',
    industry: 'Investment Real Estate',
    year: 2024,
    description: 'Sophisticated lead generation system for high-value real estate investments, targeting qualified investors and HNWI clients.',
    tags: ['Investment Marketing', 'HNWI Targeting', 'Lead Qualification', 'B2B Sales'],
    cover: '/projects/vota-cover.jpg',
    kpis: [
      { value: '250%', label: 'Lead Quality Increase' },
      { value: '40%', label: 'Faster Sales Cycle' },
      { value: '90%', label: 'Client Satisfaction' },
    ],
    quote: 'The quality of investment leads has never been higher. Exceptional targeting and strategy.',
    gallery: [],
  },
  {
    id: 'spiridon',
    title: 'Spiridon',
    industry: 'FMCG / Brand',
    year: 2024,
    description: 'Complete brand transformation and market repositioning for FMCG brand, strengthening market presence and consumer perception.',
    tags: ['Rebranding', 'FMCG Marketing', 'Brand Strategy', 'Market Positioning'],
    cover: '/projects/spiridon-cover.jpg',
    kpis: [
      { value: '100%', label: 'Brand Refresh' },
      { value: '+180%', label: 'Market Recognition' },
      { value: '95%', label: 'Stakeholder Approval' },
    ],
    quote: 'The rebrand completely transformed our market position and customer perception.',
    gallery: [],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3);
} 