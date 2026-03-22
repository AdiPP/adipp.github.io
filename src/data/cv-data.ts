export interface CVData {
  personalInfo: {
    name: string
    title: string
    summary: string
    email: string
    linkedin: string
    github: string
    location: string
    website?: string
  }
  experiences: CVExperience[]
  education: CVEducation[]
  skills: CVSkillCategory[]
  projects: CVProject[]
  certifications: CVCertification[]
}

export interface CVExperience {
  company: string
  role: string
  period: string
  location: string
  highlights: string[]
}

export interface CVEducation {
  degree: string
  school: string
  period: string
}

export interface CVSkillCategory {
  name: string
  skills: string[]
}

export interface CVProject {
  name: string
  role: string
  description: string
  techStack: string[]
  link?: string
}

export interface CVCertification {
  name: string
  issuer: string
  year: string
}

export const cvData: CVData = {
  personalInfo: {
    name: 'Adi Putra',
    title: 'Senior Software Engineer',
    summary:
      'Goal-driven developer with 6+ years of experience in software engineering. Passionate about building scalable systems, microservices, and fintech solutions. Experienced in leading teams and delivering impactful projects across fintech, banking, and government sectors. Strong believer in clean architecture and mentoring junior developers.',
    email: 'adiputrapermana@gmail.com',
    linkedin: 'linkedin.com/in/adipp',
    github: 'github.com/adipp',
    location: 'Jakarta, Indonesia',
    website: 'adipp.github.io',
  },
  experiences: [
    {
      company: 'Pandawa',
      role: 'Co-Founder & Backend Lead',
      period: '2026 - Present',
      location: 'Jakarta, Indonesia',
      highlights: [
        'Co-founded a software firm specializing in fintech solutions, ERP systems, and cloud-native architecture',
        'Lead technical strategy and backend architecture for multiple client projects',
        'Mentor team members and establish engineering best practices',
      ],
    },
    {
      company: 'BPR Saridana (Bank)',
      role: 'Senior Software Engineer (Backend)',
      period: 'Feb 2026 - Present',
      location: 'Surabaya, East Java, Indonesia',
      highlights: [
        'Architect event-driven microservices for digital banking platform using Python and PHP',
        'Implement async networking engines for high-performance core banking operations',
        'Collaborate with self-managing agile team for end-to-end delivery',
      ],
    },
    {
      company: 'Self Employed',
      role: 'Full Stack Engineer',
      period: 'Nov 2020 - Feb 2026',
      location: 'Jakarta, Indonesia',
      highlights: [
        'Led Sisnaker product team for government employment platform',
        'Architected and deployed JKP service from concept to production',
        'Managed stakeholder relationships and technical decision-making',
      ],
    },
    {
      company: 'Renos',
      role: 'Software Engineer',
      period: 'Oct 2022 - Jan 2026',
      location: 'Jakarta, Indonesia',
      highlights: [
        'Migrated monolithic legacy code to microservices architecture',
        'Built search feature from scratch, elevating product functionality',
        'Applied incremental modernization strategies for system evolution',
      ],
    },
    {
      company: 'Ammana Fintech Syariah',
      role: 'Back End Developer',
      period: 'Oct 2020 - Sep 2022',
      location: 'Jakarta, Indonesia',
      highlights: [
        'Built Shariah-compliant payment services and fintech solutions',
        'Led integrations with third-party services and financial institutions',
        'Ensured security and compliance standards in all implementations',
      ],
    },
    {
      company: 'PT. Lawang Sewu Teknologi',
      role: 'Web Developer',
      period: 'Mar 2019 - Jul 2021',
      location: 'Jakarta & Purwokerto, Indonesia',
      highlights: [
        'Developed SIMPBB and BPHTB government systems with real-world impact',
        'Managed full software lifecycle from requirements to deployment',
        'Delivered maintainable solutions for government agencies',
      ],
    },
  ],
  education: [
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
  ],
  skills: [
    {
      name: 'Languages',
      skills: ['Go', 'Python', 'PHP', 'JavaScript/TypeScript', 'SQL'],
    },
    {
      name: 'Backend',
      skills: ['Microservices', 'Event-Driven Architecture', 'RESTful APIs', 'Async Networking', 'gRPC'],
    },
    {
      name: 'Databases',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
      name: 'Cloud & DevOps',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    },
    {
      name: 'Architecture',
      skills: ['System Design', 'Git', 'Linux', 'Message Queues', 'High-Performance Computing'],
    },
  ],
  projects: [
    {
      name: 'Pandawa',
      role: 'Backend Lead',
      description:
        'Software firm building scalable fintech platforms, custom ERP systems, and cloud-native architectures for startups to enterprises.',
      techStack: ['Go', 'Python', 'PHP', 'Microservices', 'Event-Driven', 'Cloud-Native'],
      link: 'pandawa.io',
    },
    {
      name: 'BPR Saridana Digital Banking',
      role: 'Senior Software Engineer',
      description:
        'Next-generation digital banking platform with event-driven microservices handling core banking operations at scale.',
      techStack: ['Python', 'PHP', 'Event-Driven', 'Microservices', 'PostgreSQL'],
      link: 'saridana.id',
    },
  ],
  certifications: [
    {
      name: "Go: The Complete Developer's Guide",
      issuer: 'Udemy',
      year: '2023',
    },
  ],
}
