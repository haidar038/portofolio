/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import SideLink from './sideLink'
import { useRouter } from "next/router";
import MobileLink from './mobileLink';
import Image from 'next/dist/client/image';

export default function index() {
    const router = useRouter();

    return (
        <section id="navbar">
            <nav className="sidebar-dekstop d-none d-md-flex flex-column">
                <a href="" className="logo mt-5">
                    <Image src="/img/logo.png" alt="" width={40} height={40} />
                </a>

                <ul className="mt-auto p-0 mb-5">
                    <SideLink icon="home.svg" title="Home" href="/"
                        active={router.pathname == "/" ? true : false} />
                    <SideLink icon="about.svg" title="About" href="/about"
                        active={router.pathname == "/about" ? true : false} />
                    <SideLink icon="skill.svg" title="Skill" href="/skill"
                        active={router.pathname == "/skill" ? true : false} />
                    <SideLink icon="project.svg" title="Portofolio" href="/project"
                        active={router.pathname == "/project" ? true : false} />
                    <SideLink icon="contact.svg" title="Contact" href="/contact"
                        active={router.pathname == "/contact" ? true : false} />
                </ul>
            </nav>

            <nav className="navbar navbar-expand navbar-mobile d-md-none">
                <div className="container-xxl">
                    <ul className="navbar-nav m-auto w-100 justify-content-around">
                        <MobileLink icon="fa fa-home" href="/" />
                        <MobileLink icon="fa fa-user" href="/about" />
                        <MobileLink icon="fa fa-tools" href="/skill" />
                        <MobileLink icon="fa fa-folder" href="/project" />
                        <MobileLink icon="fa fa-phone" href="/contact" />
                    </ul>
                </div>
            </nav>
        </section>
    )
}
