import { useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "../../components/CTAButton";
import PhoneIcon from "../../assets/icons/phone.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import MessageCircleIcon from "../../assets/icons/message-circle.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between container mx-auto px-[clamp(1rem,4vw,4rem)] py-[clamp(1rem,1vw,2rem)]">
      <img
        src="/logo-desktop.webp"
        srcSet="/logo-mobile.webp 128w, /logo-desktop.webp 198w"
        sizes="(max-width: 375px) 128px, (max-width: 1024px) 198px"
        alt="EcoBuild logo"
        className="w-[clamp(8rem,10vw,12.5rem)] h-[clamp(2.5rem,10vw,4rem)]"
      />

      <nav className="hidden xl:flex space-x-8 items-center justify-center h-8">
        <Link to="/" className="text-[1rem] font-normal">
          Haqqımızda
        </Link>
        <div className="h-full w-[0.01rem] bg-primary-color"></div>

        <Link to="/projects" className="">
          Xidmətlərimiz
        </Link>
        <div className="h-full w-[0.01rem] bg-primary-color"></div>
        <Link to="/services" className="">
          İşlərimiz
        </Link>
        <div className="h-full w-[0.01rem] bg-primary-color"></div>
        <Link to="/contact" className="">
          Əlaqə
        </Link>
      </nav>

      {/* Right Buttons */}
      <div className="hidden xl:flex items-center gap-6">
        <div className="custom-flex-center gap-5.5 h-6">
          <button className=" rounded-lg ">
            <img src={PhoneIcon} alt="menu" className="size-6" />
          </button>
          <div className="h-full w-[0.01rem] bg-primary-color"></div>
          <button className="  rounded-lg">
            <img src={MessageCircleIcon} alt="menu" className="size-6" />
          </button>
        </div>

        <CTAButton />
      </div>

      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition">
        {open ? (
          "Close icon"
        ) : (
          <img src={MenuIcon} alt="menu" className="size-6" />
        )}
      </button>

      {/* Mobile Sidebar */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-6 md:hidden z-50">
          <a href="#" className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Projects
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Services
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Contact
          </a>
          <div className="flex flex-col gap-2 w-3/4 mt-2">
            <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Login
            </button>
            <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Signup
            </button>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
