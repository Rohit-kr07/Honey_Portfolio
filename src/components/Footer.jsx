import React from 'react'
export default function Footer() {
  return (
    <footer className="footer">
      <img src="assets/lion-logo.png" alt="மதுரை மதுரா" />
      <div className="f-title">மதுரை மதுரா</div>
      <p className="f-sub">தேன் மற்றும் தேன் சார்ந்த பொருட்கள் • நல்ல சாப்பிடுங்க......</p>
      <ul className="f-links">
        <li><a href="#home">முகப்பு</a></li>
        <li><a href="#product">தேன்</a></li>
        <li><a href="#mixed">பொருட்கள்</a></li>
        <li><a href="#details">தகவல்</a></li>
        <li><a href="#qr">QR</a></li>
      </ul>
      <p className="copy">© {new Date().getFullYear()} மதுரை மதுரா — கடவுள் துணை. All rights reserved.</p>
    </footer>
  )
}
