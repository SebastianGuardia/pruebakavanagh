import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import PriceCardSection from '../components/PriceCardsSection';
import Contact from '../components/Contact';
import Company from '../components/Company';
import Footers from '../components/Footers';
import Testimonials from '../components/TestimonialSection';
import { motion } from 'framer-motion';
import '../index.css'
 
const MainHome = () => {
  return (
    <>
    <motion.div initial="hidden" animate="show">
      <Navbar/>
      <Hero/> 
      <Advantages/>
      <Company/>
      <Testimonials/>
      <PriceCardSection/>
      <Contact/> 
      <Footers/>
    </motion.div>
  </>
  )
}

export default MainHome