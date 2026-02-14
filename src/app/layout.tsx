import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StayNest - Find Your Perfect Stay at Better Prices",
  description: "Search over 2 million hotels worldwide. Compare deals, read reviews, and book your dream stay at the best prices.",
  keywords: ["hotels", "booking", "travel", "vacation", "stay", "resort", "accommodation"],
  authors: [{ name: "StayNest Team" }],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🏨</text></svg>",
  },
  openGraph: {
    title: "StayNest - Find Your Perfect Stay",
    description: "Search over 2 million hotels worldwide at the best prices",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
