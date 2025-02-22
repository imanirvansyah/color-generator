import Link from "next/link";

export const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-center p-5 shadow-xl fixed w-full z-10 bg-background">
            <Link href="/" className="tracking-[.5em]">COLORGENE</Link>
        </nav>
    )
}