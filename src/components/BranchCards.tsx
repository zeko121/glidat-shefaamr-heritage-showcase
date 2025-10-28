import { MapPin, Clock } from "lucide-react";

interface BranchInfo {
  name: string;
  address: string;
  note?: string;
  hours: string;
}

const branches: BranchInfo[] = [
  {
    name: "סניף ראשי - שפרעם",
    address: "רחוב גבור יוסף גבור 42, שפרעם",
    note: "המתכון המקורי משנת 1939",
    hours: "כל יום 09:00 - 23:00",
  },
  {
    name: "נצרת",
    address: "רחוב הגליל 28, נצרת",
    hours: "כל יום 09:00 - 23:00",
  },
  {
    name: "שפרעם - ד'אהר עומר אלזידאני",
    address: "רחוב ד'אהר עומר אלזידאני, שפרעם",
    hours: "כל יום 09:00 - 23:00",
  },
  {
    name: "כפר יאסיף",
    address: "רחוב 70, כפר יאסיף",
    hours: "כל יום 09:00 - 23:00",
  },
];

const BranchCards = () => {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-secondary/40 to-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-10">
          הסניפים שלנו
        </h2>

        {/* Card grid */}
        <div className="
          grid 
          gap-6 
          sm:grid-cols-2 
          lg:grid-cols-4
        ">
          {branches.map((branch, idx) => (
            <div
              key={idx}
              className="
                rounded-2xl 
                bg-card 
                shadow-md 
                border 
                border-border 
                p-5 
                flex 
                flex-col 
                h-full 
                text-right
              "
              dir="rtl"
            >
              {/* Branch name */}
              <h3 className="font-display text-xl font-bold text-foreground mb-2 leading-snug">
                {branch.name}
              </h3>

              {/* Optional note (like 'since 1939') */}
              {branch.note && (
                <p className="text-[0.8rem] font-body text-primary font-semibold mb-3">
                  {branch.note}
                </p>
              )}

              {/* Address */}
              <div className="flex items-start gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {branch.address}
                </p>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {branch.hours}
                </p>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Call to action (optional) */}
              <div className="pt-4 mt-4 border-t border-border">
                <button
                  className="
                    w-full 
                    text-center 
                    text-sm 
                    font-body 
                    font-semibold 
                    bg-primary 
                    text-primary-foreground 
                    py-2 
                    rounded-full 
                    shadow hover:shadow-lg 
                    transition-all duration-300
                  "
                >
                  ניווט ב־Waze
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note under the grid */}
        <p className="text-center text-xs text-muted-foreground mt-10 font-body" dir="rtl">
          מיוצר כל יום טרי במקום ונשלח לסניפים שלנו ברחבי הצפון.
        </p>
      </div>
    </section>
  );
};

export default BranchCards;
