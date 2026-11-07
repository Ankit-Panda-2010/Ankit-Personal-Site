import '../index.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ankit — Personal Portfolio',
    template: '%s | Ankit',
  },
  description:
    'Ankit’s personal portfolio — selected work, experience, ideas, and ways to connect.',
  keywords: ['Ankit', 'portfolio', 'developer', 'designer', 'product builder'],
  authors: [{ name: 'Ankit' }],
  creator: 'Ankit',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Ankit — Personal Portfolio',
    description:
      'Selected work, experience, ideas, and ways to connect with Ankit.',
    siteName: 'Ankit — Personal Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ankit — curious builder and product-minded developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit — Personal Portfolio',
    description:
      'Selected work, experience, ideas, and ways to connect with Ankit.',
    images: ['/opengraph-image'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
