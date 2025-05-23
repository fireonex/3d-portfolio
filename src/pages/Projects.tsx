import {projects} from "../shared/constants";
import {cn} from "../shared";
import {Link} from "react-router-dom";
import {arrow} from "../assets/icons";
import {CTA} from "../components";

export const Projects = () => {
    return (
        <section className={'max-container'}>
            <h1 className={'head-text'}>My <span
                className={'blue-gradient_text font-semibold drop-shadow'}>Projects</span>
            </h1>
            <div className={'mt-5 flex flex-col gap-3 text-slate-500'}>
                <p className='text-slate-500 mt-2 leading-relaxed'>
                    I've worked on a range of projects over the years, and these are some of my personal favorites.
                    They're open-source, so if something sparks your interest, you’re welcome to check out the code or
                    even jump in and help improve it. Always happy to see fellow devs get involved!
                </p>
            </div>
            <div className={'flex flex-wrap my-20 gap-16'}>
                {projects.map(project => (
                    <div className={'lg:w-[400px] w-full'} key={project.name}>
                        <div className={'block-container w-12 h-12'}>
                            <div className={cn(['btn-back rounded-xl', project.theme])}/>
                            <div className={'btn-front rounded-xl flex justify-center items-center'}>
                                <img src={project.iconUrl} alt={project.name} className={'w-1/2 h-1/2 object-contain'}/>
                            </div>
                        </div>
                        <div className={'mt-5 flex flex-col'}>
                            <h4 className={'text-2xl font-poppins font-semibold'}>
                                {project.name}
                            </h4>
                            <p className={'mt-2 text-slate-500'}>
                                {project.description}
                            </p>
                            <div className={'mt-5 flex items-center gap-2 font-poppins'}>
                                <Link to={project.link} target={'_blank'} rel={'noopener noreferrer'}
                                      className={'font-semibold text-blue-600'}>
                                    <img src={arrow} alt={"arrow"} className={'w-4 h-4 object-contain'}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className={'border-slate-200'}/>
            <CTA/>
        </section>
    );
};