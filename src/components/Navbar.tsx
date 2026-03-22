import { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/adipp', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/adipp', icon: Linkedin },
  { name: 'Email', href: 'mailto:adiputrapermana@gmail.com', icon: Mail },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isScrolled
            ? 'bg-background/95 backdrop-blur-sm border-border py-3'
            : 'bg-transparent border-transparent py-5'
        )}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded bg-foreground flex items-center justify-center transition-all duration-300 group-hover:opacity-80">
                <span className="text-background font-bold text-sm">A</span>
              </div>
              <span className="font-semibold text-sm hidden sm:block">Adi Putra</span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    'text-sm font-medium transition-colors duration-200 relative',
                    activeSection === link.href.slice(1)
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-px bg-primary" />
                  )}
                </button>
              ))}
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 md:hidden transition-all duration-300',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div className="absolute top-16 left-4 right-4 bg-background border border-border rounded-lg p-4 shadow-card">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  'text-left py-2 px-3 rounded font-medium transition-colors text-sm',
                  activeSection === link.href.slice(1)
                    ? 'bg-secondary text-foreground'
                    : 'text-foreground hover:bg-secondary'
                )}
              >
                {link.name}
              </button>
            ))}
            <div className="border-t border-border my-2" />
            <div className="flex gap-1 px-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  aria-label={link.name}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
