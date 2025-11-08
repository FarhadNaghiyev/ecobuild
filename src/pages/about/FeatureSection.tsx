import { motion, type Variants } from "framer-motion";
import { cn } from "../../utils/MergeTailwindClasses";
import { features } from "./data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
  bgColor: string;
}

const FeatureCard = ({
  number,
  title,
  description,
  index,
  bgColor,
}: FeatureCardProps) => (
  <motion.div
    className={cn(
      "flex-1 p-6  text-[#F7F7F7] flex flex-col text-center  gap-8 md:gap-11 py-8 md:py-[169px] px-3 md:px-[35px]",
      bgColor
    )}
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}>
    <span className="text-[12px] sm:text-[14px] text-center font-medium">
      {number}
    </span>
    <div className="flex flex-col gap-2.5">
      <h3 className="text-lg font-medium text-[18px] sm:text-[20px]">
        {title}
      </h3>
      <p className="text-[14px] sm:text-[1rem]">{description}</p>
    </div>
  </motion.div>
);

export default function FeaturesSection() {
  return (
    <section className="lg:flex grid grid-cols-2 lg:flex-row overflow-hidden rounded-b-2xl">
      {features &&
        features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} index={idx} />
        ))}
    </section>
  );
}
