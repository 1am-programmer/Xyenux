import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <Header />
      <Hero />
      <About />
    </div>
  );
}
