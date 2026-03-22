import { useEffect, useRef, useState } from 'react'
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Cloud,
  Terminal,
  Layers,
  Shield,
  Cpu,
  Workflow,
  Award,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const skillCategories = [
  {
    name: 'Languages',
    icon: Code2,
    skills: [
      { name: 'Go', level: 95 },
      { name: 'Python', level: 85 },
      { name: 'PHP', level: 85 },
      { name: 'JavaScript/TypeScript', level: 85 },
      { name: 'SQL', level: 90 },
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    skills: [
      { name: 'Microservices', level: 95 },
      { name: 'Event-Driven Architecture', level: 90 },
      { name: 'RESTful APIs', level: 95 },
      { name: 'Async Networking', level: 85 },
      { name: 'gRPC', level: 80 },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 90 },
      { name: 'MongoDB', level: 75 },
      { name: 'Redis', level: 85 },
    ],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: [
      { name: 'Docker', level: 90 },
      { name: 'Kubernetes', level: 75 },
      { name: 'AWS', level: 80 },
      { name: 'CI/CD', level: 85 },
    ],
  },
  {
    name: 'Architecture & Tools',
    icon: Terminal,
    skills: [
      { name: 'System Design', level: 90 },
      { name: 'Git', level: 95 },
      { name: 'Linux', level: 90 },
      { name: 'Message Queues', level: 85 },
      { name: 'High-Performance Computing', level: 85 },
    ],
  },
]

const certifications = [
  {
    name: 'Go: The Complete Developer\'s Guide',
    issuer: 'Udemy',
    year: '2023',
    icon: Code2,
  },
]

const softSkills = [
  { name: 'Team Leadership', icon: Workflow },
  { name: 'Agile/Scrum', icon: Layers },
  { name: 'Problem Solving', icon: Cpu },
  { name: 'Code Review', icon: Shield },
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      skillCategories.forEach((category, catIndex) => {
        category.skills.forEach((skill, skillIndex) => {
          setTimeout(() => {
            setAnimatedSkills((prev) => new Set([...prev, `${category.name}-${skill.name}`]))
          }, catIndex * 200 + skillIndex * 100)
        })
      })
    }
  }, [isVisible])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-border" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            'mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-secondary text-muted-foreground mb-4 border border-border">
            Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Technologies and tools I work with daily
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.name}
              className={cn(
                'rounded border border-border bg-secondary/20 p-5 min-w-0 transition-all duration-700',
                'hover:border-foreground/20',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="w-5 h-5 text-muted-foreground" />
                <h3 className="text-base font-semibold text-foreground">
                  {category.name}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-xs text-muted-foreground min-w-[44px] text-right">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
                        style={{
                          width: animatedSkills.has(`${category.name}-${skill.name}`)
                            ? `${skill.level}%`
                            : '0%',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section: Soft Skills & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div
            className={cn(
              'transition-all duration-700 delay-500',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            )}
          >
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2 text-muted-foreground">
              <GitBranch className="w-4 h-4" />
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {softSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-4 min-h-[56px] rounded border border-border bg-secondary/20 hover:bg-secondary transition-colors"
                >
                  <skill.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div
            className={cn(
              'transition-all duration-700 delay-600',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            )}
          >
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2 text-muted-foreground">
              <Award className="w-4 h-4" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-start gap-3 p-3 rounded border border-border bg-secondary/20 hover:bg-secondary transition-colors"
                >
                  <cert.icon className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <div className="flex-1">
                    <h4 className="text-xs font-medium text-foreground">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
