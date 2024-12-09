import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-web3-gradient text-gray-300">
      <div className="px-4 py-8 max-w-7xl mx-auto flex flex-col justify-center  gap-16 ">
        <Header />
        <MobileNav />
        <Hero />
        <About />
        {/* <Footer /> */}
      </div>
    </div>
  );
}
