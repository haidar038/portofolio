import React from 'react'
import Link from 'next/dist/client/link'
import ListProject from './listProject'

export default function index() {
    return (
        <section className="pt-5" id="project">
            <h1 className="fw-bold mb-3 text-center">My Project</h1>

            <ListProject
                no="01."
                title="Jurnal Ilmu Administrasi Public - UNISRI"
                image="/img/project/jiapunisri.png"
                desc="Jurnal Ilmiah Administrasi Publik (JI@P) is published two times a year in January and June. 
                This journal contains scientific articles on public administration 
                science written in two languages : Bahasa Indonesia and English. 
                The article is published in form of empirical research, conceptual or theoritical framework. "
                tools="Figma, OJS"
            />
        </section>
    )
}
