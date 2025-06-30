import ExpertTeamSection from "@/component/Home/ExpertSection";
import HeroSection from "@/component/Home/HeroSection";
import ServicesSection from "@/component/Home/ServiceSection";
import TestimonialSection from "@/component/Home/TestimonialSection";
import Footer from "@/component/Shared/Footer";
import Navbar from "@/component/Shared/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ExpertTeamSection />
      <TestimonialSection />
      <Footer />
    </div>
  );
}
