import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Stavin Fernandes| Cybersecurity Professional",
  description: "Cybersecurity portfolio of Stavin Fernandes- SOC Analyst, Security Engineer, and Threat Expert",
  generator: "v0.dev",
  keywords: ["Cybersecurity", "SOC Analyst", "Security Engineer", "Threat Expert", "Portfolio"],
  authors: [{ name: "Stavin Fernandes" }],
  creator: "Stavin Fernandes",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Stavin Fernandes| Cybersecurity Professional",
    description: "Cybersecurity portfolio of Stavin Fernandes- SOC Analyst, Security Engineer, and Threat Expert"
  }
}

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
