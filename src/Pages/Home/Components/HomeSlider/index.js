import React from 'react'
import { Link } from 'react-router-dom'
import { BannerWrapper } from './styles'


function HomeSlider({bannerData}) {
    return (
        <BannerWrapper>
            <div class="sliderwrapper">
                <div className='outline'>                
                <div className='welcimage'>
                <video src={bannerData.video} autoPlay muted loop/>

                </div>
                <div class="welcometext">
                    <h1>{bannerData.title}</h1>
                    <button class="btn">
                        <Link to="/signup">{bannerData.buttonText}</Link>
                    </button>
                </div>
                </div>
            </div>
        </BannerWrapper>
    )

}

export default HomeSlider