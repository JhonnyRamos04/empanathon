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
          <a
            href="https://chat.whatsapp.com/LiOpViJh1L5Bk3Q1EeuQTy?mode=hqrc"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 flex items-center gap-2 bg-accent text-background font-bold text-sm rounded-md hover:bg-secondary transition-colors uppercase tracking-wide border-2 border-accent hover:border-secondary"
          >
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg> Grupo WA
          </a>
        </nav>
        <a
          href="https://chat.whatsapp.com/LiOpViJh1L5Bk3Q1EeuQTy?mode=hqrc"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden flex items-center gap-2 px-3 py-2 bg-accent text-background font-bold text-sm rounded-md hover:bg-secondary transition-colors uppercase tracking-wide border-2 border-accent hover:border-secondary"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg> WA
        </a>
      </div>
    </header>
  )
}
