import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const blogPosts = [
  {
    id: 1,
    title: "Anuncio Oficial: Empanathon 2025",
    category: "Anuncio",
    excerpt:
      "Hackathon de innovación con 3 formatos distintos. Elige entre Desarrollo con IA, Desarrollo sin IA o GameJam. Equipos de 3-4 personas compitiendo por glory.",
    badge: "Nuevo",
    link: "",
  },
  {
    id: 2,
    title: "Como subir tu proyecto a GitHub?",
    category: "Formato",
    excerpt:
      "Te guiamos paso a paso para subir tu proyecto al repositorio de GitHub de Empanathon. Asegura que tu código esté listo para la evaluación final.",
    badge: "Importante",
    link: "https://youtu.be/3GymExBkKjE?si=1EIYIlPOEPBkx5TS",
  },
  {
    id: 3,
    title: "Crear un juego completo desde tu celular",
    category: "Mobile Dev",
    excerpt:
      "Descubre herramientas y técnicas para desarrollar un juego completo directamente desde tu dispositivo móvil. Ideal para participantes del GameJam.",
    link: "https://www.youtube.com/playlist?list=PLX91FzZ_h1OA76ytWDKVJbOe3TDgfR-Dy",
  },
  {
    id: 4,
    title: "Google Studio y VibeConding",
    category: "vibeConding",
    excerpt:
      "Explora cómo usar Google Studio para el desarrollo rápido de aplicaciones SaaS potenciadas por IA. Aprende sobre el enfoque VibeConding.",
    link: "https://aistudio.google.com/",
  },
  {
    id: 5,
    title: "V0 para interfaces de tu app",
    category: "vibeConding",
    excerpt:
      "Aprende a crear un V0 efectivo para la interfaz de tu aplicación. Consejos sobre prototipado rápido y validación temprana de ideas.",
    link: "https://v0.app/",
  },
  {
    id: 6,
    title: "Evaluación Multicategoría",
    category: "Evaluación",
    excerpt:
      "Cada formato se evalúa por separado con criterios específicos. Innovación (40%), Ejecución (30%), Presentación (30%). La mejor empanada gana.",
    link: "",
  },
]

export function BlogSection() {
  return (
    <section
      id="blog"
      className="py-20 md:py-32 bg-linear-to-b from-background via-card/30 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-size-[40px_40px]" />

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
              </CardHeader>
              <CardContent>
                <p className="text-sm text-card-foreground/80 leading-relaxed">{post.excerpt}</p>
                <button className="mt-4 text-sm font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-wide">
                  &gt; Aqui_
                </button>
              </CardContent>
              {post.link && (
                <a href={post.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
