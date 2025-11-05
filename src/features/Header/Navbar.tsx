import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="hidden xl:flex space-x-8 items-center justify-center h-8">
      <Link
        to="/"
        className="text-[1rem] font-normal transform transition-transform duration-200 hover:scale-105">
        Haqqımızda
      </Link>
      <div className="h-full w-[0.01rem] bg-primary-color"></div>
      <Link
        to="/services"
        className="text-[1rem] font-normal transform transition-transform duration-200 hover:scale-105">
        Xidmətlərimiz
      </Link>
      <div className="h-full w-[0.01rem] bg-primary-color"></div>
      <Link
        to="/jobs"
        className="text-[1rem] font-normal transform transition-transform duration-200 hover:scale-105">
        İşlərimiz
      </Link>
      <div className="h-full w-[0.01rem] bg-primary-color"></div>
      <Link
        to="/contact"
        className="text-[1rem] font-normal transform transition-transform duration-200 hover:scale-105">
        Əlaqə
      </Link>
    </nav>
  );
}
