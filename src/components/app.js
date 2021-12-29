import React,{useState} from 'react';
import AboutMe from './AboutMe/AboutMe';
import Footer from './Footer/Footer';
import NavBar from './NavBar/NavBar';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const App = () => {
    const [mode, setMode] = useState('light')
    const [modeName, setModeName] = useState('Dark Mode')
    const toggleMode = () => {
      if(mode === 'light'){
        setMode('dark')
        setModeName('Light Mode')
        document.body.style.backgroundColor = '#000'
      }
      else{
        setMode('light')
        setModeName('Dark Mode')
        document.body.style.backgroundColor = '#fff'
      }
    }
    return (
    <div >
      <NavBar mode={mode} toggleMode={toggleMode} modeName={modeName}/>
      <AboutMe mode={mode}/>
      <Skills mode={mode}/>
      <Projects mode={mode}/>
      <Footer mode={mode}/>
    </div>
    )
}

export default App