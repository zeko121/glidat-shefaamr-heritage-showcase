import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FlavorCard from "@/components/FlavorCard";
import heroImage from "@/assets/hero-image.jpg";
import flavorMastic from "@/assets/flavor-mastic.jpg";
import flavorPistachio from "@/assets/flavor-pistachio.jpg";
import flavorRose from "@/assets/flavor-rose.jpg";
import { MapPin } from "lucide-react";

const Index = () => {
  const flavors = [
    {
      image: flavorMastic,
      name: "Classic Mastic",
      description: "Our signature flavor, crafted from the original 1939 family recipe with pure mastic",
    },
    {
      image: flavorPistachio,
      name: "Pistachio Dream",
      description: "Rich, creamy pistachio ice cream made with the finest Mediterranean nuts",
    },
    {
      image: flavorRose,
      name: "Rose Water",
      description: "Delicate floral notes perfectly balanced with our signature mastic base",
    },
  ];

  const locations = [
    { name: "Shefa'amr Original", address: "Historic Quarter, Shefa'amr" },
    { name: "Haifa Branch", address: "German Colony, Haifa" },
    { name: "Tel Aviv Location", address: "Neve Tzedek, Tel Aviv" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-background mb-6 animate-fade-in-up">
            Crafting Authentic Mastic Ice Cream
          </h1>
          <p className="font-display text-2xl md:text-3xl text-background/90 mb-8 italic" style={{ animationDelay: "0.2s" }}>
            Since 1939
          </p>
          <p className="font-body text-lg md:text-xl text-background/80 mb-10 max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
            Four generations of the Zeitoun family have preserved the art of handcrafted mastic ice cream,
            bringing you the authentic taste of heritage with every scoop.
          </p>
          <Link to="/about">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gold-shimmer"
              style={{ animationDelay: "0.6s" }}
            >
              Learn Our Story
            </Button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            A Legacy of Flavor
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            In the heart of Shefa'amr, our story began in the 1930s when the Zeitoun family
            first perfected their mastic-based ice cream recipe. Today, we continue this proud
            tradition, using only the finest natural ingredients and time-honored techniques
            to create ice cream that tells a story of heritage, passion, and authenticity.
          </p>
        </div>
      </section>

      {/* Signature Flavors Carousel */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Signature Flavors
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Each flavor crafted with love and tradition
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {flavors.map((flavor, index) => (
              <FlavorCard
                key={index}
                image={flavor.image}
                name={flavor.name}
                description={flavor.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/menu">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-body font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                View Full Menu
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visit Us
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Experience our heritage at three beautiful locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-border hover:border-primary"
              >
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {location.name}
                </h3>
                <p className="font-body text-muted-foreground mb-4">
                  {location.address}
                </p>
                <p className="font-body text-sm text-primary font-semibold">
                  Open Daily: 9:00 – 23:00
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
