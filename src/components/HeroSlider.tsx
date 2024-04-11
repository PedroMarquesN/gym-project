'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css'
import 'swiper/css/navigation'
import CustomButton from "@/components/CustomButton";

export default function HeroSlider() {
    return(
        <Swiper>
            <SwiperSlide >
                <div className={`h-full flex justify-end pt-64`}>
                    {/*retirei o lg:max-w-[700px] fazer teste em outra tela*/}
                    <div className={`flex flex-col items-center lg:items-start `}>
                        <h1 className={` text-center lg:text-left mb-2`}>
                            Onde o<span> trabalho duro</span> encontra o sucesso
                        </h1>
                        <p className={`text-white italic text-center lg:text-left mb-4 `}>
                            O sucesso não é conquistado, é alugado e a fatura é paga todos os dias.
                        </p>
                        <CustomButton
                            text='Comece já'
                            containerStyles='w-[196px] h-[62px] mt-2 lg:mx-auto'
                        />
                    </div>
                </div>
            </SwiperSlide>
            {/*swiper nav buttons*/}

        </Swiper>
    )
}