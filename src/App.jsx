import React, { useEffect, useState } from 'react'
import Loader from './components/Loader.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import HoneyWave from './components/HoneyWave.jsx'
import Product3D from './components/Product3D.jsx'
import Experience from './components/Experience.jsx'
import MixedProducts from './components/MixedProducts.jsx'
import Details from './components/Details.jsx'
import ContactStrip from './components/ContactStrip.jsx'
import Footer from './components/Footer.jsx'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (loading) return
    // cinematic scroll reveals
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      })
    })
    // parallax glow in hero
    gsap.to('.hero-glow', {
      yPercent: 40, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
    })
    ScrollTrigger.refresh()
  }, [loading])

  if (loading) return <Loader />
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HoneyWave flip={false} />
        <Product3D />
        <HoneyWave flip={true} />
        <Experience />
        <HoneyWave flip={false} />
        <MixedProducts />
        <HoneyWave flip={true} />
        <Details />
        <ContactStrip />
      </main>
      <Footer />
    </>
  )
}
