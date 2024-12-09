import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const Hero = () => {
  return (
    <div
      className={`${orbitron.className}min-h-screen flex flex-col md:flex-row justify-center items-center bg-hero-bg  text-white text-center px-6 py-8  `}
    >
      {/* bg-gradient-to-r from-pink-600 to-black  */}
      {/* Text Section */}
      <section className="mb-8 md:mb-0 md:max-w-xl text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to Xyenux
        </h1>

        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto md:mx-0">
          Empowering the future of decentralized technology. Join us in creating
          the next era of Web3. Be part of the revolution!
        </p>

        <Link
          href="/get-started"
          className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
        >
          Get Started
        </Link>
      </section>

      {/* Image Section */}
      <section className="w-full md:w-auto flex justify-center md:justify-start  bg-hero-bg">
        <Image
          src="/images/herosec.svg"
          alt="hero img"
          height={400}
          width={500}
          className="max-w-full h-auto bg-web3-gradient"
        />
      </section>
    </div>
  );
};

export default Hero;
