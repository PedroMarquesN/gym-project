'use client'
import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

export default function Header() {
    const [headerActive, setHeaderActive] = useState(false)
    return (
        <header className="fixed left-0 right-0 w-full  bg-primary-200 h-[100px]">
            <div className="container mx-auto h-full flex items-center justify-between">
                {/*Logo */}
                <Link href=''>
                    <Image src={'/assets/img/logo.png'} alt="Imagem da logo" width={117} height={55}/>
                </Link>
                {/*mobile nav*/}
                <MobileNav containerStyle="xl:hidden text-white" />
                {/*desktop nav*/}
                <Nav containerStyles='flex gap-4 hidden xl:flex text-white' />
            </div>
        </header>
    )
}