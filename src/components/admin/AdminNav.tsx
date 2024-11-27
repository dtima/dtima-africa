import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Users,
  Bell,
  Image,
  Settings,
  Newspaper,
} from "lucide-react";

const navItems = [
  {
    title: "Overview",
    href: "/admin",
    icon: <LayoutDashboard className="w-5 h-5" />,
  },
  {
    title: "Articles",
    href: "/admin/articles",
    icon: <FileText className="w-5 h-5" />,
  },
  {
    title: "News",
    href: "/admin/news",
    icon: <Newspaper className="w-5 h-5" />,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Announcements",
    href: "/admin/announcements",
    icon: <Bell className="w-5 h-5" />,
  },
  {
    title: "Media",
    href: "/admin/media",
    icon: <Image className="w-5 h-5" />,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: <Settings className="w-5 h-5" />,
  },
];

export const AdminNav = () => {
  const location = useLocation();

  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          to={item.href}
          className={cn(
            "flex items-center px-4 py-2 text-sm font-medium rounded-md",
            location.pathname === item.href
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted"
          )}
        >
          {item.icon}
          <span className="ml-3">{item.title}</span>
        </Link>
      ))}
    </nav>
  );
};