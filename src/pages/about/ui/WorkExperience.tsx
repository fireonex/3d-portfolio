// @flow
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { experiences } from "../../../shared";

export const WorkExperience = () => {
  return (
    <div className={"py-16"}>
      <h3 className={"subhead-text"}>Work Experience</h3>
      <div className={"mt-5 flex flex-col gap-3 text-slate-500"}>
        <p>
          I&#39;ve collaborated with several companies, honing my skills and working alongside
          talented professionals. Here&#39;s a quick overview:
        </p>
      </div>
      <div className={"mt-12 flex"}>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              date={experience.date}
              key={experience.company_name}
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
                <h3 className={"text-black text-xl font-poppins font-semibold"}>
                  {experience.title}
                </h3>
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
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};