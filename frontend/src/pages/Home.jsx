import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0612] via-[#160a2a] to-black text-white">
      <Navbar />
      <Hero />
    </div>
  );
}
