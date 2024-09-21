import { useState } from 'react'
import Header from './component/Header.jsx'
import About from './component/About.jsx'
import Skills from './component/Skills.jsx'
import Resume from './component/Resume.jsx'
import Footer from './component/Footer.jsx';


function App() {

  return (
    <div>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  )
}

export default App
