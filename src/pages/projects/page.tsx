import ProjectCard from "../../components/ProjectCard";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "./data";

export default function Jobs() {
  return (
    <section className="flex flex-col justify-center 2xl:container 2xl:mx-auto px-5 lg:px-16 gap-8 lg:gap-10 py-10 lg:py-[52px]">
      <SectionTitle title="İşlərimiz" />
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-[clamp(16px,2vw,32px)] items-center">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isActive={true}
            fixed={true}
          />
        ))}
      </div>
    </section>
  );
}
