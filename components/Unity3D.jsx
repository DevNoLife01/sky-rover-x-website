"use client"

const Unity3D = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const handleLaunchUnity = () => {
    window.open("unity://launch?project=skyroverx", "_blank")
    alert("Unity uygulaması başlatılıyor... Lütfen Unity'nin cihazınızda yüklü olduğundan emin olun.")
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h2>3D Model Görüntüleyici</h2>
        <p>SkyRover X'i interaktif 3D ortamda keşfedin</p>

        <div className="modal-body">
          <div className="unity-placeholder">
            <i className="fas fa-cube fa-5x"></i>
            <h3>Unity 3D Model</h3>
            <p>360 derece döndürme ve yakınlaştırma ile detaylı inceleme</p>
          </div>

          <button className="btn btn-primary" onClick={handleLaunchUnity}>
            <span>Unity Uygulamasını Başlat</span>
          </button>

          <div className="model-features">
            <h4>3D Model Özellikleri:</h4>
            <ul>
              <li>Gerçekçi malzeme ve doku detayları</li>
              <li>Animasyonlu bileşenler</li>
              <li>İç parça görünümü</li>
              <li>Ölçekli boyutlar</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
