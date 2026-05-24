import React from 'react'
import Hero from './Sections/Hero'
import NavBar from './Components/NavBar'
import Service from './Sections/Service'
import Skill from './Sections/Skill'
import Experience from './Sections/Experience'
import WhyHire from './Sections/WhyHire'
  


const App = () => {
  return (
   <>
        <NavBar/>
      <Hero/>
      <Service/>
      <Skill/>
      <Experience/>
      <WhyHire/>
   </>
  )
}

export default App