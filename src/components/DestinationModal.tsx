import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Compass } from "lucide-react";
import type { Destination } from "./DestinationCard";

interface DestinationModalProps {
  destination: Destination | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DestinationModal = ({ destination, open, onOpenChange }: DestinationModalProps) => {
  if (!destination) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
          <img 
            src={destination.image} 
            alt={`${destination.name}, ${destination.country}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
            {destination.category}
          </Badge>
        </div>
        
        <DialogHeader>
          <DialogTitle className="text-3xl font-heading">{destination.name}</DialogTitle>
          <DialogDescription className="flex items-center gap-2 text-base">
            <MapPin className="h-4 w-4" />
            {destination.country}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold mb-2">About</h4>
            <p className="text-muted-foreground leading-relaxed">
              {destination.description}
            </p>
          </div>

          <div className="flex items-start gap-2">
            <Calendar className="h-5 w-5 text-primary mt-1" />
            <div>
              <h4 className="font-semibold mb-1">Best Time to Visit</h4>
              <p className="text-muted-foreground">{destination.bestTime}</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Compass className="h-5 w-5 text-primary" />
              <h4 className="font-semibold">Top Attractions</h4>
            </div>
            <ul className="space-y-2">
              {destination.attractions.map((attraction, index) => (
                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                  <span className="text-primary mt-1">•</span>
                  <span>{attraction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DestinationModal;
