import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://eindev.ir'),
  title: {
    default: "Kameshwari R — Data Analytics & Software Engineering Portfolio",
    template: "%s | Kameshwari R",
  },
  description:
    "Data management and software logic professional. Expertise in Python, Machine Learning, Web Development, and Predictive Analytics.",
  keywords: ["Data Analytics", "Machine Learning", "Python", "Django", "Web Development", "Scikit-learn", "Power BI"],
  authors: [{ name: "Kameshwari R", url: "https://www.linkedin.com/in/kameshwari-kamesh-134b18311" }],
  creator: "Kameshwari R",
  publisher: "Kameshwari R",
  generator: "Next.js",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Kameshwari R — Data Analytics & Software Logic",
    description: "Portfolio of Kameshwari R highlighting predictive analytics, web development, and data management.",
    siteName: "Kameshwari R Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "EINCODE — Ehsan Ghaffar's Digital Laboratory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kameshwari R — Portfolio",
    description: "Data Analytics, Machine Learning & Software Logic.",
    creator: "@kameshwari",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={true} storageKey="theme-mode">
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
