// app/layout.tsx or app/RootLayout.tsx (depending on your setup)
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Xyenux",
  description: "Empowering the future with decentralized Web3 technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-web3-gradient text-gray-300 px-4 py-8 max-w-7xl mx-auto`}
        //  flex flex-col justify-center  gap-16
      >
        {/* Include the Header */}
        <Header />

        {/* Main content goes here */}
        <main className="px-4 py-8 max-w-7xl mx-auto flex flex-col justify-center gap-16 min-h-screen">
          {children}
        </main>

        {/* Include the Footer */}
        <Footer />
      </body>
    </html>
  );
}
