/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import React from 'react'
import Link from 'next/dist/client/link'
import Navbar from '../components/organisms/Navbar'

const Home: NextPage = () => {
  return (
    <>
      <Navbar />

      <main className="container">
        <header className="row align-items-center">
          <div className="col text-box">
            <h1 className="mb-0 h2">Hi,</h1>
            <h1 className="mb-0 h2">I&apos;m Latoe,</h1>
            <h1 className="h2">Web Developer .</h1>
            <p>Front End & Back End Developer</p>
            <Link href="/about">
              <a className="btn px-3">About Me</a>
            </Link>
          </div>
        </header>
      </main>
    </>
  )
}

export default Home
