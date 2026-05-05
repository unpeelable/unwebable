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
  title: "M. Yiğit Soyulmaz — Portfolyo",
  description:
    "Bilgisayar Mühendisliği öğrencisi, müzik prodüktörü ve oyun geliştirici. C, Python ve Godot ile dijital dünyalar inşa ediyorum.",
  openGraph: {
    title: "M. Yiğit Soyulmaz",
    description:
      "Bilgisayar Mühendisliği öğrencisi, müzik prodüktörü ve oyun geliştirici.",
    url: "https://unpeelable.digital",
    siteName: "M. Yiğit Soyulmaz",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M. Yiğit Soyulmaz",
    description:
      "Bilgisayar Mühendisliği öğrencisi, müzik prodüktörü ve oyun geliştirici.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
