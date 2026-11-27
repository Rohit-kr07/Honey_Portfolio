import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, ContactShadows, Environment } from '@react-three/drei'
import * as THREE from 'three'
import { Hexagon, Leaf, ShieldCheck } from 'lucide-react'

function HoneyJar() {
  const group = useRef()
  const [hovered, setHovered] = useState(false)
  const target = useRef({ x: 0, y: 0 })

  useFrame((state, delta) => {
    const { x, y } = state.pointer
    target.current.x = THREE.MathUtils.damp(target.current.x, y * 0.35, 4, delta)
    target.current.y = THREE.MathUtils.damp(target.current.y, x * 0.6, 4, delta)
    group.current.rotation.x = target.current.x
    group.current.rotation.y += delta * (hovered ? 0.9 : 0.35)
    group.current.scale.setScalar(THREE.MathUtils.damp(group.current.scale.x, hovered ? 1.12 : 1, 5, delta))
  })

  return (
    <Float speed={2.2} rotationIntensity={0.15} floatIntensity={1.4}>
      <group ref={group}
        onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        {/* glass jar body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.05, 1.15, 1.9, 48]} />
          <meshPhysicalMaterial color="#E8912D" metalness={0.05} roughness={0.15}
            transmission={0.55} thickness={0.8} transparent opacity={0.96} clearcoat={1} />
        </mesh>
        {/* honey fill */}
        <mesh position={[0, -0.18, 0]}>
          <cylinderGeometry args={[0.97, 1.07, 1.5, 48]} />
          <meshStandardMaterial color="#F5A302" emissive="#B96E00" emissiveIntensity={0.35} roughness={0.25} />
        </mesh>
        {/* wooden lid */}
        <mesh position={[0, 1.05, 0]}>
          <cylinderGeometry args={[1.12, 1.12, 0.3, 48]} />
          <meshStandardMaterial color="#7A4A12" roughness={0.6} metalness={0.1} />
        </mesh>
        <mesh position={[0, 1.24, 0]}>
          <cylinderGeometry args={[0.95, 0.95, 0.1, 48]} />
          <meshStandardMaterial color="#5A3208" roughness={0.5} />
        </mesh>
        {/* twine bow */}
        <mesh position={[0, 1.0, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.13, 0.045, 12, 64]} />
          <meshStandardMaterial color="#C9A15C" roughness={0.8} />
        </mesh>
        {/* honey dipper */}
        <mesh position={[1.55, 0.5, 0]} rotation={[0, 0, -0.5]}>
          <cylinderGeometry args={[0.06, 0.06, 2.2, 16]} />
          <meshStandardMaterial color="#B07B28" roughness={0.5} />
        </mesh>
        {[0, 1, 2].map(i => (
          <mesh key={i} position={[1.55, 1.45 + i * 0.14, 0]} rotation={[0, 0, -0.5]}>
            <cylinderGeometry args={[0.16 - i * 0.02, 0.16 - i * 0.02, 0.09, 20]} />
            <meshStandardMaterial color="#D9A13B" roughness={0.45} />
          </mesh>
        ))}
        {/* drip */}
        <mesh position={[-0.85, -0.75, 0.75]}>
          <sphereGeometry args={[0.14, 20, 20]} />
          <meshStandardMaterial color="#F5A302" emissive="#B96E00" emissiveIntensity={0.5} />
        </mesh>
        {/* glow ring base */}
        <mesh position={[0, -1.15, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.35, 1.62, 64]} />
          <meshBasicMaterial color="#F5B301" transparent opacity={hovered ? 0.55 : 0.3} side={THREE.DoubleSide} />
        </mesh>
      </group>
    </Float>
  )
}

export default function Product3D() {
  return (
    <section className="product-3d" id="product">
      <div className="product-3d-grid">
        <div className="canvas-wrap reveal">
          <Canvas camera={{ position: [0, 0.4, 5.2], fov: 42 }} dpr={[1, 2]}>
            <ambientLight intensity={0.5} />
            <spotLight position={[4, 6, 4]} angle={0.5} penumbra={1} intensity={2.2} color="#FFD98A" />
            <pointLight position={[-4, 2, -3]} intensity={1.2} color="#F5B301" />
            <HoneyJar />
            <Sparkles count={70} scale={[6, 4, 4]} size={3} speed={0.4} color="#FFD768" />
            <ContactShadows position={[0, -1.6, 0]} opacity={0.55} scale={8} blur={2.6} far={3} color="#000" />
            <Environment preset="sunset" />
          </Canvas>
          <p className="canvas-hint">Move your mouse — the jar follows</p>
        </div>
        <div className="product-info reveal">
          <span className="kicker" style={{ fontSize: 12, letterSpacing: '.45em', textTransform: 'uppercase', color: 'var(--deep-gold)' }}>பிரதான தயாரிப்பு</span>
          <h3 className="ta">தூய்மையான இயற்கைத் தேன்</h3>
          <p className="desc">
            மதுரை மதுரா இயற்கை முறையில் சேகரிக்கப்பட்ட தேன் — நல்ல சாப்பிடுங்க என்ற
            எங்கள் உறுதிமொழியுடன், கடவுள் துணையுடன் தயாரிக்கப்படுகிறது. இது தேன் மட்டுமே,
            இதனுடன் இனிப்பூட்டிகள் அல்லது சர்க்கரை சேர்க்கப்படவில்லை.
          </p>
          <ul className="feature-list">
            <li><Hexagon className="ico" size={22} /><div><b>100% இயற்கைத் தேன்</b><span>சுத்தமான மற்றும் அசல் தேன்</span></div></li>
            <li><Leaf className="ico" size={22} /><div><b>இயற்கை முறை சேகரிப்பு</b><span>தேனீக்கள் இயற்கையாக தயாரிக்கும் தேன்</span></div></li>
            <li><ShieldCheck className="ico" size={22} /><div><b>தரமான பொருட்கள்</b><span>தேன் சார்ந்த பாரம்பரிய பொருட்கள்</span></div></li>
          </ul>
          <a className="btn-gold" href="#qr">QR ஸ்கேன் செய்து ஆர்டர் செய்யுங்கள்</a>
        </div>
      </div>
    </section>
  )
}
