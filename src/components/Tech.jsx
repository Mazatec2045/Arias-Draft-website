import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>
                    My Resource Pack
                </p>
                <h2 className={`${styles.sectionHeadText} text-center mb-10`}>
                    Inventory.
                </h2>
            </motion.div>

            <div className='flex flex-row flex-wrap justify-center gap-2 p-4 bg-[#c6c6c6] mc-panel max-w-2xl mx-auto'>
                {technologies.map((technology, index) => (
                    <div 
                        key={technology.name}
                        className='mc-slot flex flex-col items-center justify-center w-20 h-20 cursor-pointer group relative overflow-hidden'
                        title={technology.name}
                    >
                        <div className='text-3xl group-hover:scale-125 transition-transform duration-200'>
                            {index === 0 ? "🖍️" : index === 1 ? "☁️" : index === 2 ? "✨" : index === 3 ? "✏️" : index === 4 ? "🎀" : index === 5 ? "🖱️" : "✂️"}
                        </div>
                        
                        <div className="absolute bottom-1 right-1 bg-black/40 px-1 leading-none">
                            <span className="text-white text-[12px] font-bold">64</span>
                        </div>

                        {/* Hover Tooltip */}
                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1d1836] border-2 border-[#ee2b8c] px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 whitespace-nowrap">
                            <p className="text-[#ee2b8c] text-sm font-bold">{technology.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-center mt-4 text-secondary text-sm italic">Press 1-9 to select (visual only)</p>
        </>
    );
};

const TechSection = SectionWrapper(Tech, "");
export default TechSection;
