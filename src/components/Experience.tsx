import { useEffect, useRef, useState } from 'react'
import { MapPin, Calendar, GraduationCap, Briefcase, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const experiences = [
  {
    id: 1,
    company: 'Pandawa',
    role: 'Co-Founder & Backend Lead',
    period: '2026 - Present',
    location: 'Jakarta, Indonesia',
    initials: 'P',
    color: 'bg-primary',
    logo: 'https://cms.pandawa.io/uploads/pandawa_logo_7a6942ec97.svg',
    link: 'https://pandawa.io/en-US',
    narrative: `The culmination of years leading teams and architecting systems led me here—co-founding Pandawa with four talented engineers. We're building a software firm that bridges the gap between ambitious ideas and robust execution.

Every project we take on is a chance to apply everything I've learned: from fintech compliance to government system requirements. As Backend Lead, I'm not just writing code—I'm shaping how we build, mentor, and deliver as a team.`,
    highlights: ['Fintech solutions', 'ERP systems', 'Cloud-native architecture', 'Technical leadership'],
  },
  {
    id: 2,
    company: 'BPR Saridana (Bank)',
    role: 'Senior Software Engineer (Backend)',
    period: 'Feb 2026 - Present',
    location: 'Surabaya, East Java, Indonesia',
    initials: 'BS',
    color: 'bg-emerald-500',
    logo: 'https://assets.saridana.id/web/saridana_logo_68d43c4e0d_94488ff078.svg',
    link: 'https://saridana.id/',
    narrative: `Joining BPR Saridana was about stepping into the heart of Indonesia's banking transformation. Digital banking isn't just about apps—it's about reimagining core systems that millions depend on.

Working with a self-managing agile team, I've been architecting event-driven microservices that handle the complexity of modern banking. Python and PHP with async networking became our tools for building systems that don't just work—they scale gracefully under pressure.`,
    highlights: ['Event-driven microservices', 'Digital banking', 'High-performance architecture'],
  },
  {
    id: 3,
    company: 'Self Employed',
    role: 'Full Stack Engineer',
    period: 'Nov 2020 - Feb 2026',
    location: 'Jakarta, Indonesia',
    initials: 'SE',
    color: 'bg-amber-500',
    logo: null,
    link: 'https://kemnaker.go.id/',
    narrative: `This chapter was about wearing multiple hats and owning outcomes. Leading the Sisnaker product team meant juggling technical decisions with stakeholder management.

The JKP service became my proving ground—taking a complex government service from concept to production. I learned that great software isn't just about clean code; it's about understanding the humans who use it.`,
    highlights: ['Sisnaker platform', 'JKP service', 'Team management'],
  },
  {
    id: 4,
    company: 'Renos',
    role: 'Software Engineer',
    period: 'Oct 2022 - Jan 2026',
    location: 'Jakarta, Indonesia',
    initials: 'R',
    color: 'bg-violet-500',
    logo: null,
    link: 'https://www.linkedin.com/company/pt-renos-marketplace-indonesia/ ',
    narrative: `At Renos, I discovered the art of modernization. Migrating monolithic legacy code to microservices taught me that evolution beats revolution—incremental changes compound into transformation.

Building the search feature from scratch showed me how a single well-designed component can elevate an entire product. It was here I solidified my belief in architecture as a craft.`,
    highlights: ['Microservices migration', 'Search architecture', 'Legacy modernization'],
  },
  {
    id: 5,
    company: 'Ammana Fintech Syariah',
    role: 'Back End Developer',
    period: 'Oct 2020 - Sep 2022',
    location: 'Jakarta, Indonesia',
    initials: 'A',
    color: 'bg-cyan-500',
    logo: 'https://static-cf.ammana.id/logos/full.svg',
    link: 'https://ammana.id/',
    narrative: `Fintech moves fast, but Shariah-compliant fintech adds another layer of complexity. At Ammana, I learned to navigate both—building payment services that were innovative yet principled.

Leading integrations with third-party services taught me the diplomacy of engineering: how to make different systems talk to each other while keeping everything secure and compliant.`,
    highlights: ['Payment services', 'Third-party integrations', 'Shariah compliance'],
  },
  {
    id: 6,
    company: 'PT. Lawang Sewu Teknologi',
    role: 'Web Developer',
    period: 'Mar 2019 - Jul 2021',
    location: 'Jakarta & Purwokerto, Indonesia',
    initials: 'LS',
    color: 'bg-rose-500',
    logo: null,
    link: 'https://www.lawangsewu.com/',
    narrative: `This is where it all began. SIMPBB and BPHTB were my classrooms—government systems with real impact on real people.

I learned the full lifecycle here: from gathering requirements to deployment to maintenance. Every bug taught me patience. Every deadline taught me prioritization. Every satisfied user taught me why this work matters.`,
    highlights: ['SIMPBB & BPHTB', 'Full lifecycle development', 'Government systems'],
  },
]

const education = [
  {
    degree: "Master's in Information Technology",
    school: 'University of Indonesia',
    period: 'Aug 2022 - Dec 2025',
  },
  {
    degree: "Bachelor's in Informatics",
    school: 'Universitas Jenderal Soedirman',
    period: '2016 - 2020',
  },
]

export default function Experience() {
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
      { threshold: 0.05 }
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
            'mb-16 text-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <span className="inline-block px-3 py-1 rounded text-xs font-medium bg-background text-muted-foreground mb-4 border border-border">
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            My Journey
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground">
            Six years of growth, from writing my first production code to co-founding a software firm
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-muted-foreground/30 to-transparent" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={cn(
                  'relative flex gap-6 sm:gap-8 transition-all duration-700',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <div
                    className={cn(
                      'w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg',
                      exp.color
                    )}
                  >
                    {exp.initials}
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 min-w-0 pb-8">
                  <div className="rounded-xl border border-border bg-background p-5 sm:p-6 hover:border-foreground/20 hover:shadow-lg transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        {/* Company Logo or Initials */}
                        {exp.logo ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center p-2 hover:opacity-90 transition-opacity',
                              exp.company === 'Pandawa' ? 'bg-muted' : 'bg-secondary/50 hover:bg-secondary'
                            )}
                          >
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className={cn(
                                'w-full h-full object-contain',
                                exp.company === 'Pandawa' && 'invert'
                              )}
                              onError={(e) => {
                                (e.target as HTMLImageElement).style.display = 'none';
                                (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="text-lg font-bold text-foreground">${exp.initials}</span>`;
                              }}
                            />
                          </a>
                        ) : (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              'flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md hover:opacity-90 transition-opacity',
                              exp.color
                            )}
                          >
                            {exp.initials}
                          </a>
                        )}
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {exp.role}
                          </h3>
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                          >
                            {exp.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground sm:text-right">
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

                    {/* Journey Narrative */}
                    <div className="mb-4">
                      {exp.narrative.split('\n\n').map((paragraph, pIndex) => (
                        <p
                          key={pIndex}
                          className="text-sm text-muted-foreground leading-relaxed mb-3 last:mb-0"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2.5 py-1 rounded-full text-xs font-medium bg-secondary text-foreground border border-border"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div
          className={cn(
            'mt-20 transition-all duration-700 delay-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold">Education</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 sm:pl-12">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className={cn(
                  'rounded-lg border border-border bg-background p-5 hover:border-foreground/20 transition-all duration-300',
                  'flex items-start gap-4'
                )}
              >
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-muted-foreground mb-1">
                    {edu.school}
                  </p>
                  <p className="text-xs text-muted-foreground/70">
                    {edu.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
