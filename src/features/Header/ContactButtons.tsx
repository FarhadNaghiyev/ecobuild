import MessageCircleIcon from "../../assets/icons/message-circle.svg";
import PhoneIcon from "../../assets/icons/phone.svg";

import { motion } from "framer-motion";

function ContactButtons() {
  return (
    <motion.div
      className="custom-flex-center gap-5.5 h-6"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}>
      <button className="rounded-lg">
        <img src={PhoneIcon} alt="phone" className="size-6" />
      </button>
      <div className="h-full w-[0.01rem] bg-primary-color"></div>
      <button className="rounded-lg">
        <img src={MessageCircleIcon} alt="message" className="size-6" />
      </button>
    </motion.div>
  );
}

export default ContactButtons;
