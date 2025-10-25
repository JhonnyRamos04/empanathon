import { CountdownTimer } from "./countdown-timer"
import { EmpanadaLogo } from "./empanada-logo"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-secondary/20 py-20 md:py-32"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 animate-bounce-slow">
            <Image
              src="/empanada-pixel.png"
              alt="Empanada Pixel Art"
              width={200}
              height={200}
              className="pixelated drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
              style={{ imageRendering: "pixelated" }}
            />
          </div>
          <h1 className="mb-4 text-4xl md:text-6xl lg:text-7xl font-bold text-balance text-foreground pixel-text leading-tight">
            EMPANATHON
            <span className="block text-2xl md:text-4xl mt-4 text-primary">2025</span>
          </h1>
          <p className="mb-8 max-w-2xl text-lg md:text-xl text-muted-foreground text-balance">
            Hackathon de innovación en 2 fases. Crea soluciones SaaS que transformen el futuro.
          </p>
          <CountdownTimer />
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#inscripcion"
              className="pixel-corners inline-flex items-center justify-center bg-primary px-8 py-4 text-sm md:text-base font-bold text-primary-foreground hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] uppercase tracking-wider"
            >
              &gt; Inscríbete_
            </a>
            <a
              href="#blog"
              className="pixel-corners inline-flex items-center justify-center border-2 border-secondary bg-background/50 px-8 py-4 text-sm md:text-base font-bold text-secondary hover:bg-secondary/10 transition-all hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] uppercase tracking-wider"
            >
              &gt; Updates_
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/30 rounded-lg blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/30 rounded-lg blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary animate-ping" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-secondary animate-ping delay-500" />
    </section>
  )
}
