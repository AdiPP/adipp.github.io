import { useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { generateCVPDF } from '@/lib/pdf-generator'

interface CVButtonProps {
  className?: string
  variant?: 'primary' | 'secondary'
}

export default function CVButton({ className, variant = 'secondary' }: CVButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false)

  const handleDownload = async () => {
    if (isGenerating) return

    setIsGenerating(true)
    try {
      await generateCVPDF({
        filename: 'Adi_Putra_CV_2025.pdf',
      })
    } catch (error) {
      console.error('Failed to generate CV PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  const baseStyles =
    'w-full sm:w-auto px-6 py-3 min-h-[48px] rounded text-sm font-medium transition-all duration-200 flex items-center justify-center touch-target-lg active:scale-[0.98]'

  const variantStyles = {
    primary: 'bg-primary text-primary-foreground hover:opacity-90',
    secondary:
      'border border-border text-foreground hover:border-primary hover:text-primary',
  }

  return (
    <button
      onClick={handleDownload}
      disabled={isGenerating}
      className={cn(baseStyles, variantStyles[variant], className)}
      aria-label={isGenerating ? 'Generating CV PDF...' : 'Download CV as PDF'}
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </>
      )}
    </button>
  )
}
