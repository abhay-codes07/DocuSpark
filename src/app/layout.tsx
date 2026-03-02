import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navigation/navbar";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  applicationName: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "pdf tools",
    "merge pdf",
    "split pdf",
    "compress pdf",
    "image to pdf",
    "word to pdf",
    "document tools",
  ],
  authors: [{ name: "DocuSpark" }],
  creator: "DocuSpark",
  category: "productivity",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#main-content"
          className="focus-ring sr-only left-4 top-4 z-50 rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm focus:not-sr-only focus:absolute"
        >
          Skip to content
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
