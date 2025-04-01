import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import '../styles/Background3D.css';

function Particles({ count = 500 }) {
  const mesh = useRef();
  const group = useRef();

  // Rastgele parçacıklar oluştur
  const particles = React.useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -20 + Math.random() * 40;
      const yFactor = -20 + Math.random() * 40;
      const zFactor = -20 + Math.random() * 40;
      temp.push({ factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  // Animasyon
  useFrame(() => {
    particles.forEach((particle, i) => {
      let { factor, speed, xFactor, yFactor, zFactor } = particle;
      // Her parçacık için hareket hesapla
      const x = (particle.mx / 10) * particle.factor;
      const y = (particle.my / 10) * particle.factor;
      const z = (particle.my / 10) * particle.factor;
      
      // Grup içindeki her parçacığı döndür
      group.current.children[i].position.set(
        xFactor + Math.cos((Date.now() * speed) / 100) * factor,
        yFactor + Math.sin((Date.now() * speed) / 100) * factor,
        zFactor + Math.cos((Date.now() * speed) / 100) * factor
      );
      
      // Size değişimi için pulsing efekti
      const scale = 0.5 + Math.sin((Date.now() * speed) / 500) * 0.2;
      group.current.children[i].scale.set(scale, scale, scale);
    });
    
    // Tüm grubu yavaşça döndür
    group.current.rotation.y += 0.002;
    group.current.rotation.x += 0.001;
  });

  return (
    <group ref={group}>
      {particles.map((particle, i) => (
        <mesh key={i} position={[particle.xFactor, particle.yFactor, particle.zFactor]}>
          <sphereGeometry args={[0.1 + Math.random() * 0.1, 8, 8]} />
          <meshStandardMaterial 
            color={new THREE.Color(0.2 + Math.random() * 0.1, 0.35 + Math.random() * 0.1, 0.13 + Math.random() * 0.1)} 
            emissive={new THREE.Color(0.2, 0.35, 0.13)} 
            emissiveIntensity={0.5}
            transparent
            opacity={0.6 + Math.random() * 0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

function Background3D() {
  return (
    <div className="background-canvas">
      <Canvas camera={{ position: [0, 0, 30], fov: 40 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        <Particles />
      </Canvas>
    </div>
  );
}

export default Background3D; 