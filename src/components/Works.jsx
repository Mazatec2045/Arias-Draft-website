import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    source_code_link,
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                transitionSpeed={450}
                className='mc-panel p-2 sm:w-[360px] w-full bg-[#c6c6c6]'
            >
                {/* Minecraft Item Frame Style Container */}
                <div className='relative w-full h-[230px] bg-[#8b8b8b] border-4 border-[#373737] shadow-[inset_-4px_-4px_0px_rgba(0,0,0,0.2)] flex items-center justify-center overflow-hidden group'>
                    <div className="text-6xl group-hover:scale-110 transition-transform">
                        {index === 0 ? "🎨" : "☁️"}
                    </div>
                    
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='mc-button w-10 h-10 flex justify-center items-center cursor-pointer bg-[#373737] border-white/20'
                        >
                            <span className="text-white text-xs font-bold">VIEW</span>
                        </div>
                    </div>
                </div>

                <div className='mt-5 px-2 pb-2'>
                    <h3 className='text-[#373737] font-black text-[24px] pixel-text'>{name}</h3>
                    <p className='mt-2 text-[#555555] text-[16px] leading-tight font-bold'>{description}</p>
                    
                    <div className='mt-4 flex flex-wrap gap-2'>
                        {tags.map((tag) => (
                            <p
                                key={`${name}-${tag.name}`}
                                className={`text-[14px] font-black uppercase ${tag.color}`}
                            >
                                #{tag.name}
                            </p>
                        ))}
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcases my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories and live demos in it. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

const WorksSection = SectionWrapper(Works, "");
export default WorksSection;
