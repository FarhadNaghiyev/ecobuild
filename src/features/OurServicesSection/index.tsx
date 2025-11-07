import SectionTitle from "../../components/SectionTitle";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ServiceCard from "../../components/ServiceCard";
import { servicesData } from "./data";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

function OurServicesSection() {
  return (
    <div className="2xl:container 2xl:mx-auto px-5 lg:px-16">
      <section className="flex flex-col gap-8 lg:gap-10">
        <SectionTitle title="Xidmətlərimiz" />

        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}>
          {servicesData.map((service) => (
            <motion.div key={service.id} variants={itemVariants}>
              <ServiceCard
                number={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                borderColor={service.borderColor}
                bgColor={service.bgColor}
                withAnimation={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default OurServicesSection;
