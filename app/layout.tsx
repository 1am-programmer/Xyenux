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
  icons: {
    icon: "/images/logo.svg",
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
        className={`${geistSans.variable} ${geistMono.variable} bg-web3-gradient text-gray-300 w-full`}
      >
        {/* <Header /> */}

        <div className="flex flex-col justify-center gap-16 min-h-screen px-6 md:px-16 lg:px-24">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
