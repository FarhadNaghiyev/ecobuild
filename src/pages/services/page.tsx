import SectionTitle from "../../components/SectionTitle";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import ServiceCard from "../../components/ServiceCard";
import { servicesData } from "./data";

export default function ServicesPage() {
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      x: -50,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div className="2xl:container 2xl:mx-auto px-5 lg:px-16 flex flex-col gap-10 lg:gap-[100px] py-10 lg:py-[52px]">
      <section className="flex flex-col gap-8 lg:gap-10">
        <SectionTitle title="Xidmətlərimiz" />

        <div className="flex flex-col gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: index * 0.15 }}>
              <ServiceCard
                number={service.id}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
                borderColor={service.borderColor}
                bgColor={service.bgColor}
                withAnimation={false}
                isAccordion={false}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
