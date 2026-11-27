import React from 'react'
import { motion } from 'framer-motion'
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <div className="hero-inner">
        <motion.img className="hero-logo" src="assets/lion-logo.png" alt="மதுரை மதுரா"
          initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }} />
        <motion.span className="hero-tag" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .3 }}>
          கடவுள் துணை &nbsp;•&nbsp; நல்ல சாப்பிடுங்க
        </motion.span>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .45, duration: .9 }}>
          மதுரா
        </motion.h1>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}>
          தேன் மற்றும் <b>தேன் சார்ந்த பொருட்கள்</b>
        </motion.h2>
        <motion.img className="hero-jar" src="assets/honey-jar.png" alt="தேன் ஜாடி"
          initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .95, duration: 1 }} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
          <a className="scroll-ind" href="#product" style={{ textDecoration: 'none', color: 'inherit' }}>
            <span>Scroll</span><span className="line" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
