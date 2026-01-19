import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masgas | Quality Pipe Fittings & Irrigation Solutions",
  description: "Masgas Enterprise offers high-quality pipe fittings, filtration systems, and irrigation solutions in Kenya. Order via WhatsApp.",
  keywords: ["pipe fittings", "irrigation", "masgas", "plumbing", "hardware", "kenya", "filtration"],
  openGraph: {
    title: "Masgas Enterprise | Quality Pipe Fittings & Irrigation Solutions",
    description: "Your trusted partner for quality pipe fittings and irrigation solutions in Kenya.",
    type: "website",
    locale: "en_KE",
    siteName: "Masgas Enterprise",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Masgas Enterprise",
    "url": "https://masgas.com", 
    "logo": "https://masgas.com/logo.png", 
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254792780247",
      "contactType": "sales",
      "areaServed": "KE",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://facebook.com/masgasenterprise"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
