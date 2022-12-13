import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import schoolLogo from '../../Assets/Logo/schoolLogo.PNG'
import { ImLocation2 } from "react-icons/im"








function SchoolsView() {


  return (
    <div className="schoolswrap">
            <div className="schoolintro">
                <div className="schoolsintroa">
                    <p>OUR SCHOOLS</p>
                    <h1>A Quick View Of Our Schools</h1>
                </div>
            </div>
            <div className="parentflexbox">
                <div className="childflexbox">
                    <div className="childbox">
                    <Link to='/schools'> <img src={schoolLogo} alt='' className='imglogo'/></Link>
                    </div>
                    <div className="childbox">
                    <Link to='/schools'> <img src={schoolLogo} alt='' className='imglogo' /></Link>
                    </div>
                    <div className="childbox">
                    <Link to='/schools'> <img src={schoolLogo} alt='' className='imglogo' /></Link>
                    </div>
                    <div className="childbox">
                    <Link to='/schools'> <img src={schoolLogo} alt='' className='imglogo' /></Link>
                    </div>
                </div>
            </div>
            <div className='school-view'>
                <div className='ANCHOS-view-wrap'>
                <div className='col-2-hide'>
                    <Link> <img src={schoolLogo} alt='' className='col-2-logo' /> </Link>
                    </div>
                    <div className='col-1'>
                    <h2>
                        LOCAL COMPREHENSIVE <br/> HIGH SCHOOL
                    </h2>
                    <p><ImLocation2  size={20} className='icon-location'/> Victoria Island, Lagos</p>
                    </div>
                    <div className='col-2'>
                    <Link> <img src={schoolLogo} alt='' className='col-2-logo' /> </Link>
                    </div>
                </div>
            </div>

        </div>
  )
}

export default SchoolsView