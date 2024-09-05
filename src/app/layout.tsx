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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bellefair.variable} ${barlow.variable}`}>
      <Head>
        {/* <!-- Open Graph --> */}
        <meta property="og:title" content="Space Tourism Website" />
        <meta
          property="og:description"
          content="A minimal Space Tourism MPW built with Next.js."
        />
        <meta
          property="og:image"
          content="https://space-tourism-mpw.netlify.app/assets/Space-Tourism-preview.png"
        />
        <meta property="og:image:width" content="369" />
        <meta property="og:image:height" content="492" />
        <meta
          property="og:url"
          content="https://space-tourism-mpw.netlify.app/"
        />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Space Tourism Website" />
        <meta
          name="twitter:description"
          content="A minimal Space Tourism MPW built with Next.js."
        />
        <meta
          name="twitter:image"
          content="https://space-tourism-mpw.netlify.app/assets/Space-Tourism-preview.png"
        />

        <meta name="keywords" content="Space Tourism Website" />
      </Head>
      <body className="bg-[#0B0D17]">
        <Header />
        {children}
      </body>
    </html>
  );
}
