import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div 
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
            className="relative flex flex-col md:flex-row gap-10 mb-20 last:mb-0"
        >
            {/* Timeline Line & Dot */}
            <div className="hidden md:flex flex-col items-center">
                <div className="w-10 h-10 mc-panel flex items-center justify-center bg-white z-10">
                    <span className="text-black font-bold text-xl">{experience.company_name[0]}</span>
                </div>
                <div className="w-2 h-full bg-[#373737] border-x-2 border-white/20" />
            </div>

            {/* Content Card */}
            <div className="flex-1 mc-panel p-8 bg-[#1d1836]/80 backdrop-blur-sm hover:translate-x-2 transition-transform cursor-default">
                <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                        <h3 className='text-white text-[28px] font-black pixel-text'>{experience.title}</h3>
                        <p className='text-[#ee2b8c] text-[18px] font-bold mt-1 uppercase'>{experience.company_name}</p>
                    </div>
                    <div className="mc-button bg-[#373737] text-white border-white/40 cursor-default">
                        {experience.date}
                    </div>
                </div>

                <ul className='mt-8 list-none space-y-4'>
                    {experience.points.map((point, idx) => (
                        <li key={`point-${idx}`} className='text-white-100 text-[18px] flex gap-3'>
                            <span className="text-[#ee2b8c]">⛏️</span>
                            <span className="leading-tight">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My Journey in the Overworld
                </p>
                <h2 className={`${styles.sectionHeadText} text-center mb-16`}>
                    Adventure Log.
                </h2>
            </motion.div>

            <div className='max-w-4xl mx-auto'>
                {experiences.map((experience, index) => (
                    <ExperienceCard 
                        key={`experience-${index}`} 
                        index={index} 
                        experience={experience} 
                    />
                ))}
            </div>
        </>
    );
};

const ExperienceSection = SectionWrapper(Experience, "work");
export default ExperienceSection;
