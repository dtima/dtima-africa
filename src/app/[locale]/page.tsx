import React from 'react'
import { HeroSection } from '@/components/home/HeroSection'
import { ImpactMetricsSection } from '@/components/home/ImpactMetricsSection'
import { ValuePropositionSection } from '@/components/home/ValuePropositionSection'
import { SuccessStoriesSection } from '@/components/home/SuccessStoriesSection'
import { PartnershipOpportunitiesSection } from '@/components/home/PartnershipOpportunitiesSection'
import { PartnersSection } from '@/components/home/PartnersSection'
import { TestimonialsSection } from '@/components/home/TestimonialsSection'
import { EventsSection } from '@/components/home/EventsSection'
import { CallToActionSection } from '@/components/home/CallToActionSection'

interface HomePageProps {
  params: Promise<{
    locale: string
  }>
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        headline="Transform Your Municipality with Digital Innovation"
        subheadline="DTIMA empowers African municipalities with cutting-edge digital solutions, driving efficiency, transparency, and citizen satisfaction across the continent."
        primaryCTA={{
          text: "Get Started Today",
          href: "#contact",
          variant: "primary"
        }}
        secondaryCTA={{
          text: "Watch Demo",
          href: "#demo",
          variant: "outline"
        }}
      />

      {/* Impact Metrics Section - DISABLED - Future Implementation */}
      {/* TODO: Re-enable Impact Metrics Section in future release
      <ImpactMetricsSection
        title="Our Impact Across Africa"
        subtitle="Real numbers, real impact, real transformation"
        metrics={[]}
      />
      */}

      {/* Value Proposition Section */}
      <ValuePropositionSection
        title="Why Choose DTIMA?"
        subtitle="Tailored solutions for every stakeholder in municipal digital transformation"
        propositions={[
          {
            id: "mayors",
            title: "For Local Mayors",
            description: "Transform your municipality's service delivery and citizen satisfaction with proven digital solutions.",
            benefits: [
              "Improved citizen satisfaction scores",
              "Reduced operational costs",
              "Enhanced transparency and accountability",
              "Data-driven decision making"
            ],
            icon: "🏛️",
            color: "blue",
            ctaText: "Learn More",
            ctaLink: "#mayors"
          },
          {
            id: "corporate",
            title: "For Corporate Partners",
            description: "Expand your impact and market presence through strategic partnerships with African municipalities.",
            benefits: [
              "Access to emerging African markets",
              "Enhanced CSR initiatives",
              "Government relationship building",
              "Sustainable development impact"
            ],
            icon: "🏢",
            color: "green",
            ctaText: "Partner With Us",
            ctaLink: "#corporate"
          },
          {
            id: "development",
            title: "For Development Partners",
            description: "Scale your development initiatives with DTIMA's proven methodology and local expertise.",
            benefits: [
              "Proven implementation methodology",
              "Local expertise and networks",
              "Scalable impact across regions",
              "Comprehensive monitoring and evaluation"
            ],
            icon: "🌍",
            color: "yellow",
            ctaText: "Get Involved",
            ctaLink: "#development"
          },
          {
            id: "investors",
            title: "For Investors",
            description: "Invest in the future of African digital transformation with a proven, scalable business model.",
            benefits: [
              "High-growth market opportunity",
              "Proven business model",
              "Diversified revenue streams",
              "Social impact returns"
            ],
            icon: "💰",
            color: "purple",
            ctaText: "Investment Info",
            ctaLink: "#investment"
          }
        ]}
      />

      {/* Success Stories Section - DISABLED - Future Implementation */}
      {/* TODO: Re-enable Success Stories Section in future release
      <SuccessStoriesSection
        title="Success Stories"
        subtitle="Real-world impact and transformation stories from municipalities across Africa"
        stories={[]}
      />
      */}

      {/* Partnership Opportunities Section */}
      <PartnershipOpportunitiesSection
        title="Partnership Opportunities"
        subtitle="Join us in transforming African municipalities through strategic partnerships"
        partnerships={[
          {
            id: "corporate-partnership",
            title: "Corporate Partnership",
            category: "corporate",
            description: "Partner with DTIMA to enhance your corporate social responsibility initiatives while driving real impact in African communities.",
            benefits: [
              "Enhanced brand reputation and visibility",
              "Access to emerging African markets",
              "Sustainable development impact",
              "Government and community relationships"
            ],
            requirements: [
              "Minimum 3-year commitment",
              "Annual investment of $500K+",
              "Alignment with SDG goals",
              "Regular impact reporting"
            ],
            investmentRange: "$500K - $5M annually",
            timeline: "3-5 years",
            impact: "Transform 10+ municipalities",
            icon: "🏢",
            color: "blue",
            featured: true
          },
          {
            id: "development-partnership",
            title: "Development Partnership",
            category: "development",
            description: "Collaborate with international development organizations to scale digital transformation across Africa.",
            benefits: [
              "Access to DTIMA's proven methodology",
              "Scalable impact across regions",
              "Technical expertise and support",
              "Monitoring and evaluation framework"
            ],
            requirements: [
              "Development sector experience",
              "Multi-country presence",
              "Technical capacity building focus",
              "Long-term sustainability approach"
            ],
            investmentRange: "$1M - $10M per program",
            timeline: "5-7 years",
            impact: "Scale to 50+ municipalities",
            icon: "🌍",
            color: "green",
            featured: true
          },
          {
            id: "investment-partnership",
            title: "Investment Partnership",
            category: "investment",
            description: "Invest in DTIMA's growth and expansion to capture the growing African digital transformation market.",
            benefits: [
              "High-growth market opportunity",
              "Proven business model",
              "Diversified revenue streams",
              "Social impact returns"
            ],
            requirements: [
              "Series A+ investment capacity",
              "Emerging market experience",
              "Technology sector focus",
              "Patient capital approach"
            ],
            investmentRange: "$2M - $20M equity",
            timeline: "5-10 years",
            impact: "Expand to 100+ municipalities",
            icon: "💰",
            color: "yellow",
            featured: true
          },
          {
            id: "technology-partnership",
            title: "Technology Partnership",
            category: "technology",
            description: "Leverage your technology expertise to enhance DTIMA's digital solutions and platform capabilities.",
            benefits: [
              "Access to African market data",
              "Product development insights",
              "Government sector expansion",
              "Innovation collaboration"
            ],
            requirements: [
              "Relevant technology expertise",
              "Government sector experience",
              "Scalable solution offering",
              "Localization capabilities"
            ],
            investmentRange: "Technology + $200K+ annually",
            timeline: "2-4 years",
            impact: "Enhance digital platform",
            icon: "💻",
            color: "purple"
          }
        ]}
      />

      {/* Testimonials Section - DISABLED - Future Implementation */}
      {/* TODO: Re-enable Testimonials Section in future release
      <TestimonialsSection />
      */}

      {/* Events Section - Enhanced with Real Data */}
      <EventsSection
        title="Featured Events & Local Councils"
        subtitle="Stay updated with our latest events and discover active local councils across Africa"
        events={[
          {
            id: "kette-council-training",
            title: "Kette Council Digital Project Presentation & AI Training",
            shortDescription: "Today, we presented the Kette Council Digital Project to the Honorable Mayor and team, followed by an AI integration workshop to enhance productivity, improve service delivery, and drive innovation.",
            photo: "/events/Kette-Council/Kette-Council-Training.jpg",
            date: "2024",
            location: "Kette, Cameroon",
            ctaText: "See Highlights",
            ctaLink: "#kette-council-training",
            isExternal: false,
            category: "workshop"
          },
          {
            id: "baham-project-presentation",
            title: "Baham Council DTIMA Project Presentation",
            shortDescription: "On April 12, 2024, during the Municipal Council meeting, we presented the DTIMA project and previewed the in-development website. We appreciate the Mayor of Baham and team for their warm welcome and support.",
            photo: "/events/Baham/Baham-Project-Presentation.jpg",
            date: "April 12, 2024",
            location: "Baham, Cameroon",
            ctaText: "View Update",
            ctaLink: "#baham-project",
            isExternal: false,
            category: "conference"
          },
          {
            id: "dtima-launch-event-2024",
            title: "DTIMA Official Launch Event 2024",
            shortDescription: "DTIMA Official Launch Event at the Cameroon Ministry of Posts and Telecommunications — a landmark leap in municipal digital innovation across Africa.",
            photo: "/events/launch/Launch-Event.jpg",
            date: "February 29, 2024",
            location: "Yaoundé, Cameroon",
            ctaText: "View Report",
            ctaLink: "#launch-event-report",
            isExternal: false,
            category: "summit"
          },
          {
            id: "olanguina-digital-platform",
            title: "Olanguina Council Digital Platform Presentation",
            shortDescription: "The Olanguina Council digital platform, developed by DTIMA with PushnChat, enhances public services and stimulates local economic growth by expanding online presence and creating digital market opportunities.",
            photo: "/events/Olanguina/Olanguina-Project-Presentation.jpg",
            date: "2024",
            location: "Olanguina, Cameroon",
            ctaText: "Learn More",
            ctaLink: "#olanguina-platform",
            isExternal: false,
            category: "conference"
          }
        ]}
                 councils={[
           {
             id: "mokolo-council",
             name: "Mokolo Council",
             description: "A vibrant municipal council in the Far North region of Cameroon, known for its diverse cultural heritage and commitment to sustainable urban development.",
             photo: "/images/councils/mokolo.jpg",
             location: "Mokolo, Cameroon",
             ctaText: "View Projects",
             ctaLink: "#mokolo-projects",
             isExternal: false,
             status: "active"
           },
           {
             id: "elak-council",
             name: "Elak Council",
             description: "Established in 1977, covering 750km² with 200,000 inhabitants. Known for rich history, culture, and commitment to sustainable development.",
             photo: "/images/councils/elak.jpg",
             location: "Elak, Cameroon",
             ctaText: "Explore Solutions",
             ctaLink: "#elak-solutions",
             isExternal: false,
             status: "active"
           },
           {
             id: "wum-council",
             name: "Wum Council",
             description: "A progressive council in the Northwest region, focusing on agricultural innovation and community-driven development initiatives.",
             photo: "/images/councils/wum.jpg",
             location: "Wum, Cameroon",
             ctaText: "Learn More",
             ctaLink: "#wum-info",
             isExternal: false,
             status: "active"
           },
           {
             id: "kette-council",
             name: "Kette Council",
             description: "Thriving community covering 2500 km² with 76,756 inhabitants. Rich in mining, agriculture, livestock farming, trade, services, and eco-tourism.",
             photo: "/images/councils/kette.jpg",
             location: "Kette, Cameroon",
             ctaText: "See Impact",
             ctaLink: "#kette-impact",
             isExternal: false,
             status: "active"
           },
           {
             id: "olanguina-council",
             name: "Olanguina Council",
             description: "A forward-thinking municipal council dedicated to digital transformation and modern governance practices.",
             photo: "/images/councils/olanguina.jpg",
             location: "Olanguina, Cameroon",
             ctaText: "Discover",
             ctaLink: "#olanguina-discover",
             isExternal: false,
             status: "active"
           },
           {
             id: "booue-council",
             name: "Booué Council",
             description: "Located in Gabon, this council represents cross-border collaboration and regional development partnerships.",
             photo: "/images/councils/booue.jpg",
             location: "Booué, Gabon",
             ctaText: "Explore",
             ctaLink: "#booue-explore",
             isExternal: false,
             status: "active"
           },
           {
             id: "mbogue-council",
             name: "Mbogue Council",
             description: "A dynamic council committed to innovation and community empowerment through technology-driven solutions.",
             photo: "/images/councils/mbogue.jpg",
             location: "Mbogue, Cameroon",
             ctaText: "View Details",
             ctaLink: "#mbogue-details",
             isExternal: false,
             status: "active"
           }
         ]}
      />

                 {/* Partners Section - Moved to before footer */}
           <PartnersSection
             title="Development and Solution Partners"
             subtitle="Strategic partnerships driving digital transformation across Africa"
             partners={[
               {
                 id: "google-cloud",
                 name: "Google Cloud",
                 logo: "/solution-partners/Google-Cloud.jpg",
                 alt: "Google Cloud logo",
                 website: "https://cloud.google.com"
               },
               {
                 id: "pushncare",
                 name: "PushNcare",
                 logo: "/solution-partners/logo.jpg",
                 alt: "PushNcare logo",
                 website: "https://pushncare.com"
               },
               {
                 id: "pushnchat",
                 name: "PushNchat",
                 logo: "/solution-partners/logo.svg",
                 alt: "PushNchat logo",
                 website: "https://pushnchat.com"
               }
             ]}
           />

      {/* Call to Action Section */}
      <CallToActionSection
        title="Ready to Transform Your Municipality?"
        subtitle="Join hundreds of African municipalities already benefiting from DTIMA's digital transformation solutions."
        primaryCTA={{
          text: "Get Started Today",
          href: "#contact",
          variant: "primary",
          icon: "🚀"
        }}
        secondaryCTA={{
          text: "Schedule a Demo",
          href: "#demo",
          variant: "outline",
          icon: "📅"
        }}
        features={[
          "Free consultation and assessment",
          "Customized implementation plan",
          "Ongoing support and training",
          "Proven track record of success"
        ]}
        backgroundImage="/images/cta-background.jpg"
      />
    </main>
  )
}
