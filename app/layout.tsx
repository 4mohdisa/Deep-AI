import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://deep-ai.vercel.app'),
  title: {
    default: "Deep AI - Where Memes Meet AI Enthusiasm",
    template: "%s | Deep AI"
  },
  description: "Deep AI (DAI) is a meme coin created by AI enthusiasts, for AI enthusiasts. Join our community where we share our passion for AI technology while having fun with cryptocurrency!",
  keywords: [
    "Deep AI",
    "DAI token",
    "AI memes",
    "cryptocurrency",
    "AI community",
    "blockchain",
    "web3",
    "artificial intelligence",
    "meme coin",
    "tech discussions"
  ],
  authors: [{ name: "Deep AI Team" }],
  creator: "Deep AI Team",
  publisher: "Deep AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  
  // Open Graph
  openGraph: {
    type: "website",
    siteName: "Deep AI",
    title: "Deep AI - Where Memes Meet AI Enthusiasm",
    description: "Join the Deep AI community - where AI enthusiasts share memes, discuss technology, and shape the future of AI together!",
    images: [
      {
        url: "/images/DEEP.AI  TOKEN (1).jpg",
        width: 1200,
        height: 630,
        alt: "Deep AI Community Banner"
      }
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Deep AI - Where Memes Meet AI Enthusiasm",
    description: "Join the Deep AI community - where AI enthusiasts share memes, discuss technology, and shape the future of AI together!",
    images: ["/images/DEEP.AI  TOKEN (1).jpg"],
    creator: "@DeepAI_Official",
    site: "@DeepAI_Official",
  },

  // Icons
  icons: {
    icon: [
      {
        url: '/favicons/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicons/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
      {
        url: '/favicons/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
      },
    ],
    apple: [
      {
        url: '/favicons/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicons/icon-192-maskable.png',
        sizes: '192x192',
      },
      {
        rel: 'mask-icon',
        url: '/favicons/icon-512-maskable.png',
        sizes: '512x512',
      },
    ],
  },

  // PWA
  manifest: '/manifest.json',
  applicationName: "Deep AI",
  appleWebApp: {
    capable: true,
    title: "Deep AI",
    statusBarStyle: "black-translucent",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#000000',
  colorScheme: "dark",

  // Verification
  verification: {
    google: "google-site-verification=YOUR_CODE", // You'll need to replace this with actual verification code
  },

  // Robots
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
  
  // Alternative Languages
  alternates: {
    canonical: 'https://deep-ai.vercel.app',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
