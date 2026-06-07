import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carote - Kualitas Premium untuk Dapur Anda",
  description:
    "Temukan koleksi peralatan masak premium Carote. Material berkualitas tinggi, desain minimalis elegan, dan teknologi anti-lengket terdepan untuk dapur modern Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${newsreader.variable} ${hankenGrotesk.variable} ${sourceSans3.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fbf9f5] text-[#1b1c1a] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
