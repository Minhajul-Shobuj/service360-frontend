import HeroSection from "@/Component/Home/HeroSection";
import ServicesSection from "@/Component/Home/ServiceSection";
import Navbar from "@/Component/Shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </div>
  );
}
