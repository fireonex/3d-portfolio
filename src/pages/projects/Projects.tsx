import { CTA } from "@/widgets";
import { ProjectCard } from "./ui";
import { useTranslation } from "react-i18next";
import { tKeys, getProjects } from "@/shared";

export const Projects = () => {
  const { t } = useTranslation();
  const projects = getProjects(t);
  return (
    <section className={"max-container"}>
      <h1 className={"head-text"}>
        {t(tKeys.projectsExperience.title1)}
        <span className={"blue-gradient_text font-semibold drop-shadow"}>
          {t(tKeys.projectsExperience.title2)}
        </span>
      </h1>
      <div className={"mt-5 flex flex-col gap-3 text-slate-500"}>
        <p className="text-slate-500 mt-2 leading-relaxed">
          {t(tKeys.projectsExperience.description)}
        </p>
      </div>
      <div className={"flex flex-wrap my-20 gap-16"}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </div>
      <hr className={"border-slate-200"} />
      <CTA />
    </section>
  );
};
