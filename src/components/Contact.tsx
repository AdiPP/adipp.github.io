import { useEffect, useRef, useState } from 'react'
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const contactLinks = [
  {
    name: 'Email',
    value: 'adiputrapermana@gmail.com',
    href: 'mailto:adiputrapermana@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    value: 'linkedin.com/in/adipp',
    href: 'https://linkedin.com/in/adipp',
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    value: 'github.com/adipp',
    href: 'https://github.com/adipp',
    icon: Github,
  },
]

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: '', email: '', message: '' })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <section
      id="contact"
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
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
            Let's Connect
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Have a project in mind or want to discuss opportunities?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div
            className={cn(
              'space-y-6 transition-all duration-700 delay-100',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Get in Touch
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be
                part of your vision. Feel free to reach out.
              </p>
            </div>

            {/* Contact Links */}
            <div className="space-y-2">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== 'Email' ? '_blank' : undefined}
                  rel={link.name !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 p-4 min-h-[56px] rounded border border-border bg-background hover:bg-secondary active:bg-secondary/70 transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center shrink-0">
                    <link.icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-muted-foreground">{link.name}</div>
                    <div className="text-sm font-medium text-foreground truncate">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className="flex items-center gap-3 p-4 min-h-[56px] rounded border border-border bg-background">
              <div className="w-10 h-10 rounded bg-secondary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-muted-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="text-sm font-medium text-foreground">Jakarta, Indonesia</div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className={cn(
              'transition-all duration-700 delay-200',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            )}
          >
            <div className="rounded border border-border bg-background p-6">
              <h3 className="text-base font-semibold mb-5">Send a Message</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center mb-3">
                    <CheckCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <h4 className="text-base font-semibold text-foreground mb-1">
                    Message Sent!
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, name: e.target.value }))
                      }
                      required
                      className={cn(
                        'w-full px-3 py-3 rounded bg-secondary/50 border border-border text-base',
                        'text-foreground placeholder:text-muted-foreground/50',
                        'focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20',
                        'transition-colors'
                      )}
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, email: e.target.value }))
                      }
                      required
                      className={cn(
                        'w-full px-3 py-2 rounded bg-secondary/50 border border-border text-sm',
                        'text-foreground placeholder:text-muted-foreground/50',
                        'focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20',
                        'transition-colors'
                      )}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-foreground mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((prev) => ({ ...prev, message: e.target.value }))
                      }
                      required
                      rows={4}
                      className={cn(
                        'w-full px-3 py-3 rounded bg-secondary/50 border border-border text-base',
                        'text-foreground placeholder:text-muted-foreground/50',
                        'focus:outline-none focus:border-foreground/30',
                        'transition-colors resize-none'
                      )}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      'w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded',
                      'bg-primary text-primary-foreground text-sm font-medium',
                      'hover:opacity-90 transition-opacity',
                      'disabled:opacity-70 disabled:cursor-not-allowed'
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
