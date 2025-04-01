import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/SimpleCourseCard3D.css';

function SimpleCourseCard3D({ course }) {
  const cardRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  return (
    <div
      className="simple-course-card-3d"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-content">
        <div className="course-image">
          <img src={`https://via.placeholder.com/300x200?text=Course+${course}`} alt={`Course ${course}`} />
          <div className="course-badge">Popüler</div>
        </div>
        <div className="course-details">
          <h3>Introduction to Programming {course}</h3>
          <div className="course-info">
            <span className="course-rating">⭐ 4.8</span>
            <span className="course-students">👥 1,234 students</span>
          </div>
          <div className="course-price">
            <span className="price">₺199.99</span>
            <Link to={`/course/${course}`} className="enroll-btn">Enroll Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleCourseCard3D; 