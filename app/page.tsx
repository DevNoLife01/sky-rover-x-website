"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CloudRain,
  MapPin,
  Shield,
  Wifi,
  Sun,
  Wind,
  Zap,
  Navigation,
  ChevronRight,
  Menu,
  X,
  Rocket,
  ArrowRight,
  Check,
  Boxes,
  Sparkles,
  Target,
  Globe,
  Cpu,
  Radio,
  Battery,
  Eye,
  Download,
} from "lucide-react"

// Particle component for background effects
function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-particle-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
          }}
        />
      ))}
    </div>
  )
}

// Floating orbs component
function FloatingOrbs() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Primary orb */}
      <div className="absolute left-1/4 top-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[150px] animate-blob-slow" />
      {/* Accent orb */}
      <div className="absolute right-1/4 top-1/2 w-[500px] h-[500px] rounded-full bg-accent/20 blur-[120px] animate-blob animation-delay-2000" />
      {/* Third orb */}
      <div className="absolute left-1/2 bottom-1/4 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[100px] animate-blob animation-delay-4000" />
      {/* Extra orbs */}
      <div className="absolute right-1/3 top-1/4 w-[300px] h-[300px] rounded-full bg-accent/10 blur-[80px] animate-float-slow animation-delay-3000" />
      <div className="absolute left-1/3 bottom-1/3 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[90px] animate-float-reverse animation-delay-5000" />
    </div>
  )
}

// Animated text component with typewriter effect
function AnimatedText({ text, className = "" }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 50)

    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [text])

  return (
    <span className={className}>
      {displayText}
      <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
    </span>
  )
}

// Stats counter animation
function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const end = value
    const duration = 2000
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, isVisible])

  return (
    <span ref={ref}>
      {count.toLocaleString("tr-TR")}
      {suffix}
    </span>
  )
}

// Glowing button component
function GlowButton({
  children,
  className = "",
  onClick,
  variant = "primary",
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: "primary" | "outline"
}) {
  return (
    <button
      onClick={onClick}
      className={`
        relative group overflow-hidden rounded-xl px-8 py-4 font-semibold transition-all duration-500
        ${
          variant === "primary"
            ? "bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground"
            : "bg-transparent border-2 border-primary/50 text-foreground hover:border-primary"
        }
        hover:scale-105 hover:shadow-2xl
        ${className}
      `}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient" />

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />

      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}

// Feature card with advanced animations
function FeatureCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: any
  title: string
  description: string
  index: number
}) {
  return (
    <Card
      className="group relative overflow-hidden border-border/40 bg-card/50 backdrop-blur-xl p-6 transition-all duration-700 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 animate-fade-in-up glass"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />

      {/* Animated border glow */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-glow" />

      {/* Floating particles inside card */}
      <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative">
        {/* Icon with animations */}
        <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-4 transition-all duration-700 group-hover:bg-primary/20 group-hover:scale-125 group-hover:rotate-12 group-hover:shadow-lg animate-scale-pulse">
          <Icon className="h-6 w-6 text-primary group-hover:animate-bounce-subtle" />
        </div>

        <h3 className="mb-3 text-lg font-bold group-hover:text-primary transition-colors duration-300 group-hover:animate-text-glow">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Corner decoration */}
      <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-tl from-primary/20 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150" />
    </Card>
  )
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const features = [
    {
      icon: MapPin,
      title: "Gerçek Zamanlı İzleme",
      description:
        "SkyRover'ınızı hassas GPS takibi ile her yerde izleyin. Araçta, dağlarda veya şehir ortamında kesintisiz konum bilgisi.",
    },
    {
      icon: Navigation,
      title: "Akıllı Eve Dönüş",
      description: "Gelişmiş yol bulma algoritmaları ile tercih ettiğiniz konuma otomatik ve güvenli şekilde döner.",
    },
    {
      icon: CloudRain,
      title: "Hava Durumu Tahmini",
      description: "Çoklu sensör olasılıksal uyarılar, yaklaşan yağmur ve hava desenlerini önceden tespit eder.",
    },
    {
      icon: Zap,
      title: "Sıfır Helyum Kaybı",
      description:
        "Yenilikçi Değişken Kaldırma Modülü (VBM), sürdürülebilir operasyonlar için gaz kaybı olmadan irtifa ayarlar.",
    },
    {
      icon: Sun,
      title: "Güneş Enerjisi Sistemi",
      description: "Esnek güneş panelleri, uzatılmış görev süreleri için pilleri sürekli şarj eder.",
    },
    {
      icon: Wind,
      title: "Hibrit İtki Sistemi",
      description: "Hassas manevra için elektrikli pervaneler, bölgesel seyir için irtifa sörf yeteneği.",
    },
    {
      icon: Shield,
      title: "Çok Katmanlı Güvenlik",
      description: "Otomatik BEKLE modu, acil paraşüt açılımı ve şok emici gondol koruması.",
    },
    {
      icon: Wifi,
      title: "Güçlü İletişim",
      description: "Uydu IoT + LoRa bağlantısı, sürekli telemetri ve uzaktan komut yetenekleri sağlar.",
    },
  ]

  const specs = [
    { label: "Yük Kapasitesi", value: 20, suffix: " kg", icon: Target },
    { label: "Maksimum İrtifa", value: 10000, suffix: " m", icon: Globe },
    { label: "Görev Süresi", value: 72, suffix: "+ saat", icon: Battery },
    { label: "Menzil", value: 500, suffix: "+ km", icon: Radio },
  ]

  const handleUnityView = () => {
    // Unity Hub deep link to open Unity with project
    const unityProjectPath = "unityhub://2022.3.0f1/SkyRoverX"
    window.location.href = unityProjectPath

    // Fallback: After a short delay, offer to download the Unity package
    setTimeout(() => {
      const element = document.createElement("a")
      element.href = "/SkyRoverX.unitypackage"
      element.download = "SkyRoverX.unitypackage"
      document.body.appendChild(element)
      element.click()
      document.body.removeChild(element)
    }, 1000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form gönderildi:", email)
  }

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      {/* Background effects */}
      <FloatingOrbs />
      <Particles />

      {/* Grid pattern overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none" />

      {/* Mouse follower glow */}
      <div
        className="fixed w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none transition-all duration-300 ease-out -z-5"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
        }}
      />

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-down ${
          scrollY > 50 ? "bg-background/80 backdrop-blur-2xl border-b border-border/40 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 animate-fade-in group cursor-pointer">
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent animate-pulse-glow group-hover:scale-110 transition-transform duration-300">
                <Rocket className="h-6 w-6 text-primary-foreground animate-bounce-subtle" />
                <div className="absolute inset-0 rounded-xl animate-pulse-ring bg-primary/30" />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-foreground to-accent bg-clip-text text-transparent animate-gradient group-hover:animate-text-glow">
                SkyRover X
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {["Özellikler", "Teknoloji", "Teknik Özellikler", "Fiyat"].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="relative text-sm font-medium text-muted-foreground transition-all hover:text-foreground group animate-fade-in"
                  style={{ animationDelay: `${i * 100 + 200}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
                </a>
              ))}

              {/* Unity Button */}
              <Button
                onClick={handleUnityView}
                size="sm"
                variant="outline"
                className="gap-2 bg-transparent border-primary/50 hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 animate-fade-in animation-delay-600 group"
              >
                <Boxes className="h-4 w-4 group-hover:animate-spin" />
                <span>Unity'de Görüntüle</span>
              </Button>

              <GlowButton className="animate-fade-in animation-delay-700">
                Başlayın
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </GlowButton>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 animate-fade-in-rotate" />
              ) : (
                <Menu className="h-6 w-6 animate-fade-in" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-border/40 bg-background/95 backdrop-blur-2xl md:hidden animate-slide-down">
            <div className="space-y-2 px-4 py-6">
              {["Özellikler", "Teknoloji", "Teknik Özellikler", "Fiyat"].map((item, i) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all hover:bg-primary/10 hover:text-foreground hover:translate-x-2 duration-300 animate-fade-in-left"
                  style={{ animationDelay: `${i * 50}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <Button
                onClick={handleUnityView}
                variant="outline"
                className="w-full mt-4 gap-2 bg-transparent border-primary/50 animate-fade-in-up animation-delay-300"
              >
                <Boxes className="h-4 w-4" />
                Unity'de Görüntüle
              </Button>
              <Button className="w-full mt-2 gap-2 animate-fade-in-up animation-delay-400">
                Başlayın
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
        {/* Animated rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[600px] h-[600px] rounded-full border border-primary/10 animate-rotate-slow" />
          <div className="absolute inset-10 rounded-full border border-accent/10 animate-rotate-reverse" />
          <div className="absolute inset-20 rounded-full border border-primary/5 animate-rotate-slow animation-delay-2000" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <Badge variant="secondary" className="w-fit animate-bounce-slow glass px-4 py-2 text-sm font-medium">
                <Sparkles className="h-4 w-4 mr-2 animate-twinkle" />
                Yeni Nesil Hava Teknolojisi
              </Badge>

              <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
                <span className="animate-fade-in-up block">Otonom Zeka</span>
                <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient animate-fade-in-up animation-delay-200 animate-text-glow">
                  <AnimatedText text="Uçuşa Geçiyor" />
                </span>
              </h1>

              <p className="text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-xl animate-fade-in-up animation-delay-400">
                SkyRover X ile hava teknolojisinin geleceğini deneyimleyin — hassasiyet, dayanıklılık ve eşsiz yetenek
                için tasarlanmış gelişmiş bir otonom balon drone sistemi.
              </p>

              {/* Price Tag */}
              <div className="animate-fade-in-up animation-delay-500">
                <div className="inline-flex items-center gap-4 glass rounded-2xl px-6 py-4 animate-pulse-glow">
                  <div>
                    <p className="text-sm text-muted-foreground">Perakende Satış Fiyatı</p>
                    <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
                      $14.950
                    </p>
                  </div>
                  <div className="h-12 w-px bg-border/50" />
                  <div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent animate-bounce-subtle">
                      Özel Fiyat
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 animate-fade-in-up animation-delay-600">
                <GlowButton>
                  Demo Talep Et
                  <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </GlowButton>

                <GlowButton onClick={handleUnityView} variant="outline">
                  <Boxes className="h-5 w-5 animate-wobble" />
                  Unity'de Görüntüle
                </GlowButton>
              </div>

              {/* Specs grid */}
              <div className="grid grid-cols-2 gap-6 pt-4 sm:grid-cols-4 animate-fade-in-up animation-delay-800">
                {specs.map((spec, index) => {
                  const Icon = spec.icon
                  return (
                    <div
                      key={index}
                      className="group space-y-2 p-4 rounded-xl glass hover:bg-primary/5 transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer"
                      style={{ animationDelay: `${index * 100 + 800}ms` }}
                    >
                      <Icon className="h-5 w-5 text-primary mb-2 group-hover:animate-bounce-subtle" />
                      <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        <AnimatedCounter value={spec.value} suffix={spec.suffix} />
                      </p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{spec.label}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column - Product Image */}
            <div
              className="relative lg:h-[700px] h-[500px] animate-fade-in animation-delay-400"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl animate-pulse-slow" />

              {/* Orbiting elements */}
              <div className="absolute inset-0 animate-orbit">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse-glow" />
              </div>
              <div className="absolute inset-0 animate-orbit-reverse animation-delay-2000">
                <div className="w-3 h-3 rounded-full bg-accent animate-pulse-glow" />
              </div>

              {/* Main image */}
              <div className="relative h-full w-full group">
                <img
                  src="/skyrover-device.png"
                  alt="SkyRover X Otonom Drone Sistemi"
                  className="relative h-full w-full object-contain drop-shadow-2xl animate-float transition-all duration-700 group-hover:scale-105 group-hover:drop-shadow-[0_0_80px_rgba(100,150,255,0.4)]"
                />

                {/* Floating labels */}
                <div className="absolute top-1/4 left-0 glass rounded-xl px-4 py-2 animate-float-horizontal animation-delay-1000 hidden lg:block">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-primary animate-pulse" />
                    <span className="text-sm font-medium">AI İşlemci</span>
                  </div>
                </div>

                <div className="absolute top-1/2 right-0 glass rounded-xl px-4 py-2 animate-float animation-delay-2000 hidden lg:block">
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-accent animate-pulse" />
                    <span className="text-sm font-medium">4K Kamera</span>
                  </div>
                </div>

                <div className="absolute bottom-1/4 left-1/4 glass rounded-xl px-4 py-2 animate-float-reverse animation-delay-3000 hidden lg:block">
                  <div className="flex items-center gap-2">
                    <Radio className="h-4 w-4 text-primary animate-pulse" />
                    <span className="text-sm font-medium">Uydu Bağlantısı</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-slide-up" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="özellikler" className="py-24 sm:py-32 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
        <div className="absolute inset-0 bg-grid-pattern-dense opacity-30" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-20">
            <Badge variant="secondary" className="animate-bounce-slow glass px-4 py-2">
              <Sparkles className="h-4 w-4 mr-2 animate-twinkle" />
              Özellikler
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl animate-fade-in-up">
              <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-gradient">
                Mükemmellik İçin Tasarlandı
              </span>
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground animate-fade-in-up animation-delay-200">
              Her bileşen üstün performans, güvenilirlik ve yenilik sunmak için özenle tasarlanmıştır.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="teknoloji" className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-20">
            <Badge variant="secondary" className="animate-bounce-slow glass px-4 py-2">
              <Cpu className="h-4 w-4 mr-2 animate-pulse" />
              Teknoloji
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl animate-fade-in-up">
              Her Seviyede İnovasyon
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* VBM Card */}
            <Card className="group relative overflow-hidden border-border/40 bg-card/50 backdrop-blur-xl p-8 sm:p-10 transition-all duration-700 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-3 animate-fade-in-left glass">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-blob" />

              <div className="relative">
                <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 animate-pulse-glow">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-4 text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors animate-fade-in">
                  Değişken Kaldırma Modülü
                </h3>
                <p className="leading-relaxed text-muted-foreground mb-8 text-lg">
                  Devrimci VBM sistemi, helyum kaybı olmadan irtifa kontrolü sağlar. Harici bir balon pompası, net
                  kaldırma kuvvetini değiştirmek için iç zarf basıncını ayarlar.
                </p>
                <ul className="space-y-4">
                  {[
                    "İrtifa değişiklikleri sırasında sıfır gaz tüketimi",
                    "Hassas dikey konumlandırma",
                    "Uzatılmış operasyonel ömür",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm animate-fade-in-left"
                      style={{ animationDelay: `${i * 150}ms` }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-dot">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>

            {/* Safety Card */}
            <Card className="group relative overflow-hidden border-border/40 bg-card/50 backdrop-blur-xl p-8 sm:p-10 transition-all duration-700 hover:border-accent/50 hover:shadow-2xl hover:-translate-y-3 animate-fade-in-right animation-delay-200 glass">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-2000" />

              <div className="relative">
                <div className="mb-6 inline-flex rounded-2xl bg-accent/10 p-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 glow-accent">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="mb-4 text-2xl sm:text-3xl font-bold group-hover:text-accent transition-colors animate-fade-in">
                  Çok Katmanlı Güvenlik
                </h3>
                <p className="leading-relaxed text-muted-foreground mb-8 text-lg">
                  Kapsamlı güvenlik yaklaşımı: diğer hava araçlarına yaklaşırken otomatik BEKLE modu, kritik durumlarda
                  acil paraşüt ve şok emici gondol koruması.
                </p>
                <ul className="space-y-4">
                  {["Çarpışma önleme sistemi", "Otomatik paraşüt açılımı", "Darbe dirençli gondol tasarımı"].map(
                    (item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-sm animate-fade-in-right"
                        style={{ animationDelay: `${i * 150}ms` }}
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center animate-pulse-dot">
                          <Check className="h-4 w-4 text-accent" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section id="teknik-özellikler" className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center space-y-6 max-w-3xl mx-auto mb-20">
            <Badge variant="secondary" className="animate-bounce-slow glass px-4 py-2">
              <Target className="h-4 w-4 mr-2 animate-pulse" />
              Teknik Özellikler
            </Badge>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl animate-fade-in-up">
              Performans İçin Üretildi
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { label: "Yük Kapasitesi", value: "20 kg", icon: Target },
              { label: "Maksimum İrtifa", value: "10.000 m", icon: Globe },
              { label: "Görev Süresi", value: "72+ saat", icon: Battery },
              { label: "Operasyonel Menzil", value: "500+ km", icon: Radio },
              { label: "İletişim", value: "IoT + LoRa", icon: Wifi },
              { label: "Güç Sistemi", value: "Güneş + Li", icon: Sun },
            ].map((spec, index) => {
              const Icon = spec.icon
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-border/40 bg-card/50 backdrop-blur-xl p-8 transition-all duration-700 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-3 hover:scale-105 animate-fade-in-up glass"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                  <div className="relative">
                    <Icon className="h-6 w-6 text-primary mb-4 group-hover:animate-bounce-subtle" />
                    <p className="text-sm font-medium text-muted-foreground mb-2">{spec.label}</p>
                    <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent animate-gradient group-hover:animate-text-glow">
                      {spec.value}
                    </p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section id="fiyat" className="py-24 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-slow" />

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
          <Card className="relative overflow-hidden border-border/40 bg-card/50 backdrop-blur-2xl p-8 sm:p-16 text-center animate-fade-in-up glass animate-border-glow">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-shimmer" />
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-blob" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />

            <div className="relative">
              <Badge variant="secondary" className="mb-6 animate-bounce-slow glass px-4 py-2">
                <Sparkles className="h-4 w-4 mr-2 animate-twinkle" />
                Özel Teklif
              </Badge>

              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6 animate-fade-in">
                SkyRover X ile
                <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient animate-text-glow">
                  Gökyüzünü Fethedin
                </span>
              </h2>

              {/* Price display */}
              <div className="mb-8 animate-fade-in-up animation-delay-200">
                <div className="inline-flex flex-col items-center gap-2 glass rounded-3xl px-10 py-8 animate-pulse-glow">
                  <p className="text-sm text-muted-foreground">Perakende Satış Fiyatı</p>
                  <p className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-gradient">
                    $14.950
                  </p>
                  <p className="text-sm text-muted-foreground">KDV dahil | Ücretsiz kargo</p>
                </div>
              </div>

              <p className="text-pretty text-lg leading-relaxed text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in animation-delay-300">
                İşletmenizi otonom hava teknolojisi ile dönüştürmeye hazır mısınız? İhtiyaçlarınızı görüşmek ve SkyRover
                X'in size nasıl yardımcı olabileceğini keşfetmek için ekibimizle iletişime geçin.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-fade-in-up animation-delay-400"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-posta adresiniz"
                  className="flex-1 rounded-xl border border-border/40 bg-background/50 px-5 py-4 text-sm transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none hover:border-primary/50 backdrop-blur-sm"
                  required
                />
                <GlowButton>
                  Başlayın
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </GlowButton>
              </form>

              {/* Unity button in CTA */}
              <div className="mt-8 animate-fade-in-up animation-delay-600">
                <button
                  onClick={handleUnityView}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Boxes className="h-5 w-5 group-hover:animate-spin" />
                  <span>Unity'de 3D modeli görüntüle</span>
                  <Download className="h-4 w-4 group-hover:animate-bounce-subtle" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card/30 backdrop-blur-xl py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6 group cursor-pointer">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent animate-pulse-glow group-hover:scale-110 transition-transform">
                  <Rocket className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  SkyRover X
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Otonom hava teknolojisinin geleceği. Hassasiyet, dayanıklılık ve eşsiz yetenek.
              </p>
            </div>

            {[
              {
                title: "Ürün",
                links: ["Özellikler", "Teknoloji", "Teknik Özellikler", "Fiyatlandırma"],
              },
              {
                title: "Şirket",
                links: ["Hakkımızda", "Kariyer", "İletişim", "Blog"],
              },
              {
                title: "Yasal",
                links: ["Gizlilik", "Şartlar", "Çerezler", "Lisans"],
              },
            ].map((section, sectionIndex) => (
              <div
                key={section.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${sectionIndex * 100 + 200}ms` }}
              >
                <h3 className="font-semibold mb-6">{section.title}</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIndex) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="hover:text-foreground transition-all duration-300 hover:translate-x-2 inline-flex items-center gap-2 group"
                      >
                        <span className="w-0 h-0.5 bg-primary group-hover:w-3 transition-all duration-300" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground animate-fade-in">© 2025 SkyRover X. Tüm hakları saklıdır.</p>
            <div className="flex items-center gap-6 animate-fade-in animation-delay-200">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
