import { useState } from 'react'
import Header from './component/Header'
import About from './component/About'
import Skills from './component/Skills'
import Resume from './component/Resume'
import Footer from './component/Footer';


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
