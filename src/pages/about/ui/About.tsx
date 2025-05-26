import "react-vertical-timeline-component/style.min.css";
import { CTA } from "../../../components";
import { WorkExperience } from "./WorkExperience.tsx";
import { Skills } from "./Skills.tsx";

export const About = () => {
  return (
    <section className={"max-container"}>
      <h1 className={"head-text"}>
        Hello, I&#39;m <span className={"blue-gradient_text font-semibold drop-shadow"}>Maria</span>
      </h1>
      <div className={"mt-5 flex flex-col gap-3 text-slate-500"}>
        <p>
          Frontend developer based in Russia, specializing in creating high-quality and efficient
          applications with attention to detail, visual appeal, and user experience.
        </p>
      </div>
      <Skills/>
      <WorkExperience/>
      <hr className={"border-slate-200"} />
      <CTA />
    </section>
  );
};
