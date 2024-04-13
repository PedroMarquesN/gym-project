'use client'


import {FaBriefcase, FaClock, FaTrophy} from "react-icons/fa";
import {ImUsers} from "react-icons/im";
import {motion, useInView} from "framer-motion";
import CountUp from "react-countup";
import {useRef} from "react";

const stats = [
    {
        number: 18,
        icon: FaBriefcase,
        title: 'Cursos de Treino',

    },
    {
        number: 487,
        icon: FaClock,
        title: 'Treinos realizados',

    },
    {
        number: 354,
        icon: ImUsers,
        title: 'Usuários felizes',
    },
    {
        number: 5,
        icon: FaTrophy,
        title: 'Prêmios internacionais',
    }
]

const statsContainer = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
            duration:0.5,
            ease: 'linear'
        }
    }
}

const statsItem = {
    hidden: {y:20, opacity: 0},
    show: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.6, 0.3, 0.8]
        }
    }

}

export default function Achievements() {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return(
        <section>
            <div className={`container mx-auto`}>
                <motion.div
                    variants={statsContainer}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.3}}
                    className={`grid grid-cols-2 md:grid-cols-4 gap-16`}>
                    {stats.map((item, index) => {
                        return (
                                <motion.div
                                    variants={statsItem}
                                    className={`flex flex-col justify-center items-center`} key={index}>
                                    {/*circle*/}
                                    <div className={`border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6`}>
                                        {/*Circle inner count number*/}
                                        <div
                                            ref={ref}
                                            className={`border border-accent/30 w-full h-full flex items-center 
                                            justify-center text-5xl rounded-full`}>
                                            {isInView && (
                                                <CountUp start={0} end={item.number} duration={6}/>
                                            )}
                                        </div>
                                    </div>
                                    {/*text*/}
                                    <div className={`flex flex-col justify-center items-center text-center`}>
                                        <item.icon className={`text-3xl mb-2`}/>
                                        <h2 className={`text-2xl font-bold`}>{item.title}</h2>
                                    </div>
                                </motion.div>
                        )
                    })}
                </motion.div>
            </div>

        </section>
    )
}