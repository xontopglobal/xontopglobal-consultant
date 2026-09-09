export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: "globe" | "mega" | "pin" | "chart" | "cap" | "flight" | "coach";
  accent: string;
  features: string[];
}

export interface CACPackage {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  icon: "building" | "briefcase" | "hands";
  features: string[];
  popular?: boolean;
}

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  text: string;
  quickActions?: string[];
  card?: "contact" | "cac" | "flight" | "quote";
  ts: number;
}

export interface QuoteLine {
  label: string;
  value: string;
}

export interface FlightInquiry {
  tripType: "oneway" | "round";
  from: string;
  to: string;
  cabin: string;
  date: string;
  passengers: string;
}

// Travel Booking Types
export interface FlightRoute {
  id: string;
  origin: string;
  originCode: string;
  destination: string;
  destinationCode: string;
  airline: string;
  airlineCode: string;
  priceNGN: number;
  priceUSD: number;
  duration: string;
  stops: number;
  luggage: string;
  cabinOptions: string[];
}

export interface HotelListing {
  id: string;
  name: string;
  city: string;
  country: string;
  stars: number;
  pricePerNightNGN: number;
  pricePerNightUSD: number;
  amenities: string[];
  roomTypes: RoomType[];
  image: string;
  cancellationPolicy: string;
}

export interface RoomType {
  id: string;
  name: string;
  capacity: number;
  priceMultiplier: number;
  description: string;
}

export interface VisaCountry {
  id: string;
  name: string;
  flag: string;
  visaTypes: VisaType[];
}

export interface VisaType {
  id: string;
  name: string;
  category: string;
  feeNGN: number;
  feeUSD: number;
  processingDays: string;
  requirements: string[];
  biometricRequired: boolean;
}

export interface SavedBooking {
  id: string;
  type: "flight" | "hotel" | "visa";
  title: string;
  details: string;
  price: string;
  date: string;
  reference: string;
  createdAt: number;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}
