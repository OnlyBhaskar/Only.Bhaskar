import React from 'react'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Tech from './components/Tech.jsx'
import Project from './components/Project.jsx'
import Contact from './components/Contact.jsx'  


function App() {
  return (
    <>
    <div className="fixed  inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    <main className='flex flex-col items-center px-8 md:px-8 lg:px-16'>
      <Navbar />
      <Hero />
      <Tech />
      <Project />
      <Contact />
    </main>
    
    </>
  )
}

export default App