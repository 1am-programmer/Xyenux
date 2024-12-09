import Link from "next/link";
import React from "react";
import { Orbitron } from "next/font/google";

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
    href: "/about",
    style:
      "text-white font-semibold hover:text-gray-300 transition duration-300",
  },
  {
    name: "Features",
    href: "/features",
    style:
      "text-white font-semibold hover:text-gray-300 transition duration-300",
  },
  {
    name: "Contact",
    href: "/contact",
    style:
      "text-white font-semibold hover:text-gray-300 transition duration-300",
  },
];

const Header = () => {
  return (
    <div className="flex justify-between gap-3 items-center">
      <h1 className={`${orbitron.className} text-2xl`}>Xyenux</h1>

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
        className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:from-pink-700 hover:to-purple-700 transition-all duration-300"

        // className="bg-gradient-to-r from-black to-red-600 text-white px-8 py-3 rounded-xl font-bold text-[1rem] hover:from-red-600 hover:to-black transition-all duration-300"
      >
        Connect Wallet
      </Link>
    </div>
  );
};

export default Header;
