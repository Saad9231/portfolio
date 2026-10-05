import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Mono, Nunito } from "next/font/google";
import "./globals.css";

// Optimized font loading (zero CLS, self-hosted)
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: "400", variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Muhammad Saad Iqbal | Android Developer & SQA Engineer",
  description:
    "Portfolio of Muhammad Saad Iqbal, Software Engineering student specializing in Android Development, SQA, and Web Technologies.",
  keywords: [
    "Muhammad Saad Iqbal",
    "Android Developer",
    "SQA Engineer",
    "Software Engineering",
    "Next.js",
    "Java",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`dark scroll-smooth ${nunito.variable} ${dmMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
