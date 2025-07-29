import { ImageResponse } from '@vercel/og';

export interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const defaultSEO: SEOProps = {
  title: 'I&S Media and Digital - Next-Level Digital Experiences',
  description: 'I&S Media and Digital crafts immersive digital experiences that captivate audiences, drive engagement, and deliver measurable results for forward-thinking brands.',
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
          I&S Media and Digital
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
} 