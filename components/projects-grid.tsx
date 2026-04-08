"use client"

import { cn } from "@/lib/utils"
import { Sparkles, Database, Code, BarChart } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "ShopSense",
    subtitle: "Predictive E-commerce Platform",
    description:
      "Engineered a robust, full-stack e-commerce application utilizing the Django framework and MySQL to manage secure user authentication, dynamic catalogs, and session-based cart logic. Architected a machine learning pipeline with Scikit-learn precisely forecasting future sales trends and providing detailed inventory forecasting, allowing proactive, data-driven business decisions.",
    tags: ["Django", "MySQL", "Scikit-Learn", "Machine Learning"],
    icon: Database,
    highlight: true,
  },
  {
    id: 2,
    title: "Crime Prediction and Analysis Using Machine Learning",
    subtitle: "Public Safety Analytics",
    description:
      "Constructed a sophisticated predictive modeling system designed to analyze historical datasets and outline high-risk geographical zones for proactive monitoring. Detailed the data preprocessing phase and applied statistical analysis through Python and Pandas to improve pattern identification accuracy, transforming raw data into actionable insights.",
    tags: ["Python", "Pandas", "Statistical Analysis"],
    icon: Code,
    highlight: false,
  },
  {
    id: 3,
    title: "HR Analytics Employee Attrition Prediction",
    subtitle: "Predictive Analytics Solution",
    description:
      "Advanced predictive analytics solution tracking employee attrition trends using Logistic Regression and Random Forest algorithms. Through detailed feature engineering and exploratory data analysis (EDA), the model reveals core factors influencing staff turnover, providing a reliable tool for identifying high-risk employees.",
    tags: ["Logistic Regression", "Random Forest", "EDA"],
    icon: BarChart,
    highlight: false,
  },
]

export function ProjectsGrid() {
  return (
    <section id="projects" className="px-4 sm:px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 sm:mb-14 flex flex-col gap-6 sm:gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-3 animate-fade-in-up">
            <p className="font-mono text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-primary">Portfolio</p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Selected Projects</h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={cn(
                "group relative overflow-hidden rounded-xl border bg-card/40 p-6 sm:p-7 glass transition-all duration-400 active:scale-[0.99] hover-lift hover:border-primary/40 hover:bg-card/70 animate-fade-in-up",
                project.highlight
                  ? "sm:col-span-2 lg:col-span-3 border-primary/30 bg-gradient-to-br from-primary/8 via-card/50 to-primary/8"
                  : "border-border/60 sm:col-span-1 lg:col-span-1.5"
              )}
              style={{ animationDelay: `${(index % 6) * 100 + 200}ms` }}
            >
              {project.highlight && (
                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-3.5 py-1.5 animate-pulse-glow">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary font-medium">
                    Featured Work
                  </span>
                </div>
              )}

              <div
                className={cn(
                  "mb-5",
                  project.highlight && "mt-10",
                )}
              >
                <project.icon className="w-8 h-8 text-primary/70" />
              </div>

              <h3
                className={cn(
                  "mb-1 font-bold tracking-tight transition-all duration-300 group-hover:text-gradient",
                  project.highlight ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
                )}
              >
                {project.title}
              </h3>
              <p className="text-sm font-medium text-primary mb-3">
                {project.subtitle}
              </p>

              <p
                className={cn(
                  "mb-5 text-sm leading-relaxed text-muted-foreground"
                )}
              >
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/50 hover:bg-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-primary/80 to-transparent transition-all duration-500 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
