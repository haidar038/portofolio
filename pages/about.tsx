/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Navbar from '../components/organisms/Navbar'
import Image from 'next/dist/client/image';

export default function about() {
    return (
        <>
            <Navbar />

            <main className="container">
                <section className="row align-items-center" id="about">
                    <div className="col-12 col-md-6 ">
                        <h1 className="fw-bold mb-3">My, Myself & I</h1>
                        <p>
                            My name is Azlan Rafar I&apos;m a Full Stack Web Developer based in <b className="text-danger">Indonesia</b>.
                            I describe
                            myself
                            as a passionate developer who loves <b className="text-danger"> coding, open source,</b> and
                            the <b className="text-danger">web platform.</b>
                        </p>
                        <p>
                            Aside from my job, I like to create and contribute to open source projects. That helps
                            me to
                            learn a ton of new stuff, grow as a developer and support other open source projects.
                            Also I
                            enjoy writing technical things at <b className="text-danger">my blog</b>.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 order-first order-md-last">
                        <img src="/img/illustration/about.svg" alt="" className="w-100 " />
                    </div>
                </section>
            </main>
        </>
    )
}
