// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Home/footer";
import Navigation from "@/components/Home/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Creator Splash - Chaos, Comedy & Creator Events",
  description:
    "Join Harp and the Creator Splash community for the most chaotic, hilarious Minecraft events on the internet!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-outfit`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
