import Footer from '../ui/Footer';
import './globals.css';
import Providers from './providers';
import { cn } from '@/lib/className';
import AnimateEnter from '@/ui/AnimateEnter';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  authors: [{ name: 'Cristian Crețu', url: 'https://cretu.dev' }],
  category: 'design',
  creator: 'Cristian Crețu',
  description: 'Design Engineer.',
  icons: {
    apple: '/static/favicons/apple-touch-icon-180x180.png',
    icon: '/static/favicons/favicon-196x196.png',
    shortcut: '/favicon.ico',
  },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'TailwindCSS',
    'Design',
    'Engineering',
    'Frontend',
    'Developer',
  ],
  manifest: '/static/favicons/site.webmanifest',
  openGraph: {
    description: 'Design Engineer.',
    images: [
      {
        alt: 'Cristian Crețu',
        height: 1080,
        url: 'https://cretu.dev/static/images/og.png',
        width: 1920,
      },
    ],
    locale: 'en-US',
    siteName: 'Cristian Crețu',
    title: 'Cristian Crețu',
    type: 'website',
    url: 'https://cretu.dev',
  },
  publisher: 'Cristian Crețu',
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: '#171717', media: '(prefers-color-scheme: dark)' },
  ],
  title: {
    default: 'Cristian Crețu',
    template: '%s | Cristian Crețu',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cristicrtu',
    title: 'Cristian Crețu',
  },
  verification: {
    google: 'fK4YqLAHjoaynXLF1e5gaPzDNOircgiYSgAwSXqr61o',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          `${inter.className}`,
          'h-full, min-h-screen, relative w-full max-w-2xl mx-auto px-4',
          'my-4 bg-white dark:bg-gray-900 sm:my-24',
          'motion-reduce:transform-none motion-reduce:transition-none'
        )}
      >
        <Providers>
          <nav className='fixed bottom-4 left-2 z-50 sm:left-4 md:left-6'></nav>
          <AnimateEnter>
            <>
              {children}
              <Footer />
            </>
          </AnimateEnter>
        </Providers>
      </body>
    </html>
  );
}
