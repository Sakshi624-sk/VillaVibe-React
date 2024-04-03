import React from 'react'

const About = () => {
  return (
    <>
     <section id='aboutUs_Mini'>
        <div className="first_container">
            <div className="content">
                <h1>ABOUT US</h1>
                <p>Discover the story behind VillaVista, where passion for luxury living meets a commitment to exceptional hospitality.</p>
                <p>At VillaVista, we're dedicated to redefining luxury living. Our curated collection of villas promises unparalleled experiences, meticulously selected for their opulence and comfort.</p>
                <p>VillaVista was born from a vision to create a sanctuary for luxury travelers. What sets us apart is not just our stunning properties, but our team's unwavering commitment to excellence.</p>
                <p>Discover the essence of luxury with VillaVista. Each property in our portfolio is handpicked to ensure the highest standards, promising guests an extraordinary stay.</p>
            </div>
            <button>We strive to offer you best possible hones to stay!</button>
        </div>
        <div className="second_container">
            <div className="image_1">
                <img src="/people.jpg" alt="people" />
            </div>
            <div className="image_2">
                <img src="/people2.jpg" alt="people2" />
            </div>
        </div>
     </section>
    </>
  )
}

export default About