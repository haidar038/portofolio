import React from 'react'
import Navbar from '../components/organisms/Navbar'

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
                                <i className="fab fa-html5"></i>
                                <p>HTML 5</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <i className="fab fa-css3"></i>
                                <p>CSS 3</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <i className="fab fa-bootstrap"></i>
                                <p>Bootstrap</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <i className="fab fa-js"></i>
                                <p>JavaScript</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <i className="fab fa-react"></i>
                                <p>React JS</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <i className="fab fa-sass"></i>
                                <p>SASS</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <i className="fas fa-database"></i>
                                <p>MongoDB</p>
                            </div>
                        </div>
                        <div className="col-4 col-md-2 text-center card">
                            <div className="card-body">
                                <i className="fas fa-server"></i>
                                <p>MySQL</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
