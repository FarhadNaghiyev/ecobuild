import CTAButton from "../../components/CTAButton";

function HeroSection() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row items-start gap-6">
        <h1 className="m-0 p-0 flex-3 font-medium text-[clamp(1.25rem,5vw,3rem)] min-w-max">
          Müasir sənayə binallarının
          <br />
          <span className="text-primary-color">
            tikintisinin innovativ həlli
          </span>
        </h1>

        <p className="m-0 p-0 flex-2 font-normal text-white-5 text-[clamp(0.875,5vw,1.125rem)] ">
          Torpaq işlərindən təmələ qədər – hər mərhələdə dəqiqlik, təhlükəsizlik
          və ekoloji məsuliyyət prinsiplərini qoruyuruq.
        </p>

        <CTAButton styleClasses="flex md:hidden" />
      </div>
      <img
        className="rounded-3xl w-full"
        src="./hero.webp"
        alt="hero section image"
      />
    </div>
  );
}

export default HeroSection;
