import NavBar from './Components/NavBar'
import Hero from './Sections/Hero/Hero'
import About from './Sections/About/About'
import Service2 from './Sections/Service2/Service2'
import Project2 from './Sections/Project2/Project2'
import Skill from './Sections/Skill/Skill'
import Contact1 from './Sections/Contact1/Contact1'
import Contact from './Sections/Contact/Contact'


const App = () => {
  return (
    <>
      <NavBar />
    
         
            <Hero />
            <About/>
            <Service2 />
            <Skill />
            <Project2 />
            <Contact1 />
            <Contact/>
           
          
      
      
    </>
  )
}

export default App