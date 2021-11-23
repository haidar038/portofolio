import React from 'react'
import Link from 'next/dist/client/link'
import Navbar from '../components/organisms/Navbar'

export default function project() {
    return (
        <>
            <Navbar />

            <main className="container">
                <section className="pt-5" id="project">
                    <h1 className="fw-bold mb-3 text-center">My Project</h1>

                    <div className="row py-5 justify-content-center">
                        <div className="col-12 col-md-10 col-xl-6 left-side">
                            <p className="fw-bold h3">01.</p>
                            <h3 className="fw-bold mb-4 mb-xl-0">
                                Web Application for Online Consultation (Kliniku)
                            </h3>
                            <img src="/img/project/project1.png" alt="" className="w-100 d-xl-none" />
                            <br />
                            <p>
                                Kliniku is an online consultation platform where people can fill in an online form about their
                                health issue to send for a doctor. The doctor can respond and give them medical advice.
                            </p>
                            <br />
                            <p><b>Tools : </b> React Js, SCSS, NodeJs, Express, Mongoose</p>
                            <br />
                            <Link href="/project">
                                <a className="btn me-3">Visit</a>
                            </Link>
                            <Link href="/project">
                                <a className="btn">Source Code</a>
                            </Link>
                        </div>
                        <div className="col-6 right-side d-none d-xl-block">
                            <img src="/img/project/project1.png" alt="" className="w-100" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
