import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Hero from './Sections/Hero/Hero'
import About from './Sections/About/About'
import Service2 from './Sections/Service2/Service2'
import Project2 from './Sections/Project2/Project2'
import Skill from './Sections/Skill/Skill'
import Contact1 from './Sections/Contact1/Contact1'
// import Blog2 from './Sections/Blog2/Blog2'
import Footer from './Sections/Footer/Footer'
import Service from './Sections/Service/Service'
import Resume from './Sections/Resume/Resume'
import Project from './Sections/Project/Project'
// import Blog from './Sections/Blog/Blog'
import Contact from './Sections/Contact/Contact'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About/>
            <Service2 />
            <Skill />
            <Project2 />
            <Contact1 />
            {/* <Blog2 /> */}
            <Footer />
          </>
        } />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/service" element={<Service />} />
        {/* <Route path="/skill" element={<Skills />} /> */}
        <Route path="/resume" element={<Resume />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </>
  )
}

export default App