import ContactSection from "../features/ContactSection";
import HeroSection from "../features/HeroSection";
import OurServicesSection from "../features/OurServicesSection";

export default function Home() {
  return (
    <div className="flex flex-col gap-13">
      <HeroSection />
      <OurServicesSection />
      <ContactSection />
    </div>
  );
}
