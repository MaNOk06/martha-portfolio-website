import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Stats from './components/Stats'
import Work from './components/Work'
import Experience from './components/Experience'
import Toolkit from './components/Toolkit'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <section className="section">
          <div className="shell">
            <Stats />
          </div>
        </section>
        <Work />
        <Experience />
        <Toolkit />
        <About />
      </main>
      <Footer />
    </>
  )
}
