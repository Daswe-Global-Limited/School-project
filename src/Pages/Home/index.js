import React from 'react'
import HomeSlider from '../../Components/HomeSlider'
import ValuesComponent from '../../Components/Values'
import SchoolsView from '../../Components/SchoolsView'
import BoardMembers from '../../Components/BoardMembers'

function HomePage() {
  return (
    <div>
      <HomeSlider />
      <ValuesComponent />
      <SchoolsView />
    <BoardMembers />
    </div>
  )
}

export default HomePage