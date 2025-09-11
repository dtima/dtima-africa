export type PartnershipCategoryId = 'corporate' | 'development' | 'technology'

export interface PartnershipOffering {
  id: string
  title: string
  description: string
  benefits: string[]
}

export interface PartnerExample {
  id: string
  name: string
  logoUrl?: string
  website?: string
  brief: string
}

export interface PartnershipCategory {
  id: PartnershipCategoryId
  title: string
  subtitle: string
  overview: string
  offerings: PartnershipOffering[]
  examplePartners: PartnerExample[]
}

export const partnershipCategories: PartnershipCategory[] = [
  {
    id: 'corporate',
    title: 'Corporate Partnerships',
    subtitle: 'Drive municipal innovation with capital, capability, and market access',
    overview:
      'Corporate partners accelerate municipal transformation through project financing, discounted services, renewable energy deployments, capacity building, and market-making initiatives aligned with SDGs.',
    offerings: [
      {
        id: 'project-financing',
        title: 'Project Financing & Blended Capital',
        description:
          'Co-finance municipal digital infrastructure, smart utilities, connectivity, and revenue platforms under transparent, performance-based models.',
        benefits: [
          'Bankable projects with measurable ROI',
          'Risk-sharing structures (PPP, results-based)',
          'Scalable deployment playbooks'
        ]
      },
      {
        id: 'renewable-energy',
        title: 'Renewable Energy at Favorable Conditions',
        description:
          'Deploy solar microgrids, street lighting, and resilient power for data centers and public facilities with OPEX-friendly models.',
        benefits: [
          'Reduced energy costs and outages',
          'Lower emissions and ESG alignment',
          'Rapid deployment and predictable SLAs'
        ]
      },
      {
        id: 'discounted-services',
        title: 'Discounted Services & Preferred Pricing',
        description:
          'Offer enterprise-grade platforms (cloud, collaboration, cybersecurity) at reduced costs for municipalities under the DTIMA program.',
        benefits: [
          'Lower TCO for municipalities',
          'Faster onboarding and training',
          'Standardized compliance and security'
        ]
      }
    ],
    examplePartners: [
      {
        id: 'pushnchat',
        name: 'PushNchat',
        logoUrl: '/solution-partners/logo.svg',
        website: 'https://www.pushnchat.com',
        brief:
          'Strategic Networking: AI-powered partner matching and opportunity discovery.'
      }
    ]
  },
  {
    id: 'development',
    title: 'Development Partnerships',
    subtitle: 'Programmatic scale with accountability and long-term outcomes',
    overview:
      'Development partners bring catalytic funding, M&E frameworks, and governance support to scale DTIMA across municipalities with inclusive, sustainable impact.',
    offerings: [
      {
        id: 'program-funding',
        title: 'Program Funding & Grants',
        description:
          'Fund multi-year municipal transformation programs including digital identity, civil registration, and platforms for service delivery.',
        benefits: [
          'Multi-country replication',
          'Stronger institutional capacity',
          'Robust impact measurement'
        ]
      },
      {
        id: 'capacity-building',
        title: 'Capacity Building & Governance',
        description:
          'Upskill municipal teams and embed governance standards, procurement transparency, and citizen participation.',
        benefits: [
          'Sustainable operational maturity',
          'Policy alignment and compliance',
          'Community trust and adoption'
        ]
      }
    ],
    examplePartners: []
  },
  {
    id: 'technology',
    title: 'Technology Partnerships',
    subtitle: 'Integrate secure, interoperable platforms to modernize municipalities',
    overview:
      'Technology partners provide interoperable products, implementation expertise, and localized solutions that meet security, privacy, and performance standards.',
    offerings: [
      {
        id: 'platform-integration',
        title: 'Platform Integration & Interoperability',
        description:
          'Connect identity, payments, case management, and data platforms using open standards and modular architectures.',
        benefits: [
          'Reduced vendor lock-in',
          'Faster time-to-value',
          'Improved data quality and insights'
        ]
      },
      {
        id: 'security-compliance',
        title: 'Security, Privacy & Compliance',
        description:
          'Hardened architectures, access controls, and monitoring aligned with global best practices and local regulations.',
        benefits: [
          'Defense-in-depth posture',
          'Auditability and observability',
          'Trustworthy citizen experiences'
        ]
      }
    ],
    examplePartners: [
      {
        id: 'google-cloud',
        name: 'Google Cloud',
        logoUrl: '/solution-partners/Google-Cloud.jpg',
        website: 'https://cloud.google.com',
        brief:
          'Cloud infrastructure, analytics, and AI tooling for scalable digital government workloads.'
      }
    ]
  }
]

export const getPartnershipById = (id: PartnershipCategoryId) =>
  partnershipCategories.find((c) => c.id === id)


