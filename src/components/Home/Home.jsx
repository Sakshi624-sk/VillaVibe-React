import React from 'react'
import HeroSection from '../../subComponents/HeroSection'
import TopVillas from '../../subComponents/TopVillas';
import Regoins from '../../subComponents/Regoins';
import OurSpecialities from '../../subComponents/OurSpecialities';
import Host from '../../subComponents/Host';
import About from '../../subComponents/About';
import Contact from '../../subComponents/Contact';

export const Home = () => {
  return (
    <>
    <article className='page'>
       <HeroSection/>
       <TopVillas/>
       <Regoins/>
       <OurSpecialities/>
       <Host/>
       <About/>
       <Contact/>
    </article>
    </>
  )
}
