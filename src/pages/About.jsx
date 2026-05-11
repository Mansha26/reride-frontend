import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import AboutBanner from '../components/about/AboutBanner'
import Story from '../components/about/Story'
import Mission from '../components/about/Mission'
import Values from '../components/about/Values'
import Process from '../components/about/Process'

const About = () => {
  return (
    <>
    <Nav/>
    <AboutBanner/>
    <div className="max-w-6xl mx-auto px-6">
      <Story/>
    <section className="py-20 grid md:grid-cols-2 gap-8">
      <Mission/>
      <Values/>

    </section>
    <Process/>
    </div>
    
    <Footer/>
    </>
  )
}

export default About