"use client"

const Pricing = () => {
  return (
    <section id="pricing">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Fiyatlandırma</h2>
        <p className="section-subtitle animate-on-scroll">
          Havacılık teknolojisine erişim artık çok daha kolay. Profesyonel çözümler için özel paketler.
        </p>
        <div className="grid grid-2" style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div className="card pricing-card animate-on-scroll stagger-1">
            <div className="pricing-header">
              <h3 className="pricing-title">Standart</h3>
              <div className="pricing-price">$14,950</div>
              <div className="pricing-period">Tek seferlik ödeme</div>
            </div>
            <ul className="pricing-features">
              <li>VBM Sistemi</li>
              <li>Tam Otonomi</li>
              <li>GPS Takip</li>
              <li>LoRa İletişim</li>
              <li>Güneş Panelleri</li>
              <li>Paraşüt Sistemi</li>
              <li>1 Yıl Garanti</li>
              <li>Temel Destek</li>
            </ul>
            <button
              className="btn btn-secondary"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span>İletişime Geçin</span>
            </button>
          </div>

          <div className="card pricing-card animate-on-scroll stagger-2 glowing">
            <div className="pricing-header">
              <h3 className="pricing-title">Profesyonel</h3>
              <div className="pricing-price">$19,950</div>
              <div className="pricing-period">Tek seferlik ödeme</div>
            </div>
            <ul className="pricing-features">
              <li>Tüm Standart Özellikler</li>
              <li>Uydu IoT İletişim</li>
              <li>4K Kamera Sistemi</li>
              <li>Gelişmiş Sensörler</li>
              <li>AI Rota Planlama</li>
              <li>Özel Yazılım Desteği</li>
              <li>2 Yıl Garanti</li>
              <li>Premium Destek</li>
            </ul>
            <button
              className="btn btn-primary"
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span>Hemen Sipariş Ver</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

window.Pricing = Pricing
