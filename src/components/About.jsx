import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-page">
      <h1>Hakkımızda</h1>
      <p>Burası hakkımızda sayfasıdır.</p>
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default About; 