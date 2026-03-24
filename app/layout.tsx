import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "ResumeWebCreate",
  description: "Create resumes online for free!",
  icons: {
    icon: [
      {
        type: "image/ico",
        url: "/favicon/favicon.ico",
      },
      {
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
      {
        type: "image/png",
        sizes: "192x192",
        url: "/favicon/android-chrome-192x192.png",
      },
      {
        type: "image/png",
        sizes: "512x512",
        url: "/favicon/android-chrome-512x512.png",
      }
    ],
    apple: "/favicon/apple-touch-icon.png"
  }
};


export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
      {/*<Theme>{children}</Theme>*/}
      {children}
      </body>
      </html>
  );
}
