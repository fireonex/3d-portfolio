import { cn } from "@/shared";
import { Link } from "react-router-dom";
import { arrow } from "@/assets/icons";

type Project = {
  name: string;
  link: string;
  theme?: string;
  iconUrl: string;
  description: string;
};
export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className={"lg:w-[400px] w-full"}>
      <div className={"block-container w-12 h-12"}>
        <div className={cn(["btn-back rounded-xl", project.theme])} />
        <div className={"btn-front rounded-xl flex justify-center items-center"}>
          <img alt={project.name} src={project.iconUrl} className={"w-1/2 h-1/2 object-contain"} />
        </div>
      </div>
      <div className={"mt-5 flex flex-col"}>
        <h4 className={"text-2xl font-poppins font-semibold"}>{project.name}</h4>
        <p className={"mt-2 text-slate-500"}>{project.description}</p>
        <div className={"mt-5 flex items-center gap-2 font-poppins"}>
          <Link
            to={project.link}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={"font-semibold text-blue-600"}
          >
            <img src={arrow} alt={"arrow"} className={"w-4 h-4 object-contain"} />
          </Link>
        </div>
      </div>
    </div>
  );
};
