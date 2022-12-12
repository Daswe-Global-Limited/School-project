import React from 'react'
import './style.css'
import Welcimage from '../../Assets/Home/welcimage.jpg'
// import { Link } from 'react-router-dom'




function HomeSlider() {
    return (
        <div class="homeslider">
            <div class="sliderwrapper">
                <div className='outline'>                
                <div className='welcimage'>
                <img src={Welcimage} alt='welcimage' />
                </div>
                <div class="welcometext">
                    <h1>Let's be part of your story</h1>
                    <button class="btn">
                        <a href="https://google.com">Enroll Now</a>
                    </button>
                </div>
                </div>
            </div>
        </div>
    )

}

export default HomeSlider