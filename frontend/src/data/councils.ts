export interface Council {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  region: string;
  intro: string;
  economicPotential: string;
  investmentOpportunities: string;
  investmentNeeds: string;
  contact: string;
  email: string;
}

export const COUNCILS: Council[] = [
  {
    id: 'mbonge',
    name: 'Mbonge Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Southwest Region',
    intro: 'Welcome to Mbonge Council, located in the Southwest region, a vibrant hub of rich history, diverse culture, and economic potential. It is home to over 250,000 inhabitants, consisting of 42,500 men, 62,500 women, and 145,000 youths (both male and female), spread across an area of 4,000 km². The demographic distribution is as follows: Men: 17%, Women: 25%, Youths: 58%. With 106 villages under its governance, Mbonge Council offers a unique blend of tradition and modernity.',
    economicPotential: 'The Mbonge Council is endowed with a wealth of biophysical assets, including fertile lands, lush forests, and meandering rivers. These resources underpin a thriving economy, with agriculture, forestry, and Non-Timber Forest Products (NTFP) trading forming the backbone of local livelihoods.',
    investmentOpportunities: 'Mbonge Council extends an open invitation to investors who share its vision of sustainable and inclusive growth. Despite existing constraints, a plethora of investment opportunities await in sectors such as agribusiness, manufacturing, tourism, and tech startups.',
    investmentNeeds: 'Mbonge Council fosters a thriving business environment, supporting entrepreneurs through streamlined processes, affordable financing, and capacity-building programs. Your investment can drive growth, empower communities, and transform lives. Aligned with Cameroon\'s 2035 emergence strategy, we support initiatives for robust growth, poverty reduction, democracy, and unity. Invest in Mbonge Council, play a pivotal role in this transformative journey.',
    contact: '+237 XXXXXXXX',
    email: 'info@mbongecouncil.cm'
  },
  {
    id: 'kette',
    name: 'Kette Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'East Region',
    intro: 'Welcome to Kette, a vibrant council in Cameroon, home to 76,756 people (41,079 men and 35,489 women as of 2018). Its rich culture and diverse economy, fueled by fertile lands and mineral-rich soils, offer immense growth potential.',
    economicPotential: 'Kette\'s economy thrives on agriculture and artisanal mining, capitalizing on its fertile lands and mineral-rich deposits. The region\'s economic potential lies in the sustainable and profitable transformation of these resources.',
    investmentOpportunities: 'Kette offers a plethora of investment opportunities across sectors such as agriculture, mining, and infrastructure development. Investors can collaborate with local communities and authorities to unlock the region\'s economic potential and stimulate growth.',
    investmentNeeds: 'To fully harness its potential, Kette seeks investment in infrastructure development, education, healthcare, and sustainable mining practices. These investments will lay the groundwork for long-term prosperity and enhance the quality of life for Kette\'s residents.\n\nJoin Us: Shape Kette\'s Future. Your investment can make a significant impact, empowering communities, fostering sustainable development, and propelling Kette toward a brighter future. Together, let\'s unlock Kette\'s boundless potential.',
    contact: '+237 XXXXXXXX',
    email: 'info@kettecouncil.cm'
  },
  {
    id: 'kumba',
    name: 'Kumba Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Southwest Region',
    intro: 'Welcome to Kumba, the heartbeat of Cameroon\'s Southwest. With a lush green landscape and a population of 400,000, K-Town thrives as the economic hub, connecting cultures and commerce in the heart of Central and West Africa.',
    economicPotential: 'Kumba\'s economic pulse beats in agriculture—cocoa, palm oil, rubber, and more. A bustling trade center, it fuels industries like food processing, construction, renewable energy, and lumber. Kumba\'s strategic location near the Cameroon-Nigeria border amplifies its role in regional commerce.',
    investmentOpportunities: 'Investors, seize the opportunity in Kumba\'s burgeoning sectors—agriculture, food processing, construction, and renewable energy. The city\'s central role in regional trade, coupled with a young and dynamic population, promises a fertile ground for sustainable growth. Explore untapped markets and collaborative ventures.',
    investmentNeeds: 'Embark on a transformative journey with the Kumba Council! As we propel towards an even brighter future, we invite visionary investors and corporations to partner with us in overcoming challenges like security, waste management, and road conditions. Your strategic investments will not only enhance the city\'s resilience but also contribute to our shared success story. Together, let\'s shape Kumba into a model city, a beacon of economic and social progress. Join us in crafting a sustainable and prosperous legacy for generations to come!',
    contact: '+237 XXXXXXXX',
    email: 'info@kumbacouncil.cm'
  },
  {
    id: 'buea',
    name: 'Buea Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Southwest Region',
    intro: 'Welcome to Buea Council, situated in the vibrant and diverse municipality of the Southwest Region of Cameroon. It stands as the regional capital, hosting a plethora of administrative and educational institutions. Spanning an expansive 870 km² area and housing a population of 600,000 people distributed across 100 villages, this locale pulsates as a dynamic hub of activity.',
    economicPotential: 'The council exhibits substantial economic prowess, harnessing its strategic positioning, rich natural resources, and a pool of skilled human capital. Notably, it hosts the flourishing technology enclave, Silicon Mountain, a nucleus for burgeoning start-ups and visionary entrepreneurs. Moreover, the council\'s agricultural sector thrives, capitalizing on the equatorial climate and fertile soils, yielding an array of crops encompassing cocoa, coffee, oil palm, plantains, bananas, and vegetables.\n\nFurthermore, its allure as a major tourist destination is underscored by panoramic vistas, a profound cultural heritage, and proximity to Mount Cameroon, West Africa\'s zenith.',
    investmentOpportunities: 'Diverse investment prospects beckon in sectors such as transport, health, technology, services, education, environmental protection, women empowerment, livestock, agriculture, and commerce.',
    investmentNeeds: 'The Buea Council leverages a competitive edge with graduates from esteemed local institutions, reinforcing its prowess in various domains. Despite financial constraints, the council actively seeks investments to boost socio-economic infrastructure, human capital development, and key projects. Priority areas include road construction, waste management, healthcare, education, renewable energy, and urban planning.\n\nWhile currently facing financial limitations, the council extends a warm invitation to collaborate in its vision of transforming Buea into a model city, offering unique opportunities and untapped potential for a mutually beneficial partnership aligned with shared aspirations.',
    contact: '+237 XXXXXXXX',
    email: 'info@bueacouncil.cm'
  },
  {
    id: 'garoua-iii',
    name: 'Garoua III Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'North Region',
    intro: 'Welcome to Garoua III, a vibrant council in Cameroon with a population of over 64,806, renowned for its rich cultural diversity and strategic location near the bustling city of Garoua. A land teeming with potential, Garoua III is a canvas for innovation and growth.',
    economicPotential: 'Garoua III\'s economy is anchored by agriculture and renewable energy, two sectors with immense growth potential. The region\'s fertile lands support the cultivation of various crops, while its abundant natural resources present opportunities for renewable energy development.',
    investmentOpportunities: 'For the discerning investor, Garoua III presents a wealth of opportunities. Whether it\'s agriculture, renewable energy, or infrastructure, each sector holds the promise of high returns. Partner with us and be a part of our growth story.\n\nAgriculture: Invest in sustainable farming practices, cultivating high-value crops for local and export markets.\nRenewable Energy: Develop solar and wind power projects, providing clean energy to local communities and reducing reliance on fossil fuels.',
    investmentNeeds: 'To realize our vision for Garoua III, we seek investments in key areas like infrastructure, education, healthcare, and sustainable energy. Your investment can lay the foundation for sustainable development and long-term prosperity.\n\nJoin us in shaping the future of Garoua III. Your investment can make a profound difference, driving growth, fostering innovation, and propelling Garoua III toward a brighter future. Together, let\'s unlock the limitless potential of Garoua III.',
    contact: '+237 XXXXXXXX',
    email: 'info@garoua3council.cm'
  },
  {
    id: 'bazou',
    name: 'Bazou Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'West Region',
    intro: 'Welcome to Bazou, a dynamic enclave in Cameroon\'s Ndé department, is a vibrant mosaic of nearly 32,000 residents from diverse ethnic backgrounds. Its strategic positioning and multifaceted landscape make Bazou an enticing prospect for entrepreneurs, investors, diaspora Africans, and international development partners, inviting them to tap into its latent potential.',
    economicPotential: 'Bazou\'s fertile lands are ripe for agricultural exploration, offering lucrative prospects in crop production and animal husbandry. The region\'s diverse topography also opens up avenues for tourism development, catering to an increasing demand for immersive cultural experiences.',
    investmentOpportunities: 'Bazou is pulsating with entrepreneurial vigor, particularly in the agricultural sector. Visionary individuals are at the forefront of advancements in various domains, including tourism. These ventures are actively seeking synergistic partnerships with local and international investors to scale operations and maximize impact.',
    investmentNeeds: 'The time for action is now. Bazou is on the cusp of transformative growth, and your investment can catalyze a significant change. Join us in sculpting Bazou\'s future, fostering a thriving economy that empowers its populace and enriches its cultural heritage. Together, let\'s unlock Bazou\'s extraordinary potential and usher in an era of prosperity.',
    contact: '+237 XXXXXXXX',
    email: 'info@bazoucouncil.cm'
  },
  {
    id: 'elak-oku',
    name: 'Elak-Oku Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Northwest Region',
    intro: 'Welcome to Elak-Council, established in 1977, proudly governs the Elak-Oku Municipality, a region steeped in rich history and culture. With a commitment to sustainable development, Elak Council has achieved remarkable economic and social progress.',
    economicPotential: 'Elak-Council is a vibrant economic hub, teeming with opportunities for entrepreneurs and investors. The region\'s diverse landscape supports agriculture, livestock rearing, and ecotourism. Elak-Council is also home to innovative initiatives like the Oku White Honey industry, a testament to its commitment to sustainability.',
    investmentOpportunities: 'Elak-Council welcomes investors to join us in shaping our region\'s future. Our Council Development Plan (CDP) outlines a roadmap for investment opportunities, aligned with our vision for sustainable development.',
    investmentNeeds: 'Your investment in Elak-Council can catalyze transformative change. Join us in identifying challenges, translating them into micro-projects, and mobilizing resources for implementation. Your partnership can empower local communities and foster sustainable growth.',
    contact: '+237 XXXXXXXX',
    email: 'info@elakcouncil.cm'
  },
  {
    id: 'bayangam',
    name: 'Bayangam Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'West Region',
    intro: 'Welcome to Bayangam Council. Located in Cameroon\'s West Region, Bayangam is a bustling commune with over 20,000 residents across 38 villages. It\'s a dynamic community with a history of embracing development planning.',
    economicPotential: 'Bayangam\'s economy is rooted in agriculture, livestock, small-scale commerce, services, and craftsmanship. The local economy, divided into primary and goods & services sectors, is ripe for expansion and diversification, offering a solid foundation for economic growth.',
    investmentOpportunities: 'Bayangam offers a wealth of opportunities in sectors such as agriculture, tourism, communal services, forestry, carpentry, and local business development. Each sector holds promise for high returns, making Bayangam an attractive destination for investors seeking diverse opportunities.',
    investmentNeeds: 'Bayangam seeks investments in entrepreneurial support programs, public/private infrastructures, education, healthcare, renewable energy, and technology solutions to fulfill its ambitious vision.\n\nOpen to strategic public/private partnerships, Bayangam presents a unique opportunity for investors. Your investment can significantly contribute to sustainable development, enhance the quality of life for Bayangam\'s residents, and establish a foundation for enduring prosperity.\n\nInvesting in Bayangam can make a substantial difference by stimulating growth, nurturing innovation, and steering Bayangam towards a promising future. Together, we can tap into the boundless potential of Bayangam.',
    contact: '+237 XXXXXXXX',
    email: 'info@bayangamcouncil.cm'
  },
  {
    id: 'olanguina',
    name: 'Olanguina Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Center Region',
    intro: 'Welcome to Olanguina, a vibrant Cameroonian council of 2,249 people (1,114 men and 1,135 women), renowned for its rich cultural heritage and economic dynamism. Nestled amidst fertile lands and bustling local industries, Olanguina is a beacon of growth and prosperity.',
    economicPotential: 'Olanguina, an emerging rural council, is a powerhouse of economic potential. With a robust agricultural sector, thriving livestock industry, and nascent tourism, Olanguina is poised for sustainable growth and prosperity. Its vision of urbanization and industrialization sets the stage for a transformative economic journey.',
    investmentOpportunities: 'Olanguina presents a wealth of investment opportunities. From agriculture and livestock to handicrafts, agri-food, quarry exploitation, and industry, each sector holds the promise of high returns. By investing in Olanguina, you can be a part of this exciting growth story.',
    investmentNeeds: 'To realize its ambitious vision, Olanguina seeks strategic investments. Key areas include infrastructure development, fostering a local social economy network, establishing a food transformation chain, and promoting tourism. Your investment can lay the foundation for sustainable development and long-term prosperity.\n\nJoin us in shaping the future of Olanguina. Your investment can make a profound difference, driving growth, fostering innovation, and propelling Olanguina towards a brighter future. Together, let\'s unlock the limitless potential of Olanguina.',
    contact: '+237 12334678',
    email: 'hello@olanguina.com'
  },
  {
    id: 'wum',
    name: 'Wum Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Northwest Region',
    intro: 'Welcome to Wum Council, a governing body established in 1948, now presiding over 17 vibrant villages in the Menchum subdivision.',
    economicPotential: 'Wum Council boasts a dynamic economic landscape, brimming with income-generating projects. Explore the bustling restaurant, sustainable earth bricks workshop, market sheds, and thriving council farm. Discover the entrepreneurial spirit that fuels Wum Council\'s economic vitality.',
    investmentOpportunities: 'Immerse in a wealth of investment opportunities in Wum Council. With a keen focus on local economic development and youth empowerment, the council welcomes partnerships across diverse sectors. Wum Council offers diverse investment opportunities, focusing on local development and youth empowerment.',
    investmentNeeds: 'Join hands with Wum Council in their journey towards decentralization and development. Bolster their institution with your investment in human, material, and financial resources. Your urgent action can catalyze transformative change and propel Wum Council towards a prosperous future.',
    contact: '+237 XXXXXXXX',
    email: 'info@wumcouncil.cm'
  },
  {
    id: 'mokolo',
    name: 'Mokolo Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Far North Region',
    intro: 'Welcome to Mokolo, situated in the Far North Region of Cameroon, a bustling city that presents a plethora of opportunities for entrepreneurs, the African Diaspora, investors, and development partners.',
    economicPotential: 'Mokolo is ripe with economic potential. Its strategic location, rich cultural heritage, and untapped resources make it a promising hub for diverse investment opportunities. Mokolo\'s growing community needs a variety of services and businesses. From retail to restaurants, there\'s a wide range of sectors that investors can tap into.',
    investmentOpportunities: 'From agriculture and tourism to local business development, Mokolo offers a wide range of investment opportunities. Its fertile lands, picturesque landscapes, and growing community needs make it an attractive destination for entrepreneurs and investors.',
    investmentNeeds: 'The Mokolo Council is actively seeking partnerships for sustainable development. We invite both local and foreign investors to explore a myriad of opportunities in our vibrant city. By investing in sectors such as agriculture, tourism, or local businesses, you can significantly contribute to improving the quality of life for our residents. Your investment will not only foster sustainable development but also pave the way for a brighter future for Mokolo. Join us in this exciting journey of growth and prosperity.',
    contact: '+237 XXXXXXXX',
    email: 'info@mokolocouncil.cm'
  },
  {
    id: 'baham',
    name: 'Baham Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'West Region',
    intro: 'Welcome to Baham, established on December 19, 1962. Covering 82km², it has a population density of 359 per km², with 62% under 40 years old. It\'s a historical bastion of resistance against colonization.',
    economicPotential: 'Baham, rich in natural and cultural resources, is a hub for agriculture, livestock, and ecotourism. Its production of Ndop fabric and the presence of diverse small enterprises contribute to local economic development.',
    investmentOpportunities: 'To ensure our socio-economic development, we are strongly committed to Public-Private Partnership (PPP). We are attentive to the willingness of foreign investors and the diaspora for the promotion and popularization of crafts, ecotourism, the implementation of new technologies for the production of goods and services, agro-industry, etc. Investors are welcome here.',
    investmentNeeds: 'Baham is a haven of peace, a conducive environment for business. It is located on National N°4, meaning it is accessible in all seasons by road. Administratively and fiscally, we work in concert with fiscal and administrative institutions to lighten the procedures for creating and establishing businesses in our territory. Moreover, new businesses installed benefit from an annual exemption from local taxes and duties.',
    contact: '+237 XXXXXXXX',
    email: 'info@bahamcouncil.cm'
  },
  {
    id: 'nkongsamba-i',
    name: 'Nkongsamba I Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Littoral Region',
    intro: 'Welcome to Nkongsamba I, situated in Cameroon\'s littoral region, a dynamic council that presents a robust investment landscape. With a population north of 102,000, it provides a substantial consumer base and a diverse talent pool, positioning it as a compelling investment locale.',
    economicPotential: 'Nkongsamba I, strategically positioned between two mountains, offers a unique eco-tourism potential. Its robust agricultural sector, producing palm oil, bananas, and coffee, promises lucrative returns.',
    investmentOpportunities: 'Nkongsamba I, a regional nexus for the cultivation of commodities such as palm oil, bananas, coffee, and cassava, offers a wide array of investment opportunities. Beyond agriculture, the council is primed for investments in sectors like agro-industrial transformation, eco-tourism, and heritage conservation. Capitalize on the potential of Nkongsamba I and partake in its growth trajectory.',
    investmentNeeds: 'Nkongsamba I seeks strategic partnerships to shape a sustainable future. Investments in education and talent development are key. We invite you to join us in unlocking Nkongsamba I\'s potential.\n\nThe council is actively seeking partnerships with government initiatives, local and international investors, development partners, and impact investors. The long-term vision is to create a prosperous future for both residents and investors, making Nkongsamba I an attractive investment destination. Your investment can play a pivotal role in this transformative journey. Together, let\'s unlock the limitless potential of Nkongsamba I.',
    contact: '+237 XXXXXXXX',
    email: 'info@nkongsamba1council.cm'
  },
  {
    id: 'balikumbat',
    name: 'Balikumbat Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Northwest Region',
    intro: 'Welcome to Balikumbat, a council in Cameroon\'s Northwest region, home to 140,642 people (69,138 males, 71,504 females) across 320km². This cultural hub, with a density of 440 people/km², holds vast economic potential for sustainable development.',
    economicPotential: 'Balikumbat\'s economy thrives on agriculture, particularly palm cultivation, and artisanal mining. Its fertile lands and mineral-rich soils offer immense potential for sustainable growth and prosperity.',
    investmentOpportunities: 'Balikumbat offers investment opportunities in sustainable agriculture, artisanal mining, and renewable energy. Collaborations with local communities can unlock the region\'s economic potential. Your investment will help to create a better future for Balikumbat and its people.',
    investmentNeeds: 'Invest in Balikumbat and unlock the region\'s prosperity through collaboration with local communities.\n- Infrastructure to improve access to essential services and economic opportunities.\n- Education to prepare the next generation for success.\n- Healthcare to ensure that everyone has access to quality care.\n- Sustainable farming to improve food security and reduce environmental impact.\n- Renewable energy to create a cleaner and more sustainable future.\n- Entrepreneurial support programs to foster innovation and economic growth.',
    contact: '+237 XXXXXXXX',
    email: 'info@balikumbatcouncil.cm'
  },
  {
    id: 'booue',
    name: 'Booue Council',
    country: 'Gabon',
    countryCode: 'GA',
    region: 'Ogooué-Ivindo Province',
    intro: 'Welcome to Booue, a bustling hub huddled in the heart of Gabon, is a melting pot of rich culture and thriving business opportunities. Its vibrant atmosphere and diverse offerings make it a paradise for nature enthusiasts and a fertile ground for entrepreneurs seeking to make their mark. The city\'s unique blend of tradition and modernity sets the stage for a promising future.',
    economicPotential: 'The economic potential of Booue is deeply rooted in its rich cultural heritage and abundant natural resources. These assets provide a solid foundation for economic growth, offering a lucrative prospect for local investors and businesses alike. By harnessing these resources, Booue stands on the brink of an economic boom, ready to unlock unprecedented opportunities.',
    investmentOpportunities: 'Booue is a treasure trove of investment opportunities. From the burgeoning tourism sector to the flourishing local businesses, the city presents a myriad of avenues for investment. These opportunities make Booue an attractive prospect for development partners and investors seeking to contribute to the city\'s growth and prosperity.',
    investmentNeeds: 'To fully realize its potential and transform its vision into reality, Booue is actively seeking strategic investments. Key areas of focus include infrastructure development, education, healthcare, and sustainable energy solutions. By investing in these sectors, Booue aims to create a sustainable and prosperous future for its residents.',
    contact: '+241 XXXXXXXX',
    email: 'info@boouecouncil.ga'
  },
  {
    id: 'dibombari',
    name: 'Dibombari Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Littoral Region',
    intro: 'Welcome to Dibombari, a vibrant council in Cameroon\'s Littoral region, is a treasure trove of cultural heritage and untapped resources, beckoning investors with its promise.',
    economicPotential: 'Dibombari\'s economy is rooted in agriculture, with a focus on intensive palm and cassava cultivation. The presence of Société Camerounaise de Palmeraies (Socapalm) and the Ecole de Techniciens Agricole (ETA) underscores its agricultural significance.',
    investmentOpportunities: 'Dibombari offers a wealth of investment opportunities in sustainable agriculture and food processing. The council, in collaboration with development partners, is actively promoting these sectors, creating a conducive environment for investors.',
    investmentNeeds: 'Dibombari is seeking investment in infrastructure, education, healthcare, and sustainable farming practices. Your investment can play a pivotal role in fostering community growth, driving sustainable development, and creating long-term value for all.',
    contact: '+237 XXXXXXXX',
    email: 'info@dibombaricouncil.cm'
  },
  {
    id: 'douala-4',
    name: 'Douala 4 Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Littoral Region',
    intro: 'Welcome to Douala 4 Council! Positioned in the metropolis heart, our dynamic enclave undergoes swift population growth, weaving a rich tapestry of cultures. Join us in the vibrant rhythm of progress!',
    economicPotential: 'Douala 4 thrives as a key economic player, fueled by the bustling Bonaberi industrial zone. This hub of activity significantly contributes to the local economy, presenting a wealth of revenue opportunities for visionary investors.',
    investmentOpportunities: 'Embark on Douala 4\'s transformative journey! Invest in the booming real estate spurred by rapid population growth. Thrive as a socially conscious investor by enhancing healthcare, education, and community welfare. Explore diverse sectors like Steelworks, Agri-food, Breweries, and Tech Startups. Opportunities abound in Fertilizers, Pesticides, Metallurgy, Sawmills, Tanneries, and as a gateway for international companies. Shape Douala\'s economic narrative with strategic investments!',
    investmentNeeds: 'As Douala 4 undergoes rapid urban expansion, our vision is propelled by the pressing need for strategic investments. Infrastructure development is paramount, with opportunities in road networks, utilities, and public facilities to cater to the growing population. Healthcare and education facilities demand attention, ensuring a high quality of life for residents. Waste treatment projects are pivotal for sustainable urban development.\n\nJoin hands with Douala 4 Council to meet these needs, transforming challenges into avenues for growth. Your investments will not only shape the city\'s future but also contribute to the well-being of its diverse and dynamic community. Invest in Douala 4, where opportunities and impact converge!',
    contact: '+237 XXXXXXXX',
    email: 'info@douala4council.cm'
  },
  {
    id: 'tinto',
    name: 'Tinto Council',
    country: 'Cameroon',
    countryCode: 'CM',
    region: 'Southwest Region',
    intro: 'Welcome to TINTO Council, nestled in Cameroon\'s Equatorial Rain Forest, is home to 60,628 people (26,051 males, 34,557 females) across 3,720km². As an economic epicenter, it offers cultural diversity and untapped fiscal potential, attracting entrepreneurs and investors.',
    economicPotential: 'Tinto\'s economy is woven with threads of rich cultural heritage and bountiful natural resources, presenting a fertile landscape for robust fiscal growth and prosperity. Its strategic geopolitical location and multifaceted economic sectors, including agriculture and agro-transformation, offer diverse opportunities for sustainable and profitable investments.',
    investmentOpportunities: 'Tinto is a veritable goldmine of investment opportunities, from the burgeoning tourism sector to the thriving local enterprises, and from infrastructural projects to educational initiatives. The council also presents a diverse portfolio for sustainable and profitable investments in agriculture and agro-transformation, a key sector for the council\'s development.',
    investmentNeeds: 'To actualize its full potential and transmute its vision into reality, Tinto is actively courting strategic investments in pivotal areas, including infrastructure, education, healthcare, sustainable energy, and agriculture and agro-transformation. These investments are instrumental in propelling Tinto\'s growth trajectory and ensuring a prosperous future for its denizens.',
    contact: '+237 XXXXXXXX',
    email: 'info@tintocouncil.cm'
  }
]; 