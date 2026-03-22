import { useEffect, useRef, useState } from 'react'
import { GraduationCap, MapPin, Briefcase, Award } from 'lucide-react'
import { cn } from '@/lib/utils'

const highlights = [
  {
    icon: Briefcase,
    label: 'Experience',
    value: '6+ Years',
    description: 'Professional software development',
  },
  {
    icon: GraduationCap,
    label: 'Education',
    value: "Master's Degree",
    description: 'Information Technology',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Jakarta, Indonesia',
    description: 'Open to remote work',
  },
  {
    icon: Award,
    label: 'Focus',
    value: 'Backend & Leadership',
    description: 'Fintech & Microservices',
  },
]

export default function About() {
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
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Passionate About Technology
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Building reliable solutions that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Content */}
          <div
            className={cn(
              'space-y-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div className="space-y-4">
              <p className="text-base text-foreground leading-relaxed">
                I'm a <strong>goal-driven developer</strong> with over
                6 years of experience in software engineering. Throughout my career, I've had
                the privilege of leading various teams and contributing to impactful projects
                across fintech, banking, and government sectors.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I strongly believe that technology is a reliable tool to help all kinds of needs.
                This belief drives my passion to contribute through technology, whether it's
                architecting scalable microservices, optimizing database performance, or mentoring
                junior developers to help them grow.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently, I'm working as a Senior Software Engineer at BPR Saridana, where I'm
                part of a self-managing agile team responsible for the end-to-end delivery of
                a next-generation digital banking platform.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
              {highlights.slice(0, 2).map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    'p-5 min-h-[100px] rounded border border-border bg-secondary/30 transition-all duration-500',
                    'hover:bg-secondary group',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  )}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <item.icon className="w-5 h-5 text-muted-foreground mb-3" />
                  <div className="text-2xl font-bold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual & Additional Info */}
          <div
            className={cn(
              'space-y-4 transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            {/* Code Block Style Card */}
            <div className="rounded border border-border overflow-hidden bg-secondary/20">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-secondary/50 border-b border-border">
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">about.json</span>
              </div>
              <div className="p-4 font-mono text-[10px] sm:text-xs overflow-x-auto">
                <pre className="text-muted-foreground">
                  <span className="text-foreground">{'{'}</span>
                  {'\n'}
                  <span className="pl-3 text-foreground">
                    <span className="text-muted-foreground">"name"</span>:{' '}
                    <span className="text-foreground">"Adi Putra"</span>,
                  </span>
                  {'\n'}
                  <span className="pl-3 text-foreground">
                    <span className="text-muted-foreground">"role"</span>:{' '}
                    <span className="text-foreground">"Senior Software Engineer"</span>,
                  </span>
                  {'\n'}
                  <span className="pl-3 text-foreground">
                    <span className="text-muted-foreground">"focus"</span>:{' '}
                    <span className="text-foreground">"Backend Development"</span>,
                  </span>
                  {'\n'}
                  <span className="pl-3 text-foreground">
                    <span className="text-muted-foreground">"location"</span>:{' '}
                    <span className="text-foreground">"Jakarta, Indonesia"</span>,
                  </span>
                  {'\n'}
                  <span className="pl-3 text-foreground">
                    <span className="text-muted-foreground">"passion"</span>:{' '}
                    <span className="text-foreground">"Building scalable systems"</span>
                  </span>
                  {'\n'}
                  <span className="text-foreground">{'}'}</span>
                </pre>
              </div>
            </div>

            {/* Additional Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.slice(2, 4).map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    'p-4 min-h-[80px] rounded border border-border bg-secondary/30 transition-all duration-500',
                    'hover:bg-secondary',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  )}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <item.icon className="w-4 h-4 text-muted-foreground mb-2" />
                  <div className="text-sm font-semibold text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
