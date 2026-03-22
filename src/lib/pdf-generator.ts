import html2pdf from 'html2pdf.js'

interface PDFOptions {
  filename?: string
  elementId?: string
}

export async function generateCVPDF(options: PDFOptions = {}): Promise<void> {
  const { filename = 'Adi_Putra_CV.pdf', elementId = 'cv-document' } = options

  const element = document.getElementById(elementId)
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`)
  }

  const opt = {
    margin: [10, 10, 10, 10] as [number, number, number, number],
    filename,
    image: { type: 'jpeg' as const, quality: 0.98 },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: false,
      letterRendering: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait' as const,
    },
    pagebreak: {
      mode: ['css', 'legacy'] as const,
      avoid: '.break-inside-avoid',
    },
  }

  try {
    // Clone the element and append to body for rendering
    const clone = element.cloneNode(true) as HTMLElement
    clone.style.position = 'absolute'
    clone.style.top = '0'
    clone.style.left = '0'
    clone.style.zIndex = '-1000'
    clone.style.opacity = '1'
    clone.style.pointerEvents = 'none'
    clone.id = 'cv-document-clone'

    document.body.appendChild(clone)

    // Wait for styles to apply
    await new Promise((resolve) => setTimeout(resolve, 100))

    await html2pdf().set(opt).from(clone).save()

    // Clean up
    document.body.removeChild(clone)
  } catch (error) {
    console.error('Error generating PDF:', error)
    throw error
  }
}
