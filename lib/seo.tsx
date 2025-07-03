import { ImageResponse } from '@vercel/og';

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const defaultSEO: SEOProps = {
  title: 'I&S Digital - Next-Level Digital Experiences',
  description: 'Creative digital agency crafting immersive experiences that drive results. Specializing in web design, branding, and digital marketing.',
  image: '/og-image.jpg',
  url: 'https://isdigital.com',
};

export function generateOGImage(title: string, subtitle?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #000 0%, #FF8040 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Poppins',
          color: 'white',
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
          }}
        >
          {title}
        </div>
        {subtitle && (
          <div
            style={{
              fontSize: 32,
              textAlign: 'center',
              opacity: 0.8,
            }}
          >
            {subtitle}
          </div>
        )}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 40,
            fontSize: 24,
            fontWeight: 'bold',
          }}
        >
          I&S Digital
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
} 