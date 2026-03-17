import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = ({ isNight }) => {
    return (
        <section className={`relative w-full h-screen mx-auto ${isNight ? 'mc-night-bg' : 'mc-grid-bg'} transition-colors duration-1000`}>
            <div
                className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <div className='flex flex-col justify-center items-center mt-5'>
                    <div className='w-5 h-5 rounded-full bg-[#ee2b8c]' />
                    <div className='w-1 sm:h-80 h-40' style={{background: 'linear-gradient(180deg, #ee2b8c 0%, rgba(238,43,140,0) 100%)'}} />
                </div>

                <div className='max-w-[70%] sm:max-w-none'>
                    <h1 className={`${styles.heroHeadText} text-white`}>
                        Hi, I&apos;m <br className='block sm:hidden'/><span className='text-[#ee2b8c] pixel-text'>Aria Kate</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-[#c6c6c6] pixel-text`}>
                        I build Minecraft castles by day <br className='sm:block hidden' />
                        and craft DIY squishies by night! ✂️💖
                    </p>
                </div>
            </div>

            {/* Pink Axolotl Placeholder */}
            <div className='absolute sm:right-10 right-2 top-[65%] sm:top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 sm:gap-2'>
                <div className={`text-[80px] sm:text-[120px] animate-bounce transition-all duration-1000 ${isNight ? 'brightness-50 drop-shadow-[0_0_30px_rgba(238,43,140,0.5)]' : ''}`}>
                    {isNight ? "👾" : "🦎"}
                </div>
                <p className='text-[#ee2b8c] font-bold pixel-text text-sm sm:text-lg'>
                    {isNight ? "Night Creature" : "Pink Axolotl"}
                </p>
            </div>

            <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
                <a href='#about'>
                    <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#ee2b8c] flex justify-center items-start p-2'>
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            className='w-3 h-3 rounded-full bg-[#ee2b8c] mb-1'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
