"use client"
import {Link as ScrollLink} from 'react-scroll'
import {useMediaQuery} from "react-responsive";


const links = [
    {name:'home', target:'home', offset: -100},
    {name:'about', target:'about', offset: -80},
    {name:'class', target:'class', offset: -80},
    {name:'team', target:'team', offset: 0},
    {name:'prices', target:'prices', offset: -40},
    {name:'testimonial', target:'testimonial', offset: 0},
    {name:'blog', target:'blog', offset: 0},
    {name:'contact', target:'contact', offset: 0}
]


export default function MobileNav({containerStyle}:{containerStyle: string}) {
    const isMobile = useMediaQuery({
        query: '(max-width: 640px)'
    })
    return (
        <nav className={`${containerStyle}`}>
                {links.map((link, index) => {
                    return (
                        <ScrollLink
                            className="cursor-pointer  hover:text-accent transition-all"
                            key={index}
                            to={link.target}
                            smooth
                            spy
                            activeClass={`${!isMobile && 'active'}`}
                            offset={link.offset}
                        >
                            {link.name}
                        </ScrollLink>
                    )
                })}
        </nav>
    )
}