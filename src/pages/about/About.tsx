import "react-vertical-timeline-component/style.min.css";
import { CTA } from "@/widgets";
import { Skills, WorkExperience } from "./ui";
import { useTranslation } from "react-i18next";
import { tKeys } from "@/shared";

export const About = () => {
  const { t } = useTranslation();
  return (
    <section className={"max-container"}>
      <h1 className={"head-text"}>
        {t(tKeys.about.title1)}
        <span className={"blue-gradient_text font-semibold drop-shadow"}>
          {t(tKeys.about.title2)}
        </span>
      </h1>
      <div className={"mt-5 flex flex-col gap-3 text-slate-500"}>
        <p>{t(tKeys.about.description)}</p>
      </div>
      <Skills />
      <WorkExperience />
      <hr className={"border-slate-200"} />
      <CTA />
    </section>
  );
};
