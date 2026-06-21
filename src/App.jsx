import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './components/Hero'
import Capabilities from './components/Capabilities'
import Approach from './components/Approach'
import Showcase from './components/Showcase'
import TransitionPathways from './components/TransitionPathways'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ParticleCanvas from './components/ParticleCanvas'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.gsap-reveal')
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            once: true,
          },
        }
      )
    })

    return () => ScrollTrigger.getAll().forEach((t) => t.kill())
  }, [])

  return (
    <>
      <div className="noise-overlay" />
      <ParticleCanvas />

      <main className="relative z-10">
        <Hero />

        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
          <Capabilities />
          <Approach />
          <Showcase />
          <TransitionPathways />
          <Team />
          <Contact />
        </div>

        <Footer />
      </main>
    </>
  )
}
