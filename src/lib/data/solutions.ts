import { Solution, SolutionCategory } from '@/types'

export const solutionCategories: SolutionCategory[] = [
  {
    id: 'digital-infrastructure',
    name: 'Digital Infrastructure',
    description: 'Core digital foundation for municipal operations',
    icon: '🏗️',
    color: 'blue'
  },
  {
    id: 'smart-city',
    name: 'Smart City Solutions',
    description: 'Intelligent urban management systems',
    icon: '🏙️',
    color: 'green'
  },
  {
    id: 'municipal-services',
    name: 'Municipal Services',
    description: 'Digital citizen service delivery',
    icon: '🏛️',
    color: 'purple'
  },
  {
    id: 'analytics',
    name: 'Data Analytics',
    description: 'Data-driven decision making',
    icon: '📊',
    color: 'orange'
  },
  {
    id: 'ai-integration',
    name: 'Municipal AI Integration',
    description: 'Artificial Intelligence for municipal governance',
    icon: '🤖',
    color: 'indigo'
  }
]

export const solutions: Solution[] = [
  {
    id: 'digital-infrastructure',
    name: 'Digital Infrastructure',
    slug: 'digital-infrastructure',
    description: 'Build robust digital foundations that enable efficient municipal operations across Africa. Our digital infrastructure solutions provide the essential technology backbone that transforms traditional municipal services into modern, efficient, and citizen-centric operations.',
    shortDescription: 'Essential digital foundation for modern municipal operations across Africa.',
    category: solutionCategories.find(cat => cat.id === 'digital-infrastructure')!,
    features: [
      {
        id: 'fiber-optic-network',
        title: 'Fiber Optic Network Infrastructure',
        description: 'High-speed internet connectivity for municipal offices and public facilities',
        icon: '🌐',
        isCore: true,
        benefits: [
          'Reliable internet connectivity for all municipal operations',
          'Support for video conferencing and remote collaboration',
          'Foundation for digital service delivery',
          'Reduced communication costs'
        ]
      },
      {
        id: 'cloud-infrastructure',
        title: 'Cloud Infrastructure Setup',
        description: 'Secure, scalable cloud infrastructure tailored for African municipalities',
        icon: '☁️',
        isCore: true,
        benefits: [
          'Cost-effective data storage and management',
          'Automatic backups and disaster recovery',
          'Scalable resources based on municipal needs',
          'Enhanced security and compliance'
        ]
      },
      {
        id: 'cybersecurity',
        title: 'Cybersecurity Framework',
        description: 'Comprehensive security measures to protect municipal data and systems',
        icon: '🔒',
        isCore: true,
        benefits: [
          'Protection against cyber threats and data breaches',
          'Secure citizen data handling',
          'Compliance with data protection regulations',
          'Regular security audits and updates'
        ]
      },
      {
        id: 'backup-systems',
        title: 'Backup & Recovery Systems',
        description: 'Automated backup systems with disaster recovery capabilities',
        icon: '💾',
        isCore: false,
        benefits: [
          'Data protection against system failures',
          'Quick recovery from disasters',
          'Business continuity assurance',
          'Reduced downtime and data loss'
        ]
      }
    ],
    benefits: [
      {
        id: 'operational-efficiency',
        title: 'Enhanced Operational Efficiency',
        description: 'Streamlined municipal operations through digital infrastructure',
        impact: 'high',
        timeframe: '3-6 months',
        metrics: ['40% reduction in processing time', '60% improvement in data accuracy', '50% decrease in manual errors']
      },
      {
        id: 'cost-reduction',
        title: 'Significant Cost Reduction',
        description: 'Lower operational costs through digital transformation',
        impact: 'high',
        timeframe: '6-12 months',
        metrics: ['30% reduction in operational costs', '25% savings on paper and printing', '20% decrease in staff overtime']
      },
      {
        id: 'citizen-satisfaction',
        title: 'Improved Citizen Satisfaction',
        description: 'Better service delivery leading to higher citizen satisfaction',
        impact: 'medium',
        timeframe: '6-9 months',
        metrics: ['45% increase in citizen satisfaction', '35% reduction in service complaints', '50% faster service delivery']
      }
    ],
    successMetrics: [
      {
        id: 'connectivity-speed',
        title: 'Internet Connectivity Speed',
        value: '100',
        unit: 'Mbps',
        improvement: '+400%',
        timeframe: '3 months',
        description: 'Average internet speed for municipal operations',
        category: 'efficiency'
      },
      {
        id: 'system-uptime',
        title: 'System Uptime',
        value: '99.5',
        unit: '%',
        improvement: '+15%',
        timeframe: '6 months',
        description: 'Reliability of municipal digital systems',
        category: 'efficiency'
      },
      {
        id: 'data-security',
        title: 'Security Incidents',
        value: '0',
        unit: 'incidents',
        improvement: '-100%',
        timeframe: '12 months',
        description: 'Number of security breaches or data incidents',
        category: 'transparency'
      },
      {
        id: 'cost-savings',
        title: 'Operational Cost Savings',
        value: '30',
        unit: '%',
        improvement: '+30%',
        timeframe: '12 months',
        description: 'Reduction in operational costs through digital infrastructure',
        category: 'cost'
      }
    ],
    implementationSteps: [
      {
        id: 'assessment',
        title: 'Infrastructure Assessment',
        description: 'Comprehensive evaluation of current municipal IT infrastructure and needs',
        duration: '2-4 weeks',
        requirements: ['IT audit', 'Stakeholder interviews', 'Current system documentation'],
        deliverables: ['Infrastructure assessment report', 'Gap analysis', 'Recommendations'],
        order: 1
      },
      {
        id: 'planning',
        title: 'Implementation Planning',
        description: 'Detailed project plan and timeline for infrastructure deployment',
        duration: '2-3 weeks',
        requirements: ['Assessment results', 'Budget approval', 'Stakeholder buy-in'],
        deliverables: ['Project plan', 'Timeline', 'Resource allocation'],
        order: 2
      },
      {
        id: 'deployment',
        title: 'Infrastructure Deployment',
        description: 'Physical installation and configuration of digital infrastructure',
        duration: '8-12 weeks',
        requirements: ['Approved plan', 'Procured equipment', 'Trained personnel'],
        deliverables: ['Installed infrastructure', 'Configured systems', 'Testing reports'],
        order: 3
      },
      {
        id: 'training',
        title: 'Staff Training',
        description: 'Comprehensive training for municipal staff on new systems',
        duration: '4-6 weeks',
        requirements: ['Deployed systems', 'Training materials', 'Staff availability'],
        deliverables: ['Trained staff', 'User manuals', 'Support documentation'],
        order: 4
      }
    ],
    caseStudies: [
      {
        id: 'buea-digital-infrastructure',
        title: 'Buea Council Digital Infrastructure Transformation',
        municipality: 'Buea Council',
        country: 'Cameroon',
        description: 'Complete digital infrastructure overhaul for Cameroon\'s Silicon Mountain municipality',
        challenge: 'Outdated IT infrastructure limiting municipal efficiency and citizen service delivery',
        solution: 'Comprehensive digital infrastructure including fiber optic network, cloud systems, and cybersecurity framework',
        results: [
          '100% increase in internet connectivity speed',
          '99.5% system uptime achieved',
          '40% reduction in operational costs',
          'Zero security incidents in 12 months'
        ],
        metrics: {
          before: '25 Mbps, 85% uptime, High costs',
          after: '100 Mbps, 99.5% uptime, 40% cost reduction',
          improvement: '300% speed increase, 99.5% reliability'
        },
        testimonial: 'The digital infrastructure transformation has revolutionized how we serve our citizens. We can now process requests faster and more efficiently than ever before.',
        author: 'David Mafani Namange',
        role: 'Mayor of Buea Council',
        imageUrl: '/images/case-studies/buea-infrastructure.jpg'
      }
    ],
    isActive: true,
    isFeatured: true,
    imageUrl: '/images/solutions/digital-infrastructure.jpg',
    iconUrl: '/images/solutions/icons/digital-infrastructure.svg',
    targetAudience: ['Municipal IT departments', 'City managers', 'Mayors', 'Development partners'],
    technicalRequirements: [
      {
        id: 'power-supply',
        category: 'hardware',
        title: 'Reliable Power Supply',
        description: 'Uninterrupted power supply (UPS) and backup generators',
        isRequired: true,
        alternatives: ['Solar power systems', 'Battery backup systems']
      },
      {
        id: 'network-equipment',
        category: 'hardware',
        title: 'Network Equipment',
        description: 'Routers, switches, and network cables',
        isRequired: true
      },
      {
        id: 'computers',
        category: 'hardware',
        title: 'Computers and Devices',
        description: 'Desktop computers, laptops, and mobile devices for staff',
        isRequired: true
      },
      {
        id: 'staff-training',
        category: 'training',
        title: 'Staff Training',
        description: 'Basic computer literacy and system operation training',
        isRequired: true
      }
    ],
    supportLevel: 'premium',
    estimatedImplementationTime: '4-6 months',
    roi: '300% within 2 years',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'smart-city',
    name: 'Smart City Solutions',
    slug: 'smart-city',
    description: 'Transform African municipalities into intelligent, connected cities that leverage technology to improve urban living, enhance service delivery, and promote sustainable development. Our smart city solutions integrate IoT sensors, data analytics, and citizen engagement platforms to create more efficient and responsive urban environments.',
    shortDescription: 'Intelligent urban management systems for sustainable African cities.',
    category: solutionCategories.find(cat => cat.id === 'smart-city')!,
    features: [
      {
        id: 'iot-sensors',
        title: 'IoT Sensor Network',
        description: 'Connected sensors for monitoring air quality, traffic, waste, and utilities',
        icon: '📡',
        isCore: true,
        benefits: [
          'Real-time monitoring of city conditions',
          'Data-driven decision making',
          'Improved resource management',
          'Enhanced public safety'
        ]
      },
      {
        id: 'traffic-management',
        title: 'Smart Traffic Management',
        description: 'Intelligent traffic control systems to reduce congestion and improve flow',
        icon: '🚦',
        isCore: true,
        benefits: [
          'Reduced traffic congestion',
          'Improved air quality',
          'Faster emergency response',
          'Better public transportation efficiency'
        ]
      },
      {
        id: 'waste-management',
        title: 'Smart Waste Management',
        description: 'IoT-enabled waste collection and monitoring systems',
        icon: '🗑️',
        isCore: true,
        benefits: [
          'Optimized waste collection routes',
          'Reduced operational costs',
          'Cleaner city environment',
          'Better resource utilization'
        ]
      },
      {
        id: 'energy-management',
        title: 'Smart Energy Management',
        description: 'Intelligent energy monitoring and optimization systems',
        icon: '⚡',
        isCore: false,
        benefits: [
          'Reduced energy consumption',
          'Lower utility costs',
          'Environmental sustainability',
          'Renewable energy integration'
        ]
      }
    ],
    benefits: [
      {
        id: 'urban-efficiency',
        title: 'Enhanced Urban Efficiency',
        description: 'Optimized city operations through smart technology integration',
        impact: 'high',
        timeframe: '6-12 months',
        metrics: ['35% reduction in traffic congestion', '40% improvement in waste collection efficiency', '25% decrease in energy consumption']
      },
      {
        id: 'citizen-engagement',
        title: 'Improved Citizen Engagement',
        description: 'Better citizen participation through digital platforms and real-time feedback',
        impact: 'medium',
        timeframe: '3-6 months',
        metrics: ['60% increase in citizen participation', '45% improvement in service satisfaction', '30% faster response to citizen requests']
      },
      {
        id: 'sustainability',
        title: 'Environmental Sustainability',
        description: 'Reduced environmental impact through smart resource management',
        impact: 'high',
        timeframe: '12-18 months',
        metrics: ['20% reduction in carbon emissions', '30% decrease in waste generation', '25% increase in renewable energy usage']
      }
    ],
    successMetrics: [
      {
        id: 'traffic-reduction',
        title: 'Traffic Congestion Reduction',
        value: '35',
        unit: '%',
        improvement: '+35%',
        timeframe: '12 months',
        description: 'Reduction in average traffic congestion levels',
        category: 'efficiency'
      },
      {
        id: 'air-quality',
        title: 'Air Quality Improvement',
        value: '25',
        unit: '%',
        improvement: '+25%',
        timeframe: '18 months',
        description: 'Improvement in air quality index',
        category: 'satisfaction'
      },
      {
        id: 'energy-savings',
        title: 'Energy Consumption Reduction',
        value: '25',
        unit: '%',
        improvement: '+25%',
        timeframe: '12 months',
        description: 'Reduction in municipal energy consumption',
        category: 'cost'
      },
      {
        id: 'citizen-satisfaction',
        title: 'Citizen Satisfaction Score',
        value: '85',
        unit: '%',
        improvement: '+20%',
        timeframe: '6 months',
        description: 'Overall citizen satisfaction with municipal services',
        category: 'satisfaction'
      }
    ],
    implementationSteps: [
      {
        id: 'city-assessment',
        title: 'Smart City Assessment',
        description: 'Comprehensive evaluation of city infrastructure and smart city readiness',
        duration: '4-6 weeks',
        requirements: ['City infrastructure audit', 'Stakeholder consultation', 'Technology assessment'],
        deliverables: ['Smart city roadmap', 'Priority areas identification', 'Implementation strategy'],
        order: 1
      },
      {
        id: 'pilot-deployment',
        title: 'Pilot Project Deployment',
        description: 'Small-scale deployment of smart city solutions in selected areas',
        duration: '8-12 weeks',
        requirements: ['Approved pilot areas', 'Procured equipment', 'Trained personnel'],
        deliverables: ['Pilot systems', 'Performance data', 'Lessons learned'],
        order: 2
      },
      {
        id: 'full-deployment',
        title: 'Full City Deployment',
        description: 'City-wide deployment of smart city solutions',
        duration: '16-24 weeks',
        requirements: ['Pilot results', 'Full funding', 'City-wide coordination'],
        deliverables: ['Complete smart city infrastructure', 'Integrated systems', 'Performance monitoring'],
        order: 3
      },
      {
        id: 'optimization',
        title: 'System Optimization',
        description: 'Continuous optimization and improvement of smart city systems',
        duration: 'Ongoing',
        requirements: ['Performance data', 'Citizen feedback', 'Regular maintenance'],
        deliverables: ['Optimized systems', 'Improved performance', 'Enhanced citizen experience'],
        order: 4
      }
    ],
    caseStudies: [
      {
        id: 'yaounde-smart-city',
        title: 'Yaoundé Smart City Initiative',
        municipality: 'Yaoundé 2 Council',
        country: 'Cameroon',
        description: 'Comprehensive smart city transformation for Cameroon\'s capital region',
        challenge: 'Rapid urbanization and increasing demand for efficient municipal services',
        solution: 'Integrated smart city platform with IoT sensors, traffic management, and citizen engagement',
        results: [
          '35% reduction in traffic congestion',
          '40% improvement in waste collection efficiency',
          '25% decrease in energy consumption',
          '60% increase in citizen engagement'
        ],
        metrics: {
          before: 'High congestion, inefficient services, low engagement',
          after: '35% less congestion, efficient services, high engagement',
          improvement: 'Significant improvement in all key metrics'
        },
        testimonial: 'The smart city solutions have transformed Yaoundé into a more efficient and citizen-friendly municipality. Our residents now enjoy better services and a cleaner environment.',
        author: 'Mayor of Yaoundé 2',
        role: 'Municipal Leader',
        imageUrl: '/images/case-studies/yaounde-smart-city.jpg'
      }
    ],
    isActive: true,
    isFeatured: true,
    imageUrl: '/images/solutions/smart-city.jpg',
    iconUrl: '/images/solutions/icons/smart-city.svg',
    targetAudience: ['City planners', 'Municipal engineers', 'Mayors', 'Urban development agencies'],
    technicalRequirements: [
      {
        id: 'network-infrastructure',
        category: 'network',
        title: 'High-Speed Network',
        description: 'Reliable internet connectivity for IoT devices and data transmission',
        isRequired: true
      },
      {
        id: 'data-center',
        category: 'hardware',
        title: 'Data Processing Center',
        description: 'Secure facility for data processing and storage',
        isRequired: true,
        alternatives: ['Cloud-based processing', 'Edge computing solutions']
      },
      {
        id: 'iot-devices',
        category: 'hardware',
        title: 'IoT Sensors and Devices',
        description: 'Sensors for monitoring various city parameters',
        isRequired: true
      },
      {
        id: 'technical-staff',
        category: 'training',
        title: 'Technical Personnel',
        description: 'Trained staff to operate and maintain smart city systems',
        isRequired: true
      }
    ],
    supportLevel: 'premium',
    estimatedImplementationTime: '8-12 months',
    roi: '250% within 3 years',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'municipal-services',
    name: 'Municipal Services',
    slug: 'municipal-services',
    description: 'Digitize and streamline municipal services to provide efficient, transparent, and accessible citizen services across Africa. Our municipal services platform transforms traditional paper-based processes into modern digital workflows, enabling citizens to access services online while improving municipal efficiency and transparency.',
    shortDescription: 'Digital citizen service delivery platform for African municipalities.',
    category: solutionCategories.find(cat => cat.id === 'municipal-services')!,
    features: [
      {
        id: 'online-portal',
        title: 'Citizen Service Portal',
        description: 'Comprehensive online platform for all municipal services',
        icon: '🌐',
        isCore: true,
        benefits: [
          '24/7 access to municipal services',
          'Reduced waiting times',
          'Transparent service tracking',
          'Improved citizen satisfaction'
        ]
      },
      {
        id: 'document-management',
        title: 'Digital Document Management',
        description: 'Secure digital storage and management of municipal documents',
        icon: '📄',
        isCore: true,
        benefits: [
          'Secure document storage',
          'Easy document retrieval',
          'Reduced paper usage',
          'Better record keeping'
        ]
      },
      {
        id: 'payment-system',
        title: 'Digital Payment System',
        description: 'Secure online payment processing for municipal fees and services',
        icon: '💳',
        isCore: true,
        benefits: [
          'Convenient online payments',
          'Reduced cash handling',
          'Better financial tracking',
          'Enhanced security'
        ]
      },
      {
        id: 'service-tracking',
        title: 'Service Request Tracking',
        description: 'Real-time tracking of citizen service requests and applications',
        icon: '📋',
        isCore: false,
        benefits: [
          'Transparent service delivery',
          'Improved accountability',
          'Better resource planning',
          'Enhanced citizen trust'
        ]
      }
    ],
    benefits: [
      {
        id: 'service-efficiency',
        title: 'Enhanced Service Efficiency',
        description: 'Streamlined municipal services through digital transformation',
        impact: 'high',
        timeframe: '3-6 months',
        metrics: ['50% reduction in processing time', '70% decrease in paper usage', '60% improvement in service accuracy']
      },
      {
        id: 'citizen-access',
        title: 'Improved Citizen Access',
        description: 'Better access to municipal services for all citizens',
        impact: 'high',
        timeframe: '2-4 months',
        metrics: ['80% of services available online', '90% citizen satisfaction', '24/7 service availability']
      },
      {
        id: 'transparency',
        title: 'Increased Transparency',
        description: 'Greater transparency in municipal operations and service delivery',
        impact: 'medium',
        timeframe: '4-8 months',
        metrics: ['100% service tracking', 'Real-time status updates', 'Public performance dashboards']
      }
    ],
    successMetrics: [
      {
        id: 'processing-time',
        title: 'Service Processing Time',
        value: '2',
        unit: 'days',
        improvement: '-75%',
        timeframe: '6 months',
        description: 'Average time to process citizen service requests',
        category: 'efficiency'
      },
      {
        id: 'online-adoption',
        title: 'Online Service Adoption',
        value: '80',
        unit: '%',
        improvement: '+80%',
        timeframe: '12 months',
        description: 'Percentage of citizens using online services',
        category: 'adoption'
      },
      {
        id: 'citizen-satisfaction',
        title: 'Citizen Satisfaction',
        value: '90',
        unit: '%',
        improvement: '+25%',
        timeframe: '6 months',
        description: 'Overall satisfaction with municipal services',
        category: 'satisfaction'
      },
      {
        id: 'cost-reduction',
        title: 'Operational Cost Reduction',
        value: '40',
        unit: '%',
        improvement: '+40%',
        timeframe: '12 months',
        description: 'Reduction in service delivery costs',
        category: 'cost'
      }
    ],
    implementationSteps: [
      {
        id: 'service-mapping',
        title: 'Service Process Mapping',
        description: 'Document and analyze current municipal service processes',
        duration: '3-4 weeks',
        requirements: ['Service documentation', 'Staff interviews', 'Process analysis'],
        deliverables: ['Service process maps', 'Bottleneck identification', 'Improvement recommendations'],
        order: 1
      },
      {
        id: 'platform-development',
        title: 'Digital Platform Development',
        description: 'Development of the municipal services digital platform',
        duration: '12-16 weeks',
        requirements: ['Approved service maps', 'Technical specifications', 'User requirements'],
        deliverables: ['Digital platform', 'Mobile application', 'Admin dashboard'],
        order: 2
      },
      {
        id: 'data-migration',
        title: 'Data Migration and Integration',
        description: 'Migration of existing data to the new digital platform',
        duration: '4-6 weeks',
        requirements: ['Digital platform', 'Data backup', 'Migration tools'],
        deliverables: ['Migrated data', 'Data validation', 'Integration testing'],
        order: 3
      },
      {
        id: 'staff-training',
        title: 'Staff Training and Launch',
        description: 'Training municipal staff and launching the digital services',
        duration: '6-8 weeks',
        requirements: ['Trained platform', 'Staff availability', 'Training materials'],
        deliverables: ['Trained staff', 'User documentation', 'Live platform'],
        order: 4
      }
    ],
    caseStudies: [
      {
        id: 'kette-municipal-services',
        title: 'Kette Council Digital Services Transformation',
        municipality: 'Kette Council',
        country: 'Cameroon',
        description: 'Complete digitization of municipal services for improved citizen access and efficiency',
        challenge: 'Paper-based processes causing delays and limited citizen access to municipal services',
        solution: 'Comprehensive digital municipal services platform with online portal and payment system',
        results: [
          '75% reduction in service processing time',
          '80% of services now available online',
          '90% citizen satisfaction achieved',
          '40% reduction in operational costs'
        ],
        metrics: {
          before: '8 days processing, 20% online, 65% satisfaction',
          after: '2 days processing, 80% online, 90% satisfaction',
          improvement: '75% faster, 4x more online, 25% happier citizens'
        },
        testimonial: 'The digital municipal services have revolutionized how we serve our citizens. They can now access services from anywhere, anytime, and we can process requests much faster.',
        author: 'Honorable Mr. GBANGA Emmanuel',
        role: 'Lord Mayor of Kette Council',
        imageUrl: '/images/case-studies/kette-services.jpg'
      }
    ],
    isActive: true,
    isFeatured: true,
    imageUrl: '/images/solutions/municipal-services.jpg',
    iconUrl: '/images/solutions/icons/municipal-services.svg',
    targetAudience: ['Municipal service departments', 'Citizen service managers', 'IT administrators', 'Mayors'],
    technicalRequirements: [
      {
        id: 'internet-connectivity',
        category: 'network',
        title: 'Reliable Internet Connection',
        description: 'Stable internet connectivity for online services',
        isRequired: true
      },
      {
        id: 'computers',
        category: 'hardware',
        title: 'Computers and Devices',
        description: 'Computers for municipal staff and public access terminals',
        isRequired: true
      },
      {
        id: 'security-software',
        category: 'software',
        title: 'Security Software',
        description: 'Antivirus and security software for data protection',
        isRequired: true
      },
      {
        id: 'staff-training',
        category: 'training',
        title: 'Staff Training',
        description: 'Training for municipal staff on digital systems',
        isRequired: true
      }
    ],
    supportLevel: 'standard',
    estimatedImplementationTime: '6-8 months',
    roi: '200% within 2 years',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'analytics',
    name: 'Data Analytics',
    slug: 'analytics',
    description: 'Transform municipal data into actionable insights that drive informed decision-making and improve service delivery across African municipalities. Our data analytics solutions provide comprehensive dashboards, predictive analytics, and performance monitoring tools that enable municipal leaders to make data-driven decisions for better governance and citizen satisfaction.',
    shortDescription: 'Data-driven decision making platform for African municipalities.',
    category: solutionCategories.find(cat => cat.id === 'analytics')!,
    features: [
      {
        id: 'performance-dashboard',
        title: 'Performance Dashboard',
        description: 'Real-time monitoring of municipal performance across all departments',
        icon: '📊',
        isCore: true,
        benefits: [
          'Real-time performance monitoring',
          'Data-driven decision making',
          'Improved accountability',
          'Better resource allocation'
        ]
      },
      {
        id: 'predictive-analytics',
        title: 'Predictive Analytics',
        description: 'AI-powered predictions for service demand, resource needs, and citizen behavior',
        icon: '🔮',
        isCore: true,
        benefits: [
          'Anticipate service demands',
          'Optimize resource planning',
          'Prevent service disruptions',
          'Improve citizen satisfaction'
        ]
      },
      {
        id: 'citizen-insights',
        title: 'Citizen Behavior Analytics',
        description: 'Analysis of citizen service usage patterns and satisfaction trends',
        icon: '👥',
        isCore: true,
        benefits: [
          'Understand citizen needs',
          'Improve service design',
          'Increase citizen engagement',
          'Optimize service delivery'
        ]
      },
      {
        id: 'financial-analytics',
        title: 'Financial Analytics',
        description: 'Comprehensive financial analysis and budget optimization tools',
        icon: '💰',
        isCore: false,
        benefits: [
          'Better budget management',
          'Cost optimization',
          'Revenue analysis',
          'Financial transparency'
        ]
      }
    ],
    benefits: [
      {
        id: 'decision-making',
        title: 'Enhanced Decision Making',
        description: 'Data-driven insights for better municipal governance',
        impact: 'high',
        timeframe: '2-4 months',
        metrics: ['50% improvement in decision accuracy', '30% faster response to issues', '25% better resource allocation']
      },
      {
        id: 'service-optimization',
        title: 'Service Optimization',
        description: 'Optimized municipal services based on data insights',
        impact: 'high',
        timeframe: '4-8 months',
        metrics: ['35% improvement in service efficiency', '40% reduction in service costs', '45% increase in citizen satisfaction']
      },
      {
        id: 'transparency',
        title: 'Increased Transparency',
        description: 'Greater transparency in municipal operations through data sharing',
        impact: 'medium',
        timeframe: '3-6 months',
        metrics: ['100% performance visibility', 'Real-time public dashboards', 'Open data initiatives']
      }
    ],
    successMetrics: [
      {
        id: 'decision-speed',
        title: 'Decision Making Speed',
        value: '30',
        unit: '%',
        improvement: '+30%',
        timeframe: '6 months',
        description: 'Improvement in speed of municipal decision making',
        category: 'efficiency'
      },
      {
        id: 'service-efficiency',
        title: 'Service Efficiency',
        value: '35',
        unit: '%',
        improvement: '+35%',
        timeframe: '12 months',
        description: 'Improvement in overall service delivery efficiency',
        category: 'efficiency'
      },
      {
        id: 'cost-optimization',
        title: 'Cost Optimization',
        value: '25',
        unit: '%',
        improvement: '+25%',
        timeframe: '12 months',
        description: 'Reduction in operational costs through data insights',
        category: 'cost'
      },
      {
        id: 'citizen-satisfaction',
        title: 'Citizen Satisfaction',
        value: '45',
        unit: '%',
        improvement: '+45%',
        timeframe: '8 months',
        description: 'Increase in citizen satisfaction with municipal services',
        category: 'satisfaction'
      }
    ],
    implementationSteps: [
      {
        id: 'data-audit',
        title: 'Data Assessment and Audit',
        description: 'Comprehensive evaluation of existing municipal data and systems',
        duration: '4-6 weeks',
        requirements: ['Data inventory', 'System analysis', 'Stakeholder interviews'],
        deliverables: ['Data audit report', 'Data quality assessment', 'Integration requirements'],
        order: 1
      },
      {
        id: 'platform-setup',
        title: 'Analytics Platform Setup',
        description: 'Installation and configuration of analytics platform and tools',
        duration: '6-8 weeks',
        requirements: ['Approved platform', 'Data access', 'Technical infrastructure'],
        deliverables: ['Analytics platform', 'Data connections', 'Initial dashboards'],
        order: 2
      },
      {
        id: 'data-integration',
        title: 'Data Integration and Processing',
        description: 'Integration of data sources and setup of data processing pipelines',
        duration: '8-10 weeks',
        requirements: ['Platform setup', 'Data sources', 'Processing requirements'],
        deliverables: ['Integrated data', 'Processing pipelines', 'Data validation'],
        order: 3
      },
      {
        id: 'dashboard-development',
        title: 'Dashboard and Report Development',
        description: 'Development of custom dashboards and analytical reports',
        duration: '6-8 weeks',
        requirements: ['Integrated data', 'User requirements', 'Design specifications'],
        deliverables: ['Custom dashboards', 'Analytical reports', 'User training'],
        order: 4
      }
    ],
    caseStudies: [
      {
        id: 'elak-oku-analytics',
        title: 'Elak-Oku Council Data Analytics Implementation',
        municipality: 'Elak-Oku Council',
        country: 'Cameroon',
        description: 'Comprehensive data analytics platform for evidence-based municipal governance',
        challenge: 'Limited data visibility and lack of insights for municipal decision making',
        solution: 'Advanced analytics platform with performance dashboards and predictive analytics',
        results: [
          '30% improvement in decision making speed',
          '35% increase in service efficiency',
          '25% reduction in operational costs',
          '45% increase in citizen satisfaction'
        ],
        metrics: {
          before: 'Slow decisions, inefficient services, high costs',
          after: '30% faster decisions, 35% more efficient, 25% cost reduction',
          improvement: 'Significant improvement across all performance metrics'
        },
        testimonial: 'The data analytics platform has transformed how we make decisions. We now have real-time insights that help us serve our citizens better and manage resources more efficiently.',
        author: 'Honorable Mr. Ngum Jerome Njioh',
        role: 'Lord Mayor of Elak-Oku Council',
        imageUrl: '/images/case-studies/elak-oku-analytics.jpg'
      }
    ],
    isActive: true,
    isFeatured: true,
    imageUrl: '/images/solutions/analytics.jpg',
    iconUrl: '/images/solutions/icons/analytics.svg',
    targetAudience: ['Municipal managers', 'Data analysts', 'City planners', 'Mayors', 'Development partners'],
    technicalRequirements: [
      {
        id: 'data-sources',
        category: 'software',
        title: 'Data Sources',
        description: 'Access to municipal data from various departments and systems',
        isRequired: true
      },
      {
        id: 'computing-power',
        category: 'hardware',
        title: 'Computing Resources',
        description: 'Adequate computing power for data processing and analytics',
        isRequired: true,
        alternatives: ['Cloud-based processing', 'Edge computing solutions']
      },
      {
        id: 'data-storage',
        category: 'hardware',
        title: 'Data Storage',
        description: 'Secure storage for municipal data and analytics results',
        isRequired: true
      },
      {
        id: 'analytical-skills',
        category: 'training',
        title: 'Analytical Skills',
        description: 'Training for staff to interpret and use analytics insights',
        isRequired: true
      }
    ],
    supportLevel: 'standard',
    estimatedImplementationTime: '4-6 months',
    roi: '180% within 2 years',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'ai-integration',
    name: 'Municipal AI Integration',
    slug: 'ai-integration',
    description: 'Transform municipal governance through structured Artificial Intelligence implementation. Our Municipal AI Integration solution provides a comprehensive framework for implementing AI technologies in African municipalities, addressing the unique challenges of public sector AI adoption while ensuring transparency, human oversight, and explainable AI (XAI) principles.',
    shortDescription: 'Structured AI implementation framework for transparent and effective municipal governance.',
    category: solutionCategories.find(cat => cat.id === 'ai-integration')!,
    features: [
      {
        id: 'ai-readiness-assessment',
        title: 'AI Readiness Assessment',
        description: 'Comprehensive evaluation of municipal AI readiness and implementation potential',
        icon: '🔍',
        isCore: true,
        benefits: [
          'Identify AI-suitable municipal tasks and processes',
          'Assess data quality and availability for AI implementation',
          'Evaluate technical infrastructure and human resource capacity',
          'Develop AI implementation roadmap tailored to municipal needs'
        ]
      },
      {
        id: 'explainable-ai',
        title: 'Explainable AI (XAI) Systems',
        description: 'Transparent AI systems with human oversight and interpretable decision-making',
        icon: '🔮',
        isCore: true,
        benefits: [
          'Transparent AI decision-making processes',
          'Human oversight and intervention capabilities',
          'Compliance with EU AI Act and public sector regulations',
          'Build citizen trust through AI transparency'
        ]
      },
      {
        id: 'ai-task-automation',
        title: 'Intelligent Task Automation',
        description: 'AI-powered automation for municipal tasks including document processing, permit applications, and citizen services',
        icon: '⚡',
        isCore: true,
        benefits: [
          'Automated document processing and classification',
          'Intelligent permit application processing',
          'AI-powered citizen service chatbots',
          'Predictive maintenance for municipal infrastructure'
        ]
      },
      {
        id: 'ai-governance-framework',
        title: 'AI Governance Framework',
        description: 'Comprehensive governance structure for responsible AI implementation in municipal contexts',
        icon: '📋',
        isCore: false,
        benefits: [
          'Ethical AI guidelines and policies',
          'Risk assessment and mitigation strategies',
          'AI performance monitoring and evaluation',
          'Continuous learning and improvement processes'
        ]
      }
    ],
    benefits: [
      {
        id: 'operational-efficiency',
        title: 'Enhanced Operational Efficiency',
        description: 'Streamlined municipal operations through intelligent automation and decision support',
        impact: 'high',
        timeframe: '6-12 months',
        metrics: ['50% reduction in document processing time', '40% improvement in permit processing efficiency', '35% decrease in manual administrative tasks']
      },
      {
        id: 'citizen-service-improvement',
        title: 'Improved Citizen Services',
        description: 'Better citizen experience through AI-powered service delivery and support',
        impact: 'high',
        timeframe: '3-9 months',
        metrics: ['24/7 AI-powered citizen support', '60% faster response to citizen inquiries', '80% reduction in service processing time']
      },
      {
        id: 'data-driven-decisions',
        title: 'Data-Driven Decision Making',
        description: 'Enhanced municipal decision-making through AI-powered insights and predictions',
        impact: 'medium',
        timeframe: '9-18 months',
        metrics: ['Predictive analytics for resource planning', 'AI-powered risk assessment', 'Data-driven policy recommendations']
      }
    ],
    successMetrics: [
      {
        id: 'ai-adoption-rate',
        title: 'AI System Adoption Rate',
        value: '85',
        unit: '%',
        improvement: '+85%',
        timeframe: '12 months',
        description: 'Percentage of municipal staff actively using AI systems',
        category: 'adoption'
      },
      {
        id: 'task-automation',
        title: 'Task Automation Efficiency',
        value: '50',
        unit: '%',
        improvement: '+50%',
        timeframe: '6 months',
        description: 'Reduction in manual task processing time',
        category: 'efficiency'
      },
      {
        id: 'citizen-satisfaction',
        title: 'Citizen Satisfaction with AI Services',
        value: '88',
        unit: '%',
        improvement: '+20%',
        timeframe: '9 months',
        description: 'Citizen satisfaction with AI-powered municipal services',
        category: 'satisfaction'
      },
      {
        id: 'cost-reduction',
        title: 'Operational Cost Reduction',
        value: '30',
        unit: '%',
        improvement: '+30%',
        timeframe: '18 months',
        description: 'Reduction in operational costs through AI implementation',
        category: 'cost'
      }
    ],
    implementationSteps: [
      {
        id: 'ai-readiness-evaluation',
        title: 'AI Readiness Evaluation',
        description: 'Comprehensive assessment of municipal AI readiness and implementation potential',
        duration: '4-6 weeks',
        requirements: ['Municipal data audit', 'Staff capability assessment', 'Infrastructure evaluation', 'Stakeholder interviews'],
        deliverables: ['AI readiness report', 'Implementation roadmap', 'Resource requirements', 'Risk assessment'],
        order: 1
      },
      {
        id: 'ai-strategy-development',
        title: 'AI Strategy Development',
        description: 'Development of comprehensive AI strategy aligned with municipal goals and capabilities',
        duration: '6-8 weeks',
        requirements: ['Readiness assessment results', 'Municipal strategic objectives', 'Budget approval', 'Stakeholder buy-in'],
        deliverables: ['AI strategy document', 'Implementation timeline', 'Budget allocation', 'Governance framework'],
        order: 2
      },
      {
        id: 'pilot-ai-implementation',
        title: 'Pilot AI Implementation',
        description: 'Small-scale AI implementation in selected municipal departments or processes',
        duration: '12-16 weeks',
        requirements: ['Approved AI strategy', 'Pilot project selection', 'Technical infrastructure', 'Staff training'],
        deliverables: ['Pilot AI systems', 'Performance metrics', 'Lessons learned', 'User feedback'],
        order: 3
      },
      {
        id: 'full-ai-deployment',
        title: 'Full AI Deployment',
        description: 'City-wide deployment of AI systems across municipal departments',
        duration: '20-32 weeks',
        requirements: ['Pilot results', 'Full funding', 'Trained personnel', 'Infrastructure readiness'],
        deliverables: ['Complete AI ecosystem', 'Integrated systems', 'Performance monitoring', 'Continuous improvement'],
        order: 4
      }
    ],
    caseStudies: [
      {
        id: 'douala-ai-integration',
        title: 'Douala City AI Integration Initiative',
        municipality: 'Douala City Council',
        country: 'Cameroon',
        description: 'Comprehensive AI integration for municipal governance and citizen services in Cameroon\'s economic capital',
        challenge: 'Increasing citizen demands and limited municipal resources requiring intelligent automation and decision support',
        solution: 'Structured AI implementation including document processing, permit automation, and citizen service chatbots',
        results: [
          '50% reduction in document processing time',
          '40% improvement in permit processing efficiency',
          '85% staff adoption of AI systems',
          '88% citizen satisfaction with AI services'
        ],
        metrics: {
          before: 'Manual processes, long processing times, limited capacity',
          after: '50% faster processing, 85% AI adoption, 88% satisfaction',
          improvement: 'Significant efficiency gains and improved citizen experience'
        },
        testimonial: 'The AI integration has transformed how we serve our citizens. We can now process requests faster and provide better support through intelligent automation while maintaining transparency and human oversight.',
        author: 'Mayor of Douala City',
        role: 'Municipal Leader',
        imageUrl: '/images/case-studies/douala-ai.jpg'
      }
    ],
    isActive: true,
    isFeatured: true,
    imageUrl: '/images/solutions/ai-integration.jpg',
    iconUrl: '/images/solutions/icons/ai-integration.svg',
    targetAudience: ['Municipal IT directors', 'City managers', 'Mayors', 'Digital transformation officers', 'Public sector AI specialists'],
    technicalRequirements: [
      {
        id: 'data-infrastructure',
        category: 'hardware',
        title: 'Data Infrastructure',
        description: 'Robust data storage and processing infrastructure for AI systems',
        isRequired: true,
        alternatives: ['Cloud-based AI infrastructure', 'Hybrid cloud solutions']
      },
      {
        id: 'ai-software',
        category: 'software',
        title: 'AI Software Platform',
        description: 'AI development and deployment platform with explainable AI capabilities',
        isRequired: true
      },
      {
        id: 'network-connectivity',
        category: 'network',
        title: 'High-Speed Network',
        description: 'Reliable high-speed internet connectivity for AI system operations',
        isRequired: true
      },
      {
        id: 'ai-training',
        category: 'training',
        title: 'AI Training and Education',
        description: 'Comprehensive training for municipal staff on AI systems and governance',
        isRequired: true
      }
    ],
    supportLevel: 'premium',
    estimatedImplementationTime: '8-12 months',
    roi: '220% within 3 years',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

export const getSolution = (slug: string): Solution | undefined => {
  return solutions.find(solution => solution.slug === slug)
}

export const getFeaturedSolutions = (): Solution[] => {
  return solutions.filter(solution => solution.isFeatured)
}

export const getSolutionsByCategory = (categoryId: string): Solution[] => {
  return solutions.filter(solution => solution.category.id === categoryId)
}

export const getAllSolutions = (): Solution[] => {
  return solutions
}
