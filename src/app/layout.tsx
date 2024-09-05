import Head from "next/head";
import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import "./globals.css";

// Google fonts
const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellefair",
  weight: ["400"],
});
const barlow = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
  weight: ["400"],
});

// Custom Components
import Header from "@/components/header/Header";

export const metadata: Metadata = {
  title: {
    default: "Space Tourism",
    template: "%s | Space Tourism",
  },
  description: "A minimal Space Tourism MPW built with Next.js",
  openGraph: {
    title: "Space Tourism",
    description: "A minimal Space Tourism MPW built with Next.js",
    url: "https://space-tourism-mpw.netlify.app/",
    images: [
      {
        url: "https://space-tourism-mpw.netlify.app/assets/Space-Tourism-preview.png",
        width: 369,
        height: 492,
        alt: "Space-Tourism-preview",
      },
    ],
    siteName: "Space-Tourism",
    type: "website",
  },
  keywords: ["Space Tourism", "Website", "Next.js"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bellefair.variable} ${barlow.variable}`}>
      <body className="bg-[#0B0D17]">
        <Header />
        {children}
      </body>
    </html>
  );
}
