import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float } from '@react-three/drei';
import '../styles/FloatingElements.css';

function Model({ path, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  const { scene } = useGLTF(path);
  const ref = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t / 4) / 8;
    ref.current.rotation.y = Math.sin(t / 2) / 8;
    ref.current.position.y = position[1] + Math.sin(t / 1.5) / 10;
  });
  
  return (
    <primitive 
      ref={ref}
      object={scene} 
      position={position}
      rotation={rotation}
      scale={scale} 
    />
  );
}

function FloatingElements() {
  return (
    <div className="floating-elements">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
          <Model 
            path="/models/laptop.glb" 
            scale={0.5} 
            position={[-2, 0, 0]} 
          />
        </Float>
        
        <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5}>
          <Model 
            path="/models/book.glb" 
            scale={0.3} 
            position={[2, 0.5, 0]}
            rotation={[0, Math.PI / 4, 0]} 
          />
        </Float>
        
        <Float speed={2} rotationIntensity={0.8} floatIntensity={2}>
          <Model 
            path="/models/graduation-hat.glb" 
            scale={0.4} 
            position={[0, 1.5, 0]} 
          />
        </Float>
      </Canvas>
    </div>
  );
}

export default FloatingElements; 