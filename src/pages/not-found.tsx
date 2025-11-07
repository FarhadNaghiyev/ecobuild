import CTAButton from "../components/CTAButton";

export default function NotFound() {
  return (
    <div className="flex flex-col h-dvh w-full items-center">
      <div className="relative w-full h-1/3 xl:h-5/12 overflow-hidden">
        <img
          src="./not-found.png"
          alt="not found image"
          className="absolute top-0 left-1/2 -translate-x-1/2 h-full object-cover w-full object-center"
          style={{ objectPosition: "center center" }}
        />
      </div>
      <div className="flex items-center flex-col px-2.5">
        <h3 className="text-[clamp(80px,20vw,160px)] font-bold text-black-35 leading-none">
          404
        </h3>
        <div className="flex text-center items-center justify-center flex-col gap-2 lg:gap-7">
          <h4 className="text-black-35 font-medium text-[clamp(24px,10vw,40px)] leading-none">
            Səhifə tapılmadı
          </h4>
          <div className=" leading-none text-black-35 font-medium text-[clamp(1rem,0.5vw,24px)] max-w-[40ch]">
            Üzr istəyirik, axtardığınız səhifə mövcud deyil və ya silinib.
          </div>
          <CTAButton children="Ana səhifəyə qayıt" />
        </div>
      </div>
    </div>
  );
}
