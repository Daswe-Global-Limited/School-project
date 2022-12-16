import React from 'react'
import './style.css'
import SchoolsBanner from '../../Components/SchoolsBanner'
import SchoolHistoryA from '../../Components/SchoolHistoryA'
import SchoolAchievement from '../../Components/SchoolAchievement'




function SchoolPage() {
  return (
    <div>
      <SchoolsBanner />
      <SchoolHistoryA />
      <SchoolAchievement />
    </div>
  )
}

export default SchoolPage