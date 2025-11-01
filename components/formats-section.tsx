import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const formats = [
    {
        id: 1,
        title: "Desarrollo con IA",
        subtitle: "VibeConding",
        description:
            "Construye aplicaciones SaaS innovadoras potenciadas por inteligencia artificial. El vibeconding se centra en la intuición y creatividad con IA.",
        color: "from-purple-500/20 to-pink-500/20",
        borderColor: "border-purple-500/40",
        accentColor: "text-purple-400",
        icon: "⚡",
    },
    {
        id: 2,
        title: "Desarrollo sin IA",
        subtitle: "SaaS Clásico",
        description:
            "Desarrolla soluciones SaaS tradicionales resolviendo un problema específico. Demuestra tu maestría en arquitectura y código limpio.",
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-500/40",
        accentColor: "text-blue-400",
        icon: "💻",
    },
    {
        id: 3,
        title: "GameJam",
        subtitle: "Juego de 6 Horas",
        description:
            "Crea un juego completo en 6 horas. Pueden usar IA o no. El tema se votará democraticamente entre todos los participantes.",
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/40",
        accentColor: "text-green-400",
        icon: "🎮",
    },
]

export function FormatsSection() {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-background via-card/20 to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl md:text-5xl font-bold text-foreground text-balance uppercase tracking-wide">
                        &gt; Formatos_
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                        Elige tu camino. Tres formatos distintos para mostrar tu creatividad y habilidades de programación.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {formats.map((format) => (
                        <Card
                            key={format.id}
                            className={`pixel-corners hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all bg-gradient-to-br ${format.color} backdrop-blur border-2 ${format.borderColor} hover:border-primary/50`}
                        >
                            <CardHeader>
                                <div className={`text-4xl mb-3 ${format.accentColor}`}>{format.icon}</div>
                                <CardTitle className="text-lg md:text-2xl text-card-foreground uppercase tracking-wider">
                                    {format.title}
                                </CardTitle>
                                <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mt-2">
                                    {format.subtitle}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-card-foreground/80 leading-relaxed">{format.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
