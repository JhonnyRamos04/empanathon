export function WhatIsHackathon() {
    return (
        <section className="py-16 md:py-24 bg-background/50 border-y-2 border-border">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary uppercase tracking-wider pixel-text text-center">
                        &gt; ¿Qué es una Hackathon?
                    </h2>

                    <div className="bg-card/50 border-2 border-secondary/50 pixel-corners p-8 md:p-10">
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                            Una <span className="text-secondary font-bold">hackathon</span> es una competencia de innovación donde
                            programadores, diseñadores y emprendedores se reúnen para colaborar intensamente en proyectos creativos.
                            En corto tiempo, los participantes crean soluciones innovadoras, resuelven problemas reales y demuestran
                            sus habilidades técnicas.
                        </p>

                        <div className="bg-background/50 border-l-4 border-primary p-6 mb-6">
                            <h3 className="font-bold text-primary mb-4 uppercase tracking-wider">Objetivos de Empanathon:</h3>
                            <ul className="space-y-3 text-sm md:text-base text-muted-foreground">
                                <li>✓ Fomentar la innovación y el pensamiento creativo</li>
                                <li>✓ Desarrollar habilidades de programación bajo presión</li>
                                <li>✓ Crear soluciones viables en poco tiempo</li>
                                <li>✓ Colaborar en equipo y potenciar talentos</li>
                                <li>✓ Explorar diferentes enfoques de desarrollo (IA, SaaS clásico, GameJam)</li>
                            </ul>
                        </div>

                        <p className="text-xs md:text-sm text-muted-foreground italic">
                            En Empanathon tienes 12 horas totales divididas en 2 fases para crear algo extraordinario.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
