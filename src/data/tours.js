import paradiseValley2 from "../assets/paradise-valley2.webp";
import desertAgadir from "../assets/desertAgadir.webp";
import boatTrip from "../assets/boatTrip.webp";
import taghazout2 from "../assets/taghazout2.webp";

export const tours = [
  {
    id: 1,
    slug: "paradise-valley",
    title: "Paradise Valley Adventure",
    location: "Agadir, Morocco",
    duration: "Full Day",
    price: 350,
    currency: "MAD",
    image: paradiseValley2,
    images: [paradiseValley2, paradiseValley2, paradiseValley2, paradiseValley2],
    description:
      "Discover natural pools, beautiful landscapes, and the hidden beauty of Paradise Valley.",
    longDescription:
      "Escape the city and head into the dramatic foothills of the Anti-Atlas for an unforgettable day exploring natural pools, valleys, and scenic viewpoints. This excursion is ideal for travelers who want a mix of adventure, swimming, photography, and relaxed mountain scenery in one unforgettable outing.",
    groupSize: "2–15 people",
    languages: "English / French / Arabic",
    availability: "Daily departures",
    difficulty: "Easy to Moderate",
    itinerary: [
      {
        day: "Day 1",
        title: "Agadir to Paradise Valley",
        items: [
          "08:00 Pickup from your hotel or meeting point",
          "Drive through the scenic Souss valley",
          "Hike through canyon trails and hidden pools",
          "Swimming stop and local lunch by the river"
        ]
      }
    ],
    included: [
      "Transportation",
      "Professional guide",
      "Water and snacks",
      "Entrance fees",
      "Local lunch"
    ],
    notIncluded: [
      "Personal expenses",
      "Tips",
      "Travel insurance",
      "Drinks and extra snacks"
    ],
    meetingPoint: "Agadir, Morocco",
    importantInformation: [
      { label: "Recommended equipment", value: "Swimwear, sunscreen, hat, water shoes" },
      { label: "What to bring", value: "Comfortable clothes, towel, camera, reusable water bottle" },
      { label: "Departure time", value: "08:00 AM" },
      { label: "Weather", value: "Best in spring, summer, and early autumn" },
      { label: "Cancellation policy", value: "Free cancellation up to 48 hours before departure" }
    ],
    transportationOptions: ["Shared Transfer", "Private Transfer", "No Transfer"],
    accommodationOptions: ["Standard", "Comfort", "Premium"],
    gallery: [paradiseValley2, paradiseValley2, paradiseValley2, paradiseValley2]
  },
  {
    id: 2,
    slug: "agadir-desert-adventure",
    title: "Agadir Desert Adventure",
    location: "Agadir, Morocco",
    duration: "Half Day",
    price: 300,
    currency: "MAD",
    image: desertAgadir,
    images: [desertAgadir, desertAgadir, desertAgadir, desertAgadir],
    description:
      "Experience the Moroccan desert with an unforgettable adventure.",
    longDescription:
      "Discover the beauty of the Moroccan desert on a half-day journey filled with dramatic dunes, camel rides, scenic stops, and authentic Berber hospitality. Ideal for travelers wanting a short and memorable desert experience near Agadir.",
    groupSize: "2–12 people",
    languages: "English / French / Arabic",
    availability: "Morning & afternoon",
    difficulty: "Easy",
    itinerary: [
      {
        day: "Day 1",
        title: "Desert Escape",
        items: [
          "09:00 Pickup from Agadir",
          "Scenic drive through the desert region",
          "Camel ride and dune exploration",
          "Tea break and return to Agadir"
        ]
      }
    ],
    included: [
      "Transportation",
      "Desert guide",
      "Camel ride",
      "Tea and refreshments",
      "Local hospitality"
    ],
    notIncluded: [
      "Personal expenses",
      "Tips",
      "Travel insurance",
      "Extra activities"
    ],
    meetingPoint: "Agadir, Morocco",
    importantInformation: [
      { label: "Recommended equipment", value: "Light clothing, sunglasses, closed shoes" },
      { label: "What to bring", value: "Water bottle, hat, sunscreen" },
      { label: "Departure time", value: "09:00 AM or 03:00 PM" },
      { label: "Weather", value: "Best between October and April" },
      { label: "Cancellation policy", value: "Free cancellation up to 24 hours before departure" }
    ],
    transportationOptions: ["Shared Transfer", "Private Transfer"],
    accommodationOptions: ["Standard", "Comfort"],
    gallery: [desertAgadir, desertAgadir, desertAgadir, desertAgadir]
  },
  {
    id: 3,
    slug: "agadir-boat-trip",
    title: "Agadir Boat Trip",
    location: "Agadir, Morocco",
    duration: "3 Hours",
    price: 250,
    currency: "MAD",
    image: boatTrip,
    images: [boatTrip, boatTrip, boatTrip, boatTrip],
    description:
      "Enjoy the beautiful Atlantic coast and discover Agadir from the sea.",
    longDescription:
      "Set sail along the Atlantic coast for a relaxed and scenic boat excursion with breathtaking panoramic views, ocean breezes, and unique perspectives of Agadir's coastline. This experience is perfect for families, couples, and anyone seeking a soothing maritime escape.",
    groupSize: "2–20 people",
    languages: "English / French / Arabic",
    availability: "Daily departures",
    difficulty: "Easy",
    itinerary: [
      {
        day: "Day 1",
        title: "Coastal Cruise",
        items: [
          "09:00 Meet at the harbor",
          "Cruise along the Agadir coastline",
          "Photo stop and sea views",
          "Return to the dock and beach time"
        ]
      }
    ],
    included: [
      "Boat trip",
      "Life jacket",
      "Guide assistance",
      "Refreshments",
      "Parking assistance"
    ],
    notIncluded: [
      "Personal expenses",
      "Tips",
      "Travel insurance",
      "Extra activities"
    ],
    meetingPoint: "Agadir Marina, Morocco",
    importantInformation: [
      { label: "Recommended equipment", value: "Sunglasses, sun hat, light clothing" },
      { label: "What to bring", value: "Camera, sunscreen, water bottle" },
      { label: "Departure time", value: "09:00 AM / 03:00 PM" },
      { label: "Weather", value: "Subject to sea conditions" },
      { label: "Cancellation policy", value: "Flexible rebooking when weather conditions change" }
    ],
    transportationOptions: ["Shared Transfer", "Private Transfer", "No Transfer"],
    accommodationOptions: ["Standard"],
    gallery: [boatTrip, boatTrip, boatTrip, boatTrip]
  },
  {
    id: 4,
    slug: "taghazout",
    title: "Taghazout",
    location: "Agadir, Morocco",
    duration: "3 Hours",
    price: 350,
    currency: "MAD",
    image: taghazout2,
    images: [taghazout2, taghazout2, taghazout2, taghazout2],
    description:
      "Explore Taghazout's surf beaches, coastal scenery, and relaxed village atmosphere.",
    longDescription:
      "Take a short coastal escape to Taghazout and enjoy Atlantic views, relaxed surf culture, and scenic beaches. This experience combines gentle exploration with a laid-back vibe, perfect for a quick getaway and memorable photos.",
    groupSize: "2–16 people",
    languages: "English / French / Arabic",
    availability: "Daily departures",
    difficulty: "Easy",
    itinerary: [
      {
        day: "Day 1",
        title: "Taghazout Coast",
        items: [
          "08:30 Pickup from Agadir",
          "Drive to Taghazout Bay",
          "Beach walk and panoramic views",
          "Return to Agadir for lunch or free time"
        ]
      }
    ],
    included: [
      "Transportation",
      "Beach guide",
      "Local insights",
      "Refreshments",
      "Photo stops"
    ],
    notIncluded: [
      "Personal expenses",
      "Tips",
      "Travel insurance",
      "Surfers equipment rental"
    ],
    meetingPoint: "Taghazout Beach, Morocco",
    importantInformation: [
      { label: "Recommended equipment", value: "Beachwear, comfortable shoes, sunglasses" },
      { label: "What to bring", value: "Water, sunscreen, towel, light layer" },
      { label: "Departure time", value: "08:30 AM" },
      { label: "Weather", value: "Best in warm and sunny conditions" },
      { label: "Cancellation policy", value: "Reschedule available if conditions are unfavorable" }
    ],
    transportationOptions: ["Shared Transfer", "Private Transfer"],
    accommodationOptions: ["Standard", "Comfort"],
    gallery: [taghazout2, taghazout2, taghazout2, taghazout2]
  }
];

export const getLocalTourByParam = (param) => {
  if (!param) return null;

  const normalizedParam = String(param).trim().toLowerCase();
  return (
    tours.find((tour) =>
      String(tour.id) === normalizedParam || String(tour.slug).toLowerCase() === normalizedParam
    ) || null
  );
};

export default tours;