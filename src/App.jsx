import { useState } from 'react'
import './styles/index.css'

// Componentes jeje :)
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <div className="min-h-screen bg-pattern bg-black">
        <div className="max-w-2xl mx-auto bg-black border-5 border-zinc-800 min-h-screen shadow-xl/100">
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
