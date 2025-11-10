import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/images/placeholder.png";

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "בית", path: "/" },
    { name: "אודות", path: "/about" },
    { name: "תפריט", path: "/menu" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-md py-3"
          : "bg-background/80 backdrop-blur-md border-b border-border py-4"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Desktop Links on the right (RTL: visually on left) */}
          <div dir="rtl" className="hidden md:flex items-center space-x-reverse space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative group text-sm font-body font-medium transition-all duration-300 hover:scale-110",
                  location.pathname === link.path ? "text-primary" : "text-foreground/70"
                )}
              >
                <span className="relative z-10">{link.name}</span>

                {/* Animated underline for active state */}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 right-0 h-0.5 bg-primary transition-all duration-300 origin-center",
                    location.pathname === link.path
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  )}
                />

                {/* Hover underline */}
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button
                className="p-2 text-foreground hover:text-primary transition-colors duration-300 hover:scale-110 active:scale-95"
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-6 mt-8" dir="rtl">
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={logo}
                    alt="Glidat Shefa'amr Logo"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                {links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-body font-medium transition-all duration-300 hover:translate-x-2 p-4 rounded-lg",
                      location.pathname === link.path
                        ? "text-primary bg-primary/10"
                        : "text-foreground/70 hover:bg-accent"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo on the left (RTL: visually on right) */}
          <Link
            to="/"
            className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <img
              src={logo}
              alt="Glidat Shefa'amr Logo"
              className="h-10 w-auto object-contain transition-all duration-300"
              width="492"
              height="320"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
