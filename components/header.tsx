import { EmpanadaLogo } from "./empanada-logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <EmpanadaLogo />
          <h1 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wider">Empanathon</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#inicio" className="text-sm font-bold hover:text-primary transition-colors uppercase tracking-wide">
            Inicio
          </a>
          <a href="#blog" className="text-sm font-bold hover:text-secondary transition-colors uppercase tracking-wide">
            Updates
          </a>
          <a
            href="#inscripcion"
            className="text-sm font-bold hover:text-accent transition-colors uppercase tracking-wide"
          >
            Inscripción
          </a>
        </nav>
      </div>
    </header>
  )
}
