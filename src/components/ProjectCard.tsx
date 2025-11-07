import { motion } from "framer-motion";
import CalendarIcon from "../assets/icons/calendar.svg";
import LocationIcon from "../assets/icons/location-black.svg";
import MetrIcon from "../assets/icons/metr.svg";

interface ProjectCardProps {
  project: project;
  isActive: boolean;
}
type project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  location: string;
  metr: number;
};

const infoVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delayChildren: 0.1, staggerChildren: 0.1 },
  },
};

const infoItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const isMobile = window.innerWidth < 768;
export default function ProjectCard({ project, isActive }: ProjectCardProps) {
  return (
    <motion.div
      initial={false}
      animate={{
        width: isMobile ? (isActive ? 308 : 308) : isActive ? 640 : 310,
        height: isMobile ? 349 : 556,
      }}
      transition={{ type: "spring", stiffness: 80, damping: 18 }}
      className={`relative overflow-hidden bg-no-repeat bg-center bg-cover flex flex-col justify-between border-primary-color border-2 rounded-3xl pt-[clamp(1rem,2vw,1.5rem)] w-[308px] h-[349px] sm:w-[310px] sm:h-[556px] lg:w-[640px]`}
      style={{
        backgroundImage: `url(${project.imageUrl})`,
      }}>
      <div>
        {isActive && (
          <motion.div
            variants={infoVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-[clamp(0.5rem,2vw,13px)] px-[clamp(1rem,2vw,1.5rem)]">
            <motion.div
              variants={infoItem}
              className="p-[clamp(8px,1vw,12px)] bg-secondary-color font-medium lg:font-normal rounded-lg flex gap-2.5 text-[clamp(0.75rem,1vw,1rem)] text-black-5">
              <img src={CalendarIcon} alt="calendar" />
              12.06.2025
            </motion.div>
            <motion.div
              variants={infoItem}
              className="p-[clamp(8px,1vw,12px)] bg-secondary-color font-medium lg:font-normal rounded-lg flex gap-2.5 text-[clamp(0.75rem,1vw,1rem)] text-black-5">
              <img src={LocationIcon} alt="Location" />
              Baku, Azerbaijan
            </motion.div>
            <motion.div
              variants={infoItem}
              className="p-[clamp(8px,1vw,12px)] bg-secondary-color font-medium lg:font-normal rounded-lg flex gap-2.5 text-[clamp(0.75rem,1vw,1rem)] text-black-5">
              <img src={MetrIcon} alt="metr" />
              1232 km
            </motion.div>
          </motion.div>
        )}
      </div>

      <div
        className={`bg-white-20 rounded-b-3xl ${
          isActive
            ? "p-[clamp(1rem,2vw,1.5rem)]"
            : "p-[clamp(1rem,2vw,1.25rem)]"
        }`}>
        <motion.div
          initial={false}
          animate={{
            y: isActive ? -8 : 0,
            scale: isActive ? 1.02 : 1,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="relative">
          <h3
            className={`line-clamp-2 ${
              isActive
                ? "font-semibold text-black-5 text-[clamp(1.125rem,2vw,1.5rem)]"
                : "font-medium text-black-15 text-[clamp(1rem,2vw,1.125rem)]"
            }`}>
            {project.title}
          </h3>
          {isActive && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-[clamp(14px,2vw,1rem)] text-black-15 mt-1 line-clamp-2">
              {project.description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
