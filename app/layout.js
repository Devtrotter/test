import { Geist, Geist_Mono } from 'next/font/google';
import './styles/globals.scss';
import './styles/portfolio.scss';
import SmoothScroll from './components/SmoothScroll';
import SpotlightPointer from './components/SpotlightPointer';

const geistSans = Geist({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata = {
  title: 'Sébastien Chapuy Développeur Web Freelance Élancourt',
  description:
    "Développeur web freelance à Élancourt sites Next.js performants, accessibles, optimisés SEO. 6 ans d'expérience, 30+ projets livrés.",
  applicationName: 'Devtrotter',
  authors: [{ name: 'Sébastien Chapuy' }],
  creator: 'Devtrotter',
  keywords: [
    'développeur web freelance',
    'Élancourt',
    'Next.js',
    'TypeScript',
    'SEO',
    'performance',
    'Sass',
    'Devtrotter',
  ],
  openGraph: {
    title: 'Sébastien Chapuy Développeur Web Freelance Élancourt',
    description:
      "Sites Next.js performants, accessibles, optimisés SEO. 6 ans d'expérience, 30+ projets livrés.",
    type: 'website',
    locale: 'fr_FR',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08080d',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SmoothScroll />
        <SpotlightPointer />
        {children}
      </body>
    </html>
  );
}
