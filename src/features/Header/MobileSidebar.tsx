import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";

import CTAButton from "../../components/CTAButton";
import ContactButtons from "./ContactButtons";
import FacebookIcon from "../../assets/icons/facebook-black.svg";

export default function MobileSidebar({ open }: { open: boolean }) {
  if (!open) return null;

  // Parent container animasyonu
  const container: Variants = {
    hidden: { opacity: 0, x: "100%" },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        delayChildren: 0.1,
        staggerChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.aside
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className=" w-full bg-white z-50 gap-[273px] flex flex-col justify-between px-6 py-10 overflow-y-auto">
      <motion.div
        variants={container}
        className="flex flex-col gap-10 container mx-auto">
        <motion.div
          variants={item}
          className="flex flex-col gap-6 text-[1rem] font-medium">
          <motion.div variants={item}>
            <Link to="/">Haqqımızda</Link>
          </motion.div>
          <motion.div variants={item}>
            <Link to="/services">Xidmətlərimiz</Link>
          </motion.div>
          <motion.div variants={item}>
            <Link to="/projects">İşlərimiz</Link>
          </motion.div>
          <motion.div variants={item}>
            <Link to="/contact">Əlaqə</Link>
          </motion.div>
        </motion.div>

        <motion.div variants={item}>
          <CTAButton width="full" />
        </motion.div>

        <motion.div variants={item} className="flex justify-start items-center">
          <ContactButtons />
        </motion.div>
      </motion.div>

      <motion.ul
        variants={container}
        className="flex  gap-4 mt-auto pt-6 border-t border-gray-200">
        {[...Array(4)].map((_, i) => (
          <motion.li
            key={i}
            variants={item}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}>
            <a href="#" className="size-10 rounded-lg custom-flex-center">
              <img
                src={FacebookIcon}
                className="w-5 h-5 cursor-pointer hover:opacity-70"
              />
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  );
}
