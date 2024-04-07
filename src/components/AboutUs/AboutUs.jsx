import React from 'react'
import About from '../../subComponents/About'

const AboutUs = () => {
  return (
    <>
    <section id='aboutPage' className='page'>
        <div className="container">
          <a href="	https://github.com/Zeeshu911/Luxury-Real-Estate-We…actJS/blob/main/project/public/about.jpg?raw=true"></a>
           <img src="/about.jpg" alt="about" /> 
           <div className="content">
            <h3>Celebrate Our Journey: Discover VillaVista's Story!</h3>
            <p>VillaVista: Where luxury meets hospitality. Our story? It's simple: we're passionate about creating unforgettable experiences. With handpicked villas and personalized service, we redefine luxury living.</p>
            <p>At VillaVista, we believe in crafting moments, not just accommodations. Our team is committed to excellence, ensuring each stay is exceptional. Join us on a journey of luxury and relaxation.</p>
            <p>Welcome to VillaVista – your gateway to unparalleled luxury. With attention to detail and a dedication to hospitality, we're here to make your stay unforgettable. Discover the essence of indulgence with us.</p>
           </div>
        </div>
       <About/>
    </section>
    </>
  )
}

export default AboutUs
