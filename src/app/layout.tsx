import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import '/public/fonts/ClashDisplay_Complete/ClashDisplay_Complete/Fonts/WEB/css/clash-display.css'

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
