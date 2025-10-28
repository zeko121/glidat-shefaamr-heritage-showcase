import { Instagram, Facebook, Phone } from "lucide-react";
import logo from "@/assets/images/placeholder.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <img src={logo} alt="Glidat Shefa'amr" className="h-16 w-auto object-contain mb-4 mx-auto md:mx-0" />
            <p className="text-muted-foreground font-body italic">
              מייצרים גלידת מסטיק אותנטית מאז 1939
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
              שעות פעילות
            </h4>
            <p className="text-muted-foreground font-body">
              יומי: 9:00 – 23:00
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
              צור קשר
            </h4>
            <div className="flex justify-center md:justify-start space-x-4 space-x-reverse">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors p-2"
                aria-label="Phone"
              >
                <Phone className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} גלידת שפרעם. כל הזכויות שמורות | מורשת משפחת זיתון
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
