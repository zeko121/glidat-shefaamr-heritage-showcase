import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FlavorCard from "@/components/FlavorCard";
import { Button } from "@/components/ui/button";
import flavorMastic from "@/assets/flavor-mastic.jpg";
import flavorPistachio from "@/assets/flavor-pistachio.jpg";
import flavorRose from "@/assets/flavor-rose.jpg";
import { MapPin } from "lucide-react";

type Category = "all" | "classic" | "premium" | "seasonal";

interface Flavor {
  image: string;
  name: string;
  description: string;
  category: Category;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const flavors: Flavor[] = [
    {
      image: flavorMastic,
      name: "Classic Mastic",
      description: "Our signature flavor since 1939. Pure mastic resin creates an unforgettable taste that has defined our legacy.",
      category: "classic",
    },
    {
      image: flavorPistachio,
      name: "Pistachio Dream",
      description: "Rich, creamy perfection. Mediterranean pistachios ground fresh daily, combined with our mastic base.",
      category: "classic",
    },
    {
      image: flavorRose,
      name: "Rose Water",
      description: "Delicate floral elegance. Traditional rose water essence perfectly balanced with our signature recipe.",
      category: "premium",
    },
    {
      image: flavorMastic,
      name: "Vanilla Mastic",
      description: "A timeless classic. Madagascar vanilla meets our heritage mastic for a smooth, luxurious experience.",
      category: "classic",
    },
    {
      image: flavorPistachio,
      name: "Cardamom & Honey",
      description: "Aromatic sophistication. Warm cardamom spice harmonizes with pure wildflower honey.",
      category: "premium",
    },
    {
      image: flavorRose,
      name: "Saffron Gold",
      description: "Royal indulgence. Precious saffron threads create a golden masterpiece of flavor and luxury.",
      category: "premium",
    },
    {
      image: flavorMastic,
      name: "Orange Blossom",
      description: "Citrus serenity. Fresh orange blossom water brings Mediterranean sunshine to every bite.",
      category: "seasonal",
    },
    {
      image: flavorPistachio,
      name: "Date & Walnut",
      description: "Rich heritage blend. Sweet Medjool dates and toasted walnuts in our creamy mastic base.",
      category: "seasonal",
    },
    {
      image: flavorRose,
      name: "Lavender Honey",
      description: "Floral harmony. Delicate lavender essence swirled with aromatic honey from local fields.",
      category: "seasonal",
    },
  ];

  const categories = [
    { id: "all" as Category, label: "All Flavors" },
    { id: "classic" as Category, label: "Classic" },
    { id: "premium" as Category, label: "Premium" },
    { id: "seasonal" as Category, label: "Seasonal" },
  ];

  const filteredFlavors = activeCategory === "all" 
    ? flavors 
    : flavors.filter(flavor => flavor.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary mt-16">
        <div className="text-center px-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
            Our Flavors
          </h1>
          <p className="font-body text-xl text-muted-foreground">
            Handcrafted with tradition, served with love
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-6 bg-card border-b border-border">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={activeCategory === category.id ? "default" : "outline"}
                className={`font-body font-semibold px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Flavors Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFlavors.map((flavor, index) => (
              <FlavorCard
                key={index}
                image={flavor.image}
                name={flavor.name}
                description={flavor.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit Us Today
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-8">
            Experience our handcrafted flavors at any of our three locations across Israel.
            Each scoop is made fresh daily using our traditional family recipe.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Shefa'amr Original
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Historic Quarter, Shefa'amr
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Haifa Branch
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                German Colony, Haifa
              </p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                Tel Aviv Location
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                Neve Tzedek, Tel Aviv
              </p>
            </div>
          </div>
          <p className="font-body text-primary font-semibold mt-8 text-lg">
            Open Daily: 9:00 AM – 11:00 PM
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Menu;
