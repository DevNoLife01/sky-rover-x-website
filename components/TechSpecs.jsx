const TechSpecs = () => {
  const specs = [
    { icon: "⚖️", label: "Toplam Ağırlık", value: "2.8 kg" },
    { icon: "🎈", label: "Balon Kaldırma Kapasitesi", value: "3.2 kg" },
    { icon: "🔋", label: "Pil Ömrü", value: "8-12 saat" },
    { icon: "📡", label: "İletişim Menzili", value: "10 km" },
    { icon: "🌡️", label: "Çalışma Sıcaklığı", value: "-20°C ile +50°C" },
    { icon: "💨", label: "Maksimum Rüzgar", value: "15 m/s" },
    { icon: "📏", label: "Boyutlar", value: "25cm x 20cm x 15cm" },
    { icon: "☀️", label: "Güneş Paneli", value: "50W esnek panel" },
  ]

  return (
    <section id="specs" className="specs-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Teknik Özellikler</h2>
        <p className="section-subtitle animate-on-scroll">Gelişmiş teknoloji ve mühendislik</p>

        <div className="specs-grid grid grid-3">
          {specs.map((spec, index) => (
            <div key={index} className="spec-card card animate-on-scroll" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="spec-icon">{spec.icon}</div>
              <h3>{spec.label}</h3>
              <p className="spec-value">{spec.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
