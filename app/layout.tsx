import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { LiveToasts } from "@/components/ui/live-toasts"
import { CustomCursor } from "@/components/ui/custom-cursor"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export const metadata: Metadata = {
  metadataBase: new URL("https://exact-method-la.vercel.app"),
  title: "Exact Method | Online Coaching",
  description: "Online coaching for people who train hard but still feel stuck. Book a free 15-minute assessment.",
  keywords: "online coaching, online personal trainer, training programming, sustainable nutrition, fitness assessment",
  openGraph: {
    title: "Exact Method | Online Coaching",
    description: "Online coaching for people who train hard but still feel stuck. Book a free 15-minute assessment.",
    siteName: "Exact Method",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exact Method | Online Coaching",
    description: "Online coaching for people who train hard but still feel stuck. Book a free 15-minute assessment.",
  },
  icons: {
    icon: "/exact-method-favicon.svg",
    apple: "/exact-method-apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() ??
    "https://calendly.com/elitetraderslivetrading/valoracion-gratuita-15-mins"

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {calendlyUrl ? (
          <link
            rel="stylesheet"
            href="https://assets.calendly.com/assets/external/widget.css"
          />
        ) : null}
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground`}>
        <CustomCursor />
        <div className="pointer-events-none fixed inset-0 z-[100] h-full w-full opacity-[0.03] mix-blend-overlay">
          <svg width="100%" height="100%">
            <filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)" />
          </svg>
        </div>

        {children}
        <LiveToasts />
        <Analytics />
        {calendlyUrl ? (
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
        ) : null}
      </body>
    </html>
  )
}
