"use client"
import {Link as ScrollLink} from 'react-scroll'


const links = [
    {name:'home', target:'home', offset: -100},
    {name:'Sobre', target:'about', offset: -80},
    {name:'Aulas', target:'class', offset: -80},
    {name:'Equipe', target:'team', offset: 0},
    {name:'preços', target:'prices', offset: -40},
    {name:'depoimentos', target:'testimonial', offset: 0},
    {name:'blog', target:'blog', offset: 0},
    {name:'contato', target:'contact', offset: 0}
]


export default function Nav({containerStyles}: {containerStyles: string}) {
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <ScrollLink
                        className="cursor-pointer  hover:text-accent transition-all"
                        key={index}
                        to={link.target}
                        smooth
                        spy
                        activeClass='active'
                        offset={link.offset}
                    >
                        {link.name}
                    </ScrollLink>
                )
            })}
        </nav>
    )
}