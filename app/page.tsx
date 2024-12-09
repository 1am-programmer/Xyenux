import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="bg-web3-gradient text-gray-300">
    <div className=" ">
      {/* <Header /> */}
      <MobileNav />
      <Hero />
      <About />
      {/* <Footer /> */}
      {/* </div> */}
    </div>
  );
}
