"use client"

import React from "react"

const Hero = ({ onOpenUnity }) => {
  React.useEffect(() => {
    // Create particles
    const particlesContainer = document.querySelector(".hero-particles")
    if (particlesContainer) {
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div")
        particle.className = "particle"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 4}s`
        particlesContainer.appendChild(particle)
      }
    }
  }, [])

  return (
    <section id="hero" className="hero">
      <div className="hero-background"></div>
      <div className="hero-particles"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-on-scroll visible slide-left">
            <h1>SkyRover X ile Tanışın</h1>
            <p>
              Kişisel otonom balon asistanınız. Gelişmiş yapay zeka, güneş enerjisi ve hibrit itki sistemi ile her yerde
              yanınızda. Sadece hava durumu değil, tam bir gökyüzü asistanı.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={onOpenUnity}>
                <span>3D'de Görüntüle</span>
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <span>İletişime Geçin</span>
              </button>
            </div>
          </div>
          <div className="hero-image animate-on-scroll visible slide-right">
            <img src="public/images/placeholder.png" alt="SkyRover X Otonom Balon" />
          </div>
        </div>
      </div>
    </section>
  )
}

window.Hero = Hero
