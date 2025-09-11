// Base types
export interface BaseEntity {
  id: string
  createdAt: Date
  updatedAt: Date
}

// Localized content
export interface LocalizedContent {
  en: string
  fr: string
  sw: string
  ar: string
}

// User types
export interface UserProfile {
  firstName: string
  lastName: string
  avatar?: string
  bio?: string
  phone?: string
  organization?: string
  position?: string
  country?: string
  region?: string
}

export interface User extends BaseEntity {
  uid: string
  email: string
  role: 'viewer' | 'editor' | 'admin'
  profile: UserProfile
  lastLogin: Date
  isActive: boolean
  preferences: UserPreferences
}

export interface UserPreferences {
  language: string
  theme: 'light' | 'dark' | 'system'
  notifications: NotificationSettings
}

export interface NotificationSettings {
  email: boolean
  push: boolean
  sms: boolean
  frequency: 'immediate' | 'daily' | 'weekly'
}

// Content types
export interface Article extends BaseEntity {
  title: LocalizedContent
  content: LocalizedContent
  excerpt: LocalizedContent
  author: string
  category: 'news' | 'article' | 'announcement' | 'case-study'
  tags: string[]
  isFeatured: boolean
  publishedAt: Date
  imageUrl?: string
  status: 'draft' | 'published' | 'archived'
  seo: SEOData
  readTime: number
  views: number
  shares: number
}

export interface SEOData {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
}

// Partner types
export interface Partner extends BaseEntity {
  name: string
  logoUrl: string
  description: LocalizedContent
  websiteUrl: string
  partnershipType: 'technology' | 'academic' | 'government' | 'ngo' | 'corporate'
  displayOrder: number
  isActive: boolean
  contactInfo: ContactInfo
  socialMedia: SocialMediaLinks
  partnershipDetails: PartnershipDetails
}

export interface ContactInfo {
  email: string
  phone?: string
  address?: string
  city?: string
  country?: string
  region?: string
}

export interface SocialMediaLinks {
  linkedin?: string
  twitter?: string
  facebook?: string
  instagram?: string
}

export interface PartnershipDetails {
  startDate: Date
  endDate?: Date
  investment: number
  focusAreas: string[]
  expectedOutcomes: string[]
  status: 'active' | 'pending' | 'completed' | 'terminated'
}

// Council types
export interface Council extends BaseEntity {
  name: string
  location: GeographicLocation
  description: LocalizedContent
  imageUrl: string
  contactInfo: ContactInfo
  projects: CouncilProject[]
  isActive: boolean
  performanceMetrics: PerformanceMetrics
  digitalAdoption: DigitalAdoptionMetrics
}

export interface GeographicLocation {
  country: string
  region: string
  city: string
  coordinates?: {
    latitude: number
    longitude: number
  }
  population: number
  area: number
}

export interface CouncilProject {
  id: string
  name: string
  description: string
  startDate: Date
  endDate?: Date
  status: 'planning' | 'active' | 'completed' | 'on-hold'
  budget: number
  impact: string[]
}

export interface PerformanceMetrics {
  efficiencyScore: number
  citizenSatisfaction: number
  digitalServicesCount: number
  responseTime: number
  costSavings: number
}

export interface DigitalAdoptionMetrics {
  overallScore: number
  infrastructure: number
  services: number
  training: number
  citizenEngagement: number
}

// Coverage area types
export interface CoverageArea extends BaseEntity {
  name: string
  region: string
  country: string
  population: number
  activeProjects: number
  digitalAdoptionRate: number
  municipalities: string[]
  challenges: string[]
  opportunities: string[]
  successStories: string[]
}

// Event types
export interface Event extends BaseEntity {
  title: LocalizedContent
  description: LocalizedContent
  startDate: Date
  endDate: Date
  location: EventLocation
  type: 'workshop' | 'conference' | 'training' | 'webinar' | 'meeting'
  status: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
  capacity: number
  registeredAttendees: number
  imageUrl?: string
  agenda: EventAgenda[]
  speakers: EventSpeaker[]
  registrationRequired: boolean
  registrationUrl?: string
}

export interface EventLocation {
  type: 'physical' | 'virtual' | 'hybrid'
  address?: string
  city?: string
  country?: string
  virtualUrl?: string
  coordinates?: {
    latitude: number
    longitude: number
  }
}

export interface EventAgenda {
  time: string
  title: string
  description: string
  speaker?: string
  duration: number
}

export interface EventSpeaker {
  name: string
  title: string
  organization: string
  bio: string
  avatar?: string
}

// Success story types
export interface SuccessStory extends BaseEntity {
  title: LocalizedContent
  description: LocalizedContent
  municipality: string
  country: string
  category: 'digital-transformation' | 'efficiency-improvement' | 'citizen-engagement' | 'cost-reduction'
  metrics: SuccessMetrics
  imageUrl: string
  videoUrl?: string
  testimonial: string
  author: string
  role: string
  tags: string[]
  relatedArticles: string[]
}

export interface SuccessMetrics {
  before: string
  after: string
  improvement: string
  timeToImplement: string
  costSavings: number
  efficiencyGain: number
}

// Form types
export interface ContactFormData {
  name: string
  email: string
  organization?: string
  subject: string
  message: string
  type: 'general' | 'partnership' | 'support' | 'feedback'
}

export interface PartnershipInquiryData {
  organizationName: string
  contactPerson: string
  email: string
  phone: string
  partnershipType: 'technology' | 'academic' | 'government' | 'ngo' | 'corporate'
  investmentRange: string
  focusAreas: string[]
  description: string
  timeline: string
}

// API response types
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
  timestamp: Date
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Filter and search types
export interface FilterOptions {
  category?: string
  status?: string
  dateRange?: {
    start: Date
    end: Date
  }
  tags?: string[]
  region?: string
  country?: string
}

export interface SearchOptions extends FilterOptions {
  query: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

// Component prop types
export interface CTALink {
  text: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: React.ComponentType
}

export interface HeroVisual {
  type: 'map' | 'image' | 'video' | 'animation'
  src: string
  alt: string
  width: number
  height: number
}

// Investment Opportunity types
export interface InvestmentOpportunity extends BaseEntity {
  id: string
  title: string
  councilId: string
  category: InvestmentCategory
  description: string
  highlights: string[]
  investmentRange: string
  timeline: string
  expectedReturns: string
  riskLevel: 'low' | 'medium' | 'high'
  status: 'open' | 'closed' | 'coming-soon'
  imageUrl: string
  documents: InvestmentDocument[]
  contactInfo: ContactInfo
  requirements: string[]
  benefits: string[]
  isFeatured: boolean
}

export interface InvestmentCategory {
  id: string
  name: string
  description: string
  icon: string
  color: string
}

export interface InvestmentDocument {
  id: string
  name: string
  type: 'pdf' | 'doc' | 'xlsx' | 'ppt'
  url: string
  size: number
}

// Council Spotlight types
export interface CouncilSpotlight extends BaseEntity {
  id: string
  name: string
  slug: string
  location: GeographicLocation
  description: string
  shortDescription: string
  imageUrl: string
  logoUrl: string
  highlights: string[]
  economicStrength: string
  investmentOpportunities: string[]
  investorSupport: string
  futureVision: string
  keyStats: CouncilKeyStats
  sectors: InvestmentSector[]
  isFeatured: boolean
  status: 'active' | 'coming-soon' | 'closed'
  contactInfo: ContactInfo
  socialMedia: SocialMediaLinks
}

export interface CouncilKeyStats {
  population: number
  area: number
  establishedYear: number
  investmentOpportunities: number
  activeProjects: number
  digitalAdoptionRate: number
}

export interface InvestmentSector {
  id: string
  name: string
  description: string
  opportunities: string[]
  investmentRange: string
  timeline: string
  icon: string
}

// Solution types
export interface Solution extends BaseEntity {
  id: string
  name: string
  slug: string
  description: string
  shortDescription: string
  category: SolutionCategory
  features: SolutionFeature[]
  benefits: SolutionBenefit[]
  successMetrics: SuccessMetric[]
  implementationSteps: ImplementationStep[]
  caseStudies: CaseStudy[]
  isActive: boolean
  isFeatured: boolean
  imageUrl: string
  iconUrl: string
  targetAudience: string[]
  technicalRequirements: TechnicalRequirement[]
  supportLevel: 'basic' | 'standard' | 'premium'
  estimatedImplementationTime: string
  roi: string
}

export interface SolutionCategory {
  id: string
  name: string
  description: string
  icon: string
  color: string
}

export interface SolutionFeature {
  id: string
  title: string
  description: string
  icon: string
  isCore: boolean
  benefits: string[]
}

export interface SolutionBenefit {
  id: string
  title: string
  description: string
  impact: 'low' | 'medium' | 'high'
  timeframe: string
  metrics: string[]
}

export interface SuccessMetric {
  id: string
  title: string
  value: string
  unit: string
  improvement: string
  timeframe: string
  description: string
  category: 'efficiency' | 'cost' | 'satisfaction' | 'adoption' | 'transparency'
}

export interface ImplementationStep {
  id: string
  title: string
  description: string
  duration: string
  requirements: string[]
  deliverables: string[]
  order: number
}

export interface CaseStudy {
  id: string
  title: string
  municipality: string
  country: string
  description: string
  challenge: string
  solution: string
  results: string[]
  metrics: {
    before: string
    after: string
    improvement: string
  }
  testimonial: string
  author: string
  role: string
  imageUrl: string
}


export interface TechnicalRequirement {
  id: string
  category: 'hardware' | 'software' | 'network' | 'training'
  title: string
  description: string
  isRequired: boolean
  alternatives?: string[]
}

// Utility types
export type Locale = 'en' | 'fr' | 'sw' | 'ar'
export type UserRole = 'viewer' | 'editor' | 'admin'
export type ContentStatus = 'draft' | 'published' | 'archived'
export type PartnershipStatus = 'active' | 'pending' | 'completed' | 'terminated'
export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
export type EventType = 'workshop' | 'conference' | 'training' | 'webinar' | 'meeting'
