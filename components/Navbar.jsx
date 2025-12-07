"use client"

import React from "react"

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-content">
          <a href="#" className="navbar-logo">
            SkyRover X
          </a>
          <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("hero")
                }}
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("features")
                }}
              >
                Özellikler
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("specs")
                }}
              >
                Teknik Özellikler
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("pricing")
                }}
              >
                Fiyatlandırma
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
              >
                İletişim
              </a>
            </li>
          </ul>
          <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

window.Navbar = Navbar
