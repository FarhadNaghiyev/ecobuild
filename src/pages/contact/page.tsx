import ContactSection from "../../features/ContactSection";
import FacebookIcon from "../../assets/icons/facebook-black.svg";
export default function ContactPage() {
  return (
    <div className="flex items-center justify-center max-h-min pt-11 lg:pt-[52px]">
      <ContactSection sectionTitle="Əlaqə">
        <h2 className="text-lg lg:text-4xl font-medium text-black-5">
          Bizimlə əlaqə saxlayın – birlikdə inşa edək gələcəyi.
        </h2>
        <div className="flex items-stretch gap-4 flex-col-reverse md:flex-row">
          <div className="w-full md:max-w-1/2 rounded-lg overflow-hidden flex  max-h-[220px]">
            <img
              src="./contact.jpg"
              alt="contact page image"
              className="object-cover  w-full  max-h-[400px]"
              style={{ objectPosition: "center 80%" }}
            />
          </div>

          <div className="flex flex-col flex-1 sm:flex-row gap-4 max-h-min">
            <div className="flex flex-col max-h-min gap-4 flex-1">
              <ContactInfo
                label="Ünvanımız"
                contents={["Bakı şəhəri, Mehdi Abbasov 121"]}
              />
              <ContactInfo
                label="Əlaqə nömrəmiz"
                contents={["(+994) 70 344 40 54", "(+994) 50 344 40 54"]}
              />
            </div>

            <div className="flex flex-col gap-4 flex-1 max-h-min">
              <ContactInfo
                label="Email ünvanımız"
                contents={[
                  <a
                    key="mail"
                    href="mailto:ecobuild@gmail.com"
                    className="text-black-5 hover:underline">
                    ecobuild@gmail.com
                  </a>,
                ]}
              />
              <div className="bg-white rounded-lg flex flex-col gap-2 lg:py-3 lg:px-4 px-3 py-3">
                <p className="font-medium text-black-40 text-[1rem] lg:text-lg flex flex-nowrap">
                  Sosial Media
                </p>
                <ul className="flex  gap-3 border-[#E5E7EB] border bg-[#F7F7F7]">
                  <li className="flex flex-nowrap size-10 items-center justify-center">
                    <a href="">
                      <img src={FacebookIcon} alt="facebook icon black" />
                    </a>
                  </li>
                  <li className=" flex flex-nowrap  size-10 items-center justify-center">
                    <a href="">
                      <img src={FacebookIcon} alt="facebook icon black" />
                    </a>
                  </li>
                  <li className=" flex flex-nowrap  size-10 items-center justify-center">
                    <a href="">
                      <img src={FacebookIcon} alt="facebook icon black" />
                    </a>
                  </li>
                  <li className=" flex flex-nowrap  size-10 items-center justify-center">
                    <a href="">
                      <img src={FacebookIcon} alt="facebook icon black" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="gap-10 hidden md:flex font-medium text-black-30 text-2xl pt-8">
          <div>01</div>
          <div>BİZƏ YAZIN</div>
        </div>
      </ContactSection>
    </div>
  );
}

function ContactInfo({
  label,
  contents,
}: {
  label: string;
  contents: (string | React.ReactNode)[];
}) {
  return (
    <div className="bg-white rounded-lg gap-2 flex flex-col lg:py-3 lg:px-4 px-3 py-3">
      <p className="font-medium text-black-40 text-[1rem] lg:text-lg flex flex-nowrap">
        {label}
      </p>
      <div className="flex flex-col gap-2">
        {contents.map((item, i) => (
          <p key={i} className="text-black-5 flex flex-nowrap">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
