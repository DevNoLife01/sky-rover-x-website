"use client"

const Unity3DModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  const launchUnityApp = () => {
    // Unity uygulama başlatma protokolü
    window.location.href = "skyroverx://launch3d"

    // Alternatif olarak kullanıcıya indirme linki sunabilirsiniz
    setTimeout(() => {
      const userConfirm = confirm("Unity uygulaması yüklü değilse, indirmek ister misiniz?")
      if (userConfirm) {
        // Unity build indirme linki
        window.open("/downloads/SkyRoverX_3DViewer.zip", "_blank")
      }
    }, 2000)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>3D Görünüm</h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
          SkyRover X'i 3 boyutlu olarak görüntülemek için Unity uygulamasını başlatın. Ürünü tüm açılardan inceleyebilir
          ve detayları keşfedebilirsiniz.
        </p>

        <div style={{ marginBottom: "2rem" }}>
          <h3 style={{ fontSize: "1.2rem", marginBottom: "1rem", color: "var(--secondary)" }}>3D Model Özellikleri:</h3>
          <ul style={{ color: "var(--text-muted)", lineHeight: "2" }}>
            <li>• 360° İnteraktif Görünüm</li>
            <li>• Detaylı Komponent Gösterimi</li>
            <li>• Gerçekçi Malzeme Tekstürleri</li>
            <li>• Animasyonlu Sistem Görselleri</li>
            <li>• Teknik Özelliklere Hızlı Erişim</li>
          </ul>
        </div>

        <button className="btn btn-primary" style={{ width: "100%" }} onClick={launchUnityApp}>
          <span>Unity Uygulamasını Başlat</span>
        </button>
      </div>
    </div>
  )
}

window.Unity3DModal = Unity3DModal
