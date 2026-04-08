import React from "react"

const skills = [
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "C", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "C++", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "MySQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
  { name: "Oracle", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
  { name: "Django", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
  { name: "Flask", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Pandas", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
  { name: "NumPy", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
  { name: "Scikit-learn", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
]

export function SkillsSection() {
  return (
    <section className="px-4 sm:px-6 py-12 border-t border-border/30 bg-background/50 backdrop-blur-sm overflow-hidden">
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        <h3 className="font-mono text-sm uppercase tracking-widest text-muted-foreground mb-8">
          Technologies & Tools
        </h3>
        
        {/* Infinite scrolling marquee wrapper */}
        <div className="group relative flex w-full gap-8 overflow-hidden">
          {/* First set */}
          <div className="flex shrink-0 animate-marquee items-center justify-around gap-8">
            {skills.map((skill) => (
              <div 
                key={skill.name} 
                className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                title={skill.name}
              >
                <img 
                  src={skill.src} 
                  alt={skill.name} 
                  className="w-12 h-12 lg:w-16 lg:h-16 object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          {/* Second set for infinite loop seamlessly */}
          <div className="flex shrink-0 animate-marquee items-center justify-around gap-8" aria-hidden="true">
            {skills.map((skill) => (
              <div 
                key={`${skill.name}-dup`} 
                className="flex flex-col items-center gap-2 grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                title={skill.name}
              >
                <img 
                  src={skill.src} 
                  alt={skill.name} 
                  className="w-12 h-12 lg:w-16 lg:h-16 object-contain" 
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
      
      {/* Required CSS for marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 2rem)); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}} />
    </section>
  )
}
