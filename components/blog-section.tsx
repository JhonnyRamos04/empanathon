import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "Anuncio Oficial: Empanathon 2025",
    date: "15 de Enero, 2025",
    category: "Anuncio",
    excerpt:
      "Hackathon de innovación en 2 fases enfocada en SaaS. Equipos de 3-4 personas competirán para crear soluciones que transformen el futuro.",
    badge: "Nuevo",
  },
  {
    id: 2,
    title: "Formato de 2 Fases Revelado",
    date: "22 de Enero, 2025",
    category: "Formato",
    excerpt:
      "Día 1: Fase de ideación y prototipo (6 horas). Día 2: Los finalistas implementan y presentan su solución final. ¡Prepárate para el desafío!",
    badge: "Importante",
  },
  {
    id: 3,
    title: "Copa Artesanal en Progreso",
    date: "5 de Febrero, 2025",
    category: "Premio",
    excerpt:
      "Conoce la evolución de la creación de nuestra Copa Artesanal. El equipo ganador será reconocido como los mejores programadores de sistemas.",
  },
  {
    id: 4,
    title: "Tema Secreto: ¿Qué Construirás?",
    date: "18 de Febrero, 2025",
    category: "Desafío",
    excerpt:
      "El tema se revelará al inicio del evento. Enfócate en SaaS, innovación y soluciones que impacten. ¡La creatividad será clave!",
  },
  {
    id: 5,
    title: "Tips: Planeación Antes de Codificar",
    date: "3 de Marzo, 2025",
    category: "Recursos",
    excerpt:
      "1 hora obligatoria de planificación sin teclado. Usa pizarras, papel y diagramas. La mejor estrategia gana, no solo el mejor código.",
  },
  {
    id: 6,
    title: "Reglas y Criterios de Evaluación",
    date: "15 de Marzo, 2025",
    category: "Evaluación",
    excerpt:
      "Creatividad e Innovación (40%), Impacto y Viabilidad (30%), Presentación y Pitch (30%). Prototipos en papel son válidos y valorados.",
  },
]

export function BlogSection() {
  return (
    <section
      id="blog"
      className="py-20 md:py-32 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl md:text-5xl font-bold text-foreground text-balance uppercase tracking-wide">
            &gt; Updates_
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Mantente al día con las últimas noticias y recursos para Empanathon 2025
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="pixel-corners hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all bg-card/90 backdrop-blur border-2 border-border hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2 gap-2">
                  <Badge
                    variant="secondary"
                    className="bg-secondary/80 text-secondary-foreground text-xs uppercase tracking-wider"
                  >
                    {post.category}
                  </Badge>
                  {post.badge && (
                    <Badge className="bg-accent/80 text-accent-foreground text-xs uppercase tracking-wider">
                      {post.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg md:text-xl text-card-foreground leading-tight">{post.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-xs">{post.date}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-card-foreground/80 leading-relaxed">{post.excerpt}</p>
                <button className="mt-4 text-sm font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wide">
                  &gt; Leer más_
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
