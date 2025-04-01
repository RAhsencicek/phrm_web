import React, { useEffect, useRef } from 'react';
import '../styles/SimpleAnimatedBackground.css';

function SimpleAnimatedBackground() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    // Rastgele parçacıklar oluştur
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Rastgele boyut, pozisyon ve animasyon süresi
      const size = Math.random() * 15 + 5;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      container.appendChild(particle);
    }
    
    return () => {
      // Temizleme işlemi
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  
  return (
    <div className="simple-animated-background">
      <div ref={containerRef} className="particles-container"></div>
      <div className="wave-container">
        <div className="wave"></div>
        <div className="wave" style={{ animationDelay: '-5s', opacity: 0.3 }}></div>
        <div className="wave" style={{ animationDelay: '-2s', opacity: 0.5 }}></div>
      </div>
    </div>
  );
}

export default SimpleAnimatedBackground; 