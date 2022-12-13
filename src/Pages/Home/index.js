import React from 'react'
import HomeSlider from '../../Components/HomeSlider'
import ValuesComponent from '../../Components/Values'
import SchoolsView from '../../Components/SchoolsView'

function HomePage() {
  return (
    <div>
      <HomeSlider />
      <ValuesComponent />
      <SchoolsView />
    </div>
  )
}

export default HomePage