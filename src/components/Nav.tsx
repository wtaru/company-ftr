import Link from "next/link"
import { NavItem } from "../../types"

interface NavProps {
    items?: NavItem[]
}

export default function Nav({items}:NavProps) {
    return (
        <>
            {items?.map((item, i) => (
                <Link className="p-3 hover:bg-gray-700" key={i} href={item.href}>{item.name}</Link>
            ))}
        </>
    )
}