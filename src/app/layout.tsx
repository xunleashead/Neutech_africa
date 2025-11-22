import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NeuTechAfrica | Leading Technology Solutions in Africa",
  description: "NeuTechAfrica provides cutting-edge cybersecurity, web development, AI solutions, and data science services across Africa. Transform your business with our expert team.",
  keywords: ["cybersecurity", "web development", "AI solutions", "data science", "Africa", "technology", "NeuTechAfrica"],
  authors: [{ name: "NeuTechAfrica" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "NeuTechAfrica | Leading Technology Solutions in Africa",
    description: "Transform your business with cutting-edge technology solutions from NeuTechAfrica",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased font-sans">
        <ClientBody>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
