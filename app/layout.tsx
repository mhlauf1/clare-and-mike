import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Merriweather } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clare & Michael",
  description: "Website for Clare and Mike's wedding",
};

const manstein = localFont({
  src: "../fonts/Manstein.ttf",
  variable: "--font-manstein",
  display: "swap",
  preload: true,
});

const ortical = localFont({
  src: "../fonts/OrticaLinear-Regular.woff2",
  variable: "--font-ortical",
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manstein.variable} ${ortical.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
