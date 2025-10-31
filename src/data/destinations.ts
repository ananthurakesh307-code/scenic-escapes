import santoriniImage from "@/assets/santorini.jpg";
import swissAlpsImage from "@/assets/swiss-alps.jpg";
import tokyoImage from "@/assets/tokyo.jpg";
import maldivesImage from "@/assets/maldives.jpg";
import machuPicchuImage from "@/assets/machu-picchu.jpg";
import parisImage from "@/assets/paris.jpg";
import kenyaSafariImage from "@/assets/kenya-safari.jpg";
import icelandImage from "@/assets/iceland.jpg";
import type { Destination } from "@/components/DestinationCard";

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Santorini",
    country: "Greece",
    category: "Beach",
    description: "Experience the magic of Santorini's white-washed buildings, stunning sunsets, and crystal-clear Aegean waters. This volcanic island offers romantic views and world-class Mediterranean cuisine.",
    image: santoriniImage,
    bestTime: "April to November",
    attractions: [
      "Oia sunset viewing",
      "Ancient Akrotiri ruins",
      "Red Beach and Black Sand beaches",
      "Wine tasting at volcanic vineyards",
      "Caldera boat tours"
    ]
  },
  {
    id: "2",
    name: "Swiss Alps",
    country: "Switzerland",
    category: "Mountain",
    description: "Discover the majestic Swiss Alps with snow-capped peaks, pristine lakes, and charming mountain villages. Perfect for skiing, hiking, and experiencing alpine culture at its finest.",
    image: swissAlpsImage,
    bestTime: "December to March (skiing), June to September (hiking)",
    attractions: [
      "Matterhorn peak viewing",
      "Jungfraujoch - Top of Europe",
      "Glacier Express scenic train",
      "Lake Geneva and Montreux",
      "Traditional Swiss chalets and fondue"
    ]
  },
  {
    id: "3",
    name: "Tokyo",
    country: "Japan",
    category: "City",
    description: "Immerse yourself in Tokyo's electric blend of ultramodern and traditional culture. From neon-lit streets to serene temples, this dynamic city offers endless discoveries.",
    image: tokyoImage,
    bestTime: "March to May, September to November",
    attractions: [
      "Sensoji Temple in Asakusa",
      "Shibuya Crossing and shopping",
      "Tsukiji Outer Market",
      "Mount Fuji day trips",
      "Traditional tea ceremonies"
    ]
  },
  {
    id: "4",
    name: "Maldives",
    country: "Maldives",
    category: "Beach",
    description: "Paradise found in the Maldives' luxury overwater bungalows and pristine coral reefs. This tropical haven offers unparalleled relaxation and underwater adventures.",
    image: maldivesImage,
    bestTime: "November to April",
    attractions: [
      "World-class diving and snorkeling",
      "Private island resorts",
      "Bioluminescent beaches",
      "Dolphin watching tours",
      "Underwater restaurants"
    ]
  },
  {
    id: "5",
    name: "Machu Picchu",
    country: "Peru",
    category: "Adventure",
    description: "Trek to the legendary Incan citadel perched high in the Andes Mountains. This UNESCO World Heritage site offers breathtaking views and ancient mysteries waiting to be explored.",
    image: machuPicchuImage,
    bestTime: "May to September",
    attractions: [
      "The Inca Trail trek",
      "Sun Gate (Inti Punku)",
      "Huayna Picchu mountain climb",
      "Sacred Valley exploration",
      "Cusco historic center"
    ]
  },
  {
    id: "6",
    name: "Paris",
    country: "France",
    category: "Culture",
    description: "Fall in love with the City of Light's timeless elegance, world-renowned art, and exquisite cuisine. From the Eiffel Tower to charming cafés, Paris captivates every visitor.",
    image: parisImage,
    bestTime: "April to June, September to November",
    attractions: [
      "Eiffel Tower and Champs-Élysées",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Versailles Palace",
      "Montmartre and Sacré-Cœur"
    ]
  },
  {
    id: "7",
    name: "Kenyan Safari",
    country: "Kenya",
    category: "Adventure",
    description: "Witness the incredible wildlife of Africa on an unforgettable safari adventure. Experience the Great Migration, majestic elephants, and the raw beauty of the savanna.",
    image: kenyaSafariImage,
    bestTime: "July to October (Great Migration)",
    attractions: [
      "Masai Mara National Reserve",
      "Great Migration viewing",
      "Big Five game drives",
      "Maasai village visits",
      "Hot air balloon safaris"
    ]
  },
  {
    id: "8",
    name: "Iceland",
    country: "Iceland",
    category: "Adventure",
    description: "Explore Iceland's otherworldly landscapes of glaciers, volcanoes, and geothermal wonders. Chase the Northern Lights and soak in natural hot springs under Arctic skies.",
    image: icelandImage,
    bestTime: "June to August (midnight sun), September to March (Northern Lights)",
    attractions: [
      "Northern Lights viewing",
      "Blue Lagoon geothermal spa",
      "Golden Circle route",
      "Glacier hiking and ice caves",
      "Jökulsárlón glacier lagoon"
    ]
  }
];
