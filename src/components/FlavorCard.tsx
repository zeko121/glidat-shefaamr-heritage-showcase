import { cn } from "@/lib/utils";

interface FlavorCardProps {
  image: string;
  name: string;
  description: string;
  className?: string;
}

const FlavorCard = ({ image, name, description, className }: FlavorCardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg bg-card shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={`${name} ice cream`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          width="800"
          height="800"
          loading="lazy"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="font-display text-2xl font-bold text-background mb-2">
          {name}
        </h3>
        <p className="font-body text-sm text-background/90">
          {description}
        </p>
      </div>
      
      <div className="absolute top-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="font-display text-xl font-semibold text-foreground">
          {name}
        </h3>
      </div>
      
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-all duration-500 rounded-lg" />
    </div>
  );
};

export default FlavorCard;
