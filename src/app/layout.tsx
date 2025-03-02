import type { Metadata } from "next";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Cassie Mifflin",
  description: "Cassie Mifflin's Art",
  icons: {
    icon: "/favicon.png", 
    shortcut: "/favicon.png", 
    apple: "/favicon.png",
  },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Autour+One&family=Emilys+Candy&display=swap" rel="stylesheet"></link>
      </head>
      <GoogleAnalytics gaId="G-6HDWPLP5T6" />
      <body>
        {children}
      </body>
    </html>
  );
}
