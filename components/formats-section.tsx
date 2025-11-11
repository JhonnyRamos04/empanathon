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
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-robot"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M12 2v2" /><path d="M9 12v9" /><path d="M15 12v9" /><path d="M5 16l4 -2" /><path d="M15 14l4 2" /><path d="M9 18h6" /><path d="M10 8v.01" /><path d="M14 8v.01" /></svg>,
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
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-laptop"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 19l18 0" /><path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" /></svg>,
    },
    {
        id: 3,
        title: "GameJam",
        subtitle: "Juego de 6 Horas",
        description:
            "Crea un juego completo en 6 horas. Pueden usar IA o no. El tema se revelara el dia de la hackathon.",
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/40",
        accentColor: "text-green-400",
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-gamepad-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z" /><path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232" /><path d="M8 9v2" /><path d="M7 10h2" /><path d="M14 10h2" /></svg>,
    },
]

export function FormatsSection() {
    return (
        <section className="py-20 md:py-32 bg-linear-to-b from-background via-card/20 to-background relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />

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
                            className={`pixel-corners hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all bg-linear-to-br ${format.color} backdrop-blur border-2 ${format.borderColor} hover:border-primary/50`}
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
