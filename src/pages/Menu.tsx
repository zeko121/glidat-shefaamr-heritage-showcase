import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, X } from "lucide-react";
import menuData from "@/data/menu.json";
import { getMenuImage } from "@/utils/menuImages";

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
  const [selectedItem, setSelectedItem] = useState<(MenuItem & { category: string }) | null>(null);
  const categories: MenuCategory[] = menuData.categories;

  const filteredItems =
    activeCategory !== "all"
      ? categories
          .find((cat) => cat.category === activeCategory)
          ?.items.map((item) => ({ ...item, category: activeCategory })) || []
      : [];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[20vh] flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary mt-16">
        <div className="text-center px-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">הטעמים שלנו</h1>
          <p className="font-body text-xl text-muted-foreground">מיוצר בעבודת יד עם מסורת, מוגש באהבה</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-4 px-2 md:py-12 md:px-6 bg-card border-b border-border">
        <div className="w-full md:container md:mx-auto">
          <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-4 px-2 md:px-0">
            <Button
              onClick={() => setActiveCategory("all")}
              variant={activeCategory === "all" ? "default" : "outline"}
              className={`font-body font-semibold text-xs md:text-sm
                    px-4 py-2 md:px-6 md:py-3
                    rounded-full transition-all duration-300 w-auto
                    ${
                      activeCategory === "all"
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    }`}
            >
              כל הפריטים
            </Button>

            {categories.map((category) => (
              <Button
                key={category.category}
                onClick={() => setActiveCategory(category.category)}
                variant={activeCategory === category.category ? "default" : "outline"}
                className={`font-body font-semibold text-xs md:text-sm
                      px-4 py-2 md:px-6 md:py-3
                      rounded-full transition-all duration-300 w-auto
                      ${
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
      <section className="py-12 px-3 md:py-20 md:px-6">
        <div className="container mx-auto max-w-7xl">
          {activeCategory === "all" ? (
            <div className="space-y-16">
              {categories.map((cat) => (
                <div key={cat.category} className="space-y-8">
                  <h2 className="font-display text-3xl font-bold text-foreground text-center">{cat.category}</h2>
                  <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
                    {cat.items.map((item, index) => {
                      const imagePath = getMenuImage(item.image);

                      return (
                        <div
                          key={index}
                          onClick={() => setSelectedItem({ ...item, category: cat.category })}
                          className="group relative overflow-hidden rounded-lg bg-card shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer scale-105 md:scale-100"
                        >
                          <div className="aspect-square overflow-hidden bg-muted">
                            <img
                              src={imagePath}
                              alt={item.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>

                          <div className="p-4">
                            <h3 className="font-display text-lg font-semibold text-foreground mb-2 text-right">
                              {item.name}
                            </h3>
                            <p className="font-body text-xl text-primary font-bold text-right">{item.price}</p>
                          </div>

                          <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-500 rounded-lg" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-6">
              {filteredItems.map((item, index) => {
                const imagePath = getMenuImage(item.image);

                return (
                  <div
                    key={index}
                    onClick={() => setSelectedItem(item)}
                    className="group relative overflow-hidden rounded-lg bg-card shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 cursor-pointer scale-105 md:scale-100"
                  >
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={imagePath}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-4">
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 text-right">
                        {item.name}
                      </h3>
                      <p className="font-body text-xl text-primary font-bold text-right">{item.price}</p>
                    </div>

                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-500 rounded-lg" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Item Detail Dialog */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-2xl bg-card">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold text-right">{selectedItem?.name}</DialogTitle>
          </DialogHeader>

          {selectedItem && (
            <div className="space-y-6">
              <div className="max-h-[70vh] overflow-hidden rounded-lg bg-muted flex items-center justify-center">
                <img
                  src={getMenuImage(selectedItem.image)}
                  alt={selectedItem.name}
                  className="max-w-full max-h-[70vh] object-contain"
                />
              </div>

              <div className="flex justify-between items-center">
                <p className="font-body text-3xl text-primary font-bold">{selectedItem.price}</p>
                <p className="font-body text-muted-foreground">{selectedItem.category}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Visit Us Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <MapPin className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">בואו לבקר אותנו היום</h2>
          <p className="font-body text-lg text-muted-foreground mb-8">
            חוו את הטעמים המיוצרים בעבודת יד שלנו בכל אחד משלושת המיקומים שלנו ברחבי ישראל. כל כדור מיוצר טרי מדי יום
            באמצעות המתכון המסורתי המשפחתי שלנו.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">שפרעם המקורי</h3>
              <p className="font-body text-sm text-muted-foreground">הרובע ההיסטורי, שפרעם</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">סניף חיפה</h3>
              <p className="font-body text-sm text-muted-foreground">המושבה הגרמנית, חיפה</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md">
              <h3 className="font-display text-xl font-bold text-foreground mb-2">סניף תל אביב</h3>
              <p className="font-body text-sm text-muted-foreground">נווה צדק, תל אביב</p>
            </div>
          </div>
          <p className="font-body text-primary font-semibold mt-8 text-lg">פתוח יומי: 9:00 – 23:00</p>
        </div>
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Menu;
