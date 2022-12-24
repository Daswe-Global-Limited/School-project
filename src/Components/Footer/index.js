import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo/logo2.png";
import { FooterWrapper } from "./style";
import { footerData } from "./mockData";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <FooterWrapper>
      <div className="footer-box">
        <div className="footersec1">
          <Link to="/">
            <img src={Logo} alt="" className="imglogo" />{" "}
          </Link>
          <div className="footersec1icon">
            <a href="https://facebook.com/lekanokutubo" className="boardicon">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com/olakved" className="boardicon">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com/olakved" className="boardicon">
              <FaTwitter size={20} />
            </a>
            <a href="https://github.com/olakved" className="boardicon">
              <FaGithub size={20} />
            </a>
          </div>
          <div className="col-subscribe">
            <h3>Subscribe to our newsletter</h3>
            <p>
              The latest news, articles, and resources <br /> sent to your inbox
              weekly.
            </p>
            <div className="subscribe">
              <input type="email" placeholder="Enter your email" />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footersec2">
          <h3>{footerData.footerLine2.title}</h3>
          {footerData.footerLine2.data.map((item, index) => (
            <Link href={item.path} className="foot-link">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="footersec3">
          <h3>{footerData.footerLine3.title}</h3>
          {footerData.footerLine3.data.map((item, index) => (
            <Link href={item.path}>{item.title}</Link>
          ))}
        </div>
        <div className="footersec4">
          <h3>{footerData.footerLine4.title}</h3>
          {footerData.footerLine4.availableData.map((item, index) => (
            <div className="footerb" key={index}>
              <Link href={item.path} className="contact-icon">
                {item.icon}
              </Link>
              <p> {item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="copyright">
        <p>copyright - Olakved {currentYear}.</p>
        <p>All rights reserved</p>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
