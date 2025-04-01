import { Link } from 'react-router-dom';
import '../styles/Quiz.css';

function Quiz() {
  return (
    <div className="quiz-container">
      <h1>Hangi Pharmaton Size Daha Uygun?</h1>
      <div className="quiz-content">
        <p>Yaşam tarzınıza ve ihtiyaçlarınıza en uygun Pharmaton ürününü bulmak için aşağıdaki soruları yanıtlayın.</p>
        
        <div className="quiz-form">
          <div className="question">
            <h3>1. Yaş aralığınız nedir?</h3>
            <div className="options">
              <label>
                <input type="radio" name="age" value="18-35" />
                18-35
              </label>
              <label>
                <input type="radio" name="age" value="36-50" />
                36-50
              </label>
              <label>
                <input type="radio" name="age" value="50+" />
                50+
              </label>
            </div>
          </div>
          
          <div className="question">
            <h3>2. Enerji seviyenizi nasıl değerlendirirsiniz?</h3>
            <div className="options">
              <label>
                <input type="radio" name="energy" value="low" />
                Düşük
              </label>
              <label>
                <input type="radio" name="energy" value="medium" />
                Orta
              </label>
              <label>
                <input type="radio" name="energy" value="high" />
                Yüksek
              </label>
            </div>
          </div>
          
          <div className="question">
            <h3>3. Fiziksel aktivite seviyeniz nedir?</h3>
            <div className="options">
              <label>
                <input type="radio" name="activity" value="low" />
                Düşük
              </label>
              <label>
                <input type="radio" name="activity" value="medium" />
                Orta
              </label>
              <label>
                <input type="radio" name="activity" value="high" />
                Yüksek
              </label>
            </div>
          </div>
          
          <button className="submit-button">SONUÇLARI GÖSTER</button>
        </div>
      </div>
      
      <Link to="/" className="back-button">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default Quiz; 