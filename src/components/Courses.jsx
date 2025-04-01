import React from 'react';
import { Link } from 'react-router-dom';

function Courses() {
  return (
    <div className="courses-page">
      <h1>Kurslar</h1>
      <p>Burası kurslar sayfasıdır.</p>
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default Courses; 