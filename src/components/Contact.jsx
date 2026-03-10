import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            alert("Thank you! Your message has been sent!");
            setForm({ name: "", email: "", message: "" });
        }, 1000);
    };

    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] mc-panel p-8'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Drop a Message in the Chest.</h3>

                <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name (Username)</span>
                        <input
                            type='text' name='name' value={form.name} onChange={handleChange}
                            placeholder="Steve_123"
                            className='mc-slot w-full px-4 py-3 text-white outline-none'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <input
                            type='email' name='email' value={form.email} onChange={handleChange}
                            placeholder="your@email.com"
                            className='mc-slot w-full px-4 py-3 text-white outline-none'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Scroll Message</span>
                        <textarea
                            rows={7} name='message' value={form.message} onChange={handleChange}
                            placeholder='Hello Aria! I love your pink castle...'
                            className='mc-slot w-full p-4 text-white outline-none resize-none'
                        />
                    </label>
                    <button type='submit' className='mc-button w-full py-4 text-xl font-black uppercase tracking-widest'>
                        {loading ? "Sending..." : "Craft Message 📜"}
                    </button>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] flex items-center justify-center'
            >
                {/* Minecraft Chest decoration instead of 3D Earth */}
                <div className='flex flex-col items-center gap-4'>
                    <div className='relative w-48 h-48 bg-[#866043] border-4 border-[#373737] shadow-[inset_-8px_-8px_0px_#5d4037] flex items-center justify-center'>
                        <div className='w-8 h-16 bg-[#c6c6c6] border-2 border-[#373737]' />
                    </div>
                    <p className='text-[#ee2b8c] font-bold pixel-text text-xl'>Message Chest</p>
                    <p className='text-[#c6c6c6] text-center text-sm'>Leave a message for Aria!</p>
                </div>
            </motion.div>
        </div>
    );
};

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
