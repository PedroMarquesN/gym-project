'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import {Swiper, SwiperSlide} from "swiper/react";
import CustomButton from "@/components/CustomButton";

export default function HeroSlider() {
    return(
        <Swiper>
            <SwiperSlide className={`h-full flex justify-end pt-48`}>
                <div>
                    <h1 className={`h1 text-center lg:text-left mb-2`}>
                        Onde o<span> trabalho duro</span> encontra o sucesso
                    </h1>
                    <p className={`text-white italic text-center lg:text-left mb-4 `}>
                        O sucesso não é conquistado, é alugado e a fatura é paga todos os dias.
                    </p>
                    <CustomButton
                        text='Comece já'
                        containerStyles='w-[196px] h-[62px] '
                    />
                </div>
            </SwiperSlide>
        </Swiper>
    )
}