export function ExperienceSection() {
  return (
    <section id="experience" className="px-4 sm:px-6 py-20 sm:py-28 bg-secondary/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          
          {/* Internship & Experience */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Experience</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Internship</h2>
            </div>
            
            <div className="relative pl-6 border-l-2 border-primary/20 space-y-10">
              <div className="relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[31px] top-1.5 ring-4 ring-background" />
                <h3 className="text-xl font-semibold mb-1">UI/UX Design Intern</h3>
                <p className="text-sm text-primary font-medium mb-3">Travel Booking App Refinement</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Refined the travel booking interface by detailing a mobile-first design system that improved cross-platform accessibility by 30% and stated precisely a more intuitive user navigation flow.
                </p>
              </div>
            </div>
          </div>

          {/* Education & Certs */}
          <div className="space-y-8 animate-fade-in-up stagger-2">
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Academic</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Education & Certifications</h2>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-xl border border-secondary bg-card/20 shadow-sm hover:border-primary/30 transition-all">
                <h3 className="text-lg font-semibold text-foreground mb-1">Bachelor of Science in Computer Science</h3>
                <p className="text-sm font-medium text-primary mb-2">Thiruvalluvar University, Vellore</p>
                <p className="font-mono text-xs text-muted-foreground">2022 – 2025</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium tracking-tight border-b border-border/50 pb-2">Certifications</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✦</span>
                    <span className="text-sm text-muted-foreground">IBM SkillsBuild – Getting started with Artificial Intelligence (2025)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✦</span>
                    <span className="text-sm text-muted-foreground">Google Cloud – Develop GenAI Apps with Gemini and Streamlit</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="font-medium tracking-tight border-b border-border/50 pb-2">Languages</h4>
                <div className="flex gap-4">
                  <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-md border border-border/50">English</span>
                  <span className="text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-md border border-border/50">Tamil</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
