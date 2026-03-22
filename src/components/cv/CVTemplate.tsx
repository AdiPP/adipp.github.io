import type { CVData } from '@/data/cv-data'

interface CVTemplateProps {
  data: CVData
}

export default function CVTemplate({ data }: CVTemplateProps) {
  const { personalInfo, experiences, education, skills, projects, certifications } = data

  return (
    <div className="cv-template bg-white text-gray-900 font-sans">
      {/* Header */}
      <header className="border-b-2 border-gray-800 pb-4 mb-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{personalInfo.name}</h1>
        <p className="text-base text-gray-700 font-medium mb-2">{personalInfo.title}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-600">
          <span>{personalInfo.email}</span>
          <span>|</span>
          <span>{personalInfo.linkedin}</span>
          <span>|</span>
          <span>{personalInfo.github}</span>
          <span>|</span>
          <span>{personalInfo.location}</span>
        </div>
      </header>

      {/* Summary */}
      <section className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">
          Professional Summary
        </h2>
        <p className="text-xs text-gray-700 leading-relaxed">{personalInfo.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
          Professional Experience
        </h2>
        <div className="space-y-3">
          {experiences.map((exp, index) => (
            <div key={index} className="break-inside-avoid">
              <div className="flex justify-between items-start mb-1">
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-xs text-gray-700">{exp.company}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">{exp.period}</p>
                  <p className="text-xs text-gray-500">{exp.location}</p>
                </div>
              </div>
              <ul className="list-disc list-outside ml-4 text-xs text-gray-700 space-y-0.5">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
          Education
        </h2>
        <div className="space-y-2">
          {education.map((edu, index) => (
            <div key={index} className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-xs text-gray-700">{edu.school}</p>
              </div>
              <p className="text-xs text-gray-600">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
          {skills.map((category, index) => (
            <div key={index} className="break-inside-avoid">
              <h3 className="text-xs font-semibold text-gray-800 mb-1">{category.name}:</h3>
              <p className="text-xs text-gray-700">{category.skills.join(', ')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
          Featured Projects
        </h2>
        <div className="space-y-2">
          {projects.map((project, index) => (
            <div key={index} className="break-inside-avoid">
              <div className="flex justify-between items-start">
                <h3 className="text-sm font-semibold text-gray-900">
                  {project.name}
                  {project.link && (
                    <span className="text-xs font-normal text-gray-500 ml-2">({project.link})</span>
                  )}
                </h3>
                <span className="text-xs text-gray-600">{project.role}</span>
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">{project.description}</p>
              <p className="text-xs text-gray-500 mt-0.5">
                <span className="font-medium">Tech:</span> {project.techStack.join(', ')}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mb-4">
          <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">
            Certifications
          </h2>
          <div className="space-y-1">
            {certifications.map((cert, index) => (
              <div key={index} className="flex justify-between items-start">
                <p className="text-xs text-gray-700">{cert.name}</p>
                <p className="text-xs text-gray-500">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
