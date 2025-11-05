import { Link } from "react-router-dom";
import PhoneIcon from "../../assets/icons/phone.svg";
import MessageCircleIcon from "../../assets/icons/message-circle.svg";

export default function MobileSidebar({ open }: { open: boolean }) {
  if (!open) return null;

  return (
    <div className=" w-full h-screen bg-white flex flex-col items-center justify-between py-10 px-6">
      {/* Linkler */}
      <div className="flex flex-col gap-6 text-lg font-medium">
        <Link to="/">Haqqımızda</Link>
        <Link to="/services">Xidmətlərimiz</Link>
        <Link to="/projects">İşlərimiz</Link>
        <Link to="/contact">Əlaqə</Link>
      </div>

      {/* CTA Button */}
      <button className="w-full py-3 bg-black text-white rounded-lg flex items-center justify-center gap-2">
        <span className="h-3 w-3 rounded-full bg-green-500" /> Müraciət edin
      </button>

      {/* Altta ikonlar */}
      <div className="flex gap-4">
        <button>
          <img src={PhoneIcon} alt="phone" className="w-6 h-6" />
        </button>
        <button>
          <img src={MessageCircleIcon} alt="message" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
