'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import CustomButton from "@/components/CustomButton";
import SwiperNavButtons from "@/components/SwiperNavButtons";
import {motion} from "framer-motion";
import {fadeIn} from "@/lib/variants";

export default function HeroSlider() {
    return(
        <Swiper className={`h-full`}>
            <SwiperSlide >
                <div className={`h-full flex justify-end pt-64`}>
                    {/*retirei o lg:max-w-[700px] fazer teste em outra tela*/}
                    <div className={`flex flex-col items-center lg:items-start `}>
                        <motion.h1
                            variants={fadeIn('up',0.4)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false,amount: 0.2}}
                            className={`uppercase text-center lg:text-left mb-2`}>
                            Aqui o<span> seu esforço</span> encontra o sucesso
                        </motion.h1>
                        <motion.p
                            variants={fadeIn('up',0.6)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false,amount: 0.2}}
                            className={`text-white italic text-center lg:text-left mb-4 `}>
                            O sucesso não é conquistado, é alugado e a fatura é paga todos os dias.
                        </motion.p>
                        <motion.div
                            variants={fadeIn('up',0.8)}
                            initial='hidden'
                            whileInView={'show'}
                            viewport={{once: false,amount: 0.2}}
                        >
                            <CustomButton
                                text='Comece já'
                                containerStyles='w-[196px] h-[62px] mt-2 lg:mx-auto'
                            />
                        </motion.div>

                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={`h-full flex justify-end pt-64`}>
                    <div className={`flex flex-col items-center lg:items-start `}>
                        <h1 className={`uppercase text-center lg:text-left mb-2`}>
                            Aqui o<span> seu esforço</span> tem recompensa
                        </h1>
                        <p className={`text-white italic text-center lg:text-left mb-4 `}>
                            venha fazer parte do nosso time
                        </p>
                        <CustomButton
                            text='Comece já'
                            containerStyles='w-[196px] h-[62px] mt-2 lg:mx-auto'
                        />
                    </div>
                </div>
            </SwiperSlide>
            {/*swiper nav buttons */}
            <SwiperNavButtons
                containerStyles='absolute bottom-2 lg:bottom-0 right-0  h-[130px] w-full lg:w-[700px]
                 z-50 flex justify-center lg:justify-start gap-1'
                btnStyles='border border-accent text-white w-[56px] h-[56px]
                flex justify-center items-center hover:bg-accent trasition-all duration-300 '
                iconStyles='text-2xl'/>


        </Swiper>
    )
}