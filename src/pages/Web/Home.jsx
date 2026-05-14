import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import HeroSection from '../components/home/HeroSection'
import FeatureSection from '../components/home/FeatureSection'
import WorksSection from '../components/home/WorksSection'
import WhyUsSection from '../components/home/WhyUsSection'
import CTASection from '../components/home/CTASection'
import TestimonialSection from '../components/home/TestimonialSection'
import PartnersSection from '../components/home/PartnersSection'

const Home = () => {
  return (
    <>
    <Nav/>
    <HeroSection/>
    <FeatureSection/>
    <WorksSection/>
    <WhyUsSection/>
    <CTASection/>
    <TestimonialSection/>
    <PartnersSection/>
    <Footer/>
    </>
  )
}

export default Home