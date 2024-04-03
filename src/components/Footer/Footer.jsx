import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Footer = () => {

  const location = useLocation();
  const isHomePage = location.pathname === '/'
  return (
    <>
     <footer className={isHomePage ? 'homePage_footer otherPage_footer':'otherPage_footer'}>
      <div className="container">
        <h4>VillaVista</h4>
        <p>"Discover your dream villa with VillaVista - Where luxury meets tranquility for your perfect getaway experience."</p>
        <ul>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/termsandconditions'}>Terms And Conditions</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
      </div>
      <div className="contaier">
        <h4>Connect with us</h4>
        <p>+000 000 000 0</p>
        <p>sk@gamil.com</p>
        <p>All Rights Reserved By VillaVistaOfflicials</p>
      </div>
     </footer>
    </>
  )
}
