import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Background3D from './Background3D';
import { motion } from 'framer-motion';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-container">
      <Header />
      
      <section className="hero-section">
        <Background3D />
        
        <div className="hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Geleceği<br/>Öğrenmeye<br/>Başla
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle"
          >
            Profesyonellerin tercih ettiği en iyi kurslar burada
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button className="cta-button">Keşfet</button>
          </motion.div>
        </div>
        
        <motion.div 
          className="floating-circles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="geometric-shape"></div>
        </motion.div>
        
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <span>Aşağı Kaydır</span>
          <div className="scroll-arrow">↓</div>
        </motion.div>
      </section>
      
      <section className="features-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Neden Bizi Seçmelisiniz?
        </motion.h2>
        
        <div className="feature-grid">
          {[
            {
              icon: "🎓",
              title: "Uzman Eğitmenler",
              desc: "Alanında uzman eğitmenlerden öğrenin ve sorularınıza anında yanıt alın."
            },
            {
              icon: "🌐",
              title: "Canlı Dersler",
              desc: "Gerçek zamanlı soru-cevap oturumları ve grup tartışmaları ile öğrenin."
            },
            {
              icon: "📚",
              title: "Geniş Kütüphane",
              desc: "Binlerce kurs, e-kitap ve eğitim materyaline sınırsız erişim."
            },
            {
              icon: "📱",
              title: "Mobil Erişim",
              desc: "İstediğiniz yerden, istediğiniz zaman, tüm cihazlardan erişim."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      
      <section className="courses-section">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          En Popüler Kurslar
        </motion.h2>
        
        <div className="course-grid">
          {[1, 2, 3, 4, 5, 6].map((course, index) => (
            <motion.div
              key={course}
              className="course-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                boxShadow: "0 15px 30px rgba(79, 99, 61, 0.2)", 
                transition: { duration: 0.2 } 
              }}
            >
              <div className="course-image">
                <img src={`https://via.placeholder.com/300x180?text=Course+${course}`} alt={`Kurs ${course}`} />
                <div className="course-badge">Popüler</div>
              </div>
              <div className="course-content">
                <h3>İleri Seviye Web Geliştirme {course}</h3>
                <div className="course-meta">
                  <span className="rating">⭐ 4.9</span>
                  <span className="students">👥 2,345 öğrenci</span>
                </div>
                <p>Modern web teknolojileriyle profesyonel web uygulamaları geliştirmeyi öğrenin.</p>
                <button className="course-btn">Şimdi Başla</button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="see-all-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/courses" className="see-all-btn">Tüm Kursları Gör</Link>
        </motion.div>
      </section>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h2>CourseMania</h2>
            <p>Geleceğinizi Şekillendirin</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Kurumsal</h3>
              <ul>
                <li><Link to="/about">Hakkımızda</Link></li>
                <li><Link to="/contact">İletişim</Link></li>
                <li><Link to="/careers">Kariyer</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Kaynaklar</h3>
              <ul>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/faq">SSS</Link></li>
                <li><Link to="/help">Yardım Merkezi</Link></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Yasal</h3>
              <ul>
                <li><Link to="/terms">Kullanım Şartları</Link></li>
                <li><Link to="/privacy">Gizlilik Politikası</Link></li>
                <li><Link to="/cookie">Çerez Politikası</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2023 CourseMania. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
