import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../Assets/Logo/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { headerData } from './mockData'
import { HeaderWrapper } from './style'


function Header() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick((prevState) => !prevState)

  console.log(click)

  return (
    <HeaderWrapper>
      <div div className='headerwrapper' >
        <div className='logo'>
          <Link to='/'> <img src={Logo} alt='' className='imglogo' /> </Link>
        </div>
        <div className={click ? "nav-menu active" : 'header-nav-menu'}>
            <FaTimes className='hamburger2' size={25} style={{ color: '#ffffff' }} onClick={handleClick} />
            {
              headerData.map((item, index) => (
                  <div key={index} className='nav-item'>
                    <Link to={item.path} className='nav-link'>{item.linkTitle}</Link>
                  </div>
              ))
            }
  
        </div>
        <div className='hamburger' onClick={handleClick}>
          <FaBars size={20} style={{ color: '#ffffff' }} />
        </div>
      </div>
    </HeaderWrapper >
  )
}

export default Header