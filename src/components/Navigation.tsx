import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

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
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-display font-bold text-foreground tracking-tight">
              Glidat Shefa'amr
            </h1>
          </Link>
          
          <div className="flex items-center space-x-reverse space-x-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-body font-medium transition-colors hover:text-primary relative",
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground/70"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
