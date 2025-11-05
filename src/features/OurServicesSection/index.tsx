import AccordionItem from "../../components/AccordionItem";
import SectionTitle from "../../components/SectionTitle";

function OurServicesSection() {
  return (
    <section className="">
      <SectionTitle title="Xidmətlərimiz" />
      <AccordionItem
        number={1}
        title="Torpaq işləri"
        description="Açar-təslim sənaye obyektləri və modul konstruksiyalarla müştərilərə qısa zamanda istifadəyə tam hazır, enerjiyə qənaətcil və dayanıqlı məkanlar təqdim edirik."
        imageUrl="./our-services-section.webp"
        borderColor="border-green-1"
        bgColor="bg-white-1"
      />
      <AccordionItem
        number={2}
        title="Torpaq işləri"
        description="Açar-təslim sənaye obyektləri və modul konstruksiyalarla müştərilərə qısa zamanda istifadəyə tam hazır, enerjiyə qənaətcil və dayanıqlı məkanlar təqdim edirik."
        imageUrl="./our-services-section.webp"
        borderColor="border-green-2"
        bgColor="bg-white-2"
      />
      <AccordionItem
        number={3}
        title="Torpaq işləri"
        description="Açar-təslim sənaye obyektləri və modul konstruksiyalarla müştərilərə qısa zamanda istifadəyə tam hazır, enerjiyə qənaətcil və dayanıqlı məkanlar təqdim edirik."
        imageUrl="./our-services-section.webp"
        borderColor="border-green-3"
        bgColor="bg-white-3"
      />
      <AccordionItem
        number={4}
        title="Torpaq işləri"
        description="Açar-təslim sənaye obyektləri və modul konstruksiyalarla müştərilərə qısa zamanda istifadəyə tam hazır, enerjiyə qənaətcil və dayanıqlı məkanlar təqdim edirik."
        imageUrl="./our-services-section.webp"
        borderColor="border-green-4"
        bgColor="bg-white-4"
      />
    </section>
  );
}

export default OurServicesSection;
