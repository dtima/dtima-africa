import React from 'react';
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { navItems, userNavItems } from './nav-config';
import { useAuth } from '@/components/auth/AuthProvider';
import { LogOut } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const MobileNav = ({ isOpen, setIsOpen }: MobileNavProps) => {
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
    setIsOpen(false);
  };

  const filteredUserNavItems = userNavItems.filter(item => 
    !item.roles || item.roles.includes(profile?.role || '')
  );

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="left" className="w-full sm:w-[350px] pr-0">
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.title} className="flex flex-col space-y-3">
                <Button
                  asChild
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={() => !item.items && setIsOpen(false)}
                >
                  <a href={item.href}>
                    {item.icon}
                    {item.title}
                  </a>
                </Button>
                
                {item.items && (
                  <div className="ml-4 flex flex-col space-y-2">
                    {item.items.map((subItem) => (
                      <Button
                        key={subItem.title}
                        asChild
                        variant="ghost"
                        className="justify-start"
                        onClick={() => setIsOpen(false)}
                      >
                        <a href={subItem.href}>
                          {subItem.title}
                        </a>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {user && (
              <>
                <div className="h-px bg-border my-2" />
                {filteredUserNavItems.map((item) => (
                  <Button
                    key={item.title}
                    asChild
                    variant="ghost"
                    className="justify-start gap-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <a href={item.href}>
                      {item.icon}
                      {item.title}
                    </a>
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  className="justify-start gap-2"
                  onClick={handleSignOut}
                >
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Button>
              </>
            )}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};