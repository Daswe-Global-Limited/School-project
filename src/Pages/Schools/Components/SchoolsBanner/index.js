import React from 'react'
import schoolPageBanner from '../../../../Assets/Schools/schoolPageBanner.jpg'
import { SchoolsPageBanner } from './style'

function SchoolsBanner() {
    return (
        <SchoolsPageBanner>
            <div className='schoolsBannerWrap'>
            <div class="schoolsBanner-container">
            <img className='schoolPageBannerImg' src={schoolPageBanner} alt='schoolPage-Banner' /> 
                <div class="schoolsBannerText">
                    <h1>The Rich History of Our schools</h1>
                </div>
            </div>
            </div>
        </SchoolsPageBanner>
    )
}

export default SchoolsBanner