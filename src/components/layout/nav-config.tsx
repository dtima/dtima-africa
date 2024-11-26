import { Home, Info, Activity, Users, MapPin, Building2, Calendar, Newspaper, Mail, User, Settings, Shield } from 'lucide-react';

export const navItems = [
  {
    title: "Home",
    href: "/",
    icon: <Home className="h-4 w-4" />
  },
  {
    title: "About Us",
    icon: <Info className="h-4 w-4" />,
    items: [
      {
        title: "Mission & Vision",
        href: "/about/mission",
        description: "Learn about our goals and vision for digital transformation in Africa"
      },
      {
        title: "Key Initiatives",
        href: "/about/initiatives",
        description: "Explore our main programs and strategic initiatives"
      },
      {
        title: "Impact Goals",
        href: "/about/impact",
        description: "See how we measure and achieve meaningful impact"
      }
    ]
  },
  {
    title: "Activities",
    icon: <Activity className="h-4 w-4" />,
    items: [
      {
        title: "Digital Platform Development",
        href: "/activities/platforms",
        description: "Building robust digital solutions for municipal services"
      },
      {
        title: "Capacity Building",
        href: "/activities/training",
        description: "Training and empowering municipal staff"
      },
      {
        title: "Innovation Challenges",
        href: "/activities/innovation",
        description: "Fostering local tech innovation and solutions"
      },
      {
        title: "Partnerships",
        href: "/activities/partnerships",
        description: "Collaborating for greater impact"
      }
    ]
  },
  {
    title: "Partners",
    href: "/partners",
    icon: <Users className="h-4 w-4" />
  },
  {
    title: "Coverage",
    href: "/coverage",
    icon: <MapPin className="h-4 w-4" />
  },
  {
    title: "Councils",
    href: "/councils",
    icon: <Building2 className="h-4 w-4" />
  }
];

export const userNavItems = [
  {
    title: "Profile",
    href: "/profile",
    icon: <User className="h-4 w-4" />
  },
  {
    title: "Admin Dashboard",
    href: "/admin",
    icon: <Shield className="h-4 w-4" />,
    roles: ['admin']
  }
];

export const footerLinks = [
  {
    title: "About DTIMA",
    description: "Digital Transformation Initiative for Municipalities in Africa - Empowering local governments through digital innovation."
  },
  {
    title: "Quick Links",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Activities", href: "/activities" },
      { title: "Partners", href: "/partners" },
      { title: "Coverage", href: "/coverage" },
      { title: "Councils", href: "/councils" }
    ]
  },
  {
    title: "Resources",
    items: [
      { title: "Events", href: "/events" },
      { title: "Articles", href: "/articles" },
      { title: "Interviews", href: "/interviews" },
      { title: "Success Stories", href: "/success-stories" },
      { title: "Newsletter", href: "/newsletter" }
    ]
  },
  {
    title: "Contact",
    items: [
      { title: "Contact Form", href: "/contact" },
      { title: "Partnership Inquiries", href: "/contact/partnerships" },
      { title: "Newsletter Signup", href: "/newsletter" },
      { title: "Social Media", href: "/social" }
    ]
  }
];