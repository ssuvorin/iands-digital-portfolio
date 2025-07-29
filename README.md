# I&S Media and Digital Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design** - Clean, professional interface
- **3D Elements** - Interactive Three.js components
- **Responsive** - Works perfectly on all devices
- **Performance** - Optimized for speed and SEO
- **Contact Form** - Working contact form with email integration
- **Project Showcase** - Detailed project presentations

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js with React Three Fiber
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── api/               # API routes
├── components/            # React components
│   ├── Hero3D.tsx        # 3D hero section
│   ├── ContactClient.tsx  # Contact form
│   └── ...
├── public/               # Static assets
│   ├── favicon.svg       # Brand favicon
│   └── projects/         # Project images
└── lib/                  # Utilities and data
```

## 🎨 Design System

- **Primary Color**: #FF8040 (Orange)
- **Background**: #000000 (Black)
- **Typography**: Poppins font family
- **Gradients**: Orange to dark orange gradients

## 📧 Contact Integration

The contact form sends emails to `hello@ins.digital` using:
- **API Route**: `/api/contact`
- **Email Service**: Nodemailer with Gmail
- **Validation**: Server-side form validation

## 🚀 Deployment

- **Platform**: Vercel
- **Domain**: iands-digital-portfolio.vercel.app
- **Auto-deploy**: Connected to GitHub repository

## 📱 PWA Ready

- **Manifest**: Complete PWA manifest
- **Icons**: Multiple sizes for all devices
- **Offline**: Service worker ready

---

**Latest Update**: Enhanced favicon with clean I&S design and orange gradient branding.

**Built with ❤️ by I&S Media and Digital** - We don't just build digital experiences — we build obsession. 