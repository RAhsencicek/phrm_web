import React from 'react';
import { Link } from 'react-router-dom';

function Tutors() {
  return (
    <div className="tutors-page">
      <h1>Eğitmenler</h1>
      <p>Burası eğitmenler sayfasıdır.</p>
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default Tutors; 