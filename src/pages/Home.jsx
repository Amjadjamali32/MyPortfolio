import React from 'react'
import Hero from '../components/Hero'
import About from '../pages/About'
import Skills from './Skills'
import skills from '../skills.js';
import Projects from './Projects.jsx';
import Contact from "../pages/Contact.jsx"

const Home = () => {
    return (
        <>
        <div className='pt-16'>
            <Hero />
            <About />
            <Skills skills={skills}/>
            <Projects />
            <Contact />
        </div>
        </>
    )
}

export default Home
