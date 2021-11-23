import React from 'react'
import cx from 'classnames'
import Link from 'next/link'

interface MenuProps {
    title: string;
    active?: boolean;
    icon: string;
    href: string;
}
export default function SideLink(props: Partial<MenuProps>) {
    const { title, active, href = '/', icon } = props;
    const classTitle = cx({
        'list': true,
        'active': active,
    })
    return (
        <li className={classTitle}>
            <b className="b1"></b>
            <Link href={href}>
                <a data-bs-toggle="tooltip" data-bs-placement="top" className="side-link" title={title}>
                    <i className={icon}></i>
                </a>
            </Link>
        </li>
    )
}
