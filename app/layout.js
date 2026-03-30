import { Space_Grotesk, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import WelcomeModal from '@/components/WelcomeModal';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-serif',
});

export const metadata = {
  title: 'Ahmed Farid Elaswar | Portfolio',
  description:
    'Personal portfolio website of Ahmed Farid Elaswar – Computer Science student, accessibility & AI enthusiast',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${sourceSerif.variable}`}>
      <body>
        <ThemeProvider>
          <Navbar />
          <WelcomeModal />
          <div className="page-bg" aria-hidden="true" />
          <div className="page-grid" aria-hidden="true" />
          <main className="cv-container">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
