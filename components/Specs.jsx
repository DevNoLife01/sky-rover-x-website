const Specs = () => {
  const specs = [
    { label: "Maksimum İrtifa", value: "3000+ metre" },
    { label: "Uçuş Süresi", value: "24+ saat (güneş enerjisi ile)" },
    { label: "Maksimum Hız", value: "15-20 km/saat" },
    { label: "Balon Çapı", value: "2.5 metre" },
    { label: "Gondol Ağırlığı", value: "~1.5 kg" },
    { label: "Toplam Ağırlık", value: "~3.5 kg" },
    { label: "İletişim Menzili", value: "Küresel (Uydu IoT)" },
    { label: "GPS Hassasiyeti", value: "±2.5 metre" },
    { label: "Kamera Çözünürlüğü", value: "4K Video" },
    { label: "Güneş Paneli Gücü", value: "10W" },
    { label: "Batarya Kapasitesi", value: "5000 mAh" },
    { label: "Çalışma Sıcaklığı", value: "-20°C ile +50°C" },
  ]

  return (
    <section id="specs">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Teknik Özellikler</h2>
        <p className="section-subtitle animate-on-scroll">
          Mühendislik mükemmelliğinin ürünü. Her detay özenle tasarlandı.
        </p>
        <div className="specs-table animate-on-scroll">
          {specs.map((spec, index) => (
            <div key={index} className="specs-row">
              <div className="specs-label">{spec.label}</div>
              <div className="specs-value">{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

window.Specs = Specs
