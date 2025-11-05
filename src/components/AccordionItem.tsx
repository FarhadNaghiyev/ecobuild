import { useState } from "react";
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

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "relative z-10 p-[clamp(1rem,3vw,2.5rem)] border border-green-3 rounded-3xl cursor-pointer select-none",

        isOpen && "z-20",
        number !== 1 && "-mt-10",
        bgColor,
        borderColor
      )}>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col-reverse lg:flex-row w-full">
          <div className="flex-2">
            <span
              className={cn(
                "font-medium text-[clamp(16px,2vw,24px)]",
                isOpen ? " text-green-5" : "text-black-15"
              )}>
              0{number}
            </span>
          </div>
          <div className="flex-5 flex flex-col gap-[29px] ">
            <h3
              className={cn(
                "text-[clamp(1.25rem,3vw,2rem)] font-medium",
                isOpen ? " text-green-5" : "text-black-15"
              )}>
              {title}
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className=" overflow-hidden  text-black-15">
                  <div className="flex justify-between w-full">
                    <div
                      className={cn(
                        "flex-9 flex-col flex gap-[29px] text-[clamp(0.875rem,1vw,1.25rem)] font-medium",
                        "text-black-5"
                      )}>
                      <div className="text-[clamp(0.875rem,1vw,1.25rem)] font-medium text-black-5">
                        {description}
                      </div>
                      <CTAButton />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex-4">
            <AnimatePresence initial={false}>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="flex lg:justify-end overflow-hidden">
                {isOpen && (
                  <div className="rounded-2xl h-[307px] w-full lg:w-[394px]">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="rounded-2xl h-[clamp(176,10vh,307px)] w-[clamp(303,10vw,394px)]"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
