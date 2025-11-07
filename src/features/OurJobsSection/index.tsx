import { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import type { RootState } from "../../store";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import SectionTitle from "../../components/SectionTitle";
import JobCard from "./components/JobCard";
import { setActiveIndex } from "../../store/slices/ourJobSlice";
import { jobs } from "./data";

const ACTIVE_WIDTH = window.innerWidth < 768 ? 308 : 672;
const INACTIVE_WIDTH = window.innerWidth < 768 ? 308 : 310;
const GAP = window.innerWidth < 768 ? 8 : 12;

export default function OurJobsSection() {
  const dispatch = useDispatch();
  const activeIndex = useSelector(
    (state: RootState) => state.ourJobs.activeIndex
  );

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < jobs.length - 1;

  const handleNext = useCallback(() => {
    if (canGoNext) {
      dispatch(setActiveIndex(activeIndex + 1));
    }
  }, [activeIndex, canGoNext, dispatch]);

  const handlePrev = useCallback(() => {
    if (canGoPrev) {
      dispatch(setActiveIndex(activeIndex - 1));
    }
  }, [activeIndex, canGoPrev, dispatch]);

  const offsetX = useMemo(() => {
    const isMobile = window.innerWidth < 768;
    let total = 0;

    for (let i = 0; i < activeIndex; i++) {
      total += INACTIVE_WIDTH + GAP;
    }

    const totalWidth =
      (jobs.length - 1) * (INACTIVE_WIDTH + GAP) + ACTIVE_WIDTH;

    if (isMobile) {
      // mobilde hepsi aynı genişlikte, clamp yapma yok
      return -total;
    } else {
      // desktopta clamp kalsın, boşluk olmasın
      const maxOffset = totalWidth - ACTIVE_WIDTH;
      return Math.max(-total, -(maxOffset - ACTIVE_WIDTH));
    }
  }, [activeIndex]);

  useEffect(() => {
    if (window.innerWidth < 768) return;
    const interval = setInterval(() => {
      if (activeIndex < jobs.length - 1) {
        dispatch(setActiveIndex(activeIndex + 1));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex, dispatch]);

  return (
    <div className="2xl:container 2xl:mx-auto pl-5 lg:pl-16">
      <section className="flex flex-col gap-[clamp(32px,3vh,40px)] relative overflow-hidden">
        <SectionTitle title="Gördüyümüz işlər" />

        <div className="w-full flex items-center overflow-hidden">
          <motion.div
            className="flex gap-3"
            animate={{ x: offsetX }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}>
            {jobs.map((job, i) => (
              <div
                key={job.id}
                className="shrink-0 transition-[width] duration-500 ease-in-out"
                style={{
                  width:
                    i === activeIndex
                      ? `${ACTIVE_WIDTH}px`
                      : `${INACTIVE_WIDTH}px`,
                }}>
                <JobCard job={job} isActive={i === activeIndex} />
              </div>
            ))}
          </motion.div>
        </div>
        <div className="flex justify-end">
          <div className="flex items-center justify-center gap-4 mt-4 pr-[clamp(1rem,4vw,4rem)]">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`p-2 rounded-full shadow transition transform hover:scale-105 ${
                canGoPrev ? "bg-white/80" : "bg-gray-200 cursor-not-allowed"
              }`}>
              <IoIosArrowBack
                color={canGoPrev ? "#116811" : "#ABABAB"}
                size={32}
              />
            </button>

            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`p-2 rounded-full shadow transition transform hover:scale-105  ${
                canGoNext ? "bg-white/80" : "bg-gray-200 cursor-not-allowed"
              }`}>
              <IoIosArrowForward
                color={canGoNext ? "#116811" : "#ABABAB"}
                size={32}
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
