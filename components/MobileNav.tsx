import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const navLinks = [
  {
    name: "Home",
    href: "/",
    style:
      "text-white font-semibold hover:text-gray-300 transition duration-300",
  },
  {
    name: "NFTs",
    href: "/about",
    style:
      "text-white font-semibold hover:text-gray-300 transition duration-300",
  },
  {
    name: "Features",
    href: "#features",
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
const MobileNav = () => {
  return (
    <div className="md:hidden flex justify-end">
      <Sheet>
        <SheetTrigger className="">
          {" "}
          <GiHamburgerMenu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle>Are you absolutely sure?</SheetTitle> */}
            <SheetDescription className="h-fit">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className={link.style}>
                  {link.name}
                </Link>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
