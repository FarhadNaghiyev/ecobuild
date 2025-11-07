import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CTAButton from "./CTAButton";
import { cn } from "../utils/MergeTailwindClasses";

interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
  imageUrl: string;
  borderColor: string;
  bgColor: string;
  isAccordion?: boolean;
  withAnimation?: boolean;
}

const ServiceCard = ({
  number,
  title,
  description,
  imageUrl,
  borderColor,
  bgColor,
  isAccordion = true,
  withAnimation = true,
}: ServiceCardProps) => {
  const [isOpen, setIsOpen] = useState(!isAccordion);
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

  const MotionDiv = withAnimation ? motion.div : "div";
  const MotionWrapper = withAnimation
    ? AnimatePresence
    : ({ children }: React.PropsWithChildren) => <>{children}</>;

  const handleClick = () => {
    if (!isAccordion || isMobile) return;
    setIsOpen((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "p-[clamp(1rem,3vw,2.5rem)] border rounded-3xl transition-all duration-300 select-none",
        isAccordion && "lg:relative lg:z-10",
        openState && isAccordion && "lg:z-20",
        number !== 1 && isAccordion && "lg:-mt-10",
        bgColor,
        borderColor,
        isAccordion && !isMobile && "lg:cursor-pointer",
        !isAccordion && "cursor-default",
        !isAccordion && "lg:hover:border-primary-color border-secondary-color"
      )}>
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col-reverse max-h-min gap-2 lg:flex-row w-full">
          {!isMobile && (
            <div className="lg:flex-2">
              <span
                className={cn(
                  "font-medium text-[clamp(16px,2vw,24px)]",
                  openState ? "text-green-5" : "text-black-15"
                )}>
                0{number}
              </span>
            </div>
          )}

          <div className="lg:flex-5 flex flex-col gap-2 lg:gap-[29px]">
            {isMobile && (
              <span
                className={cn(
                  "font-medium text-[clamp(16px,2vw,24px)]",
                  openState ? "text-green-5" : "text-black-15"
                )}>
                0{number}
              </span>
            )}

            <h3
              className={cn(
                "text-[clamp(1.25rem,3vw,2rem)] font-medium",
                openState ? "text-green-5" : "text-black-15"
              )}>
              {title}
            </h3>

            <MotionWrapper>
              {openState && (
                <MotionDiv
                  layout={withAnimation}
                  initial={withAnimation ? { opacity: 0 } : false}
                  animate={withAnimation ? { opacity: 1 } : false}
                  exit={withAnimation ? { opacity: 0 } : undefined}
                  transition={
                    withAnimation
                      ? { duration: 0.5, ease: "easeInOut" }
                      : undefined
                  }
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
                </MotionDiv>
              )}
            </MotionWrapper>
          </div>

          <div className="lg:flex-3">
            <MotionWrapper>
              {openState && (
                <MotionDiv
                  initial={withAnimation ? { height: 0, opacity: 0 } : false}
                  animate={
                    withAnimation ? { height: "auto", opacity: 1 } : false
                  }
                  exit={withAnimation ? { height: 0, opacity: 0 } : undefined}
                  transition={
                    withAnimation
                      ? { duration: 0.25, ease: "easeInOut" }
                      : undefined
                  }
                  className="flex lg:justify-end overflow-hidden">
                  <div className="rounded-2xl h-44 sm:h-[307px] w-full lg:max-w-[394px] overflow-hidden">
                    <img
                      src={imageUrl}
                      alt={title}
                      className="rounded-2xl h-44 sm:h-[307px] w-full lg:max-w-[394px] object-cover"
                    />
                  </div>
                </MotionDiv>
              )}
            </MotionWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
