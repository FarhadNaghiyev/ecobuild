import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CTAButton from "../../components/CTAButton";
import SectionTitle from "../../components/SectionTitle";
import { contactSchema } from "../../schemas/contactSchema";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type ContactFormData = z.infer<typeof contactSchema>;

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
interface ContactSectionProps {
  sectionTitle: string;
  children?: React.ReactNode;
}
export default function ContactSection({
  sectionTitle,
  children,
}: ContactSectionProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <section className="pb-10 lg:pb-[100px] 2xl:container 2xl:mx-auto flex flex-col gap-8 lg:gap-10 px-5 lg:px-16">
      <SectionTitle title={sectionTitle} />
      <div className="flex flex-col gap-4 lg:gap-8">{children}</div>
      <div
        className="rounded-3xl relative w-full bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/contact-worker.webp')",
        }}>
        <motion.div
          className="flex flex-col lg:flex-row relative z-10 items-center justify-between lg:min-h-[clamp(30rem,90vh,50rem)] px-[clamp(1rem,5vw,4rem)] py-[clamp(2rem,6vw,5rem)] text-white"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}>
          <motion.h3
            className="text-[clamp(1.5rem,10vw,3.5rem)] font-bold text-left mb-6 lg:mb-0 lg:max-w-[40%]"
            variants={itemVariants}>
            Gələcəyin tikintisini birlikdə quraq
          </motion.h3>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full lg:w-[clamp(20rem,45vw,42rem)] bg-white/95 backdrop-blur-md text-black rounded-3xl px-[clamp(0.75rem,2vw,2rem)] py-[clamp(0.75rem,2vw,2.75rem)] shadow-xl"
            variants={itemVariants}>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3"
              variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <input
                  {...register("firstName")}
                  placeholder="Ad"
                  className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  {...register("lastName")}
                  placeholder="Soyad"
                  className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3"
              variants={containerVariants}>
              <motion.div variants={itemVariants}>
                <input
                  {...register("phone")}
                  placeholder="Nömrə"
                  className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </motion.div>

              <motion.div variants={itemVariants}>
                <input
                  {...register("email")}
                  placeholder="E-mail"
                  className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <input
                {...register("subject")}
                placeholder="Mövzu"
                className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm mb-3"
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mb-2">
                  {errors.subject.message}
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants}>
              <textarea
                {...register("message")}
                placeholder="Mesajınız"
                rows={4}
                className="w-full rounded-md border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500 py-2 px-3 text-sm resize-none mb-4"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mb-2">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
              <CTAButton width="full" />
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
