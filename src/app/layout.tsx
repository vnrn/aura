import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import '/public/fonts/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css'
import Header from "./_components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aura",
  description: "Aura is an E-commerce clothing store. (unfinished)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}><Header />{children}</body>
    </html>
  );
}
