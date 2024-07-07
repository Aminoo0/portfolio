import React, { useState } from 'react'
import '../2-Hero/Hero.module.css'
import mainPhoto from '../../assets/portrait.webp'
import { motion } from 'framer-motion'
import Lottie from "lottie-react";
import developer from "../../../public/developer.json";


export default function Hero() {

    const [mainText, setMainText] = useState(
        `Front-End development looking for a challenging opportunity in the field of Front-end development where I can utilize my skills`
    )

    let pvariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .03
            }
        }
    }
    let svariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }


    return (
        <section className='flex flex-wrap mt-20 md:p-16 lg:p-10 p-2'>
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-3/5'>
                <div className='flex items-end mb-10'>
                    <img className='w-20 rounded-full border border-[#414148]' src={mainPhoto} alt="" />
                    <i className="fa-solid fa-check"></i>
                </div>
                <motion.h1 variants={pvariants} initial='hidden' whileInView='visible' transition={{ duration: 2 }} className='text-3xl'>{mainText.split('').map((chr, index) => <motion.span key={index} variants={svariants}>{chr}</motion.span>)}</motion.h1>
                <p className='text-slate-800 dark:text-slate-400 my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore sunt eos neque distinctio exercitationem modi.</p>
                <ul className='flex gap-5'>
                    <motion.li whileHover={{ rotate: '360deg', scale: 1.1, color: '#2bd5b6' }} transition={{ duration: 1 }}><a target='black' href="https://github.com/Aminoo0"><i className="fa-brands fa-github text-2xl cursor-pointer text-slate-900 dark:text-slate-100"></i></a></motion.li>
                    <motion.li whileHover={{ rotate: '360deg', scale: 1.1, color: '#2bd5b6' }} transition={{ duration: 1 }}><a target='black' href='#' ><i className="fa-brands fa-linkedin text-2xl cursor-pointer text-slate-900 dark:text-slate-100"></i></a></motion.li>
                </ul>
            </motion.div>
            <motion.div drag dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-2/5'>
                <Lottie animationData={developer} />
            </motion.div>
        </section>
    )
}
