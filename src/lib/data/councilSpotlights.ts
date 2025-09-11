import { CouncilSpotlight, InvestmentSector } from '@/types'

export const councilSpotlights: CouncilSpotlight[] = [
  {
    id: 'yaounde-2',
    name: 'Yaoundé 2 Council',
    slug: 'yaounde-2-council',
    location: {
      country: 'Cameroon',
      region: 'Centre',
      city: 'Yaoundé',
      population: 320000,
      area: 180
    },
    description: 'Nestled in the heart of Cameroon, Yaoundé 2 is a flourishing municipality that reflects the vibrant energy, cultural richness, and entrepreneurial spirit of modern Africa. With its dynamic population and strategic location within the capital city, Yaoundé 2 offers a compelling environment where tradition blends seamlessly with innovation.',
    shortDescription: 'Flourishing municipality reflecting vibrant energy, cultural richness, and entrepreneurial spirit of modern Africa.',
    imageUrl: '/images/councils/yaounde-2.jpg',
    logoUrl: '/local-councils/Yaounde-II-Council.png',
    highlights: [
      'Emerging economic powerhouse with thriving commercial districts',
      'Robust manufacturing base and expanding real estate sector',
      'Strategic plans focused on sustainable urbanization',
      'Support for small and medium enterprises',
      'Growing infrastructure and improved transport systems'
    ],
    economicStrength: 'Yaoundé 2 is rapidly establishing itself as an emerging economic powerhouse. The municipality boasts thriving commercial districts, a robust manufacturing base, and a steadily expanding real estate sector.',
    investmentOpportunities: [
      'Infrastructure development and real estate projects',
      'Agro-industrial transformation',
      'Hospitality and retail development',
      'Technological innovation and smart city solutions',
      'High-potential startup investments'
    ],
    investorSupport: 'In Yaoundé 2, entrepreneurship is not just supported — it is celebrated. Investors benefit from streamlined administrative processes, business registration support, and a clear commitment to transparency and facilitation.',
    futureVision: 'Yaoundé 2 is on a transformative journey, building the future through collaborative development, economic innovation, and inclusive planning.',
    keyStats: {
      population: 320000,
      area: 180,
      establishedYear: 1977,
      investmentOpportunities: 15,
      activeProjects: 8,
      digitalAdoptionRate: 75
    },
    sectors: [
      {
        id: 'infrastructure',
        name: 'Infrastructure Development',
        description: 'Modern infrastructure and urban development projects',
        opportunities: ['Road construction', 'Public transportation', 'Utilities', 'Smart city solutions'],
        investmentRange: '$2M - $50M',
        timeline: '2-5 years',
        icon: '🏗️'
      },
      {
        id: 'real-estate',
        name: 'Real Estate',
        description: 'Residential and commercial real estate development',
        opportunities: ['Residential complexes', 'Commercial centers', 'Mixed-use developments'],
        investmentRange: '$1M - $30M',
        timeline: '1-4 years',
        icon: '🏢'
      },
      {
        id: 'agro-industrial',
        name: 'Agro-Industrial',
        description: 'Agricultural processing and value addition',
        opportunities: ['Food processing', 'Agricultural technology', 'Supply chain development'],
        investmentRange: '$500K - $15M',
        timeline: '1-3 years',
        icon: '🌾'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@yaounde2.cm',
      phone: '+237 222 123 456',
      address: 'Yaoundé 2 Council, Centre Region',
      city: 'Yaoundé',
      country: 'Cameroon'
    },
    socialMedia: {
      facebook: 'https://facebook.com/yaounde2',
      twitter: 'https://twitter.com/yaounde2'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'mokolo',
    name: 'Mokolo Council',
    slug: 'mokolo-council',
    location: {
      country: 'Cameroon',
      region: 'Far North',
      city: 'Mokolo',
      population: 150000,
      area: 2500
    },
    description: 'Strategically positioned in Cameroon\'s Far North region, Mokolo stands as the proud departmental capital of Mayo-Tsanaga, nestled within the majestic Mandara Mountains along the Cameroon-Nigeria corridor. This historic crossroads of cultures and commerce represents one of Africa\'s most promising frontier markets.',
    shortDescription: 'Cross-border trade hub in Mandara Mountains with rich cultural heritage and strategic positioning.',
    imageUrl: '/images/councils/mokolo.jpg',
    logoUrl: '/local-councils/Mokolo-Council.png',
    highlights: [
      'Strategic position within Cameroon-Nigeria corridor',
      'Cross-border trade facilitation hub',
      'Rich cultural heritage and traditional crafts',
      'Mokolo Nature Reserve for eco-tourism',
      'Established trading networks and informal sector strength'
    ],
    economicStrength: 'Mokolo thrives as a veritable crossroads of trading routes and cultures, with its local economy built on agriculture, livestock farming, fishing, tourism, transportation of goods, handcrafts and hunting.',
    investmentOpportunities: [
      'Cross-border trade facilitation',
      'Sustainable agriculture and livestock development',
      'Eco-tourism ventures leveraging Mandara Mountains',
      'Artisanal craft production and modernization',
      'Agro-processing facilities and logistics services'
    ],
    investorSupport: 'Mokolo embraces partnership-driven development with open arms. The municipality actively supports streamlined cross-border procedures, community-centered business models, and cultural preservation through enterprise.',
    futureVision: 'Mokolo is charting a transformative course that honors its cultural heritage while embracing sustainable modernization.',
    keyStats: {
      population: 150000,
      area: 2500,
      establishedYear: 1977,
      investmentOpportunities: 12,
      activeProjects: 6,
      digitalAdoptionRate: 45
    },
    sectors: [
      {
        id: 'cross-border-trade',
        name: 'Cross-Border Trade',
        description: 'Trade facilitation and logistics services',
        opportunities: ['Border facilities', 'Logistics centers', 'Trade documentation', 'Customs services'],
        investmentRange: '$1M - $20M',
        timeline: '2-4 years',
        icon: '🚛'
      },
      {
        id: 'eco-tourism',
        name: 'Eco-Tourism',
        description: 'Sustainable tourism development',
        opportunities: ['Nature reserves', 'Cultural tourism', 'Adventure tourism', 'Heritage sites'],
        investmentRange: '$500K - $10M',
        timeline: '1-3 years',
        icon: '🏔️'
      },
      {
        id: 'agriculture',
        name: 'Agriculture & Livestock',
        description: 'Agricultural development and livestock farming',
        opportunities: ['Crop farming', 'Livestock production', 'Processing facilities', 'Market development'],
        investmentRange: '$200K - $8M',
        timeline: '1-2 years',
        icon: '🐄'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@mokolo.cm',
      phone: '+237 222 234 567',
      address: 'Mokolo Council, Mayo-Tsanaga',
      city: 'Mokolo',
      country: 'Cameroon'
    },
    socialMedia: {},
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'wum',
    name: 'Wum Council',
    slug: 'wum-council',
    location: {
      country: 'Cameroon',
      region: 'Northwest',
      city: 'Wum',
      population: 45000,
      area: 1200
    },
    description: 'Established in 1948, Wum stands proud as the capital of Menchum Division in Cameroon\'s Northwest Region, governing 17 thriving villages with a rich legacy of community governance and cultural preservation. This historic municipality represents the perfect synthesis of traditional authority structures and modern administrative innovation.',
    shortDescription: 'Historic highland municipality with coffee/cocoa excellence and spectacular natural beauty.',
    imageUrl: '/images/councils/wum.jpg',
    logoUrl: '/local-councils/Wum-Council.jpeg',
    highlights: [
      'Coffee and cocoa production excellence',
      'Beautiful Wum Lake and Menchum Falls',
      'Highland climate and fertile volcanic soils',
      'Forest patches for medicinal plants',
      'Traditional architectural heritage'
    ],
    economicStrength: 'Wum leverages its exceptional highland climate and fertile volcanic soils to maintain coffee and cocoa as significant economic contributors. The municipality\'s diverse economic base includes sustainable forestry, highland agriculture, artisanal food processing, and emerging eco-tourism.',
    investmentOpportunities: [
      'Specialty coffee and cocoa value chains',
      'Sustainable forestry and timber processing',
      'Eco-tourism development around natural landmarks',
      'Medicinal plant cultivation and processing',
      'Agro-processing facilities and renewable energy projects'
    ],
    investorSupport: 'Wum\'s approach to development emphasizes community ownership, environmental sustainability, and cultural preservation. The municipality provides strong support for enterprises that align with community values and environmental stewardship principles.',
    futureVision: 'Wum is building a development model that showcases how traditional governance, environmental stewardship, and economic growth can work in harmony.',
    keyStats: {
      population: 45000,
      area: 1200,
      establishedYear: 1948,
      investmentOpportunities: 8,
      activeProjects: 4,
      digitalAdoptionRate: 35
    },
    sectors: [
      {
        id: 'coffee-cocoa',
        name: 'Coffee & Cocoa',
        description: 'Premium coffee and cocoa production',
        opportunities: ['Plantation development', 'Processing facilities', 'Quality certification', 'Export markets'],
        investmentRange: '$300K - $12M',
        timeline: '2-5 years',
        icon: '☕'
      },
      {
        id: 'eco-tourism',
        name: 'Eco-Tourism',
        description: 'Nature-based tourism development',
        opportunities: ['Lake tourism', 'Waterfall attractions', 'Nature trails', 'Cultural experiences'],
        investmentRange: '$200K - $8M',
        timeline: '1-3 years',
        icon: '🌊'
      },
      {
        id: 'forestry',
        name: 'Sustainable Forestry',
        description: 'Forest management and timber processing',
        opportunities: ['Timber production', 'Forest conservation', 'Medicinal plants', 'Eco-products'],
        investmentRange: '$150K - $6M',
        timeline: '1-4 years',
        icon: '🌲'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@wum.cm',
      phone: '+237 222 345 678',
      address: 'Wum Council, Menchum Division',
      city: 'Wum',
      country: 'Cameroon'
    },
    socialMedia: {},
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'bazou',
    name: 'Bazou Council',
    slug: 'bazou-council',
    location: {
      country: 'Cameroon',
      region: 'West',
      city: 'Bazou',
      population: 32000,
      area: 450
    },
    description: 'Located in Cameroon\'s Ndé department, Bazou represents a vibrant confluence of nearly 32,000 residents from diverse ethnic backgrounds, creating one of West Cameroon\'s most dynamic multicultural municipalities. This strategic location combines highland agriculture with cultural diversity.',
    shortDescription: 'Multicultural agricultural powerhouse with diverse ethnic communities and cooperative structures.',
    imageUrl: '/images/councils/bazou.jpg',
    logoUrl: '/local-councils/Bazou-Council.jpeg',
    highlights: [
      'Nearly 32,000 residents from diverse ethnic backgrounds',
      'Five distinct entities: Bazou, Bakong, Balengou, Bamaha, and Bagnoun',
      'Fertile highland soils and favorable climate conditions',
      'Strong cooperative structures for smallholder farmers',
      'Cultural diversity driving innovation and economic vitality'
    ],
    economicStrength: 'Bazou\'s economic foundation rests on its exceptionally fertile highland soils and favorable climate conditions that support diverse agricultural production. The municipality has developed strong cooperative structures that enable smallholder farmers to access improved technologies.',
    investmentOpportunities: [
      'Diversified highland agriculture',
      'Cultural and eco-tourism development',
      'Artisanal craft production and marketing',
      'Agro-processing and value addition',
      'Cultural exchange programs and authentic tourism experiences'
    ],
    investorSupport: 'Bazou leverages its multicultural character to create inclusive business environments, diverse skill sets, and expanded market networks. The municipality actively facilitates partnerships that harness the complementary strengths of different community groups.',
    futureVision: 'Bazou demonstrates how cultural diversity becomes economic strength when communities work together toward shared prosperity.',
    keyStats: {
      population: 32000,
      area: 450,
      establishedYear: 1977,
      investmentOpportunities: 10,
      activeProjects: 5,
      digitalAdoptionRate: 40
    },
    sectors: [
      {
        id: 'agriculture',
        name: 'Highland Agriculture',
        description: 'Diverse agricultural production',
        opportunities: ['Crop diversification', 'Organic farming', 'Processing facilities', 'Market access'],
        investmentRange: '$200K - $8M',
        timeline: '1-3 years',
        icon: '🌱'
      },
      {
        id: 'cultural-tourism',
        name: 'Cultural Tourism',
        description: 'Cultural and eco-tourism development',
        opportunities: ['Cultural festivals', 'Heritage sites', 'Eco-tourism', 'Community experiences'],
        investmentRange: '$150K - $5M',
        timeline: '1-2 years',
        icon: '🎭'
      },
      {
        id: 'artisanal-crafts',
        name: 'Artisanal Crafts',
        description: 'Traditional craft production and marketing',
        opportunities: ['Craft workshops', 'Market development', 'Export opportunities', 'Skills training'],
        investmentRange: '$100K - $3M',
        timeline: '1-2 years',
        icon: '🎨'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@bazou.cm',
      phone: '+237 222 456 789',
      address: 'Bazou Council, Ndé Department',
      city: 'Bazou',
      country: 'Cameroon'
    },
    socialMedia: {},
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'baham',
    name: 'Baham Council',
    slug: 'baham-council',
    location: {
      country: 'Cameroon',
      region: 'West',
      city: 'Baham',
      population: 28000,
      area: 320
    },
    description: 'Established in 1962, Baham has evolved into one of West Cameroon\'s most dynamic municipalities, strategically positioned on National Route N°4 with over 60% of its population under 40 years old. This youthful demographic dividend, combined with the municipality\'s renowned Ndop fabric production heritage, creates an exceptional environment for innovation and entrepreneurship.',
    shortDescription: 'Youth-driven innovation with Ndop fabric heritage and strategic location on National Route N°4.',
    imageUrl: '/images/councils/baham.jpg',
    logoUrl: '/local-councils/Baham-Council.jpg',
    highlights: [
      'Over 60% of population under 40 years old',
      'Renowned Ndop fabric production heritage',
      'Strategic location on National Route N°4',
      'Youth-led initiatives and technological integration',
      'Annual tax exemptions for new businesses'
    ],
    economicStrength: 'Baham\'s economic dynamism is driven by its exceptionally young population and strong entrepreneurial culture. The municipality\'s renowned Ndop fabric production represents centuries of craft expertise that is being modernized through youth-led initiatives.',
    investmentOpportunities: [
      'Traditional craft modernization and export',
      'Youth-driven agribusiness development',
      'Cultural tourism and craft education',
      'Innovative agro-processing ventures',
      'Artisanal craft scaling and youth entrepreneurship incubation'
    ],
    investorSupport: 'Baham provides annual tax exemptions for new businesses, streamlined administrative procedures, and strong youth entrepreneurship support systems. The municipality\'s commitment to Public-Private Partnerships creates clear frameworks for collaborative development.',
    futureVision: 'Baham is building an economy that honors traditional expertise while embracing youth innovation and global connectivity.',
    keyStats: {
      population: 28000,
      area: 320,
      establishedYear: 1962,
      investmentOpportunities: 9,
      activeProjects: 6,
      digitalAdoptionRate: 65
    },
    sectors: [
      {
        id: 'ndop-fabric',
        name: 'Ndop Fabric Industry',
        description: 'Traditional fabric production and modernization',
        opportunities: ['Design innovation', 'Market expansion', 'Skills transfer', 'Export development'],
        investmentRange: '$100K - $5M',
        timeline: '1-3 years',
        icon: '🧵'
      },
      {
        id: 'youth-entrepreneurship',
        name: 'Youth Entrepreneurship',
        description: 'Youth-driven business development',
        opportunities: ['Incubation programs', 'Skills training', 'Startup support', 'Innovation hubs'],
        investmentRange: '$200K - $8M',
        timeline: '1-4 years',
        icon: '🚀'
      },
      {
        id: 'cultural-tourism',
        name: 'Cultural Tourism',
        description: 'Cultural and craft education tourism',
        opportunities: ['Workshop tourism', 'Cultural experiences', 'Heritage sites', 'Educational programs'],
        investmentRange: '$150K - $6M',
        timeline: '1-2 years',
        icon: '🎓'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@baham.cm',
      phone: '+237 222 567 890',
      address: 'Baham Council, West Region',
      city: 'Baham',
      country: 'Cameroon'
    },
    socialMedia: {},
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'elak-oku',
    name: 'Elak-Oku Council',
    slug: 'elak-oku-council',
    location: {
      country: 'Cameroon',
      region: 'Northwest',
      city: 'Oku',
      population: 200000,
      area: 750
    },
    description: 'Established in 1977, Elak-Oku Municipality represents one of Cameroon\'s most unique ecological and economic environments, renowned worldwide for its exclusive Oku White Honey production and exceptional Mount Oku biodiversity. This highland municipality combines environmental conservation with sustainable enterprise.',
    shortDescription: 'World-renowned Oku White Honey and biodiversity conservation with unique ecological environment.',
    imageUrl: '/images/councils/elak-oku.jpg',
    logoUrl: '/local-councils/Elak-Council.png',
    highlights: [
      'Exclusive Oku White Honey production',
      'Exceptional Mount Oku biodiversity',
      'Unique highland flora and fauna',
      'Established international recognition',
      'Conservation-based enterprise model'
    ],
    economicStrength: 'Elak-Oku\'s economy is built around its extraordinary ecological assets, particularly the exclusive Oku White Honey industry that depends on the unique highland flora of Mount Oku. This represents one of Africa\'s most distinctive and high-value agricultural products.',
    investmentOpportunities: [
      'Premium honey production and processing',
      'Eco-tourism and conservation education',
      'Sustainable highland agriculture',
      'Biodiversity research and bioprospecting',
      'Conservation-based tourism and research facility development'
    ],
    investorSupport: 'Elak-Oku actively seeks conservation-minded investors, sustainable development partners, and premium market developers who understand the value of environmental stewardship. The municipality provides strong support for enterprises that contribute to both economic development and ecological preservation.',
    futureVision: 'Elak-Oku demonstrates that the highest economic value often comes from preserving and sustainably managing unique natural assets.',
    keyStats: {
      population: 200000,
      area: 750,
      establishedYear: 1977,
      investmentOpportunities: 7,
      activeProjects: 4,
      digitalAdoptionRate: 30
    },
    sectors: [
      {
        id: 'honey-production',
        name: 'Honey Production',
        description: 'Premium Oku White Honey production',
        opportunities: ['Honey processing', 'Quality certification', 'International markets', 'Value chain development'],
        investmentRange: '$200K - $10M',
        timeline: '1-3 years',
        icon: '🍯'
      },
      {
        id: 'eco-tourism',
        name: 'Eco-Tourism',
        description: 'Conservation-based tourism',
        opportunities: ['Nature tourism', 'Conservation education', 'Research facilities', 'Eco-lodges'],
        investmentRange: '$300K - $12M',
        timeline: '2-4 years',
        icon: '🦋'
      },
      {
        id: 'biodiversity-research',
        name: 'Biodiversity Research',
        description: 'Research and bioprospecting',
        opportunities: ['Research facilities', 'Bioprospecting', 'Conservation programs', 'Educational centers'],
        investmentRange: '$500K - $15M',
        timeline: '2-5 years',
        icon: '🔬'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@elak-oku.cm',
      phone: '+237 222 678 901',
      address: 'Elak-Oku Council, Bui Division',
      city: 'Oku',
      country: 'Cameroon'
    },
    socialMedia: {},
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'mbonge',
    name: 'Mbonge Council',
    slug: 'mbonge-council',
    location: {
      country: 'Cameroon',
      region: 'Southwest',
      city: 'Mbonge',
      population: 120000,
      area: 3500
    },
    description: 'Mbonge Council stands as one of Cameroon\'s largest municipalities, governing over 86 villages across the Southwest region\'s rich forest and agricultural landscapes. This expansive territory combines exceptional natural resource endowments with strong community governance structures.',
    shortDescription: 'Large-scale sustainable forest management with 86 villages and rich natural resources.',
    imageUrl: '/images/councils/mbonge.jpg',
    logoUrl: '/local-councils/Mbonge-Council.jpg',
    highlights: [
      'One of Cameroon\'s largest municipalities',
      'Governing over 86 villages',
      'Rich forest and agricultural landscapes',
      'Exceptional natural resource endowments',
      'Strong community governance structures'
    ],
    economicStrength: 'Mbonge\'s economy is built on its exceptional natural resource base, including fertile agricultural lands, extensive forest reserves, and diverse Non-Timber Forest Product opportunities. The municipality\'s large territorial scope enables integrated landscape management approaches.',
    investmentOpportunities: [
      'Sustainable forest management and NTFP development',
      'Large-scale agribusiness and processing',
      'Integrated conservation and development projects',
      'Community-based natural resource enterprises',
      'Sustainable logging operations and agro-processing facilities'
    ],
    investorSupport: 'Mbonge emphasizes landscape-scale partnerships, community benefit-sharing, and integrated development approaches that optimize both economic and conservation outcomes. The municipality\'s governance structures facilitate large-scale collaborative initiatives.',
    futureVision: 'Mbonge demonstrates how large territorial scope and strong community governance can enable transformative development approaches that achieve both economic and conservation goals at significant scale.',
    keyStats: {
      population: 120000,
      area: 3500,
      establishedYear: 1977,
      investmentOpportunities: 18,
      activeProjects: 12,
      digitalAdoptionRate: 25
    },
    sectors: [
      {
        id: 'forest-management',
        name: 'Forest Management',
        description: 'Sustainable forest and NTFP development',
        opportunities: ['Sustainable logging', 'NTFP processing', 'Forest conservation', 'Eco-products'],
        investmentRange: '$1M - $25M',
        timeline: '3-7 years',
        icon: '🌳'
      },
      {
        id: 'agribusiness',
        name: 'Agribusiness',
        description: 'Large-scale agricultural development',
        opportunities: ['Processing facilities', 'Supply chains', 'Export markets', 'Technology integration'],
        investmentRange: '$500K - $20M',
        timeline: '2-5 years',
        icon: '🚜'
      },
      {
        id: 'eco-tourism',
        name: 'Eco-Tourism',
        description: 'Nature-based tourism development',
        opportunities: ['Nature reserves', 'Eco-lodges', 'Adventure tourism', 'Cultural experiences'],
        investmentRange: '$300K - $15M',
        timeline: '2-4 years',
        icon: '🏕️'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@mbonge.cm',
      phone: '+237 222 789 012',
      address: 'Mbonge Council, Southwest Region',
      city: 'Mbonge',
      country: 'Cameroon'
    },
    socialMedia: {},
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'kette',
    name: 'Kette Council',
    slug: 'kette-council',
    location: {
      country: 'Cameroon',
      region: 'East',
      city: 'Kette',
      population: 76756,
      area: 2500
    },
    description: 'Kette represents one of Cameroon\'s most intriguing development opportunities, where rich cultural heritage meets significant mineral potential in a landscape of fertile agricultural lands. This dynamic municipality embodies the potential for transforming traditional artisanal activities into sustainable, technology-enhanced enterprises.',
    shortDescription: 'Responsible artisanal mining and cultural preservation with mineral potential and agricultural lands.',
    imageUrl: '/images/councils/kette.jpg',
    logoUrl: '/local-councils/Kette-Council.jpg',
    highlights: [
      'Rich cultural heritage and mineral potential',
      'Fertile agricultural lands',
      'Diverse population including 31,000+ refugees',
      'Indigenous Gbayas, Fulanis, Bororos communities',
      'Established artisanal mining expertise'
    ],
    economicStrength: 'Kette\'s economy is anchored by artisanal mining activities and productive agriculture, both operating on landscapes that offer significant expansion potential when managed sustainably. The municipality\'s mineral-rich soils and fertile agricultural lands provide dual pathways for economic development.',
    investmentOpportunities: [
      'Sustainable artisanal mining development',
      'Agricultural modernization and processing',
      'Community-based mineral processing',
      'Cultural heritage tourism',
      'Responsible mining technology introduction and environmental restoration'
    ],
    investorSupport: 'Kette emphasizes community ownership models, environmental sustainability, and technology transfer programs that enhance traditional activities while ensuring community benefit. The municipality actively facilitates partnerships between artisanal producers and formal sector investors.',
    futureVision: 'Kette demonstrates how traditional resource-based activities can be enhanced through community-centered approaches that introduce improved technologies while maintaining local ownership and environmental stewardship.',
    keyStats: {
      population: 76756,
      area: 2500,
      establishedYear: 1982,
      investmentOpportunities: 14,
      activeProjects: 8,
      digitalAdoptionRate: 20
    },
    sectors: [
      {
        id: 'artisanal-mining',
        name: 'Artisanal Mining',
        description: 'Responsible mining development',
        opportunities: ['Mining cooperatives', 'Technology transfer', 'Environmental restoration', 'Community benefits'],
        investmentRange: '$500K - $15M',
        timeline: '2-5 years',
        icon: '⛏️'
      },
      {
        id: 'agriculture',
        name: 'Agriculture',
        description: 'Agricultural modernization',
        opportunities: ['Processing facilities', 'Technology adoption', 'Market development', 'Value chains'],
        investmentRange: '$200K - $8M',
        timeline: '1-3 years',
        icon: '🌾'
      },
      {
        id: 'cultural-tourism',
        name: 'Cultural Tourism',
        description: 'Heritage and cultural tourism',
        opportunities: ['Cultural sites', 'Heritage preservation', 'Community tourism', 'Educational programs'],
        investmentRange: '$150K - $6M',
        timeline: '1-3 years',
        icon: '🏛️'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@kette.cm',
      phone: '+237 222 890 123',
      address: 'Kette Council, Kadey Department',
      city: 'Kette',
      country: 'Cameroon'
    },
    socialMedia: {},
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'olanguina',
    name: 'Olanguina Council',
    slug: 'olanguina-council',
    location: {
      country: 'Cameroon',
      region: 'Centre',
      city: 'Olanguina',
      population: 35000,
      area: 800
    },
    description: 'Olanguina represents the future of rural transformation in Cameroon, where agricultural excellence meets strategic planning for urbanization and industrialization. This emerging municipality embodies the potential for comprehensive development that builds on agricultural foundations while creating pathways to diversified economic growth.',
    shortDescription: 'Strategic rural transformation and industrialization with agricultural excellence foundation.',
    imageUrl: '/images/councils/olanguina.jpg',
    logoUrl: '/local-councils/Olanguina-Council.jpg',
    highlights: [
      'Strategic rural transformation approach',
      'Agricultural excellence foundation',
      'Planned urbanization and industrialization',
      'Strong agricultural and livestock foundations',
      'Comprehensive development planning'
    ],
    economicStrength: 'Olanguina\'s economy is built on strong agricultural and livestock foundations that provide both current productivity and future development capital. The municipality\'s strategic vision for urbanization and industrialization creates clear pathways for agricultural value addition and economic diversification.',
    investmentOpportunities: [
      'Agricultural value chain development',
      'Agro-processing and food transformation',
      'Handicraft production and marketing',
      'Quarry operations and construction materials',
      'Planned industrial development and food processing facilities'
    ],
    investorSupport: 'Olanguina emphasizes comprehensive development planning, agricultural value addition, local economic network development, and tourism infrastructure creation. The municipality provides clear frameworks for investments that contribute to its strategic transformation goals.',
    futureVision: 'Olanguina demonstrates how rural municipalities can implement comprehensive transformation strategies that build on agricultural foundations while creating diversified economic opportunities.',
    keyStats: {
      population: 35000,
      area: 800,
      establishedYear: 1977,
      investmentOpportunities: 11,
      activeProjects: 7,
      digitalAdoptionRate: 35
    },
    sectors: [
      {
        id: 'agro-processing',
        name: 'Agro-Processing',
        description: 'Food transformation and processing',
        opportunities: ['Processing facilities', 'Value addition', 'Food technology', 'Market development'],
        investmentRange: '$300K - $12M',
        timeline: '2-4 years',
        icon: '🏭'
      },
      {
        id: 'handicrafts',
        name: 'Handicrafts',
        description: 'Traditional craft production',
        opportunities: ['Craft workshops', 'Market development', 'Export opportunities', 'Skills training'],
        investmentRange: '$100K - $4M',
        timeline: '1-2 years',
        icon: '🎨'
      },
      {
        id: 'construction-materials',
        name: 'Construction Materials',
        description: 'Quarry and construction materials',
        opportunities: ['Quarry operations', 'Material processing', 'Construction supply', 'Infrastructure development'],
        investmentRange: '$500K - $15M',
        timeline: '2-5 years',
        icon: '🧱'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@olanguina.cm',
      phone: '+237 222 901 234',
      address: 'Olanguina Council, Centre Region',
      city: 'Olanguina',
      country: 'Cameroon'
    },
    socialMedia: {},
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'booue',
    name: 'Booué Council',
    slug: 'booue-council',
    location: {
      country: 'Gabon',
      region: 'Ogooué-Ivindo',
      city: 'Booué',
      population: 25000,
      area: 1800
    },
    description: 'Booué stands as a vibrant cultural and economic hub in the heart of Gabon, where rich forest resources meet dynamic entrepreneurial energy to create unique opportunities for sustainable development. This strategic municipality represents the intersection of natural resource wealth, cultural diversity, and emerging business innovation.',
    shortDescription: 'Forest-based sustainable development in Gabon with rich cultural heritage and entrepreneurial energy.',
    imageUrl: '/images/councils/booue.jpg',
    logoUrl: '/local-councils/Booue-Council-Gabon.jpg',
    highlights: [
      'Rich forest resources and cultural diversity',
      'Dynamic entrepreneurial energy',
      'Strategic location in Gabon',
      'Emerging business innovation',
      'Sustainable development focus'
    ],
    economicStrength: 'Booué\'s economy leverages its exceptional forest resources and strategic location to support diverse economic activities that include sustainable forestry, eco-tourism, and traditional craft production. The municipality\'s rich cultural heritage provides unique competitive advantages.',
    investmentOpportunities: [
      'Sustainable forest management and processing',
      'Eco-tourism and cultural tourism development',
      'Traditional craft scaling and modernization',
      'Forest-based service enterprises',
      'Sustainable logging operations and eco-tourism facilities'
    ],
    investorSupport: 'Booué emphasizes environmental sustainability, community benefit-sharing, and cultural preservation in all development initiatives. The municipality actively facilitates partnerships that optimize both economic development and environmental conservation outcomes.',
    futureVision: 'Booué demonstrates how forest communities can build prosperous economies that depend on and therefore incentivize environmental conservation while celebrating cultural heritage and supporting community development.',
    keyStats: {
      population: 25000,
      area: 1800,
      establishedYear: 1977,
      investmentOpportunities: 9,
      activeProjects: 5,
      digitalAdoptionRate: 40
    },
    sectors: [
      {
        id: 'sustainable-forestry',
        name: 'Sustainable Forestry',
        description: 'Forest management and processing',
        opportunities: ['Sustainable logging', 'Forest products', 'Conservation', 'Eco-certification'],
        investmentRange: '$1M - $20M',
        timeline: '3-6 years',
        icon: '🌲'
      },
      {
        id: 'eco-tourism',
        name: 'Eco-Tourism',
        description: 'Nature and cultural tourism',
        opportunities: ['Eco-lodges', 'Nature tours', 'Cultural experiences', 'Adventure tourism'],
        investmentRange: '$300K - $12M',
        timeline: '2-4 years',
        icon: '🏞️'
      },
      {
        id: 'traditional-crafts',
        name: 'Traditional Crafts',
        description: 'Craft production and modernization',
        opportunities: ['Craft workshops', 'Market development', 'Export opportunities', 'Skills training'],
        investmentRange: '$100K - $5M',
        timeline: '1-3 years',
        icon: '🎭'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@booue.ga',
      phone: '+241 222 012 345',
      address: 'Booué Council, Ogooué-Ivindo',
      city: 'Booué',
      country: 'Gabon'
    },
    socialMedia: {},
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  },
  {
    id: 'buea',
    name: 'Buea Council',
    slug: 'buea-council',
    location: {
      country: 'Cameroon',
      region: 'Southwest',
      city: 'Buea',
      population: 576612,
      area: 870
    },
    description: 'Buea stands as Cameroon\'s Silicon Mountain, a dynamic regional capital spanning 870 square kilometers with 600,000 residents across 100 villages, representing one of Africa\'s most vibrant technology and educational hubs. This exceptional municipality combines the advantages of being a regional administrative center with the innovation energy of a growing technology ecosystem.',
    shortDescription: 'Silicon Mountain technology and educational hub with 600,000 residents and innovation ecosystem.',
    imageUrl: '/images/councils/buea.jpg',
    logoUrl: '/local-councils/Buea-Council.png',
    highlights: [
      'Cameroon\'s Silicon Mountain technology hub',
      '600,000 residents across 100 villages',
      'Regional administrative center',
      'University of Buea and educational excellence',
      'Volcanic soils and equatorial climate for agriculture'
    ],
    economicStrength: 'Buea\'s economy is anchored by its renowned Silicon Mountain technology cluster, prestigious educational institutions including the University of Buea, and productive agricultural sector that benefits from exceptional volcanic soils and equatorial climate.',
    investmentOpportunities: [
      'Technology startup development and scaling',
      'Educational infrastructure and services',
      'Agricultural modernization and processing',
      'Renewable energy project development',
      'Comprehensive urban infrastructure and technology incubation'
    ],
    investorSupport: 'Buea benefits from strong educational institutions that provide skilled workforce development, established technology networks that facilitate startup growth, and government support for innovation and entrepreneurship.',
    futureVision: 'Buea demonstrates how African cities can build comprehensive economies that leverage educational excellence, technology innovation, and natural resource wealth to create sustainable prosperity and regional leadership.',
    keyStats: {
      population: 576612,
      area: 870,
      establishedYear: 1977,
      investmentOpportunities: 25,
      activeProjects: 18,
      digitalAdoptionRate: 85
    },
    sectors: [
      {
        id: 'technology',
        name: 'Technology & Innovation',
        description: 'Technology startup ecosystem',
        opportunities: ['Startup incubation', 'Tech accelerators', 'Innovation hubs', 'Digital services'],
        investmentRange: '$500K - $30M',
        timeline: '2-5 years',
        icon: '💻'
      },
      {
        id: 'education',
        name: 'Education',
        description: 'Educational infrastructure and services',
        opportunities: ['University development', 'Technical training', 'Research facilities', 'Educational technology'],
        investmentRange: '$1M - $25M',
        timeline: '3-7 years',
        icon: '🎓'
      },
      {
        id: 'agriculture',
        name: 'Agriculture',
        description: 'Agricultural modernization',
        opportunities: ['Agro-processing', 'Technology integration', 'Export markets', 'Sustainable farming'],
        investmentRange: '$300K - $15M',
        timeline: '2-4 years',
        icon: '🌱'
      }
    ],
    isFeatured: true,
    status: 'active',
    contactInfo: {
      email: 'contact@buea.cm',
      phone: '+237 222 123 456',
      address: 'Buea Council, Southwest Region',
      city: 'Buea',
      country: 'Cameroon'
    },
    socialMedia: {
      facebook: 'https://facebook.com/bueacouncil',
      twitter: 'https://twitter.com/bueacouncil'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01')
  }
]

export const getCouncilSpotlight = (slug: string): CouncilSpotlight | undefined => {
  return councilSpotlights.find(council => council.slug === slug)
}

export const getFeaturedCouncils = (): CouncilSpotlight[] => {
  return councilSpotlights.filter(council => council.isFeatured)
}

export const getCouncilsByRegion = (region: string): CouncilSpotlight[] => {
  return councilSpotlights.filter(council => council.location.region === region)
}

export const getCouncilsByCountry = (country: string): CouncilSpotlight[] => {
  return councilSpotlights.filter(council => council.location.country === country)
}
