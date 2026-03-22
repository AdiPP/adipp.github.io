import { useEffect, useRef } from 'react'
import { ArrowDown } from 'lucide-react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 10
      const y = (clientY / innerHeight - 0.5) * 10

      const elements = containerRef.current.querySelectorAll('.parallax')
      elements.forEach((el, i) => {
        const factor = (i + 1) * 0.3
        ;(el as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          <span className="text-xs text-muted-foreground">Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in animate-delay-100">
          <span className="block text-foreground">Hi, I'm</span>
          <span className="block text-primary mt-2">Adi Putra</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 animate-fade-in animate-delay-200">
          Senior Software Engineer
        </p>

        {/* Description */}
        <p className="max-w-xl mx-auto text-base text-muted-foreground/80 mb-10 leading-relaxed animate-fade-in animate-delay-300">
          Backend specialist with 6+ years of experience building scalable systems,
          microservices, and fintech solutions. Passionate about clean architecture
          and leading high-performing teams.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in animate-delay-400">
          {['Go', 'Python', 'PHP', 'Event-Driven', 'Microservices', 'Fintech', 'ERP', 'Cloud-Native'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded text-xs font-medium bg-secondary text-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in animate-delay-500">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-2.5 rounded text-sm font-medium bg-primary text-primary-foreground
                       hover:opacity-90 transition-opacity duration-200"
          >
            Get in Touch
          </a>
          <a
            href="#experience"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-2.5 rounded text-sm font-medium border border-border text-foreground
                       hover:border-primary hover:text-primary transition-colors duration-200"
          >
            View Experience
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
                   text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
