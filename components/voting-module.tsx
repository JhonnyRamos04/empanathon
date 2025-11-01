"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface VotingOption {
    id: number
    name: string
    votes: number
}

const gameJamThemes: VotingOption[] = [
    { id: 1, name: "El Futuro de la Comida", votes: 0 },
    { id: 2, name: "Viajes en el Tiempo", votes: 0 },
    { id: 3, name: "Conexión Humana", votes: 0 },
    { id: 4, name: "Sostenibilidad", votes: 0 },
    { id: 5, name: "Lo Retro es lo Nuevo", votes: 0 },
]

const saasProblems: VotingOption[] = [
    { id: 1, name: "Gestión de Tareas Colaborativa", votes: 0 },
    { id: 2, name: "Automatización de Procesos", votes: 0 },
    { id: 3, name: "Analytics en Tiempo Real", votes: 0 },
    { id: 4, name: "Comunicación de Equipos Remotos", votes: 0 },
    { id: 5, name: "Gestión de Documentos Inteligente", votes: 0 },
]

export function VotingModule() {
    const [gameJamVotes, setGameJamVotes] = useState<VotingOption[]>(gameJamThemes)
    const [saasVotes, setSaasVotes] = useState<VotingOption[]>(saasProblems)
    const [userVotedTheme, setUserVotedTheme] = useState<number | null>(null)
    const [userVotedProblem, setUserVotedProblem] = useState<number | null>(null)

    const handleVoteTheme = (id: number) => {
        if (userVotedTheme === id) {
            setGameJamVotes(
                gameJamVotes.map((option) => (option.id === id ? { ...option, votes: Math.max(0, option.votes - 1) } : option)),
            )
            setUserVotedTheme(null)
        } else {
            if (userVotedTheme !== null) {
                setGameJamVotes(
                    gameJamVotes.map((option) =>
                        option.id === userVotedTheme ? { ...option, votes: Math.max(0, option.votes - 1) } : option,
                    ),
                )
            }
            setGameJamVotes(
                gameJamVotes.map((option) => (option.id === id ? { ...option, votes: option.votes + 1 } : option)),
            )
            setUserVotedTheme(id)
        }
    }

    const handleVoteProblem = (id: number) => {
        if (userVotedProblem === id) {
            setSaasVotes(
                saasVotes.map((option) => (option.id === id ? { ...option, votes: Math.max(0, option.votes - 1) } : option)),
            )
            setUserVotedProblem(null)
        } else {
            if (userVotedProblem !== null) {
                setSaasVotes(
                    saasVotes.map((option) =>
                        option.id === userVotedProblem ? { ...option, votes: Math.max(0, option.votes - 1) } : option,
                    ),
                )
            }
            setSaasVotes(saasVotes.map((option) => (option.id === id ? { ...option, votes: option.votes + 1 } : option)))
            setUserVotedProblem(id)
        }
    }

    const maxThemeVotes = Math.max(...gameJamVotes.map((o) => o.votes), 1)
    const maxProblemVotes = Math.max(...saasVotes.map((o) => o.votes), 1)

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-background to-card/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="mb-16 text-center">
                    <h2 className="mb-4 text-3xl md:text-5xl font-bold text-foreground text-balance uppercase tracking-wide">
                        &gt; Votación Democrática_
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                        Ayuda a elegir el tema del GameJam y la problemática para los tracks de SaaS
                    </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    {/* GameJam Themes */}
                    <Card className="pixel-corners border-2 border-green-500/40 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur hover:border-green-500/60 transition-all">
                        <CardHeader className="bg-gradient-to-r from-green-500/20 to-transparent border-b-2 border-green-500/20">
                            <CardTitle className="text-2xl md:text-3xl text-card-foreground uppercase tracking-wide">
                                🎮 Tema GameJam
                            </CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Elige el tema para el desafío de 6 horas. Votos actuales:
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            {gameJamVotes.map((option) => (
                                <div key={option.id} className="space-y-2">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-sm font-bold text-card-foreground">{option.name}</span>
                                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/40">
                                            {option.votes} votos
                                        </Badge>
                                    </div>
                                    <div className="relative w-full h-8 bg-background/50 border border-green-500/30 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-green-500/40 to-green-500/20 transition-all duration-300 flex items-center justify-end pr-2"
                                            style={{ width: `${(option.votes / maxThemeVotes) * 100}%` }}
                                        >
                                            {option.votes > 0 && (
                                                <span className="text-xs font-bold text-green-400 pixel-text">
                                                    {Math.round((option.votes / Math.max(...gameJamVotes.map((o) => o.votes || 1))) * 100)}%
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => handleVoteTheme(option.id)}
                                        variant={userVotedTheme === option.id ? "default" : "outline"}
                                        className={`w-full pixel-corners text-xs font-bold uppercase tracking-wider transition-all ${userVotedTheme === option.id
                                                ? "bg-green-500 text-green-950 hover:bg-green-600 shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                                                : "border-2 border-green-500/40 text-green-400 hover:border-green-500/60 hover:bg-green-500/10"
                                            }`}
                                    >
                                        {userVotedTheme === option.id ? "✓ Tu Voto" : "Votar"}
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                    {/* SaaS Problems */}
                    <Card className="pixel-corners border-2 border-blue-500/40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur hover:border-blue-500/60 transition-all">
                        <CardHeader className="bg-gradient-to-r from-blue-500/20 to-transparent border-b-2 border-blue-500/20">
                            <CardTitle className="text-2xl md:text-3xl text-card-foreground uppercase tracking-wide">
                                💼 Problemática SaaS
                            </CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Elige el problema a resolver para ambos tracks. Votos actuales:
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="pt-6 space-y-4">
                            {saasVotes.map((option) => (
                                <div key={option.id} className="space-y-2">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-sm font-bold text-card-foreground">{option.name}</span>
                                        <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/40">
                                            {option.votes} votos
                                        </Badge>
                                    </div>
                                    <div className="relative w-full h-8 bg-background/50 border border-blue-500/30 overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500/40 to-blue-500/20 transition-all duration-300 flex items-center justify-end pr-2"
                                            style={{ width: `${(option.votes / maxProblemVotes) * 100}%` }}
                                        >
                                            {option.votes > 0 && (
                                                <span className="text-xs font-bold text-blue-400 pixel-text">
                                                    {Math.round((option.votes / Math.max(...saasVotes.map((o) => o.votes || 1))) * 100)}%
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <Button
                                        onClick={() => handleVoteProblem(option.id)}
                                        variant={userVotedProblem === option.id ? "default" : "outline"}
                                        className={`w-full pixel-corners text-xs font-bold uppercase tracking-wider transition-all ${userVotedProblem === option.id
                                                ? "bg-blue-500 text-blue-950 hover:bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                                                : "border-2 border-blue-500/40 text-blue-400 hover:border-blue-500/60 hover:bg-blue-500/10"
                                            }`}
                                    >
                                        {userVotedProblem === option.id ? "✓ Tu Voto" : "Votar"}
                                    </Button>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-2 text-sm text-muted-foreground text-center">
                    <div className="pixel-corners border-2 border-green-500/30 bg-green-500/5 p-4">
                        <p className="font-bold text-green-400 uppercase tracking-wider">🎮 Tema Ganador</p>
                        <p className="mt-2 text-card-foreground font-bold">
                            {gameJamVotes.reduce((prev, current) => (prev.votes > current.votes ? prev : current)).name}
                        </p>
                    </div>
                    <div className="pixel-corners border-2 border-blue-500/30 bg-blue-500/5 p-4">
                        <p className="font-bold text-blue-400 uppercase tracking-wider">💼 Problema Ganador</p>
                        <p className="mt-2 text-card-foreground font-bold">
                            {saasVotes.reduce((prev, current) => (prev.votes > current.votes ? prev : current)).name}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
