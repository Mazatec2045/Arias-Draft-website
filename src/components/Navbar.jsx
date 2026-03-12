import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = ({ isNight, setIsNight }) => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`${styles.paddingX
                } w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-background-light mc-panel" : "bg-transparent"
                }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <Link
                    to='/'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className="w-10 h-10 bg-primary border-4 border-white shadow-[4px_4px_0px_rgba(0,0,0,0.2)] flex items-center justify-center">
                        <span className="text-white text-2xl font-bold">A</span>
                    </div>
                    <h1 className="text-[#3f3f3f] text-2xl font-black leading-none tracking-tighter uppercase italic pixel-text">
                        Aria Kate's <span className="text-primary">World</span>
                    </h1>
                </Link>

                <div className="flex items-center gap-6">
                    <ul className='list-none hidden sm:flex flex-row gap-10'>
                        {navLinks.map((nav) => (
                            <li
                                key={nav.id}
                                className={`${active === nav.title ? "text-white" : "text-secondary"
                                    } hover:text-white text-[18px] font-medium cursor-pointer`}
                                onClick={() => setActive(nav.title)}
                            >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Theme Toggle */}
                    <button 
                        onClick={() => setIsNight(!isNight)}
                        className="mc-button p-2 text-2xl flex items-center justify-center w-12 h-12"
                    >
                        {isNight ? "🌙" : "☀️"}
                    </button>
                </div>

                <div className='sm:hidden flex flex-1 justify-end items-center'>
                    {/* Placeholder for menu icon */}
                    <div
                        className='w-[28px] h-[28px] object-contain cursor-pointer bg-white'
                        onClick={() => setToggle(!toggle)}
                    >M</div>

                    <div
                        className={`${!toggle ? "hidden" : "flex"
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-secondary"
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle);
                                        setActive(nav.title);
                                    }}
                                >
                                    <a href={`#${nav.id}`}>{nav.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
