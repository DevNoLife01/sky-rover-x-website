"use client"

import React from "react"

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus("Gönderiliyor...")

    const formData = new FormData(e.target)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      if (response.ok) {
        setFormStatus("Mesajınız başarıyla gönderildi!")
        e.target.reset()
      } else {
        setFormStatus("Bir hata oluştu. Lütfen tekrar deneyin.")
      }
    } catch (error) {
      setFormStatus("Bir hata oluştu. Lütfen tekrar deneyin.")
    }

    setTimeout(() => setFormStatus(""), 5000)
  }

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll">İletişime Geçin</h2>
        <p className="section-subtitle animate-on-scroll">
          SkyRover X hakkında daha fazla bilgi almak veya sipariş vermek için formu doldurun, size en kısa sürede dönüş
          yapalım.
        </p>
        <form className="contact-form animate-on-scroll" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="a7ef9865-9d5f-4961-8961-3461b6341b82" />
          <input type="hidden" name="subject" value="New Contact Form Submission - SkyRover X" />
          <input type="hidden" name="from_name" value="SkyRover X Website" />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Telefon (Opsiyonel)</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesajınız</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            <span>Mesaj Gönder</span>
          </button>

          {formStatus && (
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                color: formStatus.includes("başarıyla") ? "var(--secondary)" : "var(--text-muted)",
              }}
            >
              {formStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

window.Contact = Contact
