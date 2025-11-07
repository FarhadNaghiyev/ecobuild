import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "./CTAButton";
import { cn } from "../utils/MergeTailwindClasses";

interface AccordionItemProps {
  number: number;
  title: string;
  description: string;
  imageUrl: string;
  borderColor: string;
  bgColor: string;
}

const AccordionItem = ({
  number,
  title,
  description,
  imageUrl,
  borderColor,
  bgColor,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openState = isMobile ? true : isOpen;

  return (
    <div
      onClick={() => !isMobile && setIsOpen(!isOpen)}
      className={cn(
        "lg:relative lg:z-10 p-[clamp(1rem,3vw,2.5rem)] border rounded-3xl lg:cursor-pointer select-none transition-all duration-300",
        openState && "lg:z-20",
        number !== 1 && "lg:-mt-10",
        bgColor,
        borderColor,
        isMobile && "cursor-default"
      )}>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col-reverse max-h-min lg:flex-row w-full">
          {!isMobile && (
            <div className="lg:flex-2">
              <span
                className={cn(
                  "font-medium text-[clamp(16px,2vw,24px)]",
                  openState ? " text-green-5" : "text-black-15"
                )}>
                0{number}
              </span>
            </div>
          )}

          <div className="lg:flex-5 flex flex-col gap-[clamp(12px,0.5vh,29px)] ">
            {isMobile && (
              <span
                className={cn(
                  "font-medium text-[clamp(16px,2vw,24px)]",
                  openState ? " text-green-5" : "text-black-15"
                )}>
                0{number}
              </span>
            )}
            <h3
              className={cn(
                "text-[clamp(1.25rem,3vw,2rem)] font-medium",
                openState ? " text-green-5" : "text-black-15"
              )}>
              {title}
            </h3>

            <AnimatePresence initial={false}>
              {openState && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden text-black-15">
                  <div className="flex justify-between w-full">
                    <div
                      className={cn(
                        "flex-9 flex-col flex gap-[clamp(12px,0.5vh,29px)] text-[clamp(0.875rem,1vw,1.25rem)] font-medium",
                        "text-black-5"
                      )}>
                      <div>{description}</div>
                      <CTAButton />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="lg:flex-4">
            <AnimatePresence initial={false}>
              {openState && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="flex lg:justify-end overflow-hidden">
                  <div className="rounded-2xl h-44 md:h-[307px] w-full lg:w-[394px] overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="rounded-2xl h-44 md:h-[307px] w-full lg:w-[394px] object-cover"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
