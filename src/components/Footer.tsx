import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { cn } from '@/lib/utils'

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/adipp', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/adipp', icon: Linkedin },
  { name: 'Email', href: 'mailto:adiputrapermana@gmail.com', icon: Mail },
]

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-border" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-3 flex flex-col items-center md:items-start">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                scrollToTop()
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center transition-opacity duration-200 group-hover:opacity-90">
                <span className="text-primary-foreground font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-sm">Adi Putra</span>
            </a>
            <p className="text-xs text-muted-foreground max-w-xs leading-relaxed">
              Senior Software Engineer specializing in backend development,
              microservices, and fintech solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-foreground mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm md:text-xs text-muted-foreground hover:text-foreground transition-colors min-h-[44px] py-2 md:py-0 flex items-center justify-center md:justify-start w-full"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-foreground mb-3 text-sm">Connect</h4>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'w-11 h-11 rounded flex items-center justify-center touch-target',
                    'bg-secondary text-muted-foreground hover:text-foreground',
                    'transition-colors duration-200 active:bg-secondary/70'
                  )}
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground flex items-center gap-1">
              © {currentYear} Adi Putra. Made with{' '}
              <Heart className="w-3 h-3 text-muted-foreground" /> in Jakarta
            </p>

            <button
              onClick={scrollToTop}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 min-h-[44px] rounded text-xs',
                'text-muted-foreground hover:text-foreground hover:bg-secondary',
                'transition-colors duration-200 touch-target'
              )}
            >
              Back to top
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
