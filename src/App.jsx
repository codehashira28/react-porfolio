import { useState } from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import Footer from './components/Footer'


function App() {
  const [currentPage, setPage] = useState('About');
  return (
    <>
      <Nav currentPage={currentPage} setPage={ setPage }/>
      {currentPage === 'About' && <About />}
      {currentPage === 'Contact' && <Contact />}
      {currentPage === 'Portfolio' && <Portfolio />}
      {currentPage === 'Resume' && <Resume />}
      <Footer />
    </>
  )
}

export default App
