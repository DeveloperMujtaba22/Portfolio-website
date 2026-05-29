import React from 'react'
import Hero from './Sections/Hero/Hero'
import NavBar from './Components/NavBar'
import Service from './Sections/Service/Service'
import Skill from './Sections/Skills/Skill'
import Experience from './Sections/Experience/Experience'
import WhyHire from './Sections/WhyHire'
import Project from './Sections/Project/Project' 
import Stack from './Sections/Stack/Stack'
import Contact from './Sections/Contact/Contact'
import Blog from './Sections/Blog/Blog'
import Footer from './Sections/Footer/Footer'
  


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
      <Stack/>
      <Contact/>      
      <Blog/> 
      <Footer/> 
      

   </>
  )
}

export default App