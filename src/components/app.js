import React,{useState} from 'react';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Intro from './Intro/Intro'

const App = () => {
    const [mode, setMode] = useState('light')
    const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#000'
      }
      else{
        setMode('light')
        document.body.style.backgroundColor = '#fff'
      }
    }

    return (
    <div >
      <NavBar mode={mode} toggleMode={toggleMode} />
      <Intro mode={mode}/>
      <AboutMe mode={mode}/>
      <Skills mode={mode}/>
      <Projects mode={mode}/>
      <Footer mode={mode}/>
    </div>
    )
}

export default App