import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
export default function ContactStrip() {
  return (
    <section className="contact-strip">
      <div className="container contact-grid">
        <div className="c-item reveal"><Phone className="ico" size={22} /><div><b>அழையுங்கள்</b><a href="tel:+919943174169">+91 99431 74169</a></div></div>
        <div className="c-item reveal"><Mail className="ico" size={22} /><div><b>மின்னஞ்சல்</b><a href="mailto:infotoyali@gmail.com">infotoyali@gmail.com</a></div></div>
        <div className="c-item reveal"><MapPin className="ico" size={22} /><div><b>முகவரி</b><span>பெண்ணாகரம், தருமபுரி – 636810</span></div></div>
      </div>
    </section>
  )
}
