import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScroll from "@/components/SmoothScroll";
import ViewportFix from "@/components/ViewportFix";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#cda558",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://bporganik.net"),
  title: {
    default: "BP ORGANIK | Premium Organic Recovery & Elite Bio-Formulas",
    template: "%s | BP ORGANIK",
  },
  description:
    "Potent natural compounds adapted for high-stress performance and organic recovery. Halal-certified organic fats and bio-ointments from Turkey's leading manufacturer.",
  keywords: [
    "organic products",
    "halal certified",
    "natural recovery",
    "camel hump oil",
    "goat fat",
    "deer visceral fat",
    "sports recovery",
    "performance enhancement",
    "BP Organik",
    "Turkey manufacturing",
  ],
  authors: [{ name: "BP ORGANIK" }],
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bporganik.net",
    siteName: "BP ORGANIK • Elite Organic Bio-Compounds",
    title: "BP ORGANIK | The Science of Ancestral Recovery",
    description:
      "Discover premium Halal-certified organic formulas designed for elite human performance and natural longevity. Engineered in Turkey.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BP ORGANIK - Premium Organic Selection",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BP ORGANIK | Elite Bio-Formulas for Performance",
    description:
      "Pure organic compounds for deep recovery and peak physiological balance. Trusted by professionals.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased tracking-tight bg-[#0a0a0a] text-white`}
      >
        <SmoothScroll />
        <ViewportFix />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
