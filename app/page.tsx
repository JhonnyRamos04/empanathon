import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhatIsHackathon } from "@/components/what-is-hackathon"
import { PhasesModule } from "@/components/phases-module"
import { FormatsSection } from "@/components/formats-section"
import { VotingModule } from "@/components/voting-module"
import { BlogSection } from "@/components/blog-section"
import { RegistrationSection } from "@/components/registration-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhatIsHackathon />
      <PhasesModule />
      <FormatsSection />
      <VotingModule />
      <BlogSection />
      <RegistrationSection />
      <Footer />
    </main>
  )
}
