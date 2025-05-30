import { VerticalTimeline } from "react-vertical-timeline-component";
import { tKeys, getExperiences } from "@/shared";
import { useTranslation } from "react-i18next";
import { WorkExperienceCard } from "./WorkExperienceCard";

export const WorkExperience = () => {
  const { t } = useTranslation();
  const experiences = getExperiences(t);
  return (
    <div className={"py-16"}>
      <h3 className={"subhead-text"}>{t(tKeys.workExperience.title)}</h3>
      <div className={"mt-5 flex flex-col gap-3 text-slate-500"}>
        <p>{t(tKeys.workExperience.description)}</p>
      </div>
      <div className={"mt-12 flex"}>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <WorkExperienceCard experience={experience} key={experience.company_name} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
