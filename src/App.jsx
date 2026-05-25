import React from 'react'
import Hero from './Sections/Hero'
import NavBar from './Components/NavBar'
import Service from './Sections/Service'
import Skill from './Sections/Skill'
import Experience from './Sections/Experience'
import WhyHire from './Sections/WhyHire'
import Project from './Sections/Project' 
import VaxManager from './Sections/Vaxmanager'
  


const App = () => {
  return (
   <>
        <NavBar/>
      <Hero/>
      <Service/>
      <Skill/>
      <Experience/>
      <WhyHire/>
      <Project/>
      <VaxManager/>

   </>
  )
}

export default App