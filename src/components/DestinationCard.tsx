import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

export interface Destination {
  id: string;
  name: string;
  country: string;
  category: string;
  description: string;
  image: string;
  bestTime: string;
  attractions: string[];
}

interface DestinationCardProps {
  destination: Destination;
  onClick: () => void;
}

const DestinationCard = ({ destination, onClick }: DestinationCardProps) => {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden card-hover border-0 shadow-card"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={destination.image} 
          alt={`${destination.name}, ${destination.country}`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
          {destination.category}
        </Badge>
      </div>
      <CardContent className="p-6">
        <div className="mb-2 flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{destination.country}</span>
        </div>
        <h3 className="mb-3 text-2xl font-semibold group-hover:text-primary transition-colors">
          {destination.name}
        </h3>
        <p className="mb-4 text-muted-foreground line-clamp-2">
          {destination.description}
        </p>
        <span className="text-sm text-primary font-medium group-hover:underline">
          Learn More →
        </span>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;
