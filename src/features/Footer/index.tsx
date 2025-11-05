import PhoneIcon from "../../assets/icons/phone-white.svg";
import MailIcon from "../../assets/icons/mail.svg";
import LocationIcon from "../../assets/icons/location.svg";
import FacebookIcon from "../../assets/icons/facebook.svg";
// import TwitterIcon from "../../assets/icons/twitter.svg";
// import LinkedinIcon from "../../assets/icons/linkedin.svg";
// import InstagramIcon from "../../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="w-full px-[clamp(1rem,4vw,4rem)] py-[clamp(1rem,1vw,2rem)] bg-black-25 text-white">
      <div className="flex flex-col md:flex-row justify-between gap-[clamp(2rem,5vw,4rem)]">
        <div className="flex flex-col gap-4 max-w-[clamp(12rem,30vw,20rem)]">
          <img
            src="/logo-desktop-white.webp"
            srcSet="/logo-mobile-white.webp 128w,/logo-desktop-white.webp 198w"
            sizes="(max-width: 375px) 128px, (max-width: 1024px) 198px"
            alt="EcoBuild logo white"
            className="w-[clamp(8rem,10vw,12.5rem)] h-[clamp(2.5rem,10vw,4rem)]"
          />
          <p className="text-[clamp(0.75rem,1.2vw,0.875rem)] leading-relaxed">
            İnnovativ və dayanıqlı tikinti halları ilə gələcəyi inşa edirik.
          </p>
        </div>

        <div className="flex flex-col gap-3 min-w-[clamp(10rem,25vw,18rem)]">
          <h3 className="font-semibold text-[clamp(1rem,1.5vw,1.25rem)] mb-2">
            Əlaqə
          </h3>
          <ul className="flex flex-col gap-2 text-[clamp(0.8rem,1vw,0.9rem)]">
            <li className="flex items-center gap-2">
              <img
                src={LocationIcon}
                className="w-5 h-5 cursor-pointer  hover:opacity-70"
              />
              Babək Prospekti 10E, Rusel Plaza, 11-ci mərtəbə
            </li>
            <li className="flex items-center gap-2">
              <img
                src={PhoneIcon}
                className="w-5 h-5 cursor-pointer  hover:opacity-70"
              />
              (+994) 101105678
            </li>
            <li className="flex items-center gap-2">
              <img
                src={PhoneIcon}
                className="w-5 h-5 cursor-pointer  hover:opacity-70"
              />
              (+994) 501015678
            </li>
            <li className="flex items-center gap-2">
              <img
                src={MailIcon}
                className="w-5 h-5 cursor-pointer  hover:opacity-70"
              />
              ceo@ecobuild.az
            </li>
            <li className="flex items-center gap-2">
              <img
                src={MailIcon}
                className="w-5 h-5 cursor-pointer  hover:opacity-70"
              />
              info@ecobuild.az
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-[clamp(1rem,1.5vw,1.25rem)] mb-2">
            Sosial media
          </h3>
          <ul className="flex flex-col gap-2 text-[clamp(0.8rem,1vw,0.9rem)]">
            <li>
              <a href="#">Haqqımızda</a>
            </li>
            <li>
              <a href="#">Xidmətlərimiz</a>
            </li>
            <li>
              <a href="#">İşlərimiz</a>
            </li>
            <li>
              <a href="#">Əlaqə</a>
            </li>
          </ul>

          <div className="flex gap-3 mt-4 ">
            <a
              href=""
              className="bg-black-20 size-10 rounded-lg custom-flex-center">
              <img
                src={FacebookIcon}
                className="w-5 h-5 cursor-pointer  hover:opacity-70"
              />
            </a>
            <a
              href=""
              className="bg-black-20 size-10 rounded-lg custom-flex-center">
              <img
                src={FacebookIcon}
                className="w-5 h-5 cursor-pointer  hover:opacity-70"
              />
            </a>
            <a
              href=""
              className="bg-black-20 size-10 rounded-lg custom-flex-center">
              <img
                src={FacebookIcon}
                className="w-5 h-5 cursor-pointer  hover:opacity-70"
              />
            </a>
            <a
              href=""
              className="bg-black-20 size-10 rounded-lg custom-flex-center">
              <img
                src={FacebookIcon}
                className="w-5 h-5 cursor-pointer  hover:opacity-70"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white-10 mt-[clamp(2rem,4vw,3rem)] pt-4  text-[clamp(0.7rem,1vw,0.85rem)] opacity-70">
        © 2025 ECO BUILD QLD - Bütün hüquqlar qorunur
      </div>
    </footer>
  );
};

export default Footer;
