import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-24">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
              Glidat Shefa'amr
            </h3>
            <p className="text-muted-foreground font-body italic">
              Crafting authentic mastic ice cream since 1939
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
              Hours
            </h4>
            <p className="text-muted-foreground font-body">
              Daily: 9:00 AM – 11:00 PM
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-foreground">
              Connect
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground font-body">
            © {new Date().getFullYear()} Glidat Shefa'amr. All rights reserved. | Zeitoun Family Heritage
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
