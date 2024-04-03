import React from 'react'
import { Link } from "react-router-dom";
import { RiFacebookBoxLine} from "react-icons/ri";

const Contact = () => {
  return (
    <>
    <section id='contact'>
        <h1>CONTACT US</h1>
        <p>Got questions or ready to book? Reach out to us! Our team is here to assist you every step of the way. Contact us today and start planning your dream getaway.</p>
        <p>Ready to elevate your travel experience? Get in touch with VillaVista! Whether it's inquiries about our villas or assistance with bookings, we're here to help. Reach out now and let's make your vacation unforgettable.</p>
        <div className="container">
            <img src="/about.jpg" alt="about" />
            <div className="content">
            <h3>Let's Connect</h3>
          <div>
            <p>Phone</p>
            <span>+001 1234 999</span>
          </div>
          <div>
            <p>Email</p>
            <span>sk@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>House No.123 Sector A-1</span>
          </div>
          <ul>
          <Link to={"/"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/"} target="_blank"><RiFacebookBoxLine/></Link>
        </ul>
        </div>
        </div>
    </section>
    </>
  )
}

export default Contact
