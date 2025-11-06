import { motion } from "framer-motion";
import CTAButton from "../../components/CTAButton";

import CloseIcon from "../../assets/icons/close.svg";
import MenuIcon from "../../assets/icons/menu.svg";

import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";

import { toggleSidebar } from "../../store/slices/isOpenSlice";
import Navbar from "./Navbar";
import ContactButtons from "./ContactButtons";
export default function Header() {
  const dispatch: AppDispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <header className="flex items-center justify-between container mx-auto px-[clamp(1rem,4vw,4rem)] py-[clamp(1rem,1vw,2rem)] relative">
      <img
        src="/logo-desktop.webp"
        srcSet="/logo-mobile.webp 128w, /logo-desktop.webp 198w"
        sizes="(max-width: 375px) 128px, (max-width: 1024px) 198px"
        alt="EcoBuild logo"
        className="w-[clamp(8rem,10vw,12.5rem)] h-[clamp(2.5rem,10vw,4rem)]"
      />
      <Navbar />
      {/* Right Buttons */}
      <div className="hidden xl:flex items-center gap-6">
        <ContactButtons />

        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          <CTAButton />
        </motion.div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => dispatch(toggleSidebar())}
        className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition">
        {isOpen ? (
          <img src={CloseIcon} alt="close" className="size-6" />
        ) : (
          <img src={MenuIcon} alt="menu" className="size-6" />
        )}
      </button>

      {/* Mobile Sidebar */}
      {/* <MobileSidebar open={isOpen} /> */}
    </header>
  );
}
