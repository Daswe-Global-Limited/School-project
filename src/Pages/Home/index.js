import React from 'react'
import HomeSlider from './Components/HomeSlider'
import ValuesComponent from './Components/Values'
import SchoolsView from './Components/SchoolsView'
import BoardMembers from './Components/BoardMembers'
import QuestionSection from './Components/QuestionSection'
import { HomeData } from './mockData'



function HomePage() {


  return (
    <div>
      <HomeSlider bannerData={HomeData.homeBannerData} />
      <ValuesComponent valueData={HomeData.valueData} />
      <SchoolsView schoolData={HomeData.schoolData}/>
      <BoardMembers />
      <QuestionSection />
    </div>
  )
}

export default HomePage