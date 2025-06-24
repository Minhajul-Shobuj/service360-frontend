import ExpertTeamSection from "@/Component/Home/ExpertSection";
import HeroSection from "@/Component/Home/HeroSection";
import ServicesSection from "@/Component/Home/ServiceSection";
import TestimonialSection from "@/Component/Home/TestimonialSection";
import Navbar from "@/Component/Shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExpertTeamSection />
      <TestimonialSection />
    </div>
  );
}
