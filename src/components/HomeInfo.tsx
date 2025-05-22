import {Link} from "react-router-dom";
import {arrow} from "../assets/icons";

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

const InfoBox = ({text, link, btnText}: InfoBoxProps): JSX.Element => (
    <div className="info-box">
        <p className="font-medium sm:text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} alt="arrow" className="w-4 h-4 object-contain"/>
        </Link>
    </div>
);


const renderContent: RenderContentType = {
    1: <InfoBox
        text="Worked with many companies and picked up many skills along the way"
        link="/about"
        btnText="Learn more about me"
    />,
    2: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Maria</span>👋
            <br/>
            A Software Engineer from Russia.
        </h1>
    ),
    3: (
        <InfoBox
            text="Led multiple projects to success over the years. Curious about the impact?"
            link="/contact"
            btnText="Let's talk"
        />
    ),
    4: (

        <InfoBox
            text="Need a project done or looking for a dev? I'm just a few keystrokes away"
            link="/projects"
            btnText="Learn more about me"
        />
    ),
};


export const HomeInfo = ({currentStage}: HomeInfoProps): JSX.Element | null => {
    return renderContent[currentStage] || null;
};