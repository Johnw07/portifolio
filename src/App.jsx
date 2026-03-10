import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticlesBackground from './components/ParticlesBackground'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [navHidden, setNavHidden] = useState(false)

  useEffect(() => {
    let lastScroll = 0

    const sections = Array.from(document.querySelectorAll('section[id]'))
    const animatedElements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )

    animatedElements.forEach(element => observer.observe(element))

    const onScroll = () => {
      const currentScroll = window.pageYOffset

      if (currentScroll <= 0) {
        setNavHidden(false)
      } else {
        setNavHidden(currentScroll > lastScroll && currentScroll > 120)
      }
      lastScroll = currentScroll

      sections.forEach(section => {
        const top = section.offsetTop - 140
        const bottom = top + section.offsetHeight
        if (currentScroll >= top && currentScroll < bottom) {
          setActiveSection(section.id)
        }
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <ParticlesBackground />
      <Header
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        activeSection={activeSection}
        navHidden={navHidden}
      />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
