"use client"

import { useState } from "react"

export function PhasesModule() {
    const [expandedPhase, setExpandedPhase] = useState<number | null>(0)

    const eggtheme = () => {
        console.log()
    }

    const phases = [
        {
            id: 1,
            title: "Fase 1: Ideación y Desarrollo",
            duration: "6 horas",
            subphases: [
                {
                    title: "Planeación de Idea",
                    duration: "30 minutos",
                    description:
                        "Brainstorming en equipo, definición del problema, prototipado conceptual y validación de la solución.",
                },
                {
                    title: "Desarrollo",
                    duration: "5.5 horas",
                    description:
                        "Codificación intensiva, implementación de funcionalidades core, integración de APIs y primeras pruebas.",
                },
            ],
        },
        {
            id: 2,
            title: "Fase 2: Pulido y Presentación",
            duration: "6 horas",
            subphases: [
                {
                    title: "Pulido y Pruebas",
                    duration: "4.5 horas",
                    description:
                        "Refinamiento del código, corrección de bugs, optimización de performance, testing exhaustivo y mejora de UX.",
                },
                {
                    title: "Presentación",
                    duration: "1.5 horas",
                    description: "Preparación de la demo, pitch de 5 minutos ante los jueces, demostración en vivo y Q&A.",
                },
            ],
        },
    ]

    return (
        <section id="fases" className="py-16 md:py-24 bg-linear-to-b from-background to-background/50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-primary uppercase tracking-wider pixel-text text-center">
                    &gt; Estructura de Fases
                </h2>

                <div className="max-w-4xl mx-auto space-y-6">
                    {phases.map((phase, index) => (
                        <div
                            key={phase.id}
                            className="border-2 border-secondary/30 bg-card/30 hover:border-secondary/60 transition-all"
                        >
                            <button
                                onClick={() => setExpandedPhase(expandedPhase === index ? null : index)}
                                className="w-full px-6 md:px-8 py-6 flex justify-between items-start md:items-center gap-4 text-left hover:bg-secondary/5 transition-colors group"
                            >
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-2xl font-bold text-primary pixel-text">Fase {phase.id}</span>
                                        <span className="text-xs font-bold text-secondary bg-secondary/20 px-3 py-1 pixel-corners uppercase tracking-wider">
                                            {phase.duration}
                                        </span>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-bold text-foreground">{phase.title}</h3>
                                </div>
                                <div className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors shrink-0">
                                    {expandedPhase === index ? "▼" : "▶"}
                                </div>
                            </button>

                            {expandedPhase === index && (
                                <div className="border-t-2 border-secondary/30 bg-background/50 px-6 md:px-8 py-6 space-y-6">
                                    {phase.subphases.map((subphase, subIndex) => (
                                        <div key={subIndex} className="pl-4 md:pl-6 border-l-4 border-primary/50">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                                                <h4 className="text-base md:text-lg font-bold text-primary uppercase tracking-wider">
                                                    {subphase.title}
                                                </h4>
                                                <span className="text-sm font-bold text-accent bg-accent/20 px-3 py-1 pixel-corners w-fit uppercase">
                                                    {subphase.duration}
                                                </span>
                                            </div>
                                            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                                {subphase.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 md:p-8 bg-primary/10 border-2 border-primary/30 pixel-corners text-center">
                    <p className="text-sm md:text-base text-muted-foreground">
                        <span className="font-bold text-primary">Total: 12 horas</span> de desarrollo intensivo, 3 formatos
                        diferentes, 1 oportunidad de demostrar tu talento
                    </p>
                </div>
            </div>
        </section>
    )
}
