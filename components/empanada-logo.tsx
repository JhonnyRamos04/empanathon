import Image from "next/image"

export function EmpanadaLogo() {
  return (
    <div className="relative">
      <div className="">
        <Image
          src="/empanada-pixel.png"
          alt="Empanada Pixel Art"
          width={120}
          height={120}
          className="pixelated drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          style={{ imageRendering: "pixelated" }}
        />
      </div>
      {/* Glowing effect for retro gaming aesthetic */}
      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
    </div>
  )
}
