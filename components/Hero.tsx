import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gradient-to-r from-pink-600  to-black text-white text-center px-6 py-8">
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

      <section className="w-full md:w-auto">
        <Image
          src={"/images/none.png"}
          alt={"hero img"}
          height={400}
          width={500}
          className="w-full h-auto max-w-xs md:max-w-none"
        />
      </section>
    </div>
  );
};

export default Hero;
