import React from 'react'
import Navbar from '../components/organisms/Navbar'
import Image from 'next/dist/client/image'

export default function skill() {
    return (
        <>
            <Navbar />

            <main className="container">
                <section id="skill">
                    <div className="row">
                        <h1 className="fw-bold mb-3 d-md-none order-first text-center">What I Do</h1>
                        <div className="col-12 col-md-6 align-self-center">
                            <h1 className="fw-bold mb-3 d-none d-md-block">What I Do</h1>
                            <p>
                                The main area of my expertise is front end development (client side of the web).
                                Build beautiful and interactive Web Application with HTML, CSS, and Javascript.
                            </p>
                            <p>
                                I also have full stack development experience with Node.Js and MongoDB.
                            </p>
                        </div>
                        <div className="col-12 col-md-5 order-first order-md-last align-self-center">
                            <img src="/img/illustration/skill.png" alt="" className="w-100 " />
                        </div>
                    </div>
                    <div className="row tools justify-content-center">
                        <div className="col-4 col-md-2 text-center card pb-0">
                            <div className="card-body">
                                <Image src="/icon/ic-html.svg" width={20} height={20} alt="icon" />
                                <p>HTML 5</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <Image src="/icon/ic-css.svg" width={20} height={20} alt="icon" />
                                <p>CSS 3</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <Image src="/icon/ic-bootstrap.svg" width={20} height={20} alt="icon" />
                                <p>Bootstrap</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <Image src="/icon/ic-javascript.svg" width={20} height={20} alt="icon" />
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <Image src="/icon/ic-react.svg" width={20} height={20} alt="icon" />
                                <p>React JS</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <Image src="/icon/ic-sass.svg" width={20} height={20} alt="icon" />
                                <p>SASS</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <Image src="/icon/ic-mongodb.svg" width={20} height={20} alt="icon" />
                                <p>MongoDB</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <Image src="/icon/ic-mysql.svg" width={20} height={20} alt="icon" />
                                <p>MySQL</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
