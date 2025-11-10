"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { registerTeam } from "@/lib/api-register"

interface Student {
  firstName: string
  lastName: string
  cedula: string
}

export function RegistrationSection() {
  const [formData, setFormData] = useState({
    teamName: "",
    carrera: "",
    semestre: "",
    formata: "with-ai",
    students: [
      { firstName: "", lastName: "", cedula: "" },
      { firstName: "", lastName: "", cedula: "" },
      { firstName: "", lastName: "", cedula: "" },
      { firstName: "", lastName: "", cedula: "" },
    ],
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const filledStudents = formData.students.filter((s) => s.firstName && s.lastName && s.cedula)
    if (filledStudents.length < 3) {
      setSubmitMessage({ type: "error", text: "Por favor, completa al menos 3 estudiantes." })
      return
    }
    if (!formData.teamName || !formData.carrera || !formData.semestre) {
      setSubmitMessage({ type: "error", text: "Por favor, completa todos los campos del equipo." })
      return
    }

    setIsLoading(true)
    setSubmitMessage(null)

    const formatMap: { [key: string]: string } = {
      "with-ai": "with-ai",
      "without-ai": "without-ai",
      gamejam: "gamejam",
    }

    const payload = {
      teamName: formData.teamName.trim(),
      career: formData.carrera.trim(),
      semester: String(formData.semestre),
      formata: formatMap[formData.formata],
      students: filledStudents.map((s) => ({
        firstName: s.firstName.trim(),
        lastName: s.lastName.trim(),
        idCardNumber: s.cedula.trim(),
      })),
    }

    console.log("[v0] About to submit payload:", payload)
    const result = await registerTeam(payload)

    if (result.success) {
      setSubmitMessage({
        type: "success",
        text: "¡Equipo registrado exitosamente! Nos vemos en Empanathon.",
      })
      setFormData({
        teamName: "",
        carrera: "",
        semestre: "",
        formata: "with-ai",
        students: [
          { firstName: "", lastName: "", cedula: "" },
          { firstName: "", lastName: "", cedula: "" },
          { firstName: "", lastName: "", cedula: "" },
          { firstName: "", lastName: "", cedula: "" },
        ],
      })
    } else {
      setSubmitMessage({
        type: "error",
        text: `Error al registrar: ${result.error}`,
      })
    }
    setIsLoading(false)
  }

  const handleTeamChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleStudentChange = (index: number, field: keyof Student, value: string) => {
    const newStudents = [...formData.students]
    newStudents[index][field] = value
    setFormData({
      ...formData,
      students: newStudents,
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
            Completa el formulario con tu equipo de 3-4 integrantes. Todos los datos son requeridos.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <Card className="pixel-corners border-2 border-primary/40 bg-card/90 backdrop-blur shadow-[0_0_40px_rgba(168,85,247,0.2)]">
            <CardHeader className="bg-gradient-to-r from-primary/20 to-secondary/20 border-b-2 border-border">
              <CardTitle className="text-xl md:text-2xl text-card-foreground uppercase tracking-wide">
                &gt; Formulario de Inscripción_
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Ingresa los datos del equipo y de al menos 3 integrantes.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {submitMessage && (
                <div
                  className={`mb-6 p-4 border-2 rounded-sm text-sm font-bold uppercase tracking-wider ${
                    submitMessage.type === "success"
                      ? "bg-green-500/10 border-green-500/50 text-green-400"
                      : "bg-red-500/10 border-red-500/50 text-red-400"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Team Information */}
                <div className="space-y-4 pb-6 border-b-2 border-border/30">
                  <h3 className="text-lg font-bold text-primary uppercase tracking-wider">
                    &gt; Información del Equipo_
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="teamName"
                        className="text-card-foreground font-bold uppercase text-xs tracking-wider"
                      >
                        Nombre del Equipo *
                      </Label>
                      <Input
                        id="teamName"
                        name="teamName"
                        placeholder="Los Innovadores"
                        value={formData.teamName}
                        onChange={handleTeamChange}
                        required
                        className="border-2 border-border bg-background/50 text-foreground focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="format"
                        className="text-card-foreground font-bold uppercase text-xs tracking-wider"
                      >
                        Formato Preferido *
                      </Label>
                      <select
                        id="format"
                        name="format"
                        value={formData.formata}
                        onChange={handleTeamChange}
                        required
                        className="w-full border-2 border-border bg-background/50 text-foreground px-4 py-2 rounded-sm focus:border-primary transition-colors focus:outline-none focus:ring-0 cursor-pointer pixel-corners"
                      >
                        <option value="with-ai">Desarrollo con IA (VibeConding)</option>
                        <option value="without-ai">Desarrollo sin IA (SaaS Clásico)</option>
                        <option value="gamejam">GameJam</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label
                        htmlFor="carrera"
                        className="text-card-foreground font-bold uppercase text-xs tracking-wider"
                      >
                        Carrera *
                      </Label>
                      <Input
                        id="carrera"
                        name="carrera"
                        placeholder="Ingeniería en Informática"
                        value={formData.carrera}
                        onChange={handleTeamChange}
                        required
                        className="border-2 border-border bg-background/50 text-foreground focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="semestre"
                        className="text-card-foreground font-bold uppercase text-xs tracking-wider"
                      >
                        Semestre *
                      </Label>
                      <select
                        id="semestre"
                        name="semestre"
                        value={formData.semestre}
                        onChange={handleTeamChange}
                        required
                        className="w-full border-2 border-border bg-background/50 text-foreground px-4 py-2 rounded-sm focus:border-primary transition-colors focus:outline-none focus:ring-0 cursor-pointer pixel-corners"
                      >
                        <option value="">Selecciona un semestre</option>
                        <option value="1">1er Semestre</option>
                        <option value="2">2do Semestre</option>
                        <option value="3">3er Semestre</option>
                        <option value="4">4to Semestre</option>
                        <option value="5">5to Semestre</option>
                        <option value="6">6to Semestre</option>
                        <option value="7">7mo Semestre</option>
                        <option value="8">8vo Semestre</option>
                        <option value="9">9no Semestre</option>
                        <option value="10">10mo Semestre</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Students Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-primary uppercase tracking-wider">
                    &gt; Integrantes del Equipo (Mínimo 3)_
                  </h3>
                  <div className="space-y-6">
                    {formData.students.map((student, index) => (
                      <div key={index} className="p-4 border-2 border-border/40 bg-background/30 rounded-sm space-y-4">
                        <h4 className="text-sm font-bold text-secondary uppercase tracking-wider">
                          &gt; Integrante {index + 1} {index < 3 ? "*" : "(Opcional)"}
                        </h4>
                        <div className="grid gap-3 md:grid-cols-3">
                          <div className="space-y-2">
                            <Label
                              htmlFor={`firstName-${index}`}
                              className="text-card-foreground font-bold uppercase text-xs tracking-wider"
                            >
                              Nombre {index < 3 ? "*" : ""}
                            </Label>
                            <Input
                              id={`firstName-${index}`}
                              placeholder="Juan"
                              value={student.firstName}
                              onChange={(e) => handleStudentChange(index, "firstName", e.target.value)}
                              required={index < 3}
                              className="border-2 border-border bg-background/50 text-foreground focus:border-secondary transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor={`lastName-${index}`}
                              className="text-card-foreground font-bold uppercase text-xs tracking-wider"
                            >
                              Apellido {index < 3 ? "*" : ""}
                            </Label>
                            <Input
                              id={`lastName-${index}`}
                              placeholder="Pérez"
                              value={student.lastName}
                              onChange={(e) => handleStudentChange(index, "lastName", e.target.value)}
                              required={index < 3}
                              className="border-2 border-border bg-background/50 text-foreground focus:border-secondary transition-colors"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label
                              htmlFor={`cedula-${index}`}
                              className="text-card-foreground font-bold uppercase text-xs tracking-wider"
                            >
                              Cédula {index < 3 ? "*" : ""}
                            </Label>
                            <Input
                              id={`cedula-${index}`}
                              placeholder="12345678"
                              value={student.cedula}
                              onChange={(e) => handleStudentChange(index, "cedula", e.target.value)}
                              required={index < 3}
                              className="border-2 border-border bg-background/50 text-foreground focus:border-secondary transition-colors"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="pixel-corners w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg py-6 font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "&gt; Registrando..." : "&gt; Enviar Inscripción_"}
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="pixel-corners bg-purple-500/10 border-2 border-purple-500/40 hover:border-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-purple-400 pixel-text">⚡</div>
                <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">Con IA</div>
              </CardContent>
            </Card>
            <Card className="pixel-corners bg-blue-500/10 border-2 border-blue-500/40 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-blue-400 pixel-text">💻</div>
                <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">Sin IA</div>
              </CardContent>
            </Card>
            <Card className="pixel-corners bg-green-500/10 border-2 border-green-500/40 hover:border-green-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all">
              <CardContent className="pt-6 text-center">
                <div className="text-3xl font-bold text-green-400 pixel-text">🎮</div>
                <div className="mt-2 text-xs font-bold text-muted-foreground uppercase tracking-wider">GameJam</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
