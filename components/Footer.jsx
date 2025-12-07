const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>SkyRover X</h3>
            <p>Kişisel otonom balon asistanınız. Gökyüzünde özgürlük.</p>
          </div>
          <div className="footer-section">
            <h3>Hızlı Linkler</h3>
            <a href="#features">Özellikler</a>
            <a href="#specs">Teknik Özellikler</a>
            <a href="#pricing">Fiyatlandırma</a>
            <a href="#contact">İletişim</a>
          </div>
          <div className="footer-section">
            <h3>İletişim</h3>
            <p>Email: info@skyroverx.com</p>
            <p>Tel: +90 (555) 123 4567</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 SkyRover X. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}
