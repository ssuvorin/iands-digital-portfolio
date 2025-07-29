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
    description: 'Lead generation strategy for luxury real estate development through Instagram and Facebook advertising, focusing on high-quality lead acquisition.',
    tags: ['Lead Generation', 'Instagram Ads', 'Facebook Ads', 'Luxury Real Estate'],
    cover: '/projects/metropolitan/cover.jpg',
    kpis: [
      { value: '83', label: 'Deals Closed (3 months)' },
      { value: '$400K', label: 'Total Sales Volume' },
      { value: '+65%', label: 'Conversion Growth (6 months)' },
    ],
    quote: 'I&S Media and Digital transformed our approach to luxury real estate marketing. The results exceeded our expectations.',
    url: 'https://metropolitan-realestate.com',
    gallery: [
      '/projects/metropolitan/cover.jpg',
      '/projects/metropolitan/1.jpg',
      '/projects/metropolitan/2.jpg',
      '/projects/metropolitan/3.jpg',
      '/projects/metropolitan/4.jpg',
      '/projects/metropolitan/5.jpg',
      '/projects/metropolitan/6.jpg',
      '/projects/metropolitan/7.jpg',
      '/projects/metropolitan/8.jpg',
      '/projects/metropolitan/9.jpg',
      '/projects/metropolitan/10.jpg',
      '/projects/metropolitan/11.jpg',
      '/projects/metropolitan/12.jpg'
    ],
    video: '/projects/metropolitan/demo.mp4',
  },
  {
    id: 'lounge17',
    title: 'Lounge 17',
    industry: 'F&B / Night Lounge',
    year: 2024,
    description: 'Full digital strategy for night lounge pre-launch, including social media presence, website optimization, and SEO promotion.',
    tags: ['Digital Strategy', 'Social Media', 'Website Optimization', 'SEO'],
    cover: '/projects/lounge17/cover.jpg',
    kpis: [
      { value: '805', label: 'Pre-Launch Followers' },
      { value: '40+', label: 'Guests at Opening' },
      { value: '78%', label: 'Conversion Rate' },
    ],
    quote: 'The buzz they created before our opening was incredible. We had queues from day one.',
    url: 'https://lounge17.com',
    gallery: [
      '/projects/lounge17/cover.jpg',
      '/projects/lounge17/1.jpg',
      '/projects/lounge17/2.jpg',
      '/projects/lounge17/3.jpg',
      '/projects/lounge17/4.jpg',
      '/projects/lounge17/5.jpg',
      '/projects/lounge17/6.jpg',
      '/projects/lounge17/7.jpg',
      '/projects/lounge17/8.jpg',
      '/projects/lounge17/9.jpg',
      '/projects/lounge17/10.jpg',
      '/projects/lounge17/11.jpg',
      '/projects/lounge17/12.jpg'
    ],
  },
  {
    id: 'nstyle',
    title: 'NStyle International',
    industry: 'Beauty & Wellness',
    year: 2024,
    description: 'Multi-channel social media promotion and targeted messaging campaigns for beauty services, focusing on customer retention and steady income.',
    tags: ['Social Media', 'Meta Ads', 'TikTok Ads', 'Beauty Industry'],
    cover: '/projects/nstyle/cover.jpg',
    kpis: [
      { value: '14,646', label: 'Incoming Messages' },
      { value: '80%', label: 'Qualified Leads' },
      { value: 'AED 72.5K', label: 'Annual Marketing Budget' },
    ],
    quote: 'Their multi-platform approach generated exceptional ROI and quality leads for our beauty services.',
    url: 'https://nstyle-international.com',
    gallery: [
      '/projects/nstyle/cover.jpg',
      '/projects/nstyle/1.jpg',
      '/projects/nstyle/2.jpg',
      '/projects/nstyle/3.jpg',
      '/projects/nstyle/4.jpg',
      '/projects/nstyle/5.jpg',
      '/projects/nstyle/6.jpg',
      '/projects/nstyle/7.jpg',
      '/projects/nstyle/8.jpg',
      '/projects/nstyle/9.jpg',
      '/projects/nstyle/10.jpg',
      '/projects/nstyle/11.jpg',
      '/projects/nstyle/12.jpg'
    ],
  },
  {
    id: 'novvi',
    title: 'Novvi Properties',
    industry: 'Real Estate',
    year: 2024,
    description: 'Lead generation optimization for real estate campaigns, achieving significant reduction in customer acquisition costs.',
    tags: ['Lead Generation', 'Performance Marketing', 'CPA Optimization', 'Real Estate'],
    cover: '/projects/novvi/cover.jpg',
    kpis: [
      { value: '-45%', label: 'CPA Reduction' },
      { value: '150%', label: 'Lead Quality Improvement' },
      { value: '200%', label: 'Campaign Efficiency' },
    ],
    quote: 'The CPA optimization results were game-changing for our lead generation strategy.',
    gallery: [
      '/projects/novvi/cover.jpg',
      '/projects/novvi/1.jpg',
      '/projects/novvi/2.jpg',
      '/projects/novvi/3.jpg',
      '/projects/novvi/4.jpg',
      '/projects/novvi/5.jpg',
      '/projects/novvi/6.jpg',
      '/projects/novvi/7.jpg',
      '/projects/novvi/8.jpg',
      '/projects/novvi/9.jpg',
      '/projects/novvi/10.jpg',
      '/projects/novvi/11.jpg',
      '/projects/novvi/12.jpg'
    ],
  },
  {
    id: 'binghatti',
    title: 'Binghatti Developers',
    industry: 'Luxury Development',
    year: 2024,
    description: 'Viral content strategy for luxury real estate development, focusing on high engagement and brand awareness.',
    tags: ['Viral Marketing', 'Content Strategy', 'Luxury Real Estate', 'Engagement'],
    cover: '/projects/binghatti/cover.png',
    kpis: [
      { value: '+150%', label: 'Engagement Growth' },
      { value: 'NDA', label: 'Project Details' },
      { value: 'Viral', label: 'Content Strategy' },
    ],
    quote: 'Project details are under NDA.',
    gallery: [
      '/projects/binghatti/cover.png',
      '/projects/binghatti/1.png',
      '/projects/binghatti/2.png',
      '/projects/binghatti/3.png',
      '/projects/binghatti/4.png',
      '/projects/binghatti/5.png',
      '/projects/binghatti/6.png',
      '/projects/binghatti/7.png',
      '/projects/binghatti/8.png',
      '/projects/binghatti/9.png',
      '/projects/binghatti/10.png',
      '/projects/binghatti/11.png',
      '/projects/binghatti/12.png'
    ],
  },
  {
    id: 'breaking-bread',
    title: 'Breaking Bread',
    industry: 'Restaurant',
    year: 2024,
    description: 'Instagram growth strategy and local community engagement for restaurant brand, focusing on food photography and customer experience.',
    tags: ['Instagram Marketing', 'Food Photography', 'Local Marketing', 'Community Engagement'],
    cover: '/projects/breaking-bread/cover.png',
    kpis: [
      { value: '+200%', label: 'Instagram Reach Growth' },
      { value: '3 months', label: 'Achievement Timeline' },
      { value: '450%', label: 'Engagement Rate Boost' },
    ],
    quote: 'Our Instagram presence went from zero to hero in just three months. Amazing work!',
    gallery: [
      '/projects/breaking-bread/cover.png',
      '/projects/breaking-bread/1.png',
      '/projects/breaking-bread/2.png',
      '/projects/breaking-bread/3.png',
      '/projects/breaking-bread/4.png',
      '/projects/breaking-bread/5.png',
      '/projects/breaking-bread/6.png',
      '/projects/breaking-bread/7.png',
      '/projects/breaking-bread/8.png',
      '/projects/breaking-bread/9.png',
      '/projects/breaking-bread/10.png',
      '/projects/breaking-bread/11.png',
      '/projects/breaking-bread/12.png'
    ],
  },
  {
    id: 'vota',
    title: 'Vota Properties',
    industry: 'Investment Real Estate',
    year: 2024,
    description: 'High-quality lead generation system for real estate investments, targeting qualified investors and HNWI clients.',
    tags: ['Lead Generation', 'Investment Marketing', 'HNWI Targeting', 'B2B Sales'],
    cover: '/projects/vota/cover.png',
    kpis: [
      { value: '250%', label: 'Lead Quality Increase' },
      { value: '40%', label: 'Faster Sales Cycle' },
      { value: '90%', label: 'Client Satisfaction' },
    ],
    quote: 'The quality of investment leads has never been higher. Exceptional targeting and strategy.',
    gallery: [
      '/projects/vota/cover.png',
      '/projects/vota/1.png',
      '/projects/vota/2.png',
      '/projects/vota/3.png',
      '/projects/vota/4.png',
      '/projects/vota/5.png',
      '/projects/vota/6.png',
      '/projects/vota/7.png',
      '/projects/vota/8.png',
      '/projects/vota/9.png',
      '/projects/vota/10.png',
      '/projects/vota/11.png',
      '/projects/vota/12.png'
    ],
  },
  {
    id: 'spiridon',
    title: 'Spiridon',
    industry: 'FMCG / Brand',
    year: 2024,
    description: 'Successful rebranding and brand positioning strengthening for FMCG brand, enhancing market presence and consumer perception.',
    tags: ['Rebranding', 'FMCG Marketing', 'Brand Strategy', 'Market Positioning'],
    cover: '/projects/spiridon/cover.png',
    kpis: [
      { value: '100%', label: 'Brand Refresh' },
      { value: '+180%', label: 'Market Recognition' },
      { value: '95%', label: 'Stakeholder Approval' },
    ],
    quote: 'The rebrand completely transformed our market position and customer perception.',
    gallery: [
      '/projects/spiridon/cover.png',
      '/projects/spiridon/1.png',
      '/projects/spiridon/2.png',
      '/projects/spiridon/3.png',
      '/projects/spiridon/4.png',
      '/projects/spiridon/5.png',
      '/projects/spiridon/6.png',
      '/projects/spiridon/7.png',
      '/projects/spiridon/8.png',
      '/projects/spiridon/9.png',
      '/projects/spiridon/10.png',
      '/projects/spiridon/11.png',
      '/projects/spiridon/12.png'
    ],
  },
];

export function getProject(id: string): Project | undefined {
  return projects.find(project => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return projects.slice(0, 3);
} 