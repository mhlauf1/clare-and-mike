import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/navbar/navbar";
import localFont from "next/font/local";

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
