import Experiences from './components/Experiences'
import NavBar from './components/NavBar'
import About from './components/About'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import Projects from './components/Projects'

function App() {
  

  return (
    <div className='flex bg-slate-600 h-screen'>      
      <BrowserRouter>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </BrowserRouter>          
    </div>
  )
}

export default App
