import React from 'react';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="register-page">
      <h1>Kayıt Ol</h1>
      <form>
        <div>
          <label>Ad Soyad</label>
          <input type="text" placeholder="Ad Soyad" />
        </div>
        <div>
          <label>E-posta</label>
          <input type="email" placeholder="E-posta" />
        </div>
        <div>
          <label>Şifre</label>
          <input type="password" placeholder="Şifre" />
        </div>
        <div>
          <label>Şifre Tekrar</label>
          <input type="password" placeholder="Şifre Tekrar" />
        </div>
        <button type="submit">Kayıt Ol</button>
      </form>
      <p>
        Zaten hesabınız var mı? <Link to="/login">Giriş Yap</Link>
      </p>
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default Register; 