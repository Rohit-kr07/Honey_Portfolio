import React from 'react'
import { MapPin, Phone, Mail, QrCode } from 'lucide-react'
export default function Details() {
  return (
    <section className="details" id="details">
      <div className="sec-head reveal">
        <span className="kicker">தயாரிப்பு விவரங்கள்</span>
        <h2>அறிந்து கொள்ளுங்கள்</h2>
      </div>
      <div className="container">
        <div className="details-grid">
          <div className="reveal">
            <div className="detail-rows">
              <div className="d-row"><MapPin className="ico" size={22} /><div><b>முகவரி</b><span>2/121, சின்னவத்தலாபுரம், பெண்ணாகரம், தருமபுரி – 636810</span></div></div>
              <div className="d-row"><Phone className="ico" size={22} /><div><b>தொலைபேசி / WhatsApp</b><span>+91 99431 74169</span></div></div>
              <div className="d-row"><Mail className="ico" size={22} /><div><b>மின்னஞ்சல்</b><span>infotoyali@gmail.com</span></div></div>
              <div className="d-row"><QrCode className="ico" size={22} /><div><b>QR குறியீடு</b><span>மேலும் அறிய QR ஐ ஸ்கேன் செய்யவும்</span></div></div>
            </div>
          </div>
          <div className="reveal" id="qr">
            <div className="qr-panel">
              <h3>Scan to know more</h3>
              <p>மேலும் அறிய ஸ்கேன் செய்யவும்</p>
              <img className="qr" src="assets/qr-code.png" alt="QR code" />
              <p className="scan-note">QR ஐ உங்கள் கேமராவால் ஸ்கேன் செய்யுங்கள்</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
