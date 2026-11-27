import React from 'react'
export default function HoneyWave({ flip }) {
  return (
    <svg className="wave-divider" viewBox="0 0 1440 120" preserveAspectRatio="none"
      style={flip ? { transform: 'scaleY(-1)' } : {}} aria-hidden="true">
      <defs>
        <linearGradient id="wavegold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F5B301" />
          <stop offset="100%" stopColor="#B96E00" />
        </linearGradient>
      </defs>
      <path fill="url(#wavegold)" opacity="0.9"
        d="M0,60 C120,110 240,10 360,50 C480,90 600,20 720,55 C840,90 960,15 1080,50 C1200,85 1320,25 1440,60 L1440,120 L0,120 Z" />
      <path fill="#8a5a06" opacity="0.5"
        d="M0,80 C160,115 320,40 480,75 C640,110 800,45 960,78 C1120,111 1300,55 1440,85 L1440,120 L0,120 Z" />
    </svg>
  )
}
