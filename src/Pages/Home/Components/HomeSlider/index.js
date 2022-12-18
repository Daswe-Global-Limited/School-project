import React from 'react'
import { Link } from 'react-router-dom'
import { BannerWrapper } from './styles'


function HomeSlider({bannerData}) {
    return (
        <BannerWrapper>
            <div className="sliderwrapper">
                <div className='outline'>                
                <div className='welcimage'>
                <video src={bannerData.video} autoPlay muted loop/>

                </div>
                <div className="welcometext">
                    <h1>{bannerData.title}</h1>
                    <button className="btn">
                        <Link to="/signup">{bannerData.buttonText}</Link>
                    </button>
                </div>
                </div>
            </div>
        </BannerWrapper>
    )

}

export default HomeSlider