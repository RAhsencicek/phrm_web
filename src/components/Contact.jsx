import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact-page">
      <h1>İletişim</h1>
      <p>Burası iletişim sayfasıdır.</p>
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default Contact; 