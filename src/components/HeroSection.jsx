import { HERO_CONTENT } from '../constants';
import profilePic from '../assets/Hatimmeftahi.png';
import { motion } from 'framer-motion';
import { useState } from 'react';

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
})

const HeroSection = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap justify-center"> {/* Centering the content */}
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-center"> {/* Centering the text */}
                            Hatim Meftahi</motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500
                            to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center"> {/* Centering the text */}
                            Développeur web full stack
                        </motion.span>
                        <motion.p variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 font-light tracking-tighter text-center'>{HERO_CONTENT}</motion.p> {/* Centering the text */}
                    </div>
                </div>
                {/* <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <a href={profilePic} download="Hatimmeftahi.png">
                            <motion.img
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                src={profilePic} alt="Hatim Meftahi" />
                        </a>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default HeroSection;
