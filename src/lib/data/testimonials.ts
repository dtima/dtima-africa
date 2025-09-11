export interface Testimonial {
  id: string
  name: string
  title: string
  organization: string
  imageUrl: string
  quote: string
  fullText: string
  category: 'expert' | 'municipal' | 'government'
  location?: string
  isFeatured: boolean
  bio?: string
  website?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'steven-mintz',
    name: 'Mr. Steven Mintz',
    title: 'Editorial Advisor',
    organization: 'DTIMA',
    imageUrl: '/opinion/Steven.jpg',
    quote: 'DTIMA looks poised to revolutionize African municipalities through digital innovation. The power of technology to drive progress on a global landscape primed for disruption will propel dramatic, positive change.',
    fullText: 'As the Editorial Advisor for the DTIMA project, I apply a seasoned journalist\'s eye for initiatives that foster transformative change in communities and societies. Years spent writing books and articles on investment and financial strategies have taught me to rigorously evaluate projects for potential impact. In my estimation, the Digital Transformation Initiative for Municipalities in Africa (DTIMA) looks poised to revolutionize African municipalities through digital innovation. The power of technology to drive progress on a global landscape primed for disruption will propel dramatic, positive change. Better yet, the skilled team from AcDiTo that launched DTIMA is firmly rooted in Africa. We leverage global networks and our world-class experience to achieve success. This assures an outcome geared from inception to the needs of Africans, in contrast with solutions that require adaptation. Possibilities beckon to bold entrepreneurs. DTIMA\'s focus on leveraging digital technologies to enhance local governance, improve public services, and stimulate economic growth resonates deeply with my values and expertise. By fostering collaboration between stakeholders and promoting the adoption of innovative solutions, DTIMA will empower municipalities across Africa to overcome challenges and unlock new development opportunities.',
    category: 'expert',
    isFeatured: true
  },
  {
    id: 'philip-berry',
    name: 'Mr. Philip Berry',
    title: 'President',
    organization: 'Philip Berry Associates, LLC',
    imageUrl: '/opinion/Philip.jpg',
    quote: 'This effort is a great and viable step to addressing critical questions and providing solutions that will benefit all involved today and in the future.',
    fullText: 'First of all, I am extremely pleased to see this effort taking place. It highlights several observations in a timely manner. In reviewing any change effort, it is critical to simplify and focus on the critical and salient reasons that will entail success. The questions that need to be answered are Why, What, How, and Who. The Why identifies the business and social needs. Clearly, nothing can be launched unless it meets a critical business, social, and consumer need. Every participant identified how this is critical to building sustainability, commerce, and social need. Furthermore, these elements need to be more clearly defined and focused in a manner that facilitates the growth of each country involved highlighting how it transitions economic growth and connectivity from one region of Africa to another. The What was highlighted by defining the technological modality that provides user-friendliness, ease of product introduction, and integration of business-to-business and business-to-consumers. It must also include easy adaptability given the present nature of the marketplace and the viability of how the economy functions and where it needs to be to make it competitive in a regional and global marketplace. The How involves having well-thought-out relationships and connections between existing business and economy partnerships on a local, continent-wide, and global scale. The fact that many of the Mayors and governmental bodies were present provides a great foundation for furthermore more elaborate intergovernmental cooperation. The Who speaks to having involvement and leadership across all the critical domains. How does this effort appropriately benefit every person in all the spheres of economic and social activity? How can this effort involve students and their families? This was touched upon and how can it provide for easy adoption and transition of the societal framework toward a more cohesive country and intercountry framework? Clearly, this effort is a great and viable step to addressing these questions and providing solutions that will benefit all involved today and in the future.',
    category: 'expert',
    isFeatured: true,
    website: 'https://www.philipberryassociates.com/'
  },
  {
    id: 'david-mafani',
    name: 'David Mafani Namange Esq.',
    title: 'Mayor',
    organization: 'Buea Council',
    imageUrl: '/opinion/Mafani.jpg',
    quote: 'I am deeply excited to introduce to you the Buea Municipality: the City of legendary Hospitality, a beacon of opportunities nestled in the vibrant South West Region of Cameroon.',
    fullText: 'It is a profound honor to stand among such esteemed guests and representatives at today\'s Digital Transformation Initiative for Municipalities in Africa (DTIMA) Launch Event. I am deeply excited to introduce to you people the Buea Municipality: the City of legendary Hospitality, a beacon of opportunities nestled in the vibrant South West Region of Cameroon. Created on the 29th of June 1977 by Presidential Decree No. 77/203, the Buea Council covers a surface area of 870km² and a population of about 576,612 mostly made-up of youths and women. Our council thrives on the economic prowess, sustained by her strategic positioning, abundant natural resources, and a reservoir of skilled human capital not leaving out our rich volcanic soil. The Silicon Mountain, our flourishing technology enclave, serves as a vessel for innovation, nurturing start-ups and visionary entrepreneurs. At the heart of our mission lies the Buea City Digital Vision—an ambitious initiative aimed at transforming Buea into a bastion of innovation and technology. By harnessing our existing infrastructure and educational institutions, we aspire to empower our youths with digital skills and contribute to the socio-economic development of our community. A kaleidoscope of investment opportunities awaits in sectors ranging from transport and health to technology and education. I humbly extend an invitation to all stakeholders here present, both local and international, to partake in the transformational journey of Buea. Leveraging the opportunities presented by the DTIMA initiative, and particularly the local innovation challenge, we solicit investors, partners, and the Cameroonian diaspora to join hands in shaping Buea\'s destiny.',
    category: 'municipal',
    location: 'South West Region, Cameroon',
    isFeatured: true
  },
  {
    id: 'gbanga-emmanuel',
    name: 'Honorable Mr. GBANGA Emmanuel',
    title: 'Lord Mayor',
    organization: 'Kette Council',
    imageUrl: '/opinion/GBANGA.jpg',
    quote: 'Kette is a true treasure trove of flourishing economic activities. Mining, agriculture, livestock farming, trade, services, and eco-tourism are the main drivers of the local economy.',
    fullText: 'Taking advantage of the opportunity offered by the official launch of the Digital Transformation Initiative for Municipalities in Africa (DTIMA) project, I am delighted to present to you today the Kette Commune, a dynamic and promising decentralized territorial community located in the Kadey department, East region of Cameroon. Established on September 21, 1982, Kette is a thriving community nestled in a spectacular natural setting, covering an area of 2500 km² and comprising 41 villages. What makes Kette truly special is its diverse and dynamic population, consisting of indigenous Gbayas, Fulanis, Bororos, as well as other ethnic groups from various parts of Cameroon and Africa. This human and cultural diversity creates a unique social fabric, where harmonious coexistence is the norm. Over the past decade, Kette has experienced remarkable population growth, largely due to the influx of over 31,000 Central African refugees, bringing its total population to approximately 76,756 inhabitants. This demographic growth is accompanied by unprecedented economic opportunities. Kette is a true treasure trove of flourishing economic activities. Mining, agriculture, livestock farming, trade, services, and eco-tourism are the main drivers of the local economy. Kette\'s subsoil is rich in precious mineral resources such as gold and diamonds, offering lucrative investment opportunities in the mining sector. We are about to take an exciting new step with our technological development and digitization initiative. With the support of the DITMA project, we are committed to creating a website for the Kette commune, providing an interactive platform for better communication and service delivery to our residents, and the rest of the world, as well as showcasing our economic opportunities and development projects.',
    category: 'municipal',
    location: 'Kadey Department, East Region, Cameroon',
    isFeatured: true
  },
  {
    id: 'ngum-jerome',
    name: 'Honorable Mr. Ngum Jerome Njioh',
    title: 'Lord Mayor',
    organization: 'ELAK Council',
    imageUrl: '/opinion/Jerome.jpg',
    quote: 'I am thrilled to announce our vision for \'Digital Elak-Council\', where technology drives progress, empowering our communities and fostering economic growth.',
    fullText: 'As Mayor of Elak-Council, I am highly honored to participate in the official launch of the Digital Transformation Initiative for Municipalities in Africa (DTIMA) today the 29th of February 2024. This is also an opportunity for me to introduce our vibrant municipality, where heritage and progress intertwine, fostering a legacy of opportunity and growth. Established in 1977, Elak Municipality has the same territorial boundary as Oku Sub-Division situated in Bui Division of the Northwest Region in the Republic of Cameroon. It covers the same geographical space as Oku Fondom. Elak Municipality is made up of 36 villages speaking a common language. Known as (Elbam Ebkw). The Council has a surface area of about 750km² with an estimated population of 200,000 inhabitants. Elak-Council governs the Elak-Municipality, a Municipality steeped in rich history and culture. Our commitment to sustainable development has led to remarkable economic and social progress, making Elak-Council a prime destination for investors and entrepreneurs. Our economic potential is very vast, Elak-Council is a thriving economic hub, offering opportunities in agriculture, ecotourism, and innovative initiatives like the Oku White Honey industry - an example of our dedication to sustainability. Looking forward, we recognize the need to embrace digital innovation. I am thrilled to announce our vision for \'Digital Elak-Council\', where technology drives progress, empowering our communities and fostering economic growth. We kindly invite you to join us on our journey towards prosperity. Our Council Development Plan (CDP) outlines investment opportunities aligned with our vision for sustainable development. Together we can shape the future of our Municipality and unlock its full potential.',
    category: 'municipal',
    location: 'Bui Division, Northwest Region, Cameroon',
    isFeatured: true
  },
  {
    id: 'bikoula-olanguina',
    name: 'Lord Mayor BIKOULA',
    title: 'Lord Mayor',
    organization: 'Olanguina Council',
    imageUrl: '/opinion/BIKOULA.jpg',
    quote: 'With the forthcoming advent of the DTIMA initiative, Olanguina is poised to reach new heights. This transformative initiative, brimming with opportunities, will enhance the quality of life for our citizens.',
    fullText: 'It is with a deep sense of duty and honor that I address this distinguished assembly to share my vision for our beloved commune of Olanguina. Welcome to this dynamic and ever-evolving universe that is Olanguina. Every step taken on our land represents a journey through history, culture, and the countless opportunities that lie before us. Allow me to transport you to the very essence of Olanguina: a jewel nestled in the heart of our region, pulsating with vibrant souls. Our lands are teeming with lush landscapes and a rich cultural heritage that shape the identity of our commune. The economic horizons of Olanguina stretch without borders. Our fertile lands attract souls in search of agricultural abundance, while our recent commercial boom serves as a hub for trade. Let us envision our future role as a hub for the distribution of fruits and vegetables, destined to delight taste buds and stimulate the local economy. But our gaze is not limited to the present. With the forthcoming advent of the DTIMA initiative, Olanguina is poised to reach new heights. This transformative initiative, brimming with opportunities, will not only enhance the quality of life for our citizens but also attract a wider audience eager to discover the untapped potential of our commune. Through the DTIMA platform, equipped with the necessary tools and resources, we envision training and mentoring a new generation of youth in digital skills, ready to become the pioneers and innovators of tomorrow.',
    category: 'municipal',
    location: 'Olanguina, Cameroon',
    isFeatured: true
  },
  {
    id: 'djeuhon-frederic',
    name: 'Dr. Eng. Djeuhon Frederic',
    title: 'Mayor',
    organization: 'Bazou Council',
    imageUrl: '/images/placeholder-council.svg',
    quote: 'With the forthcoming advent of the DTIMA initiative, Bazou is poised to reach new heights. This transformative initiative, brimming with opportunities, will not only enhance the quality of life for our citizens but also attract a wider audience eager to discover the untapped potential of our commune.',
    fullText: 'It is with a deep sense of duty and honor that I address this distinguished assembly to share my vision for our beloved commune of Bazou. Welcome to this dynamic and ever-evolving universe that is Bazou. Every step taken on our land represents a journey through history, culture, and the countless opportunities that lie before us. Allow me to transport you to the very essence of Bazou: a jewel nestled in the heart of the West region of Cameroon, pulsating with nearly 32,000 souls. Our lands are teeming with lush landscapes and a rich cultural heritage that shape the identity of our commune. Bazou comprises five distinct entities – Bazou, Bakong, Balengou, Bamaha, and Bagnoun – each contributing to the richness and uniqueness of our social fabric. The economic horizons of Bazou stretch without borders. Our fertile lands attract souls in search of agricultural abundance, while our recent commercial boom serves as a hub for trade. Let us envision our future role as a hub for the distribution of fruits and vegetables, destined to delight taste buds and stimulate the local economy. Lively cultural festivities and our traditional structures reflect the richness of our heritage, offering a kaleidoscope of tourist experiences waiting to be explored. But our gaze is not limited to the present. With the forthcoming advent of the DTIMA initiative, Bazou is poised to reach new heights. This transformative initiative, brimming with opportunities, will not only enhance the quality of life for our citizens but also attract a wider audience eager to discover the untapped potential of our commune. Through the DTIMA platform, equipped with the necessary tools and resources, we envision training and mentoring a new generation of youth in digital skills, ready to become the pioneers and innovators of tomorrow. Not to mention the local innovation challenge, a beacon of opportunities for entrepreneurial minds wishing to showcase their talents and stimulate economic growth right here in Bazou. The time for action is upon us. We stand on the brink of transformative growth, and with the impetus of the DTIMA initiative, the horizons of our achievements seem boundless. I invite you to join us in building a prosperous future for our commune, where prosperity flourishes boundlessly, and where our cultural heritage shines brightly. Together, let us redouble our efforts, unveil Bazou\'s exceptional potential, and pave the way for an era of unparalleled prosperity.',
    category: 'municipal',
    location: 'West Region, Cameroon',
    isFeatured: true
  },
  {
    id: 'jean-ndoumbe',
    name: 'Mr. Jean Ndoumbe',
    title: 'Head of Information System Division',
    organization: 'Ministry of Decentralization and Local Development',
    imageUrl: '/opinion/Ndoumbe.jpeg',
    quote: 'The Ministry of Decentralization and Local Development recognizes the importance of digital transformation in promoting local development. We are committed to supporting initiatives such as that led by DTIMA.',
    fullText: 'It is an honor and a real pleasure for me to address you on behalf of the Minister of Decentralization and Local Development on the occasion of the opening of this important event highlighting the digital transformation of Decentralized Territorial Communities. The Ministry of Decentralization and Local Development recognizes the importance of digital transformation in promoting local development. In this regard, it is committed to supporting initiatives such as that led by DTIMA, which aims to empower local authorities through digital innovation and create an enabling environment for digital transformation. The MINDDEVEL is working to strengthen legal and regulatory frameworks, improve the digital infrastructure, and enhance the capacities of our municipalities to leverage digital technologies for local development. Indeed, the digital revolution offers an invaluable opportunity to modernize local government services, increase operational efficiency, and enhance community connectivity. By adopting digital solutions such as online platforms, and electronic document management, and implementing smart infrastructure monitoring systems, we will open the door to a more efficient, inclusive, and transparent future. The digitization of administrative processes will not only simplify interactions between citizens and the administration but also stimulate local economic development. The journey of digital transformation of our local authorities must be inclusive, sustainable, and beneficial to all. As we embark on this digital journey, let us remember that our ultimate goal is to improve the lives of our fellow citizens. To ensure the emergence of our territories, digital technology is a necessary if not indispensable path.',
    category: 'government',
    location: 'Yaoundé, Cameroon',
    isFeatured: true
  }
]

export const getFeaturedTestimonials = (): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.isFeatured)
}

export const getTestimonialsByCategory = (category: 'expert' | 'municipal' | 'government'): Testimonial[] => {
  return testimonials.filter(testimonial => testimonial.category === category)
}

export const getTestimonialById = (id: string): Testimonial | undefined => {
  return testimonials.find(testimonial => testimonial.id === id)
}
