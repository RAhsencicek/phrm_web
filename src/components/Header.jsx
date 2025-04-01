import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(18, 18, 24, 0.8)']
  );
  const headerTextColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 1)', 'rgba(255, 255, 255, 1)']
  );
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      style={{ 
        backgroundColor: headerBackground,
        color: headerTextColor
      }}
    >
      <div className="logo">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CourseMania
        </motion.h1>
      </div>
      <nav className="nav-menu">
        <ul>
          <motion.li 
            className="active"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link to="/about">About</Link>
          </motion.li>
          <motion.li 
            className="dropdown"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/courses">Courses <span>▼</span></Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link to="/tutors">Tutors</Link>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link to="/contact">Contact</Link>
          </motion.li>
        </ul>
      </nav>
      <div className="auth-menu">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link to="/login" className="login-btn">Login</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/register" className="register-btn">Register</Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link to="/cart" className="cart-btn">
            <span className="cart-icon">🛒</span>
            <span className="cart-count">1</span>
          </Link>
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header; 