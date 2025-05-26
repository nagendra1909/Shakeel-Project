import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { CustomCursor } from '@/components/CustomCursor'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Shakeel Rifath | Full Stack Developer",
  description:
    "Portfolio of Shakeel Rifath",
  keywords: ["Shakeel Rifath"],
  icons: {
    icon: "/image.png",
  },
  authors: [{ name: "Shakeel Rifath" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shakeel-project.vercel.app/",
    title: "Shakeel Rifath | Big Data Engineer",
    description: "Big Data Engineer with expertise in building scalable data pipelines and analytics solutions.",
    siteName: "Shakeel Rifath Portfolio",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
          <div className="relative z-0 overflow-hidden min-h-screen bg-background text-foreground">
            {/* Background gradient elements */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-20 animate-blob" />
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-20 animate-blob animation-delay-4000" />
            <div className="absolute -bottom-8 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 dark:opacity-20 animate-blob animation-delay-6000" />

            <Header />
            <main className="min-h-screen relative z-10">{children}</main>
            <Footer />
          </div>
          <CustomCursor />
      </body>
    </html>
  )
}
