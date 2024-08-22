import './footer.css'
import React from 'react'
import Logo from '../../images/Logo.jpg'

export default function Footer() {
  return (
  
    <footer className="footer">
    <div className="container grid grid--footer">
      <div className="logo-col">
        <a href="#" class="footer-logo">
          <img class="logo" src={Logo} alt="SWinted logo" />
        </a>

        <ul className="social-links">
          <li>
            <a className="footer-link" href="#"
              ><ion-icon className="social-icon" name="logo-instagram"></ion-icon
            ></a>
          </li>
          <li>
            <a className="footer-link" href="#"
              ><ion-icon className="social-icon" name="logo-facebook"></ion-icon
            ></a>
          </li>
          <li>
            <a className="footer-link" href="#"
              ><ion-icon className="social-icon" name="logo-twitter"></ion-icon
            ></a>
          </li>
        </ul>

        <p className="copyright">
          Copyright &copy; <span className="year">{new Date().getFullYear()}</span> by SWinted, Inc.
          All rights reserved.
        </p>
      </div>
      <div className="address-col">
        <p className="footer-heading">Contact us</p>
        <address className="contacts">
          <p className="address">
            623 Harrison Rd., 2nd Floor, London, SW1A 1AA
          </p>
          <p>
            <a className="footer-link" href="tel:+44 7975556677">+44 7975556677</a>
            <br />
            <a className="footer-link" href="mailto:hello@swinted.co.uk"
              >hello@swinted.co.uk</a
            >
          </p>
        </address>
      </div>
      <nav className="nav-col">
        <p className="footer-heading">Account</p>
        <ul className="footer-nav">
          <li><a className="footer-link" href="#">Create account</a></li>
          <li><a className="footer-link" href="#">Sign in</a></li>
          <li><a className="footer-link" href="#">iOS app</a></li>
          <li><a className="footer-link" href="#">Android app</a></li>
        </ul>
      </nav>

      <nav className="nav-col">
        <p className="footer-heading">Company</p>
        <ul className="footer-nav">
          <li><a className="footer-link" href="#">About SWinted</a></li>
          <li><a className="footer-link" href="#">For Business</a></li>
          <li><a className="footer-link" href="#">Selling partners</a></li>
          <li><a className="footer-link" href="#">Careers</a></li>
        </ul>
      </nav>

      <nav className="nav-col">
        <p className="footer-heading">Resources</p>
        <ul className="footer-nav">
          <li><a className="footer-link" href="#">Seller directory</a></li>
          <li><a className="footer-link" href="#">Help center</a></li>
          <li><a className="footer-link" href="#">Privacy & terms</a></li>
        </ul>
      </nav>
    </div>
  </footer>
  )
}
