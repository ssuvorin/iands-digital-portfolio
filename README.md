# 🌐 I&S Media and Digital Portfolio

> **We don't just build digital experiences — we build obsession.** - An immersive, mobile-first portfolio that showcases creative firepower through smooth 3D animations, scroll-storytelling case studies, and micro-interactions.

## ✨ Features

- **🎯 Immersive 3D Hero** - R3F orbiting logo with cursor/gyro response
- **📱 Mobile-First Design** - Responsive across all devices
- **🎨 Smooth Animations** - Framer Motion + GSAP ScrollTrigger
- **⚡ Performance Optimized** - Code splitting, lazy loading, and optimized assets
- **♿ Accessible** - Full a11y compliance with reduced motion support
- **🚀 Modern Stack** - Next.js 14, TypeScript, TailwindCSS

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router, RSC, TypeScript) |
| **Styling** | TailwindCSS ^3.4 + custom plugins |
| **UI Components** | shadcn/ui base components |
| **Animation** | Framer Motion 11 + GSAP ScrollTrigger |
| **3D Graphics** | @react-three/fiber + drei |
| **Smooth Scroll** | Locomotive-scroll |
| **OG Images** | @vercel/og |
| **Icons** | lucide-react, simple-icons |

## 🎨 Design Tokens

```javascript
colors: {
  black: '#000',        // Primary background
  accent: '#FF8040',    // Punchy orange
  peach: '#FDE8DC',     // Soft overlay
  white: '#FFF'
}

fonts: ['Poppins', 'Inter', 'sans-serif']
shadows: {
  elev1: '0 4px 16px rgba(0,0,0,0.15)',
  glow: '0 0 12px rgba(255,128,64,0.45)'
}
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm

### Installation

1. **Clone & Install**
   ```bash
   git clone <repository-url>
   cd is-digital-portfolio
   npm install
   ```

2. **Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   ```
   http://localhost:3000
   ```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO & providers
│   ├── page.tsx           # Homepage with Hero3D + sections
│   ├── providers.tsx      # Client-side providers
│   └── globals.css        # Global styles + TailwindCSS
├── components/            # React components
│   ├── Hero3D.tsx         # R3F 3D hero section
│   ├── FeaturedMetrics.tsx# Animated KPI counters
│   ├── PortfolioScroller.tsx# GSAP horizontal scroll
│   ├── CaseSection.tsx    # Individual project showcase
│   ├── Navbar.tsx         # Navigation with magnetic buttons
│   └── ...               # Other UI components
├── lib/                   # Utilities & data
│   ├── projects.ts        # Project data structure
│   ├── seo.ts            # OG image generation
│   ├── useOdometer.ts    # Counter animation hook
│   └── utils.ts          # Utility functions
└── public/               # Static assets
    └── projects/         # Project images & videos
```

## 🎭 Key Components

### Hero3D
- **R3F 3D Scene** with orbiting logo
- **Mouse/Gyro interaction** for immersion
- **WebGL fallback** for unsupported devices
- **Performance optimized** with Suspense

### PortfolioScroller
- **GSAP ScrollTrigger** pinned sections
- **Horizontal scroll** through case studies
- **Snap functionality** for smooth navigation
- **Reduced motion** support

### FeaturedMetrics
- **Animated counters** with intersection observer
- **Spring animations** for smooth count-up
- **Glass morphism** design elements

## 🎨 Animation Guidelines

### GSAP Defaults
```javascript
ease: 'power3.out'
duration: 1 // seconds
```

### Framer Motion Patterns
```javascript
// Standard entrance
initial={{ opacity: 0, y: 30 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}

// Hover interactions
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

## 🚢 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Auto-deploy** on push to main
3. **Environment variables** (if needed)

### Manual Build

```bash
npm run build
npm start
```

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ssuvorin/iands-digital-portfolio)

### Option 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

### Option 3: GitHub Integration
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js
5. Click "Deploy"

## 📊 Performance Features

- **Code Splitting** - Dynamic imports for heavy components
- **Image Optimization** - Next.js Image component with priority loading
- **3D Asset Optimization** - GLB files ≤ 150KB
- **Lazy Loading** - Intersection observer for animations
- **Prefers Reduced Motion** - Accessibility compliance

## ♿ Accessibility

- **Keyboard Navigation** - Full tab support
- **Screen Reader** - Proper ARIA labels
- **Focus Management** - Visible focus rings
- **Reduced Motion** - Respects user preferences
- **Color Contrast** - WCAG AA compliant

## 🔧 Development

### Adding New Projects

1. **Add project data** to `lib/projects.ts`:
```typescript
{
  id: 'project-slug',
  title: 'Project Name',
  industry: 'Industry',
  cover: '/projects/slug/cover.jpg',
  gallery: [...],
  kpis: [...],
  quote: 'Client testimonial',
  year: 2024
}
```

2. **Add project images** to `public/projects/slug/`

### Custom Animations

Use the `useCountUp` hook for number animations:
```typescript
const { count, ref } = useCountUp(targetValue, 0, 2)
```

### 3D Assets

Place GLB models in `public/models/` and import:
```typescript
import { useGLTF } from '@react-three/drei'
const { scene } = useGLTF('/models/logo.glb')
```

## 📈 Analytics & SEO

- **OG Image Generation** - Dynamic social previews
- **Meta Tags** - Complete SEO optimization
- **Schema Markup** - Structured data ready
- **GTM Ready** - Analytics integration stub

## 🎯 TODOs & Future Enhancements

- [ ] **PDF Parsing** - Auto-extract project data from PDFs
- [ ] **Calendly Integration** - Pop-up booking widget
- [ ] **Google Tag Manager** - Analytics implementation
- [ ] **Blog System** - Content management
- [ ] **Contact Form** - Lead generation
- [ ] **Case Study Pages** - Detailed project pages

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is proprietary to I&S Media and Digital. All rights reserved.

---

**Built with ❤️ by I&S Media and Digital** - We don't just build digital experiences — we build obsession. 