import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import menuData from "@/data/menu.json";

interface MenuItem {
  name: string;
  price: string;
  image: string;
}

interface MenuCategory {
  category: string;
  items: MenuItem[];
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categories: MenuCategory[] = menuData.categories;

  const filteredItems = activeCategory === "all" 
    ? categories.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.category })))
    : categories.find(cat => cat.category === activeCategory)?.items.map(item => ({ ...item, category: activeCategory })) || [];

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
            <Button
              onClick={() => setActiveCategory("all")}
              variant={activeCategory === "all" ? "default" : "outline"}
              className={`font-body font-semibold px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }`}
            >
              All Items
            </Button>
            {categories.map((category) => (
              <Button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                variant={activeCategory === category.category ? "default" : "outline"}
                className={`font-body font-semibold px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {category.category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-card shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <span className="text-sm">{item.name}</span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 text-right">
                    {item.name}
                  </h3>
                  <p className="font-body text-xl text-primary font-bold text-right">
                    {item.price}
                  </p>
                </div>
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-500 rounded-lg" />
              </div>
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
