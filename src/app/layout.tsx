import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Edward Griggs | Systems Administrator & IT Professional',
  description:
    'IT professional with expertise in Microsoft 365 administration, cybersecurity compliance, and building IT infrastructure. Experienced in policy development, web platforms, and supporting distributed teams.',
  keywords: [
    'Systems Administrator',
    'IT Professional',
    'Microsoft 365',
    'Cybersecurity',
    'NIST',
    'SharePoint',
    'IT Support',
  ],
  authors: [{ name: 'Edward Griggs' }],
  creator: 'Edward Griggs',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://edwardgriggs.com',
    siteName: 'Edward Griggs Resume',
    title: 'Edward Griggs | Systems Administrator & IT Professional',
    description:
      'IT professional with expertise in Microsoft 365 administration, cybersecurity compliance, and building IT infrastructure.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edward Griggs | Systems Administrator & IT Professional',
    description:
      'IT professional with expertise in Microsoft 365 administration, cybersecurity compliance, and building IT infrastructure.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts loaded via CSS link for better compatibility */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        {children}
        {/* Analytics placeholder - uncomment and configure as needed */}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}
