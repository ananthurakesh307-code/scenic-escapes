import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  const scrollToDestinations = () => {
    const element = document.getElementById("destinations");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 className="mb-6 animate-fade-in-up text-5xl font-bold text-white md:text-7xl lg:text-8xl">
          Discover Your Next Adventure
        </h1>
        <p className="mb-8 max-w-2xl animate-fade-in-up text-lg text-white/90 md:text-xl" style={{ animationDelay: '0.2s' }}>
          Explore breathtaking destinations around the world. From pristine beaches to majestic mountains, 
          your perfect getaway awaits.
        </p>
        <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Button 
            size="lg" 
            className="gradient-ocean hover:opacity-90 transition-opacity text-lg px-8 py-6"
            onClick={scrollToDestinations}
          >
            Explore Destinations
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm text-lg px-8 py-6"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Contact Us
          </Button>
        </div>
        
        <button 
          onClick={scrollToDestinations}
          className="absolute bottom-8 animate-bounce"
          aria-label="Scroll to destinations"
        >
          <ArrowDown className="h-8 w-8 text-white" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
