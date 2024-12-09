"use client";
import { useState } from "react";
import Link from "next/link";

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
const MobileNav = () => {
  // State to toggle the menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Icon */}
      <button
        className="lg:hidden text-white p-4"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <svg
          className={`w-6 h-6 ${isOpen ? "block" : "block"}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      {/* Sliding Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-fit rounded-md bg-black text-white transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} aria-label="Close Menu">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <nav className="flex flex-col items-center space-y-6 py-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={link.style}>
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
