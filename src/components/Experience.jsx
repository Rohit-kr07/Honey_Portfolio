import React from 'react'
import { Droplets, HandHeart, Sparkles } from 'lucide-react'
export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="sec-head reveal">
        <span className="kicker">தேன் அனுபவம்</span>
        <h2>தங்க நிற ஓட்டம்</h2>
        <p>ஒவ்வொரு ஜாடியிலும் இயற்கையின் தங்க நிறம் — சுவை, மணம் மற்றும் பாரம்பரியம்.</p>
      </div>
      <div className="drip-stage">
        <img className="drip-honey" src="assets/honey-jar.png" alt="தேன்" />
        <div className="steps">
          <div className="step reveal">
            <span className="num">01</span>
            <Droplets className="ico" size={34} />
            <h4>சேகரிப்பு</h4>
            <p>தேனீக்கள் பூக்களிலிருந்து சேகரித்த மகரந்தத்திலிருந்து இயற்கையாக உருவாக்கப்படும் தேன்.</p>
          </div>
          <div className="step reveal">
            <span className="num">02</span>
            <HandHeart className="ico" size={34} />
            <h4>அர்ப்பணிப்பு</h4>
            <p>மரபு முறைப்படி, கவனமாக அறுவடை செய்து சுத்தமான முறையில் பாட்டில்களில் நிரப்பப்படுகிறது.</p>
          </div>
          <div className="step reveal">
            <span className="num">03</span>
            <Sparkles className="ico" size={34} />
            <h4>சுவை</h4>
            <p>காலை உணவு, தீ, மிளகாய் தூள் மற்றும் பாரம்பரிய உணவுகளுடன் இயற்கை இனிப்பை அனுபவியுங்கள்.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
