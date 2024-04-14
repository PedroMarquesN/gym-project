'use client'
import Image from "next/image";
import CustomButton from "@/components/CustomButton";
import {motion} from "framer-motion";
import {fadeIn} from "@/lib/variants";

const classes = [
    {
        name: 'Body Building',
        img:'/assets/img/classes/bodybuilding.jpg',
        description: 'body building é uma modalidade para atletas profissionais e campeões'
    },
    {
        name: 'Cardio',
        img:'/assets/img/classes/cardio.jpg',
        description: 'cardio é para ter uma vida saudável e ativa'
    },
    {
        name: 'Crossfit',
        img:'/assets/img/classes/crossfit.jpg',
        description: 'crossfit é para atletas que buscam superar seus limites'
    },
    {
        name: 'fitness',
        img:'/assets/img/classes/fitness.jpg',
        description: 'fitness é para quem busca uma vida saudável e ativa'
    },
]


export default function Classes() {
    return (
        <section id="class">
            <motion.div
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.2}}
                className={`grid grid-cols-1 lg:grid-cols-2`}>
                {classes.map((item, index) => {
                    return (
                        <div className={`relative w-full h-[300px] lg:h-[485px] flex flex-col
                            justify-center items-center`}
                            key={index}>
                            {/*overlay*/}
                            <div className={`bg-black/50 absolute w-full h-full top-0 z-10`}></div>
                            <Image src={item.img} alt='' fill className={`object-cover`}/>
                            {/*text and btn*/}
                            <div className={`z-30 max-w-[380px] text-center flex flex-col items-center
                                justify-center gap-4`}>
                                <motion.h3
                                    variants={fadeIn('up', 0.4)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once: false, amount: 0.2}}
                                    className={`h3 text-accent`}>
                                    {item.name}
                                </motion.h3>
                                <motion.p
                                    variants={fadeIn('up', 0.6)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once: false, amount: 0.2}}
                                    className={`text-white`}>
                                    {item.description}
                                </motion.p>
                                <motion.div
                                    variants={fadeIn('up', 0.8)}
                                    initial='hidden'
                                    whileInView={'show'}
                                    viewport={{once: false, amount: 0.2}}
                                >
                                    <CustomButton text='Ver Mais' containerStyles='w-[164px] h-[46px]' />
                                </motion.div>
                            </div>
                        </div>
                    )
                })}
            </motion.div>

        </section>
    )
}