import React from 'react';
import { Menu, X, LogOut } from 'lucide-react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Logo } from './Logo';
import { navItems, userNavItems } from './nav-config';
import { useAuth } from '@/components/auth/AuthProvider';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

interface MainNavProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
}

export const MainNav = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MainNavProps) => {
  const { user, profile } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate('/auth');
  };

  const filteredUserNavItems = userNavItems.filter(item => 
    !item.roles || item.roles.includes(profile?.role || '')
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger className="flex items-center gap-2">
                        {item.icon}
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink
                      href={item.href}
                      className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}
                    >
                      {item.icon}
                      {item.title}
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden sm:flex items-center gap-4">
                <NavigationMenu>
                  <NavigationMenuList>
                    {filteredUserNavItems.map((item) => (
                      <NavigationMenuItem key={item.title}>
                        <NavigationMenuLink
                          href={item.href}
                          className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2")}
                        >
                          {item.icon}
                          {item.title}
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSignOut}
                  className="text-gray-600"
                >
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="hidden sm:flex">
                <Button
                  variant="ghost"
                  className="text-green-600 hover:text-green-700 hover:bg-green-50"
                  onClick={() => navigate('/auth')}
                >
                  Sign In
                </Button>
                <Button
                  className="bg-green-600 text-white hover:bg-green-700"
                  onClick={() => navigate('/auth')}
                >
                  Join Us
                </Button>
              </div>
            )}
            
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};