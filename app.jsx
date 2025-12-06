"use client"

import React from "react"
import ReactDOM from "react-dom/client"

const App = () => {
  const [loading, setLoading] = React.useState(true)
  const [unityModalOpen, setUnityModalOpen] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 1500)

    const updateScrollProgress = () => {
      const scrollProgress = document.querySelector(".scroll-progress")
      if (scrollProgress) {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const scrolled = (window.scrollY / height) * 100
        scrollProgress.style.width = `${scrolled}%`
      }
    }

    window.addEventListener("scroll", updateScrollProgress)

    const cursor = document.createElement("div")
    cursor.className = "cursor"
    document.body.appendChild(cursor)

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    const addHoverEffect = () => cursor.classList.add("hover")
    const removeHoverEffect = () => cursor.classList.remove("hover")

    document.addEventListener("mousemove", moveCursor)

    setTimeout(() => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", addHoverEffect)
        el.addEventListener("mouseleave", removeHoverEffect)
      })
    }, 100)

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

    setTimeout(() => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el)
      })
    }, 100)

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
      document.removeEventListener("mousemove", moveCursor)
      observer.disconnect()
      cursor.remove()
    }
  }, [])

  return (
    <>
      {loading && (
        <div className="loading-screen">
          <div className="loading-content">
            <div className="loading-logo">SkyRover X</div>
            <div className="loading-spinner"></div>
          </div>
        </div>
      )}

      <div className={`scroll-progress ${loading ? "" : "visible"}`}></div>

      {window.Navbar && <window.Navbar />}
      {window.Hero && <window.Hero onOpenUnity={() => setUnityModalOpen(true)} />}
      {window.Features && <window.Features />}
      {window.Specs && <window.Specs />}
      {window.Pricing && <window.Pricing />}
      {window.Contact && <window.Contact />}

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>SkyRover X</h3>
              <p>Kişisel otonom balon asistanınız. Gökyüzünde özgürlük.</p>
            </div>
            <div className="footer-section">
              <h3>Hızlı Linkler</h3>
              <a href="#hero">Ana Sayfa</a>
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

      {window.Unity3DModal && <window.Unity3DModal isOpen={unityModalOpen} onClose={() => setUnityModalOpen(false)} />}
    </>
  )
}

setTimeout(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"))
  root.render(<App />)
}, 200)
