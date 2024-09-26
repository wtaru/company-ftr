export type HomeType = {
    name: string;
    description: string;
    url: string;
    imgLink: {
        bg: string;
        headerIcon: string;
        footterIcon: string;
    }
}

export type NavItem = {
    name: string;
    href: string;
}

export type NavItemConfig = {
    NavItems: NavItem[]
}