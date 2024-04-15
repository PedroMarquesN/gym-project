'use client'
import {motion} from "framer-motion";
import {FaFacebook, FaLinkedinIn, FaTwitter, FaYoutube} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";
import {fadeIn} from "@/lib/variants";

const trainerData = [
    {
        image:'/assets/img/trainers/david.jpg',
        name:'David Williams',
        role:'Personal Trainer',
        description:'David é um profissional de educação física com mais de 10 anos de experiência. Ele é especialista em treinamento funcional e musculação.',
        social:[
            {icon:FaFacebook, href:'https://www.facebook.com'},
            {icon:FaYoutube, href:'https://www.youtube.com'},
            {icon:FaTwitter, href:'https://www.twitter.com'},
            {icon:FaLinkedinIn, href:'https://www.linkedin.com'}
        ]
    },
    {
        image:'/assets/img/trainers/rosy.jpg',
        name:'Rosy Lee',
        role:'Personal Trainer',
        description:'Rosy é uma profissional de educação física com mais de 10 anos de experiência. Ela é especialista em treinamento funcional e musculação.',
        social:[
            {icon:FaFacebook, href:'https://www.facebook.com'},
            {icon:FaYoutube, href:'https://www.youtube.com'},
            {icon:FaTwitter, href:'https://www.twitter.com'},
            {icon:FaLinkedinIn, href:'https://www.linkedin.com'}
        ]
    },
    {
        image:'/assets/img/trainers/matt.jpg',
        name:'Matt Johnson',
        role:'Personal Trainer',
        description:'Matt é formado em educação física e tem mais de 10 anos de experiência. Ele é especialista em treinamento funcional e musculação.',
        social:[
            {icon:FaFacebook, href:'https://www.facebook.com'},
            {icon:FaYoutube, href:'https://www.youtube.com'},
            {icon:FaTwitter, href:'https://www.twitter.com'},
            {icon:FaLinkedinIn, href:'https://www.linkedin.com'}
        ]
    },
    {
        image:'/assets/img/trainers/sofia.jpg',
        name:'Sofia Smith',
        role:'Personal Trainer',
        description:'Professora de luta, Torneio de campeã de boxe, Sofia é uma profissional de educação física .',
        social:[
            {icon:FaFacebook, href:'https://www.facebook.com'},
            {icon:FaYoutube, href:'https://www.youtube.com'},
            {icon:FaTwitter, href:'https://www.twitter.com'},
            {icon:FaLinkedinIn, href:'https://www.linkedin.com'}
        ]
    }
]

export default function Team() {
    return (
        <section className="py-12 xl:h-[110vh]" id='team'>
            <div className={`container mx-auto h-full flex flex-col items-center justify-center`}>
                <motion.h2
                    variants={fadeIn('up',0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.2}}
                    className={`text-center mb-6 uppercase font-bold`}>Nossos Treinadores</motion.h2>
                {/** Trainer */}
                <motion.div
                    variants={fadeIn('up',0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.2}}
                    className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12`}>
                    {trainerData.map((trainer, index) => {
                        return (
                            <div
                                className={`flex flex-col items-center text-center`}
                                key={index}>
                                {/** Image */}
                                <div className={`relative w-[320px] h-[360px] mx-auto mb-4`}>
                                    <Image src={trainer.image} fill alt='Imagem do treinador' />
                                </div>
                                {/** Name */}
                                <h4 className={`h4 mb-2`}>{trainer.name}</h4>
                                {/** Role */}
                                <p className={`uppercase text-xs tracking-[3px] mb-2`}>{trainer.role}</p>
                                {/** description */}
                                <p className={`mb-6 max-w-[320px] mx-auto`}>{trainer.description}</p>
                                {/** Socials */}
                                <div className={`flex gap-12 justify-center`}>
                                    {trainer.social.map((social, index) => {
                                        return (
                                            <div key={index}>
                                                <Link
                                                    className={`hover:text-accent transition-all`}
                                                    href={social.href} >
                                                    <social.icon className={`text-2xl cursor-pointer`} />
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
                {/** Btn */}
                <motion.div
                    variants={fadeIn('up',0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once: false, amount: 0.2}}
                >
                    <CustomButton text='Veja Todos Treinadores' containerStyles='w-[196px] h-[62px]'/>
                </motion.div>
            </div>
        </section>
    )
}