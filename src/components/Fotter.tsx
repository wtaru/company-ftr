import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer className="bg-zinc-800 text-gray-300 h-20">
                <div className="text-right mt-5 pr-6">
                    <p className="text-sm">他のDX改善はこちら</p>
                    {/* D-ROOMのサイトへ */}
                    <Link href={"#"} className="text-blue-400"> 
                        CF D-ROOM 問い合わせ        
                    </Link>                   
                </div>
            </footer>
        </>
    )
}