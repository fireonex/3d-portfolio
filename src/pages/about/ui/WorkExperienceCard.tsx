import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ExperienceType } from "@/shared";

export const WorkExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      contentStyle={{
        boxShadow: "none",
        borderBottom: "8px",
        borderStyle: "solid",
        borderColor: experience.iconBg,
      }}
      icon={
        <div className={"flex justify-center items-center w-full h-full"}>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={"w-[60%] h-[60%] object-contain"}
          />
        </div>
      }
    >
      <div>
        <h3 className={"text-black text-xl font-poppins font-semibold"}>{experience.title}</h3>
        <p style={{ margin: 0 }} className={"text-black-500 font-medium font-base"}>
          {experience.company_name}
        </p>
      </div>
      <ul className={"my-5 list-disc ml-5 space-y-2"}>
        {experience.points.map((point, index) => (
          <li key={index} className={"text-black-500/50 font-normal pl-1 text-sm"}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
