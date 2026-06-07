import type { Metadata } from "next";
import "./globals.css";
import { LenisProvider } from "./providers/lenis-provider";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Carote - Kualitas Premium untuk Dapur Anda",
    template: "%s | Carote Indonesia",
  },
  description:
    "Temukan koleksi peralatan masak premium Carote. Material berkualitas tinggi, desain minimalis elegan, dan teknologi anti-lengket terdepan untuk dapur modern Anda.",
  keywords: [
    "carote",
    "carote indonesia",
    "peralatan masak premium",
    "alat masak anti lengket",
    "cookware premium",
    "wajan anti lengket",
    "dapur modern",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Carote - Kualitas Premium untuk Dapur Anda",
    description:
      "Temukan koleksi peralatan masak premium Carote. Material berkualitas tinggi, desain minimalis elegan, dan teknologi anti-lengket terdepan untuk dapur modern Anda.",
    url: "/",
    siteName: "Carote Indonesia",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 512,
        height: 512,
        alt: "Carote Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carote - Kualitas Premium untuk Dapur Anda",
    description:
      "Koleksi cookware premium Carote untuk dapur modern yang elegan dan fungsional.",
    images: ["/favicon.ico"],
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
  category: "home and kitchen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Google Fonts — same as reference design */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;0,6..72,500;1,6..72,300;1,6..72,400&family=Source+Sans+3:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Material Symbols */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
