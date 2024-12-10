import Link from "next/link";
import React from "react";
import { Orbitron } from "next/font/google";
import { FaWallet } from "react-icons/fa";
import Image from "next/image";
import MobileNav from "./MobileNav";

const orbitron = Orbitron({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const navLinks = [
  {
    name: "Home",
    href: "/",
    style:
      "text-white font-semibold hover:text-gray-300 transition duration-300",
  },
  {
    name: "About",
    href: "/#about",
    style:
      "text-white font-semibold hover:text-gray-300 transition duration-300",
  },
  {
    name: "NFTs",
    href: "/nfts",
    style:
      "text-white font-semibold hover:text-gray-300 transition duration-300",
  },
  {
    name: "Stake",
    href: "/stake",
    style:
      "text-white font-semibold hover:text-gray-300 transition duration-300",
  },
  {
    name: "Swap",
    href: "/swap",
    style:
      "text-white font-semibold hover:text-gray-300 transition duration-300",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between items-center h-16 px-6">
      <section className="flex items-center">
        <Image
          src="/images/logo.svg"
          alt="Xyenux Logo"
          width={50}
          height={50}
        />
        <h1
          className={`${orbitron.className} hidden text-2xl md:flex items-center ml-4`}
        >
          Xyenux
        </h1>
      </section>

      <section>
        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={link.style}>
              {link.name}
            </Link>
          ))}
        </nav>
      </section>

      <Link
        href="/"
        className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-5 py-3 rounded-xl text-sm font-bold hover:from-pink-700 hover:to-purple-700 transition-all duration-300 hidden md:flex"
      >
        Connect Wallet
      </Link>

      <div className="flex gap-2 md:hidden items-center">
        <FaWallet className="text-xl text-white" />

        <MobileNav />
      </div>
    </div>
  );
};

export default Header;
