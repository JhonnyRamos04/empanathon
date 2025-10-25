import { EmpanadaLogo } from "./empanada-logo"

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-card/50 backdrop-blur py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <EmpanadaLogo />
              <span className="text-xl font-bold text-primary uppercase tracking-wider">Empanathon</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hackathon de innovación en 2 fases. Crea soluciones SaaS que transformen el futuro.
            </p>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-foreground uppercase tracking-wider text-sm">Enlaces</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  &gt; Inicio
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-secondary transition-colors">
                  &gt; Updates
                </a>
              </li>
              <li>
                <a href="#inscripcion" className="text-muted-foreground hover:text-accent transition-colors">
                  &gt; Inscripción
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-foreground uppercase tracking-wider text-sm">Contacto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>&gt; info@empanathon.com</li>
              <li>&gt; @empanathon2025</li>
              <li>&gt; 15 de Junio, 2025</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground uppercase tracking-wider">
          <p>&copy; 2025 Empanathon // Innovación + Código</p>
        </div>
      </div>
    </footer>
  )
}
