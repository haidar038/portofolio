/* eslint-disable @next/next/no-sync-scripts */
import React from 'react'
import Navbar from '../components/organisms/Navbar'
import Image from 'next/dist/client/image'
import Script from 'next/script'
import Head from 'next/head'

export default function skill() {
    return (
        <>
            <Navbar />

            <main className="container">
                <section id="skill">
                    <div className="row align-content-center">
                        <div className="col-12 col-md-6 align-self-center">
                            <h1 className="fw-bold mb-5 mb-md-3">What I Do</h1>
                            <p>
                                The main area of my expertise is front end development (client side of the web).
                                Build beautiful and interactive Web Application with HTML, CSS, and Javascript.
                            </p>
                            <p>
                                I also have full stack development experience with Node.Js and MongoDB.
                            </p>
                        </div>
                        <div className="col-12 col-md-5 align-self-center">
                            <span className="content w-100"></span>
                        </div>
                    </div>
                </section>
            </main>

            <Script src="/vendor/tagcloud/script.js" />
        </>
    )
}
