'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import {Swiper, SwiperSlide} from "swiper/react";
import {FaCheck} from "react-icons/fa";
import {MdClose} from "react-icons/md";
import {Pagination} from "swiper/modules";
import CustomButton from "@/components/CustomButton";


const membershipData = [
    {
        title: 'Standard',
        price: '100',
        benefits: [
            {
                icon: FaCheck,
                text: 'Membro incluso'
            },
            {
                icon: FaCheck,
                text: 'Acesso a todas as aulas'
            },
            {
                icon: MdClose,
                text: 'Plano de dieta'
            },
            {
                icon: FaCheck,
                text: "Dicas de saúde e vida fitness"
            },
            {
                icon: MdClose,
                text: 'Acesso à academia de segunda a sábado'
            },
            {
                icon: FaCheck,
                text: 'Acesso á todos os dias incluindo Final de semana'
            },
            {
                icon: MdClose,
                text: "Sem comodidades adicionais"
            }
        ]
    },
    {
        title: 'Ultimate',
        price: '145',
        benefits: [
            {
                icon: FaCheck,
                text: 'Membro incluso'
            },
            {
                icon: FaCheck,
                text: 'Acesso a todas as aulas'
            },
            {
                icon: FaCheck,
                text: 'Plano de dieta'
            },
            {
                icon: FaCheck,
                text: "Dicas de saúde e vida fitness"
            },
            {
                icon: FaCheck,
                text: 'Acesso à academia de segunda a sábado'
            },
            {
                icon: FaCheck,
                text: 'Acesso á todos os dias incluindo Final de semana'
            },
            {
                icon: MdClose,
                text: "Sem comodidades adicionais"
            }
        ]
    },
    {
        title: 'Professional',
        price: '210',
        benefits: [
            {
                icon: FaCheck,
                text: 'Membro incluso'
            },
            {
                icon: FaCheck,
                text: 'Acesso a todas as aulas'
            },
            {
                icon: FaCheck,
                text: 'Plano de dieta'
            },
            {
                icon: FaCheck,
                text: "Dicas de saúde e vida fitness"
            },
            {
                icon: FaCheck,
                text: 'Acesso à academia de segunda a sábado'
            },
            {
                icon: FaCheck,
                text: 'Acesso á todos os dias incluindo Final de semana'
            },
            {
                icon: FaCheck,
                text: "Sem comodidades adicionais"
            }
        ]
    }
]

export default function MemberShipSlider() {
    return (
        <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            pagination={{clickable: true}}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
            }
            }
            className={`min-h-[680px]`}
        >
            {membershipData.map((item, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className={`border border-accent hover:bg-primary-300/80 transition-all
                            duration-300 w-full max-w-sm xl:max-w-none mx-auto
                        `}>
                            <div className={`py-5 px-[60px] border-b border-accent`}>
                                <h4 className={`h4`}>{item.title}</h4>
                            </div>
                            {/* benefits */}
                            <div className={`py-[30px] px-[60px]`}>
                                <ul className={`flex flex-col gap-5 mb-7`}>
                                    {item.benefits.map((item, index) => {
                                        return (
                                            <li key={index} className={`flex items-center gap-2`}>
                                                <item.icon className={`text-accent text-lg`} />
                                                <span>
                                                    {item.text}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                                {/* price and button */}
                                <p className={`text-accent mb-8 flex gap-1 items-center`}>
                                    <sup className={`text-4xl`}>$</sup>
                                    <strong className={`text-6xl`}>{item.price}</strong>
                                    <em className={`self-end text-2xl`}>/Mês</em>
                                </p>
                                <CustomButton text='Compre Agora' containerStyles='w-[196px] h-[62px]' />
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}