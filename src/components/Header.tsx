'use client'
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import Image from "next/image";
import {useEffect, useState} from "react";
import {MdMenu} from "react-icons/md";

export default function Header() {
    const [headerActive, setHeaderActive] = useState(false)
    const [openNav, setOpenNav] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setHeaderActive(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);
    return (
        <header
            className={`
                ${headerActive ? 'h-[100px]' : 'h-[124px]'}
                fixed top-0 w-full max-w-[1920px]
                bg-primary-200 h-[100px] transition-all z-50`}>
            <div className="container mx-auto h-full flex items-center justify-between">
                {/*Logo */}
                <Link href=''>
                    <Image src={'/assets/img/logo.png'} alt="Imagem da logo" width={117} height={55}/>
                </Link>
                {/*mobile nav*/}
                <MobileNav
                    containerStyle={`
                        ${headerActive ? 'top-[90px]' :'top-[124px]'}
                        ${openNav ? 'max-h-max pt-8 pb-10 border-t border-white/10'
                        :'max-h-0 pt-0 pb-0 overflow-hidden border-white/0'}
                        flex flex-col text-center gap-8 xl:hidden text-white
                        fixed bg-primary-200 w-full left-0 text-base uppercase
                        font-medium transition-all
                    `}
                />
                {/*desktop nav*/}
                <Nav containerStyles='flex gap-4 hidden xl:flex text-white' />
                {/*hide/open menu button */}
                <div>
                    <button onClick={() => setOpenNav(!openNav)} className={`text-white xl:hidden`}>
                        <MdMenu  className={`text-xl`}/>
                    </button>
                </div>

            </div>
        </header>
    )
}