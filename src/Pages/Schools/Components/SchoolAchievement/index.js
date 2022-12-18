import React from 'react'
import Award1 from '../../../../Assets/Schools/award-1.jpg'
import Award2 from '../../../../Assets/Schools/award-2.jpg'
import Award3 from '../../../../Assets/Schools/award-3.jpg'
import Award4 from '../../../../Assets/Schools/award-4.jpg'
import Award5 from '../../../../Assets/Schools/award-5.jpg'
import { AchievementSection } from './style'




function SchoolAchievement() {
    return (
        <AchievementSection>
            <div class="achievementwrap">
                <h1>NOTABLE AWARDS</h1>
                <div class="achievementbox">
                    <div class="achievement1">
                        <img src={Award1} alt="" />
                        <p>EDUCATION</p>
                    </div>
                    <div class="achievement2">
                        <img src={Award2} alt="" />
                        <p>LITERATURE</p>
                    </div>
                    <div class="achievement3">
                        <img src={Award3} alt="" />
                        <p>SPORTS</p>
                    </div>
                    <div class="achievement4">
                        <img src={Award4} alt="" />
                        <p>MUSIC</p>
                    </div>
                    <div class="achievement5">
                        <img src={Award5} alt="" />
                        <p>ARTS</p>
                    </div>
                </div>
            </div>
        </AchievementSection>
    )
}

export default SchoolAchievement