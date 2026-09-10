import type { CACPackage, FlightRoute, HotelListing, Service, VisaCountry } from "./types";

export const BRAND_NAME = "Xontopglobal Consultant";
export const EMAIL = "xontopglobal@gmail.com";
export const WHATSAPP_LINK = "https://wa.me/2348162965913";
export const WHATSAPP_TEXT =
  "Hello Xontopglobal Consultant! I found you through your website and I'd love to make an enquiry.";

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "CAC Registration", href: "#cac" },
  { label: "Travel Desk", href: "#travel-booking" },
  { label: "Importation Academy", href: "#import" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "web",
    title: "Website & App Development",
    tagline: "High-converting digital products",
    description:
      "Modern, fast, and conversion-focused websites, e-commerce stores, and web apps built to grow your business around the clock.",
    icon: "globe",
    accent: "from-sky-500 to-blue-600",
    features: [
      "Business & portfolio websites",
      "E-commerce storefronts",
      "Landing pages that convert",
      "Web apps & dashboards",
      "Maintenance & hosting plans",
    ],
  },
  {
    id: "social",
    title: "Social Media Marketing",
    tagline: "Grow, engage, convert",
    description:
      "Targeted campaigns, content strategy, and ad management across Facebook, Instagram, TikTok, and LinkedIn that turn followers into customers.",
    icon: "mega",
    accent: "from-fuchsia-500 to-purple-600",
    features: [
      "Content calendars & strategy",
      "Paid ads management",
      "Brand identity & creatives",
      "Community management",
      "Monthly growth reports",
    ],
  },
  {
    id: "google",
    title: "Google Business Profile",
    tagline: "Get found on Google Maps",
    description:
      "We register, verify, and optimize your business on Google Maps and Search so local customers find you first with a 5-star reputation setup.",
    icon: "pin",
    accent: "from-emerald-500 to-teal-600",
    features: [
      "Google Maps registration & verification",
      "Local SEO optimization",
      "Review generation system",
      "Profile management & posts",
      "Photo & listing optimization",
    ],
  },
  {
    id: "seo",
    title: "SEO & Organic Growth",
    tagline: "Dominate search rankings",
    description:
      "Technical SEO, keyword dominance, and content strategy that scale your organic traffic and put your brand on page one.",
    icon: "chart",
    accent: "from-amber-500 to-orange-600",
    features: [
      "Technical SEO audits",
      "Keyword research & mapping",
      "On-page optimization",
      "Authority link building",
      "Rank & traffic tracking",
    ],
  },
  {
    id: "cac",
    title: "CAC Business Registration",
    tagline: "Register with the CAC seamlessly",
    description:
      "Business Name, Limited Liability Company (LLC), Incorporated Trustees, and TIN registration handled end-to-end with the Corporate Affairs Commission.",
    icon: "cap",
    accent: "from-indigo-500 to-blue-700",
    features: [
      "Business Name (BN) registration",
      "Limited Liability Company (LLC)",
      "Incorporated Trustees (NGO)",
      "TIN & SCUML support",
      "Affidavit & documentation",
    ],
  },
  {
    id: "flight",
    title: "Flight Tickets & Travel Desk",
    tagline: "Fly domestic & international",
    description:
      "Domestic and international flight booking as a licensed travel agent with competitive fares, itinerary planning, and visa consultation support.",
    icon: "flight",
    accent: "from-cyan-500 to-sky-600",
    features: [
      "Domestic & international fares",
      "Visa consultation & guidance",
      "Itinerary & route planning",
      "Group & corporate bookings",
      "24/7 travel support",
    ],
  },
  {
    id: "coach",
    title: "Digital Importation Coach",
    tagline: "Source from China like a pro",
    description:
      "One-on-one and group coaching on 1688, Taobao, and Alibaba sourcing, RMB currency exchange, China-to-Nigeria shipping, clearing, and product research.",
    icon: "coach",
    accent: "from-rose-500 to-red-600",
    features: [
      "1688 sourcing without an agent",
      "Alibaba & Taobao mastery",
      "RMB procurement & exchange",
      "Shipping, freight & clearing",
      "Fast-selling product research",
    ],
  },
];

export const CAC_PACKAGES: CACPackage[] = [
  {
    id: "bn",
    name: "Business Name (BN)",
    price: "₦55,000",
    priceNote: "One-time · 7–10 days",
    icon: "building",
    features: [
      "CAC Business Name search & reserve",
      "Certificate of Registration",
      "Digital & printed certificate",
      "TIN assistance",
      "WhatsApp support",
    ],
  },
  {
    id: "llc",
    name: "Limited Liability (LTD)",
    price: "₦95,000",
    priceNote: "One-time · 10–14 days",
    icon: "briefcase",
    popular: true,
    features: [
      "Complete LLC incorporation",
      "Memorandum & Articles (MEMART)",
      "Certificate of Incorporation",
      "TIN registration",
      "SCUML support",
      "Business bank account guidance",
    ],
  },
  {
    id: "trustee",
    name: "Incorporated Trustees",
    price: "₦185,000",
    priceNote: "One-time · 14–21 days",
    icon: "hands",
    features: [
      "For NGOs, churches & associations",
      "Trustee documentation pack",
      "Certificate of Incorporation",
      "TIN registration",
      "Constitution drafting support",
    ],
  },
];

export const IMPORT_SYLLABUS = [
  { step: "01", title: "Sourcing on 1688", text: "Find verified suppliers and order directly on 1688 without paying agent markup." },
  { step: "02", title: "Alibaba & Taobao", text: "Master MOQs, price negotiation, and supplier vetting on Alibaba and Taobao." },
  { step: "03", title: "RMB & Payment", text: "Open a Chinese wallet, convert Naira to RMB smartly, and pay suppliers safely." },
  { step: "04", title: "Shipping & Clearing", text: "Freight forwarding from China to Nigeria, customs clearing, and delivery logistics." },
  { step: "05", title: "Product Research", text: "Identify fast-selling, high-margin products and test demand before you commit." },
];

export const META = {
  title: "Xontopglobal Consultant | Consulting, Digital Solutions & Travel Desk",
  description:
    "Xontopglobal Consultant is a general consultancy for website & app development, social media marketing, Google Business registration, SEO, CAC registration, digital importation coaching, and flight ticketing.",
};

export const QUOTE_PRESETS = [
  { label: "Business website", price: "₦350,000 – ₦1,200,000", time: "2–4 weeks" },
  { label: "E-commerce store", price: "₦800,000 – ₦2,500,000", time: "4–8 weeks" },
  { label: "CAC Business Name", price: "₦55,000", time: "7–10 days" },
  { label: "CAC Limited Liability", price: "₦95,000", time: "10–14 days" },
  { label: "Google Business registration", price: "₦50,000 – ₦120,000", time: "3–10 days" },
  { label: "SEO monthly retainer", price: "₦250,000 – ₦750,000/mo", time: "Ongoing" },
  { label: "Importation masterclass", price: "₦150,000 – ₦400,000", time: "2–6 weeks" },
  { label: "Flight bookings", price: "Best live fares", time: "24–48 hrs" },
];

export const SERVICE_IMAGES = {
  importation: {
    hero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&q=80",
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
      "https://images.unsplash.com/photo-1588691866550-1aafa0e43f6e?w=600&q=80",
    ],
    alt: "Global sea-freight containers, warehouse logistics, and e-commerce product sourcing",
  },
  flightBooking: {
    hero: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80",
    ],
    alt: "Commercial airliner in flight, luxury airport lounge, modern terminal gate",
  },
  conferenceConsulting: {
    hero: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&q=80",
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80",
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    ],
    alt: "Executive boardroom strategy session, masterclass keynote speaker",
  },
};

// ===== TRAVEL BOOKING DATA =====

export const AIRPORTS = [
  { code: "LOS", name: "Lagos (Murtala Muhammed)" },
  { code: "ABV", name: "Abuja (Nnamdi Azikiwe)" },
  { code: "PHC", name: "Port Harcourt" },
  { code: "LHR", name: "London Heathrow" },
  { code: "LGW", name: "London Gatwick" },
  { code: "JFK", name: "New York (JFK)" },
  { code: "YYZ", name: "Toronto Pearson" },
  { code: "DXB", name: "Dubai International" },
  { code: "IST", name: "Istanbul Airport" },
  { code: "DOH", name: "Hamad International (Doha)" },
  { code: "NBO", name: "Nairobi (JKIA)" },
  { code: "JNB", name: "Johannesburg (O.R. Tambo)" },
  { code: "ACC", name: "Accra (Kotoka)" },
];

export const CABIN_CLASSES = ["Economy", "Premium Economy", "Business", "First"];

export const FLIGHT_ROUTES: FlightRoute[] = [
  { id: "f1", origin: "Lagos", originCode: "LOS", destination: "London", destinationCode: "LHR", airline: "British Airways", airlineCode: "BA", priceNGN: 1250000, priceUSD: 780, duration: "6h 30m", stops: 0, luggage: "23kg x2", cabinOptions: ["Economy", "Business", "First"] },
  { id: "f2", origin: "Lagos", originCode: "LOS", destination: "Dubai", destinationCode: "DXB", airline: "Emirates", airlineCode: "EK", priceNGN: 980000, priceUSD: 610, duration: "7h 45m", stops: 0, luggage: "30kg", cabinOptions: ["Economy", "Premium Economy", "Business", "First"] },
  { id: "f3", origin: "Lagos", originCode: "LOS", destination: "Toronto", destinationCode: "YYZ", airline: "Air Canada", airlineCode: "AC", priceNGN: 1450000, priceUSD: 900, duration: "11h 20m", stops: 1, luggage: "23kg x2", cabinOptions: ["Economy", "Business"] },
  { id: "f4", origin: "Abuja", originCode: "ABV", destination: "London", destinationCode: "LHR", airline: "Turkish Airlines", airlineCode: "TK", priceNGN: 1180000, priceUSD: 740, duration: "9h 15m", stops: 1, luggage: "30kg", cabinOptions: ["Economy", "Business", "First"] },
  { id: "f5", origin: "Lagos", originCode: "LOS", destination: "New York", destinationCode: "JFK", airline: "Qatar Airways", airlineCode: "QR", priceNGN: 1520000, priceUSD: 950, duration: "14h 30m", stops: 1, luggage: "25kg x2", cabinOptions: ["Economy", "Premium Economy", "Business"] },
  { id: "f6", origin: "Lagos", originCode: "LOS", destination: "Accra", destinationCode: "ACC", airline: "Air Peace", airlineCode: "P4", priceNGN: 185000, priceUSD: 115, duration: "1h 10m", stops: 0, luggage: "20kg", cabinOptions: ["Economy"] },
  { id: "f7", origin: "Lagos", originCode: "LOS", destination: "Nairobi", destinationCode: "NBO", airline: "Kenya Airways", airlineCode: "KQ", priceNGN: 420000, priceUSD: 260, duration: "4h 50m", stops: 0, luggage: "23kg", cabinOptions: ["Economy", "Business"] },
  { id: "f8", origin: "Abuja", originCode: "ABV", destination: "Dubai", destinationCode: "DXB", airline: "flydubai", airlineCode: "FZ", priceNGN: 850000, priceUSD: 530, duration: "8h 20m", stops: 1, luggage: "25kg", cabinOptions: ["Economy", "Business"] },
  { id: "f9", origin: "Lagos", originCode: "LOS", destination: "Istanbul", destinationCode: "IST", airline: "Turkish Airlines", airlineCode: "TK", priceNGN: 920000, priceUSD: 575, duration: "8h 10m", stops: 0, luggage: "30kg", cabinOptions: ["Economy", "Business", "First"] },
  { id: "f10", origin: "Lagos", originCode: "LOS", destination: "Doha", destinationCode: "DOH", airline: "Qatar Airways", airlineCode: "QR", priceNGN: 890000, priceUSD: 555, duration: "7h 55m", stops: 0, luggage: "25kg x2", cabinOptions: ["Economy", "Premium Economy", "Business"] },
];

export const HOTELS: HotelListing[] = [
  { id: "h1", name: "The Wheatbaker", city: "Lagos", country: "Nigeria", stars: 5, pricePerNightNGN: 280000, pricePerNightUSD: 175, amenities: ["Free WiFi", "Swimming Pool", "Airport Shuttle", "Complimentary Breakfast", "Spa"], roomTypes: [{ id: "h1r1", name: "Standard Double", capacity: 2, priceMultiplier: 1, description: "Comfortable room with garden view" }, { id: "h1r2", name: "Executive King", capacity: 2, priceMultiplier: 1.4, description: "Spacious suite with lounge access" }, { id: "h1r3", name: "Presidential Suite", capacity: 4, priceMultiplier: 2.5, description: "Ultimate luxury with private terrace" }], image: "https://images.unsplash.com/photo-1566073771259-6a8506099245?w=600&q=80", cancellationPolicy: "Free cancellation up to 48h" },
  { id: "h2", name: "Eko Hotels & Suites", city: "Lagos", country: "Nigeria", stars: 5, pricePerNightNGN: 220000, pricePerNightUSD: 140, amenities: ["Free WiFi", "Swimming Pool", "Gym", "Restaurant", "Conference Hall"], roomTypes: [{ id: "h2r1", name: "Superior Room", capacity: 2, priceMultiplier: 1, description: "Modern room with city views" }, { id: "h2r2", name: "Deluxe Suite", capacity: 3, priceMultiplier: 1.6, description: "Separate living area with kitchenette" }], image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80", cancellationPolicy: "Free cancellation up to 24h" },
  { id: "h3", name: "Hilton London Metropole", city: "London", country: "United Kingdom", stars: 4, pricePerNightNGN: 350000, pricePerNightUSD: 220, amenities: ["Free WiFi", "Restaurant", "Gym", "Bar", "Business Center"], roomTypes: [{ id: "h3r1", name: "Classic Room", capacity: 2, priceMultiplier: 1, description: "Elegant room with marble bathroom" }, { id: "h3r2", name: "Executive Suite", capacity: 2, priceMultiplier: 1.8, description: "Hilton Executive Lounge access" }], image: "https://images.unsplash.com/photo-1542314826-f4e7f9138771?w=600&q=80", cancellationPolicy: "Free cancellation up to 48h" },
  { id: "h4", name: "Address Downtown Dubai", city: "Dubai", country: "UAE", stars: 5, pricePerNightNGN: 520000, pricePerNightUSD: 325, amenities: ["Free WiFi", "Swimming Pool", "Spa", "Airport Shuttle", "Complimentary Breakfast", "Gym"], roomTypes: [{ id: "h4r1", name: "Deluxe Room", capacity: 2, priceMultiplier: 1, description: "Burj Khalifa view room" }, { id: "h4r2", name: "Executive Suite", capacity: 3, priceMultiplier: 1.7, description: "Panoramic city skyline views" }, { id: "h4r3", name: "Royal Suite", capacity: 4, priceMultiplier: 3.0, description: "Ultimate Dubai luxury experience" }], image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80", cancellationPolicy: "Free cancellation up to 72h" },
  { id: "h5", name: "Fairmont Royal York", city: "Toronto", country: "Canada", stars: 5, pricePerNightNGN: 380000, pricePerNightUSD: 240, amenities: ["Free WiFi", "Swimming Pool", "Spa", "Gym", "Restaurant", "Concierge"], roomTypes: [{ id: "h5r1", name: "Fairmont Room", capacity: 2, priceMultiplier: 1, description: "Heritage luxury in downtown Toronto" }, { id: "h5r2", name: "Presidential Suite", capacity: 4, priceMultiplier: 2.8, description: "Iconic suite with skyline panorama" }], image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=600&q=80", cancellationPolicy: "Free cancellation up to 48h" },
  { id: "h6", name: "Protea Hotel Abuja", city: "Abuja", country: "Nigeria", stars: 4, pricePerNightNGN: 150000, pricePerNightUSD: 95, amenities: ["Free WiFi", "Swimming Pool", "Gym", "Restaurant", "Parking"], roomTypes: [{ id: "h6r1", name: "Standard Room", capacity: 2, priceMultiplier: 1, description: "Comfortable room near Wuse district" }, { id: "h6r2", name: "Executive Suite", capacity: 2, priceMultiplier: 1.5, description: "Premium suite with work desk" }], image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80", cancellationPolicy: "Free cancellation up to 24h" },
];

export const VISA_COUNTRIES: VisaCountry[] = [
  {
    id: "uk", name: "United Kingdom", flag: "GB",
    visaTypes: [
      { id: "uk-std", name: "Standard Visitor Visa", category: "Tourism/Business", feeNGN: 280000, feeUSD: 175, processingDays: "15-20 working days", requirements: ["Valid passport (6+ months)", "Bank statements (6 months)", "Proof of employment/business", "Travel itinerary", "Accommodation booking", "Passport photos"], biometricRequired: true },
      { id: "uk-study", name: "Student Visa (Tier 4)", category: "Study", feeNGN: 420000, feeUSD: 260, processingDays: "15-30 working days", requirements: ["Valid passport", "CAS from licensed sponsor", "Proof of funds (GBP 1,023+/month)", "English language test (IELTS)", "Academic transcripts", "TB test certificate"], biometricRequired: true },
      { id: "uk-work", name: "Skilled Worker Visa", category: "Work", feeNGN: 560000, feeUSD: 350, processingDays: "15-30 working days", requirements: ["Valid passport", "Certificate of Sponsorship", "English proficiency proof", "Maintenance funds evidence", "Degree/certification", "Health surcharge payment"], biometricRequired: true },
    ],
  },
  {
    id: "canada", name: "Canada", flag: "CA",
    visaTypes: [
      { id: "ca-visitor", name: "Temporary Resident Visa", category: "Tourism", feeNGN: 185000, feeUSD: 115, processingDays: "30-60 days", requirements: ["Valid passport", "Proof of funds", "Employment letter", "Travel history", "Purpose of visit letter", "Digital photo"], biometricRequired: true },
      { id: "ca-study", name: "Study Permit", category: "Study", feeNGN: 250000, feeUSD: 155, processingDays: "60-90 days", requirements: ["Letter of Acceptance (LOA)", "Proof of funds (CAD 10,000+/yr)", "Medical exam", "Police certificate", "GIC certificate", "SOP/Letter of explanation"], biometricRequired: true },
      { id: "ca-ee", name: "Express Entry (PR)", category: "Immigration", feeNGN: 450000, feeUSD: 280, processingDays: "6-12 months", requirements: ["IELTS/CELPIP results", "Educational Credential Assessment (ECA)", "Proof of funds (CAD 13,757+)", "Work experience letters", "Police certificates", "Medical examination"], biometricRequired: true },
    ],
  },
  {
    id: "usa", name: "United States", flag: "US",
    visaTypes: [
      { id: "us-b1b2", name: "B1/B2 Visitor Visa", category: "Tourism/Business", feeNGN: 220000, feeUSD: 140, processingDays: "2-8 weeks (varies)", requirements: ["Valid passport", "DS-160 confirmation", "Photo (2x2 inch)", "Bank statements", "Employment proof", "Travel plan"], biometricRequired: true },
      { id: "us-f1", name: "F1 Student Visa", category: "Study", feeNGN: 220000, feeUSD: 140, processingDays: "2-6 weeks", requirements: ["I-20 form from school", "SEVIS fee receipt", "Financial proof", "Academic transcripts", "English test scores", "Ties to home country evidence"], biometricRequired: true },
    ],
  },
  {
    id: "schengen", name: "Schengen Area (Europe)", flag: "EU",
    visaTypes: [
      { id: "sch-tourist", name: "Schengen Tourist Visa", category: "Tourism", feeNGN: 165000, feeUSD: 105, processingDays: "10-15 working days", requirements: ["Valid passport (3+ months validity)", "Travel insurance (EUR 30,000)", "Flight reservation", "Hotel bookings", "Bank statements (3 months)", "Cover letter"], biometricRequired: true },
      { id: "sch-business", name: "Schengen Business Visa", category: "Business", feeNGN: 165000, feeUSD: 105, processingDays: "10-15 working days", requirements: ["Invitation letter from EU company", "Employer letter", "Valid passport", "Travel insurance", "Proof of funds", "Conference/event registration"], biometricRequired: true },
    ],
  },
  {
    id: "uae", name: "UAE (Dubai)", flag: "AE",
    visaTypes: [
      { id: "uae-tourist", name: "Tourist Visa (30/90 days)", category: "Tourism", feeNGN: 120000, feeUSD: 75, processingDays: "3-7 working days", requirements: ["Valid passport (6+ months)", "Passport photo", "Bank statement", "Flight booking", "Hotel booking or sponsor letter", "Travel insurance"], biometricRequired: false },
      { id: "uae-freelance", name: "Freelance Visa", category: "Work", feeNGN: 2800000, feeUSD: 1750, processingDays: "15-30 days", requirements: ["Valid passport", "Freelance permit", "Emirates ID application", "Medical fitness test", "Proof of qualifications", "Sponsorship from free zone"], biometricRequired: true },
    ],
  },
  {
    id: "australia", name: "Australia", flag: "AU",
    visaTypes: [
      { id: "au-visitor", name: "Visitor Visa (Subclass 600)", category: "Tourism", feeNGN: 280000, feeUSD: 175, processingDays: "20-40 days", requirements: ["Valid passport", "Genuine visitor statement", "Proof of funds", "Employment evidence", "Health examination", "Character certificate"], biometricRequired: true },
      { id: "au-study", name: "Student Visa (Subclass 500)", category: "Study", feeNGN: 350000, feeUSD: 220, processingDays: "30-60 days", requirements: ["CoE from registered institution", "OSHC health cover", "Genuine Student (GS) statement", "Financial capacity proof", "English test (IELTS 6.5+)", "Health & character requirements"], biometricRequired: true },
    ],
  },
];
