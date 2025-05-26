import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

type InfoBoxProps = {
  text: string;
  link: string;
  btnText: string;
};

type RenderContentType = {
  [key: number]: JSX.Element;
};

type HomeInfoProps = {
  currentStage: number;
};

const InfoBox = ({ text, link, btnText }: InfoBoxProps): JSX.Element => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent: RenderContentType = {
  1: (
    <InfoBox
      link="/about"
      btnText="Learn more about me"
      text="Worked with many companies and picked up many skills along the way"
    />
  ),
  3: (
    <InfoBox
      link="/contact"
      btnText="Let's talk"
      text="Led multiple projects to success over the years. Curious about the impact?"
    />
  ),
  4: (
    <InfoBox
      link="/projects"
      btnText="Learn more about me"
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
    />
  ),
  2: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Maria</span>👋
      <br />A Software Engineer from Russia.
    </h1>
  ),
};

export const HomeInfo = ({ currentStage }: HomeInfoProps): null | JSX.Element => {
  return renderContent[currentStage] || null;
};
