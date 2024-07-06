import React, { useState } from 'react'
import '../3-Main/Main.module.css'
import card1 from '../../assets/Reactportfoliowebsite/1.jpg'
import card2 from '../../assets/Reactportfoliowebsite/2.jpg'
import card3 from '../../assets/Reactportfoliowebsite/3.jpg'
import card4 from '../../assets/Reactportfoliowebsite/4.jpg'
import card5 from '../../assets/Reactportfoliowebsite/5.jpg'
import card6 from '../../assets/Reactportfoliowebsite/6.jpg'
import { motion, AnimatePresence } from 'framer-motion'


export default function Main() {

    const [showactive, setShowActive] = useState('1')
    let projects = [
        { id: '1', category: 'react', img: card1, },
        { id: '2', category: 'javascript', img: card2, },
        { id: '3', category: 'html', img: card3, },
        { id: '4', category: 'react', img: card4, },
        { id: '5', category: 'next', img: card5, },
        { id: '6', category: 'next', img: card6, },
    ]
    const [allProjects, setAllProjects] = useState(projects)

    function allProject(active, cate) {
        setShowActive(active);
        setAllProjects(cate);
    }

    function filterProject(active, cate) {
        setShowActive(active);
        let categorys = projects.filter((myCate) => myCate.category == cate);
        setAllProjects(categorys);
    }

    return (
        <section className='flex flex-wrap md:p-16 lg:p-10 p-2'>
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full xl:w-1/4'>
                <ul className='text-center font-semibold flex flex-wrap justify-between'>
                    <li onClick={() => allProject('1', projects)} className={`${showactive === '1' ? 'bg-slate-700 text-slate-300' : ''} w-full cursor-pointer py-3 dark:bg-[#252529] rounded-2xl mb-2 border border-[#36363b] hover:tracking-widest hover:text-[#2bd5b6] duration-200`}>All Projects</li>
                    <li onClick={() => filterProject('2', "javascript")} className={`${showactive === '2' ? 'bg-slate-700 text-slate-300' : ''} w-full cursor-pointer md:w-5/12 xl:w-full py-3 dark:bg-[#252529] rounded-2xl mb-2 border border-[#36363b] hover:tracking-widest hover:text-[#2bd5b6] duration-200`}>Java Script</li>
                    <li onClick={() => filterProject('3', "html")} className={`${showactive === '3' ? 'bg-slate-700 text-slate-300' : ''} w-full cursor-pointer md:w-5/12 xl:w-full py-3 dark:bg-[#252529] rounded-2xl mb-2 border border-[#36363b] hover:tracking-widest hover:text-[#2bd5b6] duration-200`}>HTML & CSS</li>
                    <li onClick={() => filterProject('4', "react")} className={`${showactive === '4' ? 'bg-slate-700 text-slate-300' : ''} w-full cursor-pointer md:w-5/12 xl:w-full py-3 dark:bg-[#252529] rounded-2xl mb-2 border border-[#36363b] hover:tracking-widest hover:text-[#2bd5b6] duration-200`}>React</li>
                    <li onClick={() => filterProject('5', "next")} className={`${showactive === '5' ? 'bg-slate-700 text-slate-300' : ''} w-full cursor-pointer md:w-5/12 xl:w-full py-3 dark:bg-[#252529] rounded-2xl mb-2 border border-[#36363b] hover:tracking-widest hover:text-[#2bd5b6] duration-200`}>Next</li>
                </ul>
            </motion.div>
            <AnimatePresence>
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='w-full xl:w-3/4 flex flex-wrap gap-y-5'>
                    {allProjects.map((card, index) =>
                        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='px-3 w-full lg:w-1/2 2xl:w-1/3'>
                            <motion.div whileHover={{ rotate: '-5deg', scale: 1.05, borderColor: '#36363b' }} className='border border-[#666667] rounded-lg'>
                                <img className='w-full rounded-lg' src={card.img} alt="" />
                                <div className='p-3 bg-[#f7f7f9] dark:bg-[#252529]'>
                                    <h2 className='text-2xl text-blackdark: dark:text-white'>Lorem, ipsum dolor.</h2>
                                    <p className='my-3 text-slate-500 text-md border-b border-[#6666676b]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ad?</p>
                                    <ul className='flex gap-5'>
                                        <motion.li whileHover={{ rotate: '360deg', scale: 1.1, color: '#2bd5b6' }} transition={{ duration: 1 }}><a target='black' href="https://github.com/Aminoo0"><i className="fa-brands fa-github text-xl cursor-pointer"></i></a></motion.li>
                                        <motion.li whileHover={{ rotate: '360deg', scale: 1.1, color: '#2bd5b6' }} transition={{ duration: 1 }}><a target='black' href='#' ><i className="fa-brands fa-linkedin text-xl cursor-pointer"></i></a></motion.li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </section >
    )
}
