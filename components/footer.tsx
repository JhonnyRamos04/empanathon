import { EmpanadaLogo } from "./empanada-logo"

export function Footer() {
  return (
    <footer className="border-t-2 border-border bg-card/50 backdrop-blur py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <EmpanadaLogo />
              <div>
                <span className="text-xl font-bold text-primary uppercase tracking-wider block">Empanathon</span>
                <span className="text-xs text-secondary font-bold uppercase tracking-wider">Powered by UNEFA</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Hackathon de innovación organizado por la Universidad Experimental de las Fuerzas Armadas.
            </p>
          </div>
          <div className="content-center">
            <h3 className="font-bold mb-4 text-foreground uppercase tracking-wider text-sm">Enlaces</h3>
            <ul className="space-y-2 text-sm flex gap-2 ">
              <li>
                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors">
                  &gt; Inicio
                </a>
              </li>
              <li>
                <a href="#fases" className="text-muted-foreground hover:text-secondary transition-colors">
                  &gt; Fases
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
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground uppercase tracking-wider">
          <p>&copy; 2025 Empanathon // Powered by UNEFA // Innovación + Código</p>
        </div>
      </div>
    </footer>
  )
}
