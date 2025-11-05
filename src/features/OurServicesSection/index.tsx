import AccordionItem from "../../components/AccordionItem";
import SectionTitle from "../../components/SectionTitle";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }, // cubic bezier array
  },
};

function OurServicesSection() {
  return (
    <section className="py-20">
      <SectionTitle title="Xidmətlərimiz" />

      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}>
        {[1, 2, 3, 4].map((num) => (
          <motion.div key={num} variants={itemVariants}>
            <AccordionItem
              number={num}
              title="Torpaq işləri"
              description="Açar-təslim sənaye obyektləri və modul konstruksiyalarla müştərilərə qısa zamanda istifadəyə tam hazır, enerjiyə qənaətcil və dayanıqlı məkanlar təqdim edirik."
              imageUrl="./our-services-section.webp"
              borderColor={`border-green-${num}`}
              bgColor={`bg-white-${num}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default OurServicesSection;
