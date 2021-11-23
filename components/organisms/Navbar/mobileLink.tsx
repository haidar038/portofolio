import React from 'react'
import Link from 'next/link'

interface MenuProps {
    icon: string
    href: string
}
export default function MobileLink(props: MenuProps) {
    const { icon, href } = props
    return (
        <li className="nav-item">
            <Link href={href}>
                <a className="nav-link">
                    <i className={icon}></i>
                </a>
            </Link>
        </li>
    )
}
