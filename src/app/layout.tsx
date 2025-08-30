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
  title: "Trần Minh Thắng - Frontend Developer Portfolio",
  description: "Frontend Developer with 2+ years of experience in React, Vue, Laravel, and modern web technologies. Specialized in creating beautiful and functional web applications.",
  keywords: ["Frontend Developer", "React", "Vue", "Laravel", "NextJS", "TypeScript", "Portfolio"],
  authors: [{ name: "Trần Minh Thắng" }],
  creator: "Trần Minh Thắng",
  openGraph: {
    title: "Trần Minh Thắng - Frontend Developer Portfolio",
    description: "Frontend Developer with 2+ years of experience in React, Vue, Laravel, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trần Minh Thắng - Frontend Developer Portfolio",
    description: "Frontend Developer with 2+ years of experience in React, Vue, Laravel, and modern web technologies.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
