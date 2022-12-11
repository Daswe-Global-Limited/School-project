import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Header() {
  return (
    <header>
      <div div className='navbar' >
        <div className='logo'>
          <h1>LOGO</h1>
        </div>
        <div className='nav-link'>
          <ul className='nav-menu'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to='/faq' className='nav-link'>FAQ</Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact' className='nav-link'>Contact</Link>
            </li>
          </ul>
        </div>

      </div>
    </header >
  )
}

export default Header