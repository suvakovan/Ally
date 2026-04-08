import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProjectsGrid } from "@/components/projects-grid"
import { ExperienceSection } from "@/components/experience-section"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"
import { SkillsSection } from "@/components/skills-section"
import { generateWebsiteStructuredData, generatePersonStructuredData } from "@/lib/structured-data"

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eindev.ir'
  const websiteStructuredData = generateWebsiteStructuredData(baseUrl)
  const personStructuredData = generatePersonStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
      />
      <main className="relative min-h-screen overflow-hidden scanlines">
        <CursorGlow />
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <SkillsSection />
          <ProjectsGrid />
          <ExperienceSection />
          <Footer />
        </div>
      </main>
    </>
  )
}
