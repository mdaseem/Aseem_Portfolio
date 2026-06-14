import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammeded Aseem — Full Stack Engineer",
  description:
    "Full Stack engineer specialising in React, Next.js, and AI-integrated products. Based in Bengaluru, India.",
  openGraph: {
    title: "Mohammed Aseem — Full Stack Engineer",
    description:
      "Building interfaces that feel obvious to use and hard to forget.",
    type: "website",
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
