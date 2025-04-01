import React, { useEffect, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';
import Lottie from 'lottie-web';
import '../styles/InteractiveScroll.css';

gsap.registerPlugin(ScrollTrigger);

// 3D Glow Obje Bileşeni
function GlowingSphere() {
  const meshRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
  });
  
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#10a8a2"
        emissive="#0a8681"
        emissiveIntensity={0.5}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

// 3D Uçan Elemanlar Bileşeni
function FloatingElements() {
  return (
    <Canvas className="canvas-3d">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <GlowingSphere />
      </Float>
      
      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1.5} position={[-2, 1, 0]}>
        <mesh>
          <torusGeometry args={[0.5, 0.2, 16, 32]} />
          <meshStandardMaterial color="#ff6b6b" />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.8} position={[2, -1, 0]}>
        <mesh>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#feca57" wireframe />
        </mesh>
      </Float>
      
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}

function InteractiveScroll() {
  const containerRef = useRef(null);
  const lottieRef = useRef(null);
  const textSectionRef = useRef(null);
  const featureCardsRef = useRef(null);
  const statsRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax ve transform değerleri
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  
  useEffect(() => {
    // Lottie animasyonu için fallback mekanizması
    const lottieElement = lottieRef.current;
    
    if (lottieElement) {
      try {
        // Lottie animasyonu yükleme denemesi
        const lottieAnimation = Lottie.loadAnimation({
          container: lottieElement,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/animations/education-lottie.json'
        });
        
        // Hata durumunu ele al
        lottieAnimation.addEventListener('DOMLoaded', () => {
          console.log('Lottie animation loaded successfully');
        });
        
        lottieAnimation.addEventListener('data_failed', () => {
          console.warn('Lottie animation failed to load, showing fallback animation');
          
          // Fallback animasyon - basit CSS animasyonu göster
          const fallbackDiv = document.createElement('div');
          fallbackDiv.className = 'animation-placeholder';
          
          const animatedCircle = document.createElement('div');
          animatedCircle.className = 'animated-circle';
          
          fallbackDiv.appendChild(animatedCircle);
          lottieElement.innerHTML = '';
          lottieElement.appendChild(fallbackDiv);
        });
        
        // Temizleme işlemi
        return () => {
          lottieAnimation.destroy();
          if (lottieElement) {
            lottieElement.innerHTML = '';
          }
        };
      } catch (error) {
        console.error('Error initializing Lottie animation:', error);
        
        // Hata durumunda fallback animasyon göster
        const fallbackDiv = document.createElement('div');
        fallbackDiv.className = 'animation-placeholder';
        
        const animatedCircle = document.createElement('div');
        animatedCircle.className = 'animated-circle';
        
        fallbackDiv.appendChild(animatedCircle);
        lottieElement.innerHTML = '';
        lottieElement.appendChild(fallbackDiv);
      }
    }
    
    // GSAP animasyonları
    gsap.fromTo(
      '.feature-card',
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        scrollTrigger: {
          trigger: featureCardsRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true,
        }
      }
    );
    
    // Stats animasyonu
    const statItems = document.querySelectorAll('.stat-item');
    statItems.forEach((item) => {
      const countEl = item.querySelector('.stat-count');
      if (countEl && countEl.dataset && countEl.dataset.value) {
        const targetValue = parseInt(countEl.dataset.value);
        
        gsap.to(countEl, {
          innerText: targetValue,
          duration: 2,
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          onUpdate: function() {
            countEl.innerText = Math.floor(this.targets()[0]._gsap.innerText);
          }
        });
      }
    });
    
    // Temizleme işlemi
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="interactive-scroll" ref={containerRef}>
      {/* Hero Bölümü */}
      <section className="hero-section">
        <motion.div className="hero-content" style={{ y: y1, opacity: opacity1 }}>
          <h1>Geleceği<br/>Öğrenmeye<br/>Başla</h1>
          <p>Eczaneniz ve çevremiz için en yeşil çözüm</p>
          <button className="cta-button">Keşfet</button>
        </motion.div>
        
        <motion.div className="hero-visual" style={{ scale }}>
          <FloatingElements />
        </motion.div>
        
        <div className="scroll-indicator">
          <span>Aşağı Kaydır</span>
          <div className="scroll-arrow">↓</div>
        </div>
      </section>
      
      {/* Açıklama Bölümü */}
      <motion.section className="text-section" ref={textSectionRef} style={{ opacity: opacity2 }}>
        <div className="section-content">
          <h2>Öğrenmenin Yeni Yolu</h2>
          <p>Geleneksel sınıf ortamının ötesinde, tamamen interaktif ve kişiselleştirilmiş bir eğitim deneyimi sunuyoruz. İhtiyacınız olan tüm bilgilere anında erişim sağlayın.</p>
          
          <div className="lottie-container" ref={lottieRef}></div>
        </div>
      </motion.section>
      
      {/* Özellikler Bölümü */}
      <motion.section className="features-section" ref={featureCardsRef} style={{ opacity: opacity3 }}>
        <h2>Neden Bizi Seçmelisiniz?</h2>
        
        <div className="feature-cards">
          <div className="feature-card">
            <div className="card-icon">🎓</div>
            <h3>Uzman Eğitmenler</h3>
            <p>Alanında uzman eğitmenlerden öğrenin ve sorularınıza anında yanıt alın.</p>
          </div>
          
          <div className="feature-card">
            <div className="card-icon">🌐</div>
            <h3>Canlı Dersler</h3>
            <p>Gerçek zamanlı soru-cevap oturumları ve grup tartışmaları ile öğrenin.</p>
          </div>
          
          <div className="feature-card">
            <div className="card-icon">📚</div>
            <h3>Geniş Kütüphane</h3>
            <p>Binlerce kurs, e-kitap ve eğitim materyaline sınırsız erişim.</p>
          </div>
          
          <div className="feature-card">
            <div className="card-icon">📱</div>
            <h3>Mobil Erişim</h3>
            <p>İstediğiniz yerden, istediğiniz zaman, tüm cihazlardan erişim.</p>
          </div>
        </div>
      </motion.section>
      
      {/* İstatistikler Bölümü */}
      <motion.section className="stats-section" ref={statsRef} style={{ opacity: opacity4, y: y3 }}>
        <h2>Rakamlarla Başarımız</h2>
        
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-count" data-value="10000">0</span>
            <span className="stat-label">Öğrenci</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-count" data-value="500">0</span>
            <span className="stat-label">Kurs</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-count" data-value="50">0</span>
            <span className="stat-label">Ülke</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-count" data-value="95">0</span>
            <span className="stat-label">Memnuniyet %</span>
          </div>
        </div>
      </motion.section>
      
      {/* Dalga Efekti */}
      <div className="wave-divider">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0a8681" fillOpacity="1" d="M0,224L48,234.7C96,245,192,267,288,250.7C384,235,480,181,576,170.7C672,160,768,192,864,224C960,256,1056,288,1152,282.7C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Görsel Bileşen */}
      <div className="visual-components">
        <div className="floating-shape shape1"></div>
        <div className="floating-shape shape2"></div>
        <div className="floating-shape shape3"></div>
        <div className="glowing-circle"></div>
        <div className="gradient-background"></div>
      </div>
      
      {/* Paralaks Efektli Kartlar */}
      <section className="parallax-cards-section">
        <h2>En Popüler Kurslar</h2>
        
        <div className="parallax-cards">
          {[1, 2, 3].map((item) => (
            <motion.div 
              className="parallax-card"
              key={item}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: item * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="card-image">
                <img src={`https://via.placeholder.com/400x250?text=Course+${item}`} alt={`Kurs ${item}`} />
              </div>
              <div className="card-content">
                <h3>İleri Seviye Web Geliştirme {item}</h3>
                <p>Modern web teknolojileriyle profesyonel web uygulamaları geliştirmeyi öğrenin.</p>
                <div className="card-meta">
                  <span>⭐ 4.9</span>
                  <span>👥 2,345 öğrenci</span>
                </div>
                <button className="card-button">Kursa Git</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default InteractiveScroll; 