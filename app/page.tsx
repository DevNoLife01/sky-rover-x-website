"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Rocket,
  CloudRain,
  MapPin,
  Battery,
  Shield,
  Wifi,
  Sun,
  Wind,
  Zap,
  Navigation,
  Globe,
  ChevronRight,
  Menu,
  X,
  Eye,
} from "lucide-react"
import { UnityModal } from "@/components/unity-modal"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUnityModalOpen, setIsUnityModalOpen] = useState(false)

  const features = [
    {
      icon: MapPin,
      title: "Her Yerde Takip",
      description: "Aracınızda, dağda veya şehirde gerçek zamanlı olarak konumunuzu takip eder.",
    },
    {
      icon: Navigation,
      title: "Eve Dönüş Fonksiyonu",
      description: "Tercih ettiğiniz konuma otomatik ve güvenli şekilde geri döner.",
    },
    {
      icon: CloudRain,
      title: "Gelişmiş Yağmur Tahmini",
      description: "Çok sensörlü olasılıksal uyarılar ile yaklaşan yağmuru önceden tespit eder.",
    },
    {
      icon: Zap,
      title: "Sıfır Helyum Kaybı",
      description: "Yenilikçi Değişken Buoyancy Modülü (VBM) ile gaz kaybetmeden irtifa ayarlanır.",
    },
    {
      icon: Sun,
      title: "Güneş Enerjili Dayanıklılık",
      description: "Esnek güneş panelleri sayesinde bataryalar uzun görev süreleri için şarj olur.",
    },
    {
      icon: Wind,
      title: "Hibrit İtki Sistemi",
      description: "Hassas yönlendirme için elektrikli pervaneler, bölgesel seyir için irtifa-sörf yeteneği.",
    },
    {
      icon: Shield,
      title: "Güvenlik Öncelikli",
      description: "Diğer uçaklara yaklaşınca otomatik HOLD modu, zarf patladığında paraşüt açılır.",
    },
    {
      icon: Wifi,
      title: "Güçlü İletişim",
      description: "Uydu IoT + LoRa ile sürekli telemetri ve uzaktan komut.",
    },
    {
      icon: Globe,
      title: "Tahmini Rota Planlama",
      description: "Önden belirlenen rotalara uygun konumlanma ve yerinde rüzgar analizi.",
    },
    {
      icon: Battery,
      title: "Darbeye Dayanıklı Tasarım",
      description: "Güçlendirilmiş gondol ve açılır paraşüt ile orta şiddette çarpmaları atlatır.",
    },
  ]

  const specs = [
    { label: "Kaldırma Kapasitesi", value: "20 kg" },
    { label: "Maksimum İrtifa", value: "10,000 m" },
    { label: "Görev Süresi", value: "72+ saat" },
    { label: "Menzil", value: "500+ km" },
    { label: "İletişim", value: "Uydu IoT + LoRa" },
    { label: "Enerji", value: "Güneş + LiFePO4" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl animate-in fade-in slide-in-from-top-4 duration-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Rocket className="h-7 w-7 text-primary animate-in zoom-in-50 duration-500" />
              <span className="text-xl font-bold tracking-tight animate-in fade-in slide-in-from-left-4 duration-700">
                SkyRover X
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex animate-in fade-in slide-in-from-top-4 duration-700 delay-300">
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105 duration-300"
              >
                Özellikler
              </a>
              <a
                href="#specs"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105 duration-300"
              >
                Teknik Özellikler
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105 duration-300"
              >
                Fiyatlandırma
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:scale-105 duration-300"
              >
                İletişime Geçin
              </a>
              <Button
                onClick={() => setIsUnityModalOpen(true)}
                variant="outline"
                size="sm"
                className="gap-2 hover:scale-105 transition-transform duration-300"
              >
                <Eye className="h-4 w-4" />
                3D'de Görüntüle
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden transition-transform hover:scale-110 duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden animate-in slide-in-from-top-4 duration-300">
            <div className="space-y-1 px-4 py-4">
              <a
                href="#features"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-foreground hover:translate-x-2 duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Özellikler
              </a>
              <a
                href="#specs"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-foreground hover:translate-x-2 duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Teknik Özellikler
              </a>
              <a
                href="#pricing"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-foreground hover:translate-x-2 duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Fiyatlandırma
              </a>
              <a
                href="#contact"
                className="block rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-accent hover:text-foreground hover:translate-x-2 duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişime Geçin
              </a>
              <Button
                onClick={() => {
                  setIsUnityModalOpen(true)
                  setIsMenuOpen(false)
                }}
                variant="outline"
                size="sm"
                className="mt-2 w-full gap-2"
              >
                <Eye className="h-4 w-4" />
                3D'de Görüntüle
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse-slow" />
          <div className="absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-primary/15 blur-3xl animate-pulse-slower" />
          <div className="absolute left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse-slowest" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 animate-in fade-in slide-in-from-top-4 duration-700 delay-100">
              Yenilikçi Hava Teknolojisi
            </Badge>
            <h1 className="mx-auto max-w-4xl text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
              SkyRover X ile Tanışın
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              Kişisel Otonom Balon Asistanınız. Kişisel hava asistanınız ve çevresel farkındalığınızda tam güvence
              yaşayın.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
              <Button
                size="lg"
                className="gap-2 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                Hemen Sipariş Verin
                <ChevronRight className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => setIsUnityModalOpen(true)}
                size="lg"
                variant="outline"
                className="gap-2 hover:scale-105 transition-transform duration-300"
              >
                <Eye className="h-5 w-5" />
                3D'de Görüntüle
              </Button>
            </div>

            <div className="relative mx-auto mt-16 max-w-5xl animate-in fade-in zoom-in-95 duration-1000 delay-700">
              <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br from-primary/20 via-primary/5 to-background shadow-2xl hover:shadow-primary/20 transition-shadow duration-500 hover:scale-[1.02] transform-gpu">
                <img
                  src="/autonomous-balloon-drone-flying-in-sky-with-parach.jpg"
                  alt="SkyRover X Autonomous Balloon System"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
              Özellikler
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Gelişmiş Teknoloji ile Tasarlandı
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              Hareket halindeyken yağmur veya güneş fark etmeksizin sizi korur.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border/40 p-6 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 duration-300 animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms`, animationDuration: "700ms" }}
                >
                  <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technical Specs Section */}
      <section id="specs" className="py-20 sm:py-24 bg-accent/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
              Teknik Özellikler
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Güçlü Performans
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {specs.map((spec, index) => (
              <Card
                key={index}
                className="border-border/40 bg-background p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:scale-105 animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${index * 100}ms`, animationDuration: "700ms" }}
              >
                <p className="text-sm font-medium text-muted-foreground">{spec.label}</p>
                <p className="mt-2 text-3xl font-bold tracking-tight bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                  {spec.value}
                </p>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <Card className="border-border/40 bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-in fade-in slide-in-from-left-4 duration-700 delay-300">
              <h3 className="mb-4 text-xl font-semibold">Değişken Buoyancy Modülü (VBM)</h3>
              <p className="leading-relaxed text-muted-foreground">
                Yenilikçi VBM sistemi, helyum kaybetmeden irtifa kontrolü sağlar. Harici balon pompası ile iç zarf
                basıncını ayarlayarak net kaldırma gücünü değiştirir. Bu, uzun görev süreleri ve sürdürülebilir
                operasyonlar için kritik bir özelliktir.
              </p>
            </Card>
            <Card className="border-border/40 bg-background p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
              <h3 className="mb-4 text-xl font-semibold">Güvenlik Sistemleri</h3>
              <p className="leading-relaxed text-muted-foreground">
                Çok katmanlı güvenlik yaklaşımı: otomatik HOLD modu diğer uçaklara yaklaşıldığında devreye girer, acil
                durumlarda paraşüt otomatik açılır ve şok montajlı gondol sert iniş senaryolarına karşı koruma sağlar.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
              Fiyatlandırma
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              Geleceğe Yatırım Yapın
            </h2>
          </div>

          <Card className="mx-auto mt-16 max-w-2xl border-primary/50 bg-background p-8 sm:p-12 transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 animate-in fade-in zoom-in-95 duration-700 delay-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold">SkyRover X</h3>
              <p className="mt-2 text-sm text-muted-foreground">VBM sistemi ve tam otonomi ile prototip seviyesi</p>
              <div className="mt-8">
                <span className="text-5xl font-bold tracking-tight bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                  14.950 USD
                </span>
              </div>
              <ul className="mt-8 space-y-3 text-left text-sm">
                <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed">Tüm gelişmiş özellikler dahil</span>
                </li>
                <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed">VBM (Değişken Buoyancy Modülü) sistemi</span>
                </li>
                <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed">Tam otonom navigasyon</span>
                </li>
                <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed">Uydu IoT + LoRa iletişim</span>
                </li>
                <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed">Güneş enerjili operasyon</span>
                </li>
                <li className="flex items-start gap-3 transition-all duration-300 hover:translate-x-2">
                  <ChevronRight className="h-5 w-5 shrink-0 text-primary" />
                  <span className="leading-relaxed">Acil paraşüt sistemi</span>
                </li>
              </ul>
              <Button
                size="lg"
                className="mt-8 w-full gap-2 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/50"
              >
                Sipariş Verin
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 sm:py-24 bg-accent/30">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
              İletişim
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              İletişime Geçin
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              SkyRover X hakkında daha fazla bilgi almak veya sipariş vermek için bizimle iletişime geçin.
            </p>
          </div>

          <Card className="border-border/40 bg-background p-8 sm:p-10 transition-all duration-500 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 animate-in fade-in zoom-in-95 duration-700 delay-300">
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              {/* Web3Forms Configuration */}
              <input type="hidden" name="access_key" value="a7ef9865-9d5f-4961-8961-3461b6341b82" />
              <input type="hidden" name="subject" value="Yeni İletişim Formu - SkyRover X" />
              <input type="hidden" name="from_name" value="SkyRover X Website" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />
              <input type="checkbox" name="botcheck" style={{ display: "none" }} />

              <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-700 delay-400">
                <label htmlFor="name" className="text-sm font-medium">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
                  placeholder="Adınız ve soyadınız"
                />
              </div>

              <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-700 delay-500">
                <label htmlFor="email" className="text-sm font-medium">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
                  placeholder="ornek@email.com"
                />
              </div>

              <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-700 delay-600">
                <label htmlFor="phone" className="text-sm font-medium">
                  Telefon <span className="text-muted-foreground">(Opsiyonel)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50"
                  placeholder="+90 555 123 45 67"
                />
              </div>

              <div className="space-y-2 animate-in fade-in slide-in-from-left-4 duration-700 delay-700">
                <label htmlFor="message" className="text-sm font-medium">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm transition-all duration-300 placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 hover:border-primary/50 resize-none"
                  placeholder="SkyRover X hakkında sormak istediğiniz soruları veya özel gereksinimlerinizi buraya yazın..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gap-2 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/50 animate-in fade-in zoom-in-95 duration-700 delay-800"
              >
                Mesaj Gönder
                <ChevronRight className="h-5 w-5" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="relative overflow-hidden border-primary/50 bg-gradient-to-br from-primary/10 via-background to-background p-8 sm:p-12 transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/30 animate-in fade-in zoom-in-95 duration-700">
            <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary/20 blur-3xl animate-pulse-slow" />
            <div className="relative text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Otonom Hava Teknolojisinin Geleceğini Keşfedin
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                SkyRover X ile gökyüzünün sınırlarını aşın. Profesyonel uygulamalar, araştırma ve kişisel kullanım için
                ideal.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  className="gap-2 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/50"
                >
                  Detaylı Bilgi Alın
                  <ChevronRight className="h-5 w-5" />
                </Button>
                <Button
                  onClick={() => setIsUnityModalOpen(true)}
                  size="lg"
                  variant="outline"
                  className="gap-2 hover:scale-105 transition-transform duration-300"
                >
                  <Eye className="h-5 w-5" />
                  3D Modeli İnceleyin
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-2">
                <Rocket className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">SkyRover X</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Otonom hava teknolojisinde yenilikçi çözümler.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <h3 className="mb-4 text-sm font-semibold">Ürün</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Özellikler
                  </a>
                </li>
                <li>
                  <a
                    href="#specs"
                    className="hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Teknik Özellikler
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Fiyatlandırma
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    İletişime Geçin
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <h3 className="mb-4 text-sm font-semibold">Şirket</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    İletişim
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Kariyer
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <h3 className="mb-4 text-sm font-semibold">Destek</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Dokümantasyon
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Yardım Merkezi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    Gizlilik Politikası
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground animate-in fade-in duration-700 delay-500">
            <p>© 2025 SkyRover X. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>

      {/* Unity Modal */}
      <UnityModal isOpen={isUnityModalOpen} onClose={() => setIsUnityModalOpen(false)} />
    </div>
  )
}
