import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, subtitle, icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className='w-full'
  >
    <div className="flex items-center justify-between bg-white dark:bg-tertiary p-4 rounded-xl border-2 border-primary/10 hover:border-primary/40 transition-all cursor-pointer group shadow-sm">
      <div className="flex items-center gap-4">
        <div className="bg-primary/20 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center">
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <div>
          <h3 className="font-bold text-lg text-slate-900 dark:text-white">{title}</h3>
          <p className="text-slate-500 dark:text-secondary text-sm">{subtitle}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">arrow_forward_ios</span>
      </div>
    </div>
  </motion.div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Meet Aria Kate</p>
        <h2 className={styles.sectionHeadText}>Welcome to My World! ⛏️</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hi! I&apos;m Aria Kate Vergara, a 7-year-old Minecraft explorer and DIY artist! 🎨 
        When I&apos;m not building pink castles in Minecraft, I&apos;m at my craft desk 
        making homemade squishies and stickers. I love drawing and I&apos;m 
        currently learning how to use my mouse and keyboard like a pro gamer! 
        Welcome to my world of art and blocks! ✨
      </motion.p>

      <div className='mt-20 flex flex-col gap-4 max-w-3xl'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutSection = SectionWrapper(About, "about");
export default AboutSection;
