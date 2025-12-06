"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Rocket } from "lucide-react"

interface UnityModalProps {
  isOpen: boolean
  onClose: () => void
}

export function UnityModal({ isOpen, onClose }: UnityModalProps) {
  const handleLaunchUnity = () => {
    alert(
      "Unity uygulaması başlatılıyor...\n\nEntegrasyon seçenekleri:\n• Custom protocol: skyrover://launch\n• Electron veya Tauri wrapper\n• Unity WebGL build",
    )
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-in fade-in duration-300">
      <Card className="relative w-full max-w-3xl border-border/40 bg-background p-0 animate-in zoom-in-95 slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between border-b border-border/40 p-6 bg-gradient-to-r from-primary/5 to-transparent">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-primary/10 p-2 animate-pulse-slow">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight">SkyRover X 3D Model</h2>
              <p className="mt-1 text-sm text-muted-foreground">İnteraktif 3D modeli görüntüleyin</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 transition-all duration-300 hover:bg-accent hover:scale-110 hover:rotate-90"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="relative w-full max-w-md">
              <div className="aspect-square overflow-hidden rounded-2xl border border-primary/50 bg-gradient-to-br from-primary/10 via-primary/5 to-background shadow-2xl animate-in zoom-in-95 duration-700 delay-200">
                <div className="flex h-full items-center justify-center p-8">
                  <div className="text-center">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary/20 animate-pulse-slow">
                      <Rocket className="h-12 w-12 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">Unity 3D Viewer</h3>
                    <p className="text-sm text-muted-foreground">
                      SkyRover X modelini tam detay ve etkileşimle görüntüleyin
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 rounded-2xl bg-primary/20 blur-2xl animate-pulse-slower" />
            </div>

            <div className="w-full space-y-3 rounded-xl border border-border/40 bg-accent/30 p-6">
              <p className="text-sm font-semibold text-muted-foreground">3D Model Özellikleri:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2 hover:text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  360° görüntüleme ve döndürme
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2 hover:text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Yakınlaştırma ve detaylı inceleme
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2 hover:text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Parça bazında görüntüleme
                </li>
                <li className="flex items-center gap-2 transition-all duration-300 hover:translate-x-2 hover:text-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Gerçek zamanlı animasyonlar
                </li>
              </ul>
            </div>

            <Button
              onClick={handleLaunchUnity}
              size="lg"
              className="w-full gap-2 hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              <Rocket className="h-5 w-5" />
              Unity Uygulamasını Başlat
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
