import React, { useEffect, useState } from 'react'
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a className="nav-logo" href="#home">
        <img src="assets/lion-logo.png" alt="logo" />
        <span className="brand-ta">மதுரை மதுரா</span>
      </a>
      <ul className="nav-links">
        <li><a href="#product">தேன்</a></li>
        <li><a href="#experience">அனுபவம்</a></li>
        <li><a href="#mixed">பொருட்கள்</a></li>
        <li><a href="#details">தகவல்</a></li>
        <li className="keep"><a className="nav-cta" href="#qr">QR ஸ்கேன்</a></li>
      </ul>
    </nav>
  )
}
