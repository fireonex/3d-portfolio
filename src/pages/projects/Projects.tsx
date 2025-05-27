import { projects } from "@/shared";
import { CTA } from "@/widgets";
import { ProjectCard, ProjectsPageDescription } from "./ui";

export const Projects = () => {
  return (
    <section className={"max-container"}>
      <h1 className={"head-text"}>
        My <span className={"blue-gradient_text font-semibold drop-shadow"}>Projects</span>
      </h1>
      <ProjectsPageDescription />
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
