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
            הסיפור שלנו
          </h1>
          <p className="font-display text-2xl md:text-3xl text-muted-foreground italic">
            מאז 1939
          </p>
        </div>
      </section>

      {/* The Beginning */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                ההתחלה
              </h2>
              <div className="space-y-4 font-body text-lg text-muted-foreground leading-relaxed">
                <p>
                  בעיירה ההיסטורית שפרעם, בתחילת שנות ה-30, הסיפור שלנו התחיל עם
                  אישה יוצאת דופן - אם המשפחה של משפחת זיתון. במטבחה הקטן, היא
                  התנסתה במרכיב עתיק: מסטיק, שרף יקר מהים התיכון.
                </p>
                <p>
                  דרך ניסויים אינספור ומסירות בלתי מתפשרת, היא שכללה מתכון שהפך
                  לאגדה. הגלידה המסטיק שלה בעבודת יד שילבה טכניקות מסורתיות עם
                  מרכיבים טבעיים וטהורים, ויצרה טעם שלא היה דומה לשום דבר שהאזור טעם קודם לכן.
                </p>
                <p>
                  עד שנת 1939, השמועה על הגלידה יוצאת הדופן שלה התפשטה ברחבי הקהילה.
                  מה שהתחיל כסוד משפחתי הפך לאוצר מקומי אהוב, שמשך אנשים
                  מהעיירות השכנות לחוות את המעדן הייחודי הזה.
                </p>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={vintageFounder}
                  alt="תמונה עתיקה של המייסדת שלנו"
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
            המורשת נמשכת
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 font-body text-lg text-muted-foreground leading-relaxed">
            <p>
              במשך למעלה מ-85 שנה, משפחת זיתון שימרה והגנה על המתכון המקורי,
              והעבירה אותו לאורך ארבעה דורות. כל דור הוסיף את המסירות והטיפול שלו,
              אך המהות נשארה ללא שינוי.
            </p>
            <p>
              היום, אנו ממשיכים לכבד את החזון של הסבתא שלנו. כל כדור גלידה עדיין
              מיוצר בעבודת יד באמצעות אותן שיטות קפדניות שהיא פיתחה. אנו משיגים את המסטיק המשובח ביותר
              מספקים מסורתיים, משתמשים רק במרכיבים טבעיים, ומסרבים לפשרה על איכות.
            </p>
            <p>
              המחויבות שלנו לאותנטיות אומרת שאתם טועמים לא רק גלידה, אלא היסטוריה - קשר ישיר
              לתשוקה ולאומנות של 1939.
            </p>
          </div>
        </div>
      </section>

      {/* Ingredients Gallery */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            אומנות מורשת
          </h2>
          <div className="rounded-lg overflow-hidden shadow-2xl mb-8">
            <img
              src={ingredientsGallery}
              alt="כלים מסורתיים לייצור גלידה ומרכיבים טבעיים"
              className="w-full h-auto"
            />
          </div>
          <p className="font-body text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            אנו מכבדים את המורשת שלנו באמצעות בחירה קפדנית של מרכיבים טבעיים ושימוש ב
            טכניקות שנוסו על ידי הזמן. כל כלי, כל שיטה, כל מרכיב מספר חלק מהסיפור שלנו.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-gradient-to-br from-secondary to-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            המשימה שלנו
          </h2>
          <p className="font-body text-xl text-foreground leading-relaxed mb-12">
            לשמור על הטעם האותנטי של המורשת שלנו בחיים - כדור אחד בכל פעם. אנחנו לא רק
            מייצרים גלידה; אנו משמרים חלק מההיסטוריה, מכבדים את המסירות של המשפחה שלנו,
            ומשתפים את הטעמים של המסורת עם כל לקוח שנכנס דרך הדלתות שלנו.
          </p>
          
          <div className="border-t-2 border-b-2 border-primary py-8">
            <blockquote className="font-display text-2xl md:text-3xl italic text-foreground">
              "כל כדור מספר סיפור של מסורת ואהבה."
            </blockquote>
            <p className="font-body text-sm text-muted-foreground mt-4">
              — משפחת זיתון
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
