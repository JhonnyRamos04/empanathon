"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    team: "",
    experience: "",
    motivation: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("¡Gracias por inscribirte! Te contactaremos pronto.")
    setFormData({
      name: "",
      email: "",
      team: "",
      experience: "",
      motivation: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="inscripcion"
      className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_2px,transparent_2px),linear-gradient(90deg,rgba(168,85,247,0.05)_2px,transparent_2px)] bg-[size:60px_60px] animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-5xl font-bold text-foreground text-balance uppercase tracking-wide">
            &gt; Inscripción_
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Completa el formulario y asegura tu lugar en la hackathon
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="pixel-corners border-2 border-primary/40 bg-card/90 backdrop-blur shadow-[0_0_40px_rgba(168,85,247,0.2)]">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20 border-b-2 border-border">
              <CardTitle className="text-xl md:text-2xl text-card-foreground uppercase tracking-wide">
                &gt; Formulario_
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Equipos de 3-4 personas. Todos los niveles son bienvenidos.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-card-foreground font-bold uppercase text-xs tracking-wider">
                    Nombre Completo *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Juan Pérez"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-2 border-border bg-background/50 text-foreground focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground font-bold uppercase text-xs tracking-wider">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="juan@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-2 border-border bg-background/50 text-foreground focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="team" className="text-card-foreground font-bold uppercase text-xs tracking-wider">
                    Nombre del Equipo (opcional)
                  </Label>
                  <Input
                    id="team"
                    name="team"
                    placeholder="Los Innovadores"
                    value={formData.team}
                    onChange={handleChange}
                    className="border-2 border-border bg-background/50 text-foreground focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="experience"
                    className="text-card-foreground font-bold uppercase text-xs tracking-wider"
                  >
                    Nivel de Experiencia *
                  </Label>
                  <Input
                    id="experience"
                    name="experience"
                    placeholder="Principiante, Intermedio, Avanzado"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="border-2 border-border bg-background/50 text-foreground focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="motivation"
                    className="text-card-foreground font-bold uppercase text-xs tracking-wider"
                  >
                    ¿Por qué quieres participar? *
                  </Label>
                  <Textarea
                    id="motivation"
                    name="motivation"
                    placeholder="Cuéntanos qué te motiva a unirte a Empanathon..."
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="border-2 border-border bg-background/50 text-foreground resize-none focus:border-primary transition-colors"
                  />
                </div>
                <Button
                  type="submit"
                  className="pixel-corners w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg py-6 font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all"
                >
                  &gt; Enviar Inscripción_
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="pixel-corners bg-primary/10 border-2 border-primary/40 hover:border-primary hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-primary pixel-text">2x6h</div>
                <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">Fases</div>
              </CardContent>
            </Card>
            <Card className="pixel-corners bg-secondary/10 border-2 border-secondary/40 hover:border-secondary hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-secondary pixel-text">3-4</div>
                <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">Por Equipo</div>
              </CardContent>
            </Card>
            <Card className="pixel-corners bg-accent/10 border-2 border-accent/40 hover:border-accent hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-accent pixel-text">SaaS</div>
                <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">Enfoque</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
