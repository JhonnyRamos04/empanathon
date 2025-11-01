import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "Anuncio Oficial: Empanathon 2025",
    date: "15 de Enero, 2025",
    category: "Anuncio",
    excerpt:
      "Hackathon de innovación con 3 formatos distintos. Elige entre Desarrollo con IA, Desarrollo sin IA o GameJam. Equipos de 3-4 personas compitiendo por glory.",
    badge: "Nuevo",
  },
  {
    id: 2,
    title: "3 Formatos, 1 Pasión",
    date: "22 de Enero, 2025",
    category: "Formato",
    excerpt:
      "Desarrollo con IA (VibeConding), Desarrollo sin IA (SaaS Clásico) o GameJam. Cada formato tiene 6 horas para demostrar tu talento. ¡Elige el tuyo!",
    badge: "Importante",
  },
  {
    id: 3,
    title: "Votación: Elige el Tema y la Problemática",
    date: "5 de Febrero, 2025",
    category: "Votación",
    excerpt:
      "Los participantes votarán el tema del GameJam y la problemática para ambos tracks de SaaS. Tu voto cuenta. La democracia decide.",
  },
  {
    id: 4,
    title: "VibeConding: Programación con IA",
    date: "18 de Febrero, 2025",
    category: "Desafío",
    excerpt:
      "Construye aplicaciones SaaS potenciadas por IA. El VibeConding combina intuición, creatividad y tecnología. Sin límite de APIs externas de IA.",
  },
  {
    id: 5,
    title: "GameJam: 6 Horas, Infinitas Posibilidades",
    date: "3 de Marzo, 2025",
    category: "Recursos",
    excerpt:
      "Crea un juego completo en 6 horas. Puedes usar IA o no. El tema se elige democráticamente. Desde 2D a 3D, todo es posible.",
  },
  {
    id: 6,
    title: "Evaluación Multicategoría",
    date: "15 de Marzo, 2025",
    category: "Evaluación",
    excerpt:
      "Cada formato se evalúa por separado con criterios específicos. Innovación (40%), Ejecución (30%), Presentación (30%). La mejor empanada gana.",
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
