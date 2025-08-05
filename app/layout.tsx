import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genie 3 - Advanced AI World Model | Create Interactive Environments',
  description: 'Discover Genie 3, the revolutionary AI world model by Google DeepMind. Generate interactive environments from text prompts in real-time at 24fps. Transform AI research with general-purpose world modeling.',
  keywords: 'Genie 3, AI world model, Google DeepMind, interactive environments, world generation, AI simulation, machine learning, artificial intelligence, real-time generation',
  authors: [{ name: 'Genie 3 Team' }],
  openGraph: {
    title: 'Genie 3 - Advanced AI World Model',
    description: 'Generate interactive environments from text prompts with Genie 3, the groundbreaking world model by Google DeepMind.',
    url: 'https://genie3.vip',
    siteName: 'Genie 3',
    images: [
      {
        url: 'https://genie3.vip/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Genie 3 - AI World Model',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genie 3 - Advanced AI World Model',
    description: 'Generate interactive environments from text prompts with Genie 3',
    images: ['https://genie3.vip/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://genie3.vip',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}