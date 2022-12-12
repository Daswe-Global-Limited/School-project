import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './style.css'
import Logo from '../../Assets/Logo/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'







function Header() {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)



  return (
    <header>
      <div div className='headerwrapper' >
        <div className='logo'>
          <Link to='/'> <img src={Logo} alt='' className='imglogo' /> </Link>
        </div>
        <div>
          <ul className={click ? "nav-menu active" : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>Home</Link>
            </li>
            <li className='nav-item'>
              <Link to='/schools' className='nav-link'>Schools</Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>About</Link>
            </li>
            <li className='nav-item'>
              <Link to='/team' className='nav-link'>Team</Link>
            </li>
            <li className='nav-item'>
              <Link to='/login' className='nav-link'>Login</Link>
            </li>
          </ul>
        </div>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars size={20} style={{ color: '#ffffff' }} />)}
        </div>
        </div>
    </header >
  )
}

export default Header