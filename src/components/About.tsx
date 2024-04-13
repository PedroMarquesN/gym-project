'use client'
import {FaDumbbell, FaUsers} from "react-icons/fa";
import {IoIosPricetags} from "react-icons/io";
import Achievements from "@/components/Achievements";
import {motion} from "framer-motion";
import {fadeIn} from "@/lib/variants";

// @ts-ignore
const featured = [
    {
        icon: <FaUsers/>,
        title: "Treinadores qualificados",
        subtitle: "Treinadores qualificados e com experiência"
    },
    {
        icon: <FaDumbbell/>,
        title: "Equipamentos modernos",
        subtitle: "Equipamentos modernos e de última geração"
    },
    {
        icon: <IoIosPricetags />,
        title: "Preços acessíveis",
        subtitle: 'Preços acessíveis para todos os bolsos',
    }
];

export default function About() {
    return (
        <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id='about'>
            <div className="container mx-auto">
                <div className={`flex flex-col items-center gap-2 mb-8`}>
                    <motion.h1
                        variants={fadeIn('up',0.4)}
                        initial='hidden'
                        whileInView={'show'}
                        viewport={{once: false, amount: 0.2}}
                        className={`text-black text-center`}>Sobre Nós</motion.h1>

                        <motion.p
                            variants={fadeIn('up',0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false, amount: 0.2}}
                            className={`max-w-[600px] mx-auto text-center`}>
                            A Academia Fitness é um espaço dedicado ao treino e à saúde. Temos uma equipe de treinadores
                            qualificados e equipamentos modernos para te ajudar a alcançar os teus objetivos.
                        </motion.p>
                </div>
            </div>

            {/*featured items*/}
            <motion.div
                variants={fadeIn('up',0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className={` grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-16`}>
                {featured.map((item, index) => {
                    return (
                        <div className={`flex flex-col justify-center items-center gap-4 border p-10`} key={index}>
                            <div className={`text-4xl bg-primary-300 text-white w-[80px] h-[80px]
                                rounded-full flex items-center justify-center
                            `}>{item.icon}</div>
                            <div className={` flex flex-col justify-center items-center gap-2 text-center`}>
                                <h2 className={`font-bold text-accent`}>{item.title}</h2>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    )
                })}
            </motion.div>
            {/*achievements*/}

            <motion.div
                variants={fadeIn('up',1)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
            >
                <Achievements />
            </motion.div>


        </section>
    )
}