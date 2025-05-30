import { tKeys, skills } from "@/shared";
import { useTranslation } from "react-i18next";

export const Skills = () => {
  const { t } = useTranslation();
  return (
    <div className={"py-10 flex flex-col"}>
      {/*<h3 className={"subhead-text"}>My Skills</h3>*/}
      <h3 className={"subhead-text"}>{t(tKeys.skills.title)}</h3>
      <div className={"mt-16 flex flex-wrap gap-12"}>
        {skills.map((skill, index) => (
          <div key={index} className={"block-container w-20 h-20"}>
            <div className={"btn-back rounded-xl"} />
            <div className={"btn-front rounded-xl flex justify-center items-center"}>
              <img alt={skill.name} src={skill.imageUrl} className={"w-1/2 h-1/2 object-contain"} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
