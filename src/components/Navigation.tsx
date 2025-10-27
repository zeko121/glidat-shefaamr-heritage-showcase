import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "@/assets/images/placeholder.png";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { name: "בית", path: "/" },
    { name: "אודות", path: "/about" },
    { name: "תפריט", path: "/menu" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Links on the right (RTL: visually on left) */}
          <div dir="rtl" className="flex items-center space-x-reverse space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative text-sm font-body font-medium transition-colors hover:text-primary",
                  location.pathname === link.path ? "text-primary" : "text-foreground/70",
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Logo on the left (RTL: visually on right) */}
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Glidat Shefa'amr Logo" className="h-10 w-auto object-contain" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
