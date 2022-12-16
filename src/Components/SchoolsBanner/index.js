import React from 'react'
import './style.css'
import schoolPageBanner from '../../Assets/Schools/schoolPageBanner.jpg'

function SchoolsBanner() {
    return (
        <div class="schoolsBanner">
            <div className='schoolsBannerWrap'>
            <div class="schoolsBanner-container">
            <img className='schoolPageBannerImg' src={schoolPageBanner} alt='schoolPage-Banner' /> 
                {/* <img src="/assets/schools/school-welcome-img.jpg" alt="welcimage"> */}

                <div class="schoolsBannerText">
                    <h1>The Rich History of Our schools</h1>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SchoolsBanner