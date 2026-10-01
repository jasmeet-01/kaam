import React from 'react'
import Nav from './Components/Nav.jsx'
import Hero from './Components/Hero.jsx'
import Notes from './Components/Notes.jsx'

function App() {
  
  return (
    <div className="p-5 m-2 bg-gray-400 h-full">
      <Nav />
      <Hero />
      <Notes />
    </div>
  )
}

export default App
