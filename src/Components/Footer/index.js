import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWeixin, FaPhone, FaInternetExplorer, FaMailBulk, FaGithub } from 'react-icons/fa'
import './style.css'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo/logo2.png'

function Footer() {
  return (
    <div className="footerbox">
      <div className="footer">
        <div className="footersec1">
        <Link to='/'> <img src={Logo} alt='' className='imglogo' /> </Link>
            <div className="footersec1icon">
              <a href="https://facebook.com/lekanokutubo" className='boardicon'><FaFacebook/></a>
              <a href="https://instagram.com/olakved" className='boardicon'><FaInstagram/></a>
              <a href="https://twitter.com/olakved" className='boardicon'><FaTwitter/></a>
              <a href="https://github.com/olakved" className='boardicon'><FaGithub/></a>
            </div>
            <div className='col-subscribe'>
          <h3>Subscribe to our newsletter</h3>
          <p>The latest news, articles, and resources <br/> sent to your inbox weekly.</p>
          <div className='subscribe'>
            <input type='email' placeholder='Enter your email' />
            <button>Subscribe</button>
          </div>
        </div>
        </div>
        <div className="footersec2">
          <h3>Quick Links</h3>
          <Link to='/' className='foot-link'>Home</Link>
          <Link to='/schools' className='foot-link'>Schools</Link>
          <Link to='/about' className='foot-link'>About</Link>
          <Link to='/team' className='foot-link'>Team</Link>
          <Link to='/admission' className='foot-link'>Admission</Link>
        </div>
        <div className="footersec3">
          <h3>Schools</h3>
          <a href="/schools/schools.html">ANCOHS</a>
          <a href="/schools/schools.html">BHMGS</a>
          <a href="/schools/schools.html">BMJS</a>
          <a href="/schools/schools.html">CMS</a>
          <a href="/schools/schools.html">LAGGS</a>
          <a href="/schools/schools.html">LANPS</a>
        </div>
        <div className="footersec4">
          <h3>Contact Us</h3>
          <div className="footerb">
            <a href="https://google.com" className="contact-icon"><FaInternetExplorer/></a>
            <p> www.futureschool.com</p>
          </div>
          <div className="footerb2">
            <a href="https://google.com" className="contact-icon"><FaMailBulk/></a>
            <p> futureschool@gmail.com</p>
          </div>
          <div className="footerb3">
            <a href="https://google.com" className="contact-icon"><FaPhone/></a>
            <p> +2348100805056</p>
          </div>
          <div className="footerb4">
            <a href="https://google.com" class="contact-icon"><FaWeixin/></a>
            <p> Chat with admin</p>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>copyright - Olakved 2022.</p>
        <p>All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer