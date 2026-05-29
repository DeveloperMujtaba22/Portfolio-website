import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Hero from './Sections/Hero/Hero'
import About from './Sections/About/About'
import Service from './Sections/Service/Service'
import Skills from './Sections/Skill/Skill' 
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
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Service />
            <Skills />
            <Experience />
            <WhyHire />
            <Project />
            <Stack />
            <Contact />
            <Blog />
            <Footer />
          </>
        } />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App