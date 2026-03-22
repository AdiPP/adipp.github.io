import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for smooth entry animation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
