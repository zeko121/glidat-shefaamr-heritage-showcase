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
      name: "מסטיק קלאסי",
      description: "הטעם המיוחד שלנו, מיוצר לפי המתכון המשפחתי המקורי משנת 1939 עם מסטיק טהור",
    },
    {
      image: flavorPistachio,
      name: "חלום פיסטוק",
      description: "גלידת פיסטוק עשירה וקרמית עשויה מהאגוזים הים תיכוניים המשובחים ביותר",
    },
    {
      image: flavorRose,
      name: "מי ורדים",
      description: "נגיעות פרחוניות עדינות מאוזנות בצורה מושלמת עם בסיס המסטיק המיוחד שלנו",
    },
  ];

  const locations = [
    { name: "שפרעם המקורי", address: "הרובע ההיסטורי, שפרעם" },
    { name: "סניף חיפה", address: "המושבה הגרמנית, חיפה" },
    { name: "סניף תל אביב", address: "נווה צדק, תל אביב" },
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
            מייצרים גלידת מסטיק אותנטית
          </h1>
          <p className="font-display text-2xl md:text-3xl text-background/90 mb-8 italic" style={{ animationDelay: "0.2s" }}>
            מאז 1939
          </p>
          <p className="font-body text-lg md:text-xl text-background/80 mb-10 max-w-2xl mx-auto" style={{ animationDelay: "0.4s" }}>
            ארבעה דורות של משפחת זיתון שימרו את אומנות הגלידה בעבודת יד עם מסטיק,
            ומביאים לכם את הטעם האותנטי של מורשת עם כל כדור גלידה.
          </p>
          <Link to="/about">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-body font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 gold-shimmer"
              style={{ animationDelay: "0.6s" }}
            >
              למדו על הסיפור שלנו
            </Button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            מורשת של טעם
          </h2>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            בלב שפרעם, הסיפור שלנו החל בשנות ה-30 כאשר משפחת זיתון
            שכללה לראשונה את מתכון הגלידה המבוסס על מסטיק. היום, אנו ממשיכים את המסורת הגאה הזו,
            תוך שימוש רק במרכיבים טבעיים מהמובחרים ובטכניקות מסורתיות
            כדי ליצור גלידה שמספרת סיפור של מורשת, תשוקה ואותנטיות.
          </p>
        </div>
      </section>

      {/* Signature Flavors Carousel */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              טעמים מיוחדים
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              כל טעם מיוצר באהבה ובמסורת
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
                צפו בתפריט המלא
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
              בואו לבקר אותנו
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              חוו את המורשת שלנו בשלושה מיקומים יפהפיים
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
                  פתוח יומי: 9:00 – 23:00
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
