import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dustin McCracken Real Estate",
  description: "Find your dream home with Dustin McCracken Real Estate",
  keywords: ["real estate", "property", "homes", "houses", "buy", "sell"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className={`${inter.className} min-h-screen bg-background`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
