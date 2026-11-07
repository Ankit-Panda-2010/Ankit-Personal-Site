import '../index.css'

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ankit Panda — Developer & IB Student',
    template: '%s | Ankit',
  },
  description:
    'Ankit Panda is an IB Diploma student, developer, and Science Olympiad competitor exploring software engineering, applied mathematics, and quantitative finance.',
  keywords: ['Ankit Panda', 'developer', 'software engineering', 'quantitative finance', 'Science Olympiad', 'IB student', 'Charlotte'],
  authors: [{ name: 'Ankit Panda' }],
  creator: 'Ankit Panda',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Ankit Panda — Developer & IB Student',
    description:
      'Software engineering, applied mathematics, and quantitative finance.',
    siteName: 'Ankit Panda',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Ankit Panda — developer and IB Diploma student',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ankit Panda — Developer & IB Student',
    description:
      'Software engineering, applied mathematics, and quantitative finance.',
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
