import { useState } from 'react'
import './style/index.css'

// Componentes jeje :)
import Navbar from "./components/Navbar"

function App() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-green-500 to-green-900">
        <div className="max-w-2xl mx-auto bg-black min-h-screen shadow-xl/100">
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default App
