import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>CourseMania'ya Giriş Yap</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input type="email" id="email" placeholder="E-posta adresinizi girin" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input type="password" id="password" placeholder="Şifrenizi girin" />
          </div>
          <div className="form-options">
            <label>
              <input type="checkbox" /> Beni hatırla
            </label>
            <Link to="/forgot-password">Şifremi unuttum</Link>
          </div>
          <button type="submit" className="login-button">Giriş Yap</button>
        </form>
        <div className="login-footer">
          <p>Hesabınız yok mu? <Link to="/register">Kaydol</Link></p>
        </div>
      </div>
      <Link to="/" className="back-to-home">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default Login;
