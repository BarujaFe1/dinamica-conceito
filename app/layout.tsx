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
  title: "Dinâmica Embelezamento Automotivo — Conceito | São Carlos/SP",
  description:
    "Conceito comercial não oficial: detalhamento, polimento, vitrificação, higienização e formação para detailers em São Carlos/SP. Fale pelo WhatsApp comercial.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0b] text-[#f4f2ed]">
        {children}
      </body>
    </html>
  );
}
