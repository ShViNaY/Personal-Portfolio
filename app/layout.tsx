import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinaysh-portfolio",
  description:
    "Portfolio of Vinay S H, a full-stack web developer building responsive websites and web applications.",
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
