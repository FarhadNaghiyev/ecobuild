import AccordionItem from "../../components/AccordionItem";
import SectionTitle from "../../components/SectionTitle";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }, // yavaşlatıldı
  },
};

function OurServicesSection() {
  return (
    <section className="py-20">
      <SectionTitle title="Xidmətlərimiz" />

      <motion.div
        className="flex flex-col gap-6"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}>
        <motion.div variants={itemVariants}>
          <AccordionItem
            number={1}
            title="Torpaq işləri"
            description="Açar-təslim sənaye obyektləri və modul konstruksiyalarla müştərilərə qısa zamanda istifadəyə tam hazır, enerjiyə qənaətcil və dayanıqlı məkanlar təqdim edirik."
            imageUrl="./our-services-section.webp"
            borderColor="border-green-1"
            bgColor="bg-white-1"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <AccordionItem
            number={2}
            title="Torpaq işləri"
            description="Açar-təslim sənaye obyektləri və modul konstruksiyalarla müştərilərə qısa zamanda istifadəyə tam hazır, enerjiyə qənaətcil və dayanıqlı məkanlar təqdim edirik."
            imageUrl="./our-services-section.webp"
            borderColor="border-green-2"
            bgColor="bg-white-2"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <AccordionItem
            number={3}
            title="Torpaq işləri"
            description="Açar-təslim sənaye obyektləri və modul konstruksiyalarla müştərilərə qısa zamanda istifadəyə tam hazır, enerjiyə qənaətcil və dayanıqlı məkanlar təqdim edirik."
            imageUrl="./our-services-section.webp"
            borderColor="border-green-3"
            bgColor="bg-white-3"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <AccordionItem
            number={4}
            title="Torpaq işləri"
            description="Açar-təslim sənaye obyektləri və modul konstruksiyalarla müştərilərə qısa zamanda istifadəyə tam hazır, enerjiyə qənaətcil və dayanıqlı məkanlar təqdim edirik."
            imageUrl="./our-services-section.webp"
            borderColor="border-green-4"
            bgColor="bg-white-4"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default OurServicesSection;
