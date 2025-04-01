import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div className="cart-page">
      <h1>Sepetim</h1>
      <div className="cart-items">
        <div className="cart-item">
          <div className="item-image">
            <img src="https://via.placeholder.com/100x70" alt="Kurs" />
          </div>
          <div className="item-details">
            <h3>Introduction to Programming</h3>
            <p>Eğitmen: John Doe</p>
          </div>
          <div className="item-price">₺199.99</div>
          <div className="item-actions">
            <button>Kaldır</button>
          </div>
        </div>
      </div>
      <div className="cart-summary">
        <div className="summary-row">
          <span>Ara Toplam:</span>
          <span>₺199.99</span>
        </div>
        <div className="summary-row">
          <span>İndirim:</span>
          <span>₺0.00</span>
        </div>
        <div className="summary-row total">
          <span>Toplam:</span>
          <span>₺199.99</span>
        </div>
        <button className="checkout-btn">Ödeme Yap</button>
      </div>
      <Link to="/">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default Cart; 