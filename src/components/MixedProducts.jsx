import React from 'react'
const products = [
  { img: 'assets/product-murungai.png', ta: 'முருங்கை தேன்', en: 'Moringa Honey', desc: 'முருங்கை மலர்களிலிருந்து பெறப்பட்ட தனித்துவமான சுவை கொண்ட தேன்.' },
  { img: 'assets/product-panaiver.png', ta: 'பனைமர் தேன்', en: 'Palm Honey', desc: 'பனை மரத்திலிருந்து இயற்கை முறையில் எடுக்கப்பட்ட பாரம்பரிய தேன்.' },
  { img: 'assets/product-ilachi.png', ta: 'இலச்சி தேன்', en: 'Cardamom Honey', desc: 'இலச்சி நறுமணத்துடன் கலந்த சிறப்பு தேன் சார்ந்த பொருள்.' },
  { img: 'assets/product-poondu.png', ta: 'பூண்டு தேன்', en: 'Garlic Honey', desc: 'பூண்டுடன் இணைந்த ஆரோக்கிய தேன் சார்ந்த பாரம்பரிய பொருள்.' },
  { img: 'assets/product-milagu.png', ta: 'வாய் பற்றினால் மிளகாய் தேன்', en: 'Chili Honey', desc: 'காரத்தன்மை கொண்ட மிளகாயுடன் கலந்த தனித்துவமான தேன்.' },
]
export default function MixedProducts() {
  return (
    <section className="mixed" id="mixed">
      <div className="sec-head reveal">
        <span className="kicker">தேன் சார்ந்த பொருட்கள்</span>
        <h2>இயற்கையின் தேர்வுகள்</h2>
        <p>பூக்கள், மூலிகைகள் மற்றும் பாரம்பரிய முறைகளுடன் தயாரிக்கப்பட்ட தேன் சார்ந்த பொருட்கள்.</p>
      </div>
      <div className="container">
        <div className="mixed-grid">
          {products.map((p, i) => (
            <div className="p-card reveal" key={i}>
              <div className="img-wrap"><img src={p.img} alt={p.ta} /></div>
              <div className="body">
                <h4>{p.ta}</h4>
                <div className="en">{p.en}</div>
                <p>{p.desc}</p>
              </div>
              <span className="shine" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
