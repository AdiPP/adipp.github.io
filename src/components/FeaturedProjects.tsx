import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const projects = [
  {
    id: 1,
    name: 'Pandawa',
    role: 'Backend Lead',
    description:
      'Empowering Innovation Through Robust Software Solutions. Pandawa is on a mission to turn complex ideas into impactful digital solutions. As Backend Lead, I\'m part of a dedicated team building robust, high-performance software that helps businesses grow sustainably—from startups to enterprises.',
    fullDescription: `We specialize in scalable fintech platforms, custom ERP systems, and cloud-native architectures that meet industry-grade security standards. Our approach ensures adaptability and long-term success for our clients.

We're actively looking for collaborators and partners who want to build better, faster, and smarter. Whether you have a startup idea or an enterprise challenge, let's create something impactful together.`,
    techStack: ['Go', 'Python', 'PHP', 'Microservices', 'Event-Driven', 'Cloud-Native', 'ERP Systems'],
    link: 'https://pandawa.io/en-US',
    cta: 'Explore Our Work',
    featured: true,
  },
  {
    id: 2,
    name: 'BPR Saridana Digital Banking',
    role: 'Senior Software Engineer (Backend)',
    description:
      'Building Indonesia\'s Next-Generation Digital Banking Platform. As part of a self-managing agile team at BPR Saridana, I\'m contributing to the digital transformation of banking in Indonesia.',
    fullDescription: `Together, we're architecting the backend systems that power a modern digital banking platform. Our team designed and implemented high-performance, event-driven microservices using Python and PHP with asynchronous networking engines—creating fault-tolerant systems that handle core banking operations at scale.`,
    techStack: ['Python', 'PHP', 'Event-Driven', 'Microservices', 'Async Networking', 'PostgreSQL'],
    link: 'https://saridana.id/',
    cta: 'Visit Website',
    featured: false,
  },
]

export default function FeaturedProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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

  const featuredProject = projects.find((p) => p.featured)
  const otherProject = projects.find((p) => !p.featured)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 w-full h-px bg-border" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={cn(
            'mb-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-background text-muted-foreground mb-4 border border-border">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Current Projects
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Ongoing work that keeps me busy and passionate about building great software
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Project - Large Card */}
          {featuredProject && (
            <div
              className={cn(
                'lg:col-span-2 transition-all duration-700 delay-100',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <div className="h-full rounded-xl border border-border bg-background p-6 sm:p-8 hover:border-foreground/20 transition-all duration-300 group">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                      Featured
                    </span>
                    <span className="text-xs text-muted-foreground">{featuredProject.role}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {featuredProject.name}
                  </h3>
                </div>

                {/* Description */}
                <div className="space-y-4 mb-6">
                  <p className="text-base text-foreground leading-relaxed">
                    {featuredProject.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {featuredProject.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={featuredProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:opacity-90 active:scale-[0.98] transition-all touch-target-lg"
                >
                  {featuredProject.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          )}

          {/* Other Project - Smaller Card */}
          {otherProject && (
            <div
              className={cn(
                'transition-all duration-700 delay-200',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
            >
              <div className="h-full rounded-xl border border-border bg-background p-6 hover:border-foreground/20 transition-all duration-300 group flex flex-col">
                {/* Header */}
                <div className="mb-4">
                  <span className="text-xs text-muted-foreground block mb-2">
                    {otherProject.role}
                  </span>
                  <h3 className="text-xl font-bold text-foreground">
                    {otherProject.name}
                  </h3>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-4 flex-1">
                  <p className="text-sm text-foreground leading-relaxed">
                    {otherProject.description}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {otherProject.fullDescription}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <h4 className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {otherProject.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-xs font-medium bg-secondary text-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                    {otherProject.techStack.length > 4 && (
                      <span className="px-2 py-0.5 rounded text-xs font-medium text-muted-foreground">
                        +{otherProject.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={otherProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-border text-foreground hover:border-primary hover:text-primary active:scale-[0.98] transition-all touch-target"
                >
                  {otherProject.cta}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
