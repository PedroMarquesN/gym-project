import Nav from "@/components/Nav";
import MobileNav from "@/components/MobileNav";

export default function Header() {
    return (
        <header className="fixed left-0 right-0 w-full bg-white h-[90px]">
            <div className="container mx-auto">
                {/*mobile nav*/}
                <MobileNav containerStyle="s" />
                {/*desktop nav*/}
                <Nav containerStyles='flex gap-4 hidden xl:flex' />
            </div>
        </header>
    )
}