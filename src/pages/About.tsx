import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import vintageFounder from "@/assets/vintage-founder.jpg";
import ingredientsGallery from "@/assets/ingredients-gallery.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gradient-to-br from-muted to-secondary mt-16">
        <div className="text-center px-6">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-4">
            Our Story
          </h1>
          <p className="font-display text-2xl md:text-3xl text-muted-foreground italic">
            Since 1939
          </p>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                The Beginning
              </h2>
              <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                <p>
                  In the historic town of Shefa'amr, in the early 1930s, our story began with a 
                  remarkable woman—the matriarch of the Zeitoun family. In her small kitchen, she 
                  experimented with an ancient ingredient: mastic, a precious resin from the Mediterranean.
                </p>
                <p>
                  Through countless trials and unwavering dedication, she perfected a recipe that would 
                  become legendary. Her handcrafted mastic ice cream combined traditional techniques with 
                  pure, natural ingredients, creating a flavor unlike anything the region had tasted before.
                </p>
                <p>
                  By 1939, word of her exceptional ice cream had spread throughout the community. What 
                  started as a family secret became a cherished local treasure, drawing people from 
                  neighboring towns to experience this unique delicacy.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={vintageFounder}
                  alt="Vintage photograph of our founder"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* The Legacy Lives On */}
      <section className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            The Legacy Lives On
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
            <p>
              For over 85 years, the Zeitoun family has preserved and protected the original recipe, 
              passing it down through four generations. Each generation has added their own dedication 
              and care, but the essence remains unchanged.
            </p>
            <p>
              Today, we continue to honor our grandmother's vision. Every scoop of ice cream is still 
              handcrafted using the same meticulous methods she developed. We source the finest mastic 
              from traditional suppliers, use only natural ingredients, and refuse to compromise on quality.
            </p>
            <p>
              Our commitment to authenticity means you taste not just ice cream, but history—a direct 
              connection to the passion and craftsmanship of 1939.
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients Gallery */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Heritage Craftsmanship
          </h2>
          <div className="rounded-lg overflow-hidden shadow-2xl mb-8">
            <img
              src={ingredientsGallery}
              alt="Traditional ice cream making tools and natural ingredients"
              className="w-full h-auto"
            />
          </div>
          <p className="font-body text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            We honor our heritage through the careful selection of natural ingredients and the use of 
            time-tested techniques. Every tool, every method, every ingredient tells part of our story.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Our Mission
          </h2>
          <p className="font-body text-xl text-foreground leading-relaxed mb-12">
            To keep the authentic taste of our heritage alive—one scoop at a time. We are not just 
            making ice cream; we are preserving a piece of history, honoring our family's dedication, 
            and sharing the flavors of tradition with every customer who walks through our doors.
          </p>
          
          <div className="border-t-2 border-b-2 border-primary py-8">
            <blockquote className="font-display text-2xl md:text-3xl italic text-foreground">
              "Each scoop tells a story of tradition and love."
            </blockquote>
            <p className="font-body text-sm text-muted-foreground mt-4">
              — The Zeitoun Family
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
