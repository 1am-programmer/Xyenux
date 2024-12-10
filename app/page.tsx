import About from "@/components/About";
import Hero from "@/components/Hero";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Hero />
      <About />
    </div>
  );
}
