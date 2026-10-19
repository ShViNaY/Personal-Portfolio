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
  title: "Vinay S H — Full-Stack Web Developer",
  description:
    "Portfolio of Vinay S H, a full-stack web developer building clean, responsive websites and web applications with React, Node.js, and Django.",
  keywords: [
    "Vinay S H",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "Django Developer",
    "Freelance Web Developer"
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-[#faf9f5] font-sans text-[#121316] selection:bg-[#121316] selection:text-[#faf9f5]">
        {children}
      </body>
    </html>
  );
}
