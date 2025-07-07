import { NavLink, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Dumbbell } from 'lucide-react';

const navItems = [
  { label: 'Profile', href: '/profile' },
  { label: 'Meal Plan', href: '/meal-plan' },
];

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, you'd clear user session, tokens, etc.
    navigate('/login');
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-base font-medium transition-colors hover:text-green-600 ${
      isActive ? 'text-green-700' : 'text-gray-600'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center px-4 sm:px-6 lg:px-8">
        <NavLink to="/profile" className="mr-6 flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-green-600" />
          <span className="text-xl font-bold text-gray-800">HealthTracker</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center gap-6">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href} className={getNavLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:ml-auto">
           {/* Logout Button (Desktop) */}
          <Button onClick={handleLogout} variant="outline" className="hidden md:inline-flex">
            Logout
          </Button>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  <NavLink to="/profile" className="flex items-center gap-2 mb-4">
                     <Dumbbell className="h-6 w-6 text-green-600" />
                     <span className="text-xl font-bold text-gray-800">HealthTracker</span>
                  </NavLink>
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={getNavLinkClass}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                   <Button onClick={handleLogout} variant="outline" className="mt-4">
                      Logout
                    </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
} 