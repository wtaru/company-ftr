// import { headerImg } from "@/config/_header"
import Image from "next/image"
import Link from "next/link"
import Nav from "./Nav"
import { NavHeader } from "@/config/_header"

export default function Header() {
    return (
        <>
            <header className="bg-zinc-800 text-gray-300 h-20">
                <div className="p-2 flex justify-between">
                    <div className="flex items-center gap-4">
                        <Link href={"/"}>
                            <Image src="/logo1.png" alt="example image" width={70} height={50} className="rounded-full hover:drop-shadow-xl"/>
                        </Link>
                        <div>
                            <p className="text-3xl italic">.Infomation Chatchi System</p>
                        </div>
                    </div>
                    <nav className="flex items-center gap-3 pt-3 mr-3">
                        <Nav items={NavHeader.NavItems}/>
                    </nav>
                </div>
            </header>
        </>
    )
}