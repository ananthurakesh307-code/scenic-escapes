import { useState } from "react";
import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import DestinationModal from "@/components/DestinationModal";
import SearchFilter from "@/components/SearchFilter";
import ContactForm from "@/components/ContactForm";
import { destinations } from "@/data/destinations";
import type { Destination } from "@/components/DestinationCard";

const Index = () => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleDestinationClick = (destination: Destination) => {
    setSelectedDestination(destination);
    setModalOpen(true);
  };

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || dest.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <Hero />
      
      <main id="destinations" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Explore Amazing Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover handpicked destinations from around the world. Each location offers 
              unique experiences and unforgettable memories.
            </p>
          </div>

          <SearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />

          {filteredDestinations.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No destinations found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredDestinations.map((destination, index) => (
                <div 
                  key={destination.id}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <DestinationCard
                    destination={destination}
                    onClick={() => handleDestinationClick(destination)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <ContactForm />

      <footer className="bg-card py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2025 Travel Destination Showcase. Discover your next adventure.</p>
        </div>
      </footer>

      <DestinationModal
        destination={selectedDestination}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;
