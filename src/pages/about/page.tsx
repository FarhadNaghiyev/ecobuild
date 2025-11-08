import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  type Variants,
} from "framer-motion";
import { useEffect } from "react";
import SectionTitle from "../../components/SectionTitle";
import FeaturesSection from "./FeatureSection";

// ===== Fade-up animasyonu (typed) =====
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
};

interface CounterProps {
  from?: number;
  to: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ from = 0, to, suffix = "", duration = 4 }: CounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [count, to, duration]);

  return (
    <span className="flex flex-nowrap">
      <motion.span>{rounded}</motion.span>
      <span className="ml-[3px] text-primary-color">{suffix}</span>
    </span>
  );
};

export default function AboutPage() {
  return (
    <div className="2xl:container 2xl:mx-auto px-5 lg:px-16 gap-8 lg:gap-10 py-10 lg:py-[52px] flex flex-col justify-end">
      <section className="flex flex-col gap-8 lg:gap-10">
        {/* Başlık */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <SectionTitle title="Haqqımızda" />
        </motion.div>

        {/* Üst görsel + yazı */}
        <motion.div
          className="flex flex-col lg:flex-row gap-3 lg:gap-5"
          variants={fadeUp}
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <motion.div
            className="flex-2 flex items-center overflow-hidden max-h-[133px] sm:max-h-[260px] lg:max-h-full rounded-xl"
            variants={fadeUp}
            custom={2}>
            <img
              src="./about-1.jpg"
              alt="about"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          <motion.div
            className="flex-8 flex flex-col gap-8 justify-between"
            variants={fadeUp}
            custom={3}>
            <h3 className="font-medium text-black-5 text-[18px] sm:text-4xl lg:w-4/6">
              İnnovativ texnologiyalar və{" "}
              <span className="text-primary-color">
                ekoloji həllərlə gələcəyi
              </span>{" "}
              inşa edirik.
            </h3>

            <p className="text-black-15 text-[14px] sm:text-[18px]">
              “ECO BUILD olaraq məqsədimiz sənaye və kommersiya sahələrində
              innovasiya, davamlılıq və etibarlılığı birləşdirərək müasir inşaat
              standartlarını yenidən müəyyənləşdirməkdir.”
            </p>

            <motion.div
              className="w-full overflow-hidden max-h-[428px] flex flex-col justify-end flex-1 rounded-[18px]"
              variants={fadeUp}
              custom={4}>
              <img
                src="./about-2.jpg"
                alt="about"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Keyfiyyətin pillələri */}
        <motion.section
          variants={fadeUp}
          custom={5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          <div className="flex flex-col-reverse lg:flex-row gap-3 md:gap-8">
            <motion.div
              className="lg:min-h-[759px] min-h-[600] overflow-clip flex-1 rounded-t-[22px]"
              variants={fadeUp}
              custom={6}>
              <img
                src="./about-3.jpg"
                alt="about"
                className="object-cover h-full w-full object-top"
              />
            </motion.div>

            <motion.div
              className="flex-1 flex flex-col gap-6 md:gap-16"
              variants={fadeUp}
              custom={7}>
              <SectionTitle
                variant="numbered"
                number="01"
                title="Keyfiyyətin pillələri"
              />

              <motion.div
                className="flex flex-col gap-3 md:gap-8"
                variants={fadeUp}
                custom={8}>
                <h3 className="font-semibold text-[16px] sm:text-[24px] text-black-15">
                  ECO BUILD 2025-ci ildən sənaye və kommersiya binalarının
                  innovativ və ekoloji tikintisi üzrə fəaliyyət göstərir.
                  Missiyamız – yüksək texnologiyalarla sürətli, etibarlı və
                  ekoloji inşaat təklif etməkdir.
                </h3>
                <p className="text-black-45 text-[14px] sm:text-[18px]">
                  Birlikdə daha güclü və ekoloji gələcək inşa edirik. Yüksək
                  texnologiyalı yanaşma, etibarlı tikinti və ekoloji balansla
                  gələcəyin sənaye standartlarını formalaşdırırıq.
                </p>
              </motion.div>

              {/* İstatistikler */}
              <motion.div
                className="flex gap-2.5 sm:gap-10 xl:gap-[100px] justify-center lg:justify-end"
                variants={fadeUp}
                custom={9}>
                <div className="flex flex-col gap-[30px] md:gap-16">
                  {/* 120+ */}
                  <motion.div
                    className="flex flex-col gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}>
                    <div className="text-[48px] md:text-[64px] font-semibold text-black-5 flex items-end">
                      <Counter to={120} suffix="+" />
                    </div>
                    <p className="text-black-15 font-medium text-[14px] md:text-[20px]">
                      Tamamlanmış layihə
                    </p>
                  </motion.div>

                  {/* 30+ */}
                  <motion.div
                    className="flex flex-col gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}>
                    <div className="text-[48px] md:text-[64px] font-semibold text-black-5 flex items-end">
                      <Counter to={30} suffix="+" />
                    </div>
                    <p className="text-black-15 font-medium text-[14px] md:text-[20px]">
                      Tərəfdaş şirkət
                    </p>
                  </motion.div>
                </div>

                <div className="flex flex-col gap-[30px] md:gap-16">
                  {/* 15 il+ */}
                  <motion.div
                    className="flex flex-col gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}>
                    <div className="text-[48px] md:text-[64px] font-semibold text-black-5 flex items-end">
                      <Counter to={15} suffix=" il+" />
                    </div>
                    <p className="text-black-15 font-medium text-[14px] md:text-[20px]">
                      Sahə təcrübəsi
                    </p>
                  </motion.div>

                  {/* 98% */}
                  <motion.div
                    className="flex flex-col gap-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}>
                    <div className="text-[48px] md:text-[64px] font-semibold text-black-5 flex items-end">
                      <Counter to={98} suffix=" %" />
                    </div>
                    <p className="text-black-15 font-medium text-[14px] md:text-[20px]">
                      Müştəri məmnuniyyəti
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          <FeaturesSection />
        </motion.section>
      </section>
    </div>
  );
}
