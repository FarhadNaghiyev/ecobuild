import { motion } from "framer-motion";
import CTAButton from "../../components/CTAButton";

function HeroSection() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <motion.h1
          className="m-0 p-0 flex-3 flex flex-col justify-start font-medium text-[clamp(1.25rem,7vw,3rem)] min-w-max"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <div>Müasir sənayə binallarının</div>
          <span className="text-primary-color">
            tikintisinin innovativ həlli
          </span>
        </motion.h1>

        <motion.p
          className="m-0 p-0 flex-2 font-normal text-white-5 text-[clamp(0.875,5vw,1.125rem)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}>
          Torpaq işlərindən təmələ qədər – hər mərhələdə dəqiqlik, təhlükəsizlik
          və ekoloji məsuliyyət prinsiplərini qoruyuruq.
        </motion.p>

        <CTAButton styleClasses="flex md:hidden" />
      </div>

      <motion.img
        className="rounded-3xl w-full"
        src="./hero.webp"
        alt="hero section image"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      />
    </div>
  );
}

export default HeroSection;
