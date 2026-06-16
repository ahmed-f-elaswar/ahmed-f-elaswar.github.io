import { Space_Grotesk, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-serif',
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://ahmed-f-elaswar.github.io';
const SITE_NAME = 'Ahmed Farid';
const SITE_DESCRIPTION =
  'Personal portfolio of Ahmed Farid \u2014 Computer Science student at AUC, USAID and Change Leaders scholar, and Microsoft Egypt intern. Accessibility, data, and machine learning.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Portfolio`,
    template: `%s \u2014 ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Ahmed Farid',
    'AUC',
    'USAID Scholar',
    'Computer Science',
    'Machine Learning',
    'Accessibility',
    'Microsoft Egypt',
    'Portfolio',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Portfolio`,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: '/images/profile.jpeg',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} \u2014 Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | Portfolio`,
    description: SITE_DESCRIPTION,
    images: ['/images/profile.jpeg'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/images/profile.jpeg',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/images/profile.jpeg`,
  jobTitle: 'Computer Science Student',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'The American University in Cairo',
  },
  sameAs: [
    'https://github.com/ahmed-f-elaswar',
    'https://linkedin.com/in/ahmed-f-elaswar',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sourceSerif.variable}`}>
      <body>
        <ThemeProvider>
          <Navbar />
          <div className="page-bg" aria-hidden="true" />
          <div className="page-grid" aria-hidden="true" />
          <main className="cv-container">{children}</main>
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
