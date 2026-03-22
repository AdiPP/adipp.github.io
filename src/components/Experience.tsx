import { useEffect, useRef, useState } from 'react'
import { Building2, Calendar, MapPin, ChevronRight, GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'

const experiences = [
  {
    id: 1,
    company: 'Pandawa',
    role: 'Co-Founder',
    period: '2026 - Present',
    location: 'Jakarta, Indonesia',
    description:
      'Co-founded Pandawa with Michael Reynald (Frontend Lead), Aldi Arief (Backend Lead), Arif Setianto (Integration Lead), and Iqbal Maulana (CTO). A software firm building modern software solutions for startups to enterprises. Our team brings combined expertise in fintech, government systems, and enterprise architecture. Specializing in scalable fintech platforms, ERP systems, and cloud-native solutions with high-concurrency architecture. Leading technical strategy, product development, and engineering teams.',
    highlights: ['Fintech solutions', 'ERP systems', 'Cloud-native architecture', 'Full-stack expertise', 'Technical leadership'],
  },
  {
    id: 2,
    company: 'BPR Saridana (Bank)',
    role: 'Senior Software Engineer (Backend)',
    period: 'Feb 2026 - Present',
    location: 'Surabaya, East Java, Indonesia',
    description:
      'Core member of a self-managing agile team responsible for architecting and building a next-generation digital banking platform. Designed and implemented high-performance, event-driven microservices using Python and PHP with asynchronous networking engine. Focused on scalable, fault-tolerant systems for core banking operations.',
    highlights: ['Event-driven microservices', 'Python & PHP', 'High-performance architecture', 'Digital banking', 'Async networking'],
  },
  {
    id: 3,
    company: 'Self Employed',
    role: 'Full Stack Engineer',
    period: 'Nov 2020 - Feb 2026',
    location: 'Jakarta, Indonesia',
    description:
      'Leading the Sisnaker product team, specializing in the development and maintenance of various Sisnaker services. Leading the JKP service tech team.',
    highlights: ['Sisnaker platform', 'JKP service', 'Team management'],
  },
  {
    id: 4,
    company: 'Renos',
    role: 'Software Engineer',
    period: 'Oct 2022 - Jan 2026',
    location: 'Jakarta, Indonesia',
    description:
      'Collaborated with engineers to migrate monolithic legacy code to microservices. Created and implemented a search feature for customers.',
    highlights: ['Microservices', 'Search feature', 'Architecture'],
  },
  {
    id: 5,
    company: 'Ammana Fintech Syariah',
    role: 'Back End Developer',
    period: 'Oct 2020 - Sep 2022',
    location: 'Jakarta, Indonesia',
    description:
      'Leading technical teams and managing integration projects within the fintech industry. Overseeing payment services and third-party integrations.',
    highlights: ['Payment services', 'Integrations', 'Fintech'],
  },
  {
    id: 6,
    company: 'PT. Lawang Sewu Teknologi',
    role: 'Web Developer',
    period: 'Mar 2019 - Jul 2021',
    location: 'Jakarta & Purwokerto, Indonesia',
    description:
      'Maintaining and overseeing the full development cycle of SIMPBB and BPHTB products. Managing product responsibilities and development process.',
    highlights: ['SIMPBB & BPHTB', 'Full lifecycle', 'Government'],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [expandedId, setExpandedId] = useState<number | null>(1)

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

  return (
    <section
      id="experience"
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
            'mb-16 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-background text-muted-foreground mb-4 border border-border">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Work History
          </h2>
          <p className="max-w-xl text-muted-foreground">
            A journey through my professional career
          </p>
        </div>

        {/* Experience List */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={cn(
                'relative transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={cn(
                  'group rounded border border-border bg-background p-5 cursor-pointer transition-all duration-200',
                  'hover:border-foreground/20',
                  expandedId === exp.id && 'border-foreground/30'
                )}
                onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground">
                        {exp.company}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    className={cn(
                      'w-4 h-4 text-muted-foreground transition-transform duration-200',
                      expandedId === exp.id && 'rotate-90'
                    )}
                  />
                </div>

                {/* Expanded Content */}
                <div
                  className={cn(
                    'overflow-hidden transition-all duration-200',
                    expandedId === exp.id ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-0.5 rounded text-xs bg-secondary text-muted-foreground border border-border"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div
          className={cn(
            'mt-16 transition-all duration-700 delay-500',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <h3 className="text-xl font-semibold mb-6">Education</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded border border-border bg-background p-4 hover:border-foreground/20 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm mb-0.5">
                    Master's in Information Technology
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    University of Indonesia
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    Aug 2022 - Dec 2024
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded border border-border bg-background p-4 hover:border-foreground/20 transition-all">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-secondary flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground text-sm mb-0.5">
                    Bachelor's in Informatics
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    Universitas Jenderal Soedirman
                  </p>
                  <p className="text-xs text-muted-foreground/70 mt-1">
                    2016 - 2020
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
