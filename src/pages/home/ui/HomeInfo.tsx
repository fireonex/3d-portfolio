import { Link } from "react-router-dom";
import { arrow } from "@/assets/icons";
import { tKeys } from "@/shared";
import { useTranslation } from "react-i18next";

import { useParams } from "react-router-dom";

type Props = {
  currentStage: number;
};

type InfoBoxProps = {
  text: string;
  link: string;
  lang: string;
  btnText: string;
};

const InfoBox = ({ text, link, lang, btnText }: InfoBoxProps): JSX.Element => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={`/${lang}${link}`} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

export const HomeInfo = ({ currentStage }: Props) => {
  const { t } = useTranslation();
  const { lang = "en" } = useParams();

  const renderContent: Record<number, JSX.Element> = {
    1: (
      <InfoBox
        lang={lang}
        link="/about"
        text={t(tKeys.home.about.text)}
        btnText={t(tKeys.home.about.btnText)}
      />
    ),
    3: (
      <InfoBox
        lang={lang}
        link="/contact"
        text={t(tKeys.home.contact.text)}
        btnText={t(tKeys.home.contact.btnText)}
      />
    ),
    4: (
      <InfoBox
        lang={lang}
        link="/projects"
        text={t(tKeys.home.projects.text)}
        btnText={t(tKeys.home.projects.btnText)}
      />
    ),
    2: (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
        {t(tKeys.home.title.greetings)}
        <span className="font-semibold"> {t(tKeys.home.title.name)}</span>👋
        <br />
        {t(tKeys.home.title.profession)}
      </h1>
    ),
  };

  return renderContent[currentStage] || null;
};
