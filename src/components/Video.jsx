import { Link } from 'react-router-dom';
import '../styles/Video.css';

function Video() {
  return (
    <div className="video-container">
      <h1>Pharmaton Reklam Filmi</h1>
      
      <div className="video-player">
        <iframe 
          width="800" 
          height="450" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="Pharmaton Reklam Filmi" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      
      <div className="video-description">
        <h2>KENDİNİ DURDURMA!</h2>
        <p>Pharmaton ile hayatın enerjisini hisset. Günlük yaşamın zorluklarıyla baş etmek ve performansını en üst düzeye çıkarmak için Pharmaton ürünleri yanında.</p>
      </div>
      
      <Link to="/" className="back-button">Ana Sayfaya Dön</Link>
    </div>
  );
}

export default Video; 