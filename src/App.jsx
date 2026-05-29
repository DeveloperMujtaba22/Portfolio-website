import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Service from './Sections/Service'
import Skill from './Sections/Skill'
import Experience from './Sections/Experience'
import WhyHire from './Sections/WhyHire'
import Project from './Sections/Project'
import Stack from './Sections/Stack'
import Contact from './Sections/Contact'
import Blog from './Sections/Blog'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={
          <>
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
        }/>
        <Route path="/about" element={<><About/><Footer/></>}/>
      </Routes>
    </>
  )
}

export default App