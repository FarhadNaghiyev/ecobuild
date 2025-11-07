import ContactSection from "../features/ContactSection";
import HeroSection from "../features/HeroSection";
import OurJobsSection from "../features/OurJobsSection";
import OurServicesSection from "../features/OurServicesSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10 lg:gap-[100px]">
      <HeroSection />
      <OurServicesSection />
      <OurJobsSection />
      <ContactSection />
    </div>
  );
}
