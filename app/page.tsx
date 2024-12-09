import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="bg-web3-gradient text-gray-300">
      <div className="px-4 py-8 max-w-7xl mx-auto flex flex-col justify-center gap-16">
        <Header />
        <Hero />

        {/* Uncomment to include Footer */}
        <Footer />
      </div>
    </div>
  );
}
