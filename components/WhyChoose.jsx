const WhyChoose = () => {
  const reasons = [
    {
      title: "Gerçek Zamanlı Hava Takibi",
      description: "Sadece tahmin değil, gerçek zamanlı meteorolojik veri toplama ve analiz",
      icon: "🌦️",
    },
    {
      title: "Otonom Operasyon",
      description: "GPS tabanlı takip ve otomatik konum kontrolü ile tam özerklik",
      icon: "🤖",
    },
    {
      title: "Güvenilir Kurtarma Sistemi",
      description: "Acil durumlarda otomatik paraşüt açılımı ile ekipmanınız güvende",
      icon: "🪂",
    },
    {
      title: "Uzun Süre Dayanıklılık",
      description: "Güneş enerjisi ile şarj edilen piller sayesinde kesintisiz çalışma",
      icon: "🔋",
    },
    {
      title: "Kolay Kullanım",
      description: "Mobil uygulama ile basit kontrol ve veri görüntüleme",
      icon: "📱",
    },
    {
      title: "Çoklu Sensör Paketi",
      description: "Sıcaklık, nem, basınç, rüzgar hızı ve daha fazlası",
      icon: "📊",
    },
  ]

  return (
    <section className="why-choose-section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Neden SkyRover X?</h2>
        <p className="section-subtitle animate-on-scroll">
          Sadece bir hava durumu cihazı değil, gökyüzünde size hizmet eden kişisel asistanınız
        </p>

        <div className="grid grid-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="reason-card card animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="reason-icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
