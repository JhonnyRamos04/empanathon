"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const hackathonDate = new Date("2025-11-21T09:00:00").getTime()

  const calculateTimeLeft = (): TimeLeft => {
    const now = new Date().getTime()
    const difference = hackathonDate - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isClient || !timeLeft) {
    return (
      <div className="w-full max-w-3xl">
        <h3 className="mb-6 text-xl md:text-2xl font-bold text-foreground uppercase tracking-wider">
          &gt; Fase 1 comienza en:
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[0, 1, 2, 3].map((i) => (
            <Card key={i} className="pixel-corners bg-card/80 backdrop-blur border-2 border-primary/40 p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary pixel-text">--</div>
              <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                {["DÍAS", "HORAS", "MIN", "SEG"][i]}
              </div>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-3xl">
      <h3 className="mb-6 text-xl md:text-2xl font-bold text-foreground uppercase tracking-wider">
        &gt; Fase 1 comienza en:
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="pixel-corners bg-card/80 backdrop-blur border-2 border-primary/40 p-6 text-center hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
          <div className="text-4xl md:text-5xl font-bold text-primary pixel-text">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">DÍAS</div>
        </Card>
        <Card className="pixel-corners bg-card/80 backdrop-blur border-2 border-secondary/40 p-6 text-center hover:border-secondary hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all">
          <div className="text-4xl md:text-5xl font-bold text-secondary pixel-text">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">HORAS</div>
        </Card>
        <Card className="pixel-corners bg-card/80 backdrop-blur border-2 border-accent/40 p-6 text-center hover:border-accent hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
          <div className="text-4xl md:text-5xl font-bold text-accent pixel-text">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">MIN</div>
        </Card>
        <Card className="pixel-corners bg-card/80 backdrop-blur border-2 border-primary/40 p-6 text-center hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all">
          <div className="text-4xl md:text-5xl font-bold text-primary pixel-text">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">SEG</div>
        </Card>
      </div>
    </div>
  )
}
