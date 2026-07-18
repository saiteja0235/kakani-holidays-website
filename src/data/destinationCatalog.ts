export type Category = "international" | "devotional" | "domestic";
export type CatalogDestination = {
  slug: string;
  name: string;
  category: Category;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  overview: string[];
  highlights: string[];
  locations: { name: string; description: string; image: string }[];
  itinerary: { day: number; title: string; description: string }[];
  inclusions: string[];
  exclusions: string[];
  bestTime: string;
  related: string[];
  faqs: { question: string; answer: string }[];
};
const rows: [Category, string, string, string, string[]][] = [
  [
    "international",
    "europe",
    "Europe",
    "Iconic cities, alpine landscapes and centuries of living culture.",
    ["Paris", "Swiss Alps", "Venice", "Rome"],
  ],
  [
    "international",
    "singapore",
    "Singapore",
    "Garden city energy, world-class attractions and multicultural flavour.",
    ["Marina Bay", "Gardens by the Bay", "Sentosa", "Chinatown"],
  ],
  [
    "international",
    "malaysia",
    "Malaysia",
    "Dynamic cities, rainforest landscapes and island escapes.",
    ["Kuala Lumpur", "Batu Caves", "Langkawi", "Genting Highlands"],
  ],
  [
    "international",
    "singapore-malaysia",
    "Singapore & Malaysia",
    "Two vibrant Southeast Asian worlds in one seamless journey.",
    ["Singapore", "Kuala Lumpur", "Genting Highlands", "Sentosa"],
  ],
  [
    "international",
    "dubai",
    "Dubai",
    "Future-facing architecture, desert horizons and Arabian hospitality.",
    ["Burj Khalifa", "Dubai Frame", "Desert Safari", "Dubai Marina"],
  ],
  [
    "international",
    "vietnam",
    "Vietnam",
    "Heritage cities, dramatic bays and unforgettable local cuisine.",
    ["Hanoi", "Ha Long Bay", "Da Nang", "Ho Chi Minh City"],
  ],
  [
    "international",
    "thailand",
    "Thailand",
    "Golden temples, tropical shores and famously warm hospitality.",
    ["Bangkok", "Phuket", "Krabi", "Pattaya"],
  ],
  [
    "international",
    "baku",
    "Baku",
    "Where ancient heritage meets striking modern architecture.",
    [
      "Flame Towers",
      "Icherisheher Old City",
      "Heydar Aliyev Centre",
      "Baku Boulevard",
    ],
  ],
  [
    "international",
    "georgia",
    "Georgia",
    "Caucasus mountains, old-world towns and generous traditions.",
    ["Tbilisi", "Kazbegi", "Mtskheta", "Kakheti"],
  ],
  [
    "international",
    "australia",
    "Australia",
    "Cosmopolitan cities, coastal wonders and vast natural landscapes.",
    ["Sydney", "Melbourne", "Gold Coast", "Great Ocean Road"],
  ],
  [
    "international",
    "japan",
    "Japan",
    "Timeless ritual and bold modernity in perfect balance.",
    ["Tokyo", "Kyoto", "Osaka", "Mount Fuji"],
  ],
  [
    "international",
    "vietnam-cambodia",
    "Vietnam & Cambodia",
    "River cultures, ancient temples and compelling living history.",
    ["Hanoi", "Ha Long Bay", "Siem Reap", "Angkor Wat"],
  ],
  [
    "international",
    "united-states",
    "United States",
    "Landmark cities and extraordinary landscapes across a vast country.",
    ["New York", "Washington DC", "Las Vegas", "Los Angeles"],
  ],
  [
    "international",
    "australia-new-zealand",
    "Australia & New Zealand",
    "Great cities, cinematic scenery and unforgettable road journeys.",
    ["Sydney", "Melbourne", "Auckland", "Queenstown"],
  ],
  [
    "international",
    "andaman",
    "Andaman",
    "Turquoise water, coral shores and unhurried island days.",
    ["Port Blair", "Havelock Island", "Neil Island", "Cellular Jail"],
  ],
  [
    "international",
    "maldives",
    "Maldives",
    "Barefoot calm, brilliant lagoons and private island moments.",
    ["Malé", "Maafushi", "South Ari Atoll", "Vaavu Atoll"],
  ],
  [
    "international",
    "sri-lanka",
    "Sri Lanka",
    "Tea country, wildlife, ancient cities and a beautiful coast.",
    ["Colombo", "Kandy", "Nuwara Eliya", "Bentota"],
  ],
  [
    "international",
    "china",
    "China",
    "Imperial heritage, modern skylines and remarkable landscapes.",
    ["Beijing", "Shanghai", "Great Wall", "Xi’an"],
  ],
  [
    "international",
    "nepal",
    "Nepal",
    "Himalayan horizons, sacred landmarks and soulful cities.",
    ["Kathmandu", "Pokhara", "Pashupatinath", "Nagarkot"],
  ],
  [
    "devotional",
    "gujarat",
    "Gujarat",
    "Sacred shores, revered temples and vibrant western heritage.",
    ["Dwarka", "Somnath", "Ahmedabad", "Nageshwar"],
  ],
  [
    "devotional",
    "nepal-devotional",
    "Nepal",
    "A meaningful Himalayan journey through sacred Hindu and Buddhist sites.",
    ["Pashupatinath", "Muktinath", "Janakpur", "Kathmandu"],
  ],
  [
    "devotional",
    "chardham",
    "Chardham",
    "A profound Himalayan pilgrimage across four sacred shrines.",
    ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
  ],
  [
    "devotional",
    "karnataka-temple-tour",
    "Karnataka Temple Tour",
    "Architectural marvels and revered shrines across Karnataka.",
    ["Udupi", "Dharmasthala", "Murudeshwar", "Hampi"],
  ],
  [
    "devotional",
    "tamil-nadu",
    "Tamil Nadu",
    "A journey through monumental temples and living traditions.",
    ["Madurai", "Rameswaram", "Thanjavur", "Kanchipuram"],
  ],
  [
    "devotional",
    "manasarovar",
    "Manasarovar",
    "A spiritually significant journey toward sacred Himalayan landscapes.",
    ["Kathmandu", "Manasarovar", "Darchen", "Mount Kailash Region"],
  ],
  [
    "devotional",
    "sri-lanka-devotional",
    "Sri Lanka",
    "Sacred sites and cultural landmarks across the island.",
    ["Colombo", "Kandy", "Nuwara Eliya", "Trincomalee"],
  ],
  [
    "devotional",
    "ayodhya-varanasi",
    "Ayodhya & Varanasi",
    "Two timeless sacred cities on one thoughtfully guided journey.",
    ["Ayodhya", "Varanasi", "Sarnath", "Prayagraj"],
  ],
  [
    "domestic",
    "kerala",
    "Kerala",
    "Backwaters, tea-covered hills and the gentle rhythm of the coast.",
    ["Cochin", "Munnar", "Alleppey", "Kovalam"],
  ],
  [
    "domestic",
    "mysore-ooty",
    "Mysore & Ooty",
    "Royal heritage paired with cool Nilgiri landscapes.",
    ["Mysore Palace", "Ooty", "Coonoor", "Bandipur"],
  ],
  [
    "domestic",
    "delhi-agra",
    "Delhi & Agra",
    "Imperial monuments and defining chapters of Indian history.",
    ["Old Delhi", "India Gate", "Taj Mahal", "Agra Fort"],
  ],
  [
    "domestic",
    "golden-triangle",
    "Golden Triangle",
    "India’s classic heritage circuit through three remarkable cities.",
    ["Delhi", "Agra", "Jaipur", "Fatehpur Sikri"],
  ],
  [
    "domestic",
    "manali",
    "Manali",
    "Mountain air, cedar valleys and Himalayan adventure.",
    ["Manali", "Solang Valley", "Rohtang Region", "Naggar"],
  ],
  [
    "domestic",
    "kashmir",
    "Kashmir",
    "Lake mornings, alpine meadows and breathtaking valleys.",
    ["Srinagar", "Gulmarg", "Pahalgam", "Sonamarg"],
  ],
  [
    "domestic",
    "meghalaya",
    "Meghalaya",
    "Living root bridges, waterfalls and cloud-wrapped hills.",
    ["Shillong", "Cherrapunji", "Dawki", "Mawlynnong"],
  ],
  [
    "domestic",
    "darjeeling-gangtok",
    "Darjeeling & Gangtok",
    "Tea estates, Himalayan views and soulful hill towns.",
    ["Darjeeling", "Gangtok", "Tsomgo Lake", "Tiger Hill"],
  ],
  [
    "domestic",
    "goa",
    "Goa",
    "Sunlit beaches, heritage quarters and easy coastal living.",
    ["North Goa", "South Goa", "Panjim", "Old Goa"],
  ],
];
const suppliedAvif = new Set([
  "europe",
  "singapore",
  "malaysia",
  "singapore-malaysia",
  "dubai",
  "vietnam",
  "thailand",
  "baku",
  "georgia",
  "australia",
  "vietnam-cambodia",
  "united-states",
  "australia-new-zealand",
  "andaman",
  "maldives",
  "sri-lanka",
  "china",
  "nepal",
  "nepal-devotional",
  "sri-lanka-devotional",
  "darjeeling-gangtok",
  "delhi-agra",
  "goa",
  "golden-triangle",
  "kashmir",
  "kerala",
  "manali",
  "meghalaya",
  "mysore-ooty",
  "ayodhya-varanasi",
  "chardham",
  "gujarat",
  "karnataka-temple-tour",
  "manasarovar",
  "tamil-nadu",
]);
const img = (slug: string, _cat: Category) =>
  `/images/catalog/${slug}.${suppliedAvif.has(slug) ? "avif" : "jpg"}`;
export const destinationCatalog: CatalogDestination[] = rows.map(
  ([category, slug, name, tagline, places], index) => ({
    slug,
    name,
    category,
    tagline,
    heroImage: img(slug, category),
    galleryImages: suppliedAvif.has(slug)
      ? Array.from(
          { length: 5 },
          (_, i) =>
            `/images/gallery/${slug}/${String(i + 1).padStart(2, "0")}.avif`,
        )
      : [],
    overview: [
      `${name} offers ${tagline.charAt(0).toLowerCase() + tagline.slice(1)}`,
      `Kakani Holidays can shape the pace, accommodation, sightseeing and travel support around your preferred dates and interests.`,
    ],
    highlights: places,
    locations: places.map((p) => ({
      name: p,
      description: `Discover the character, stories and memorable experiences of ${p}.`,
      image: img(slug, category),
    })),
    itinerary: places.map((p, i) => ({
      day: i + 1,
      title: i === 0 ? `Arrival and ${p} orientation` : `Explore ${p}`,
      description: `A thoughtfully paced day featuring the key experiences and local character of ${p}.`,
    })),
    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Airport or station transfers",
      "Planned sightseeing",
      "Travel support",
    ],
    exclusions: [
      "Personal expenses",
      "Services not listed in the confirmed proposal",
    ],
    bestTime:
      "Recommended travel months and seasonal planning notes are confirmed by our team for your preferred dates.",
    related: rows
      .filter((r) => r[0] === category && r[1] !== slug)
      .slice(index % 3, (index % 3) + 3)
      .map((r) => r[1]),
    faqs: [
      {
        question: `Can the ${name} itinerary be customised?`,
        answer:
          "Yes. The pace, stays and sightseeing can be tailored to your requirements.",
      },
      {
        question: "Is travel assistance available?",
        answer:
          "Yes. Available support and documentation guidance are confirmed for your itinerary.",
      },
      {
        question: "How do I confirm the booking?",
        answer:
          "Contact our team for current availability, a detailed proposal and the next steps.",
      },
    ],
  }),
);
export const categoryLabels: Record<Category, string> = {
  international: "International",
  devotional: "Devotional",
  domestic: "Domestic",
};
export const findDestination = (category?: string, slug?: string) =>
  destinationCatalog.find((d) => d.category === category && d.slug === slug);
