"use client"

import React from "react"

const Features = () => {
  const features = [
    {
      icon: "📍",
      title: "Her Yerde Takip",
      description: "Aracınızda, dağda veya şehirde gerçek zamanlı olarak konumunuzu takip eder.",
    },
    {
      icon: "🏠",
      title: "Eve Dönüş Fonksiyonu",
      description: "Tercih ettiğiniz konuma otomatik ve güvenli şekilde geri döner.",
    },
    {
      icon: "🌧️",
      title: "Gelişmiş Yağmur Tahmini",
      description: "Çok sensörlü olasılıksal uyarılar ile yaklaşan yağmuru önceden tespit eder.",
    },
    {
      icon: "⚡",
      title: "Sıfır Helyum Kaybı",
      description: "Yenilikçi Değişken Buoyancy Modülü (VBM) ile gaz kaybetmeden irtifa ayarlanır.",
    },
    {
      icon: "☀️",
      title: "Güneş Enerjili",
      description: "Esnek güneş panelleri sayesinde bataryalar uzun görev süreleri için şarj olur.",
    },
    {
      icon: "🚁",
      title: "Hibrit İtki Sistemi",
      description: "Hassas yönlendirme için elektrikli pervaneler, bölgesel seyir için irtifa-sörf yeteneği.",
    },
    {
      icon: "🛡️",
      title: "Güvenlik Öncelikli",
      description: "Otomatik HOLD modu, paraşüt sistemi ve şok montajlı gondol ile maksimum güvenlik.",
    },
    {
      icon: "📡",
      title: "Güçlü İletişim",
      description: "Uydu IoT + LoRa ile sürekli telemetri ve uzaktan komut imkanı.",
    },
    {
      icon: "🗺️",
      title: "Akıllı Rota Planlama",
      description: "Önden belirlenen rotalara uygun konumlanma ve yerinde rüzgar analizi.",
    },
  ]

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Özellikler</h2>
        <p className="section-subtitle animate-on-scroll">
          SkyRover X, havacılık teknolojisinin zirvesini temsil ediyor. Her özellik, size benzersiz bir deneyim sunmak
          için tasarlandı.
        </p>
        <div className="grid grid-3">
          {features.map((feature, index) => (
            <div key={index} className={`card feature-card animate-on-scroll stagger-${(index % 6) + 1}`}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

window.Features = Features
