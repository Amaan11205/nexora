import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Features from './components/Features/Features'
import About from './components/About/About'
import Pricing from './components/Pricing/Pricing'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

// App only puts the sections in order. Each section lives in its own component.
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
