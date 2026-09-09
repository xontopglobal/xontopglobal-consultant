import { useState } from "react";
import { motion } from "framer-motion";
import {
  AirplaneInFlight,
  Bed,
  CaretDown,
  Clock,
  MapPin,
  Minus,
  Plus,
  ShieldCheck,
  Star,
  Users,
} from "@phosphor-icons/react";
import { FLIGHT_ROUTES, HOTELS, WHATSAPP_LINK } from "../constants";
import type { FlightRoute, HotelListing, SavedBooking } from "../types";
import { toast } from "sonner";

const genRef = () => "XG-" + Math.random().toString(36).slice(2, 8).toUpperCase();
const fmtNGN = (n: number) => "₦" + n.toLocaleString();
const fmtUSD = (n: number) => "$" + n.toLocaleString();

function saveBooking(b: SavedBooking) {
  const list: SavedBooking[] = JSON.parse(localStorage.getItem("xg_bookings") || "[]");
  list.unshift(b);
  localStorage.setItem("xg_bookings", JSON.stringify(list.slice(0, 20)));
}

export function FlightTab({ onBook }: { onBook: (b: SavedBooking) => void }) {
  const [tripType, setTripType] = useState<"round" | "oneway">("round");
  const [origin, setOrigin] = useState("LOS");
  const [dest, setDest] = useState("LHR");
  const [date, setDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [cabin, setCabin] = useState("Economy");
  const [searched, setSearched] = useState(false);

  const results = FLIGHT_ROUTES.filter((r) => r.originCode === origin && r.destinationCode === dest);

  const book = (route: FlightRoute) => {
    const mult = cabin === "Business" ? 2.2 : cabin === "First" ? 3.5 : cabin === "Premium Economy" ? 1.5 : 1;
    const pax = adults + children * 0.75;
    const total = Math.round(route.priceNGN * mult * pax);
    const ref = genRef();
    const booking: SavedBooking = {
      id: crypto.randomUUID(), type: "flight",
      title: `${route.origin} → ${route.destination}`,
      details: `${route.airline} | ${cabin} | ${adults} Adult${adults > 1 ? "s" : ""}${children ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""} | ${date || "TBD"}`,
      price: fmtNGN(total), date: date || new Date().toISOString().slice(0, 10),
      reference: ref, createdAt: Date.now(),
    };
    saveBooking(booking); onBook(booking);
    const msg = encodeURIComponent(`Flight Booking Inquiry
Ref: ${ref}
Route: ${route.origin} (${route.originCode}) → ${route.destination} (${route.destinationCode})
Airline: ${route.airline}
Cabin: ${cabin}
Passengers: ${adults} Adults, ${children} Children
Date: ${date}
${tripType === "round" ? `Return: ${returnDate}
` : ""}Est. Total: ${fmtNGN(total)}`);
    window.open(`${WHATSAPP_LINK}?text=${msg}`, "_blank");
    toast.success("Flight booking saved! WhatsApp opened.");
  };

  const selCls = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm appearance-none dark:bg-slate-800 dark:border-slate-700 dark:text-white";
  const inputCls = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white";

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        {(["round", "oneway"] as const).map((t) => (
          <button key={t} onClick={() => setTripType(t)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${tripType === t ? "bg-cyan-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"}`}>
            {t === "round" ? "Round Trip" : "One Way"}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-500">From</span>
          <div className="relative">
            <select value={origin} onChange={(e) => setOrigin(e.target.value)} className={selCls}>
              {["LOS", "ABV", "PHC"].map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <CaretDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </label>
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-500">To</span>
          <div className="relative">
            <select value={dest} onChange={(e) => setDest(e.target.value)} className={selCls}>
              {["LHR", "DXB", "JFK", "YYZ", "IST", "DOH", "NBO", "ACC"].map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <CaretDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </label>
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-500">Departure</span>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className={inputCls} />
        </label>
        {tripType === "round" && (
          <label className="space-y-1">
            <span className="text-xs font-medium text-slate-500">Return</span>
            <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className={inputCls} />
          </label>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="space-y-1">
          <span className="text-xs font-medium text-slate-500">Passengers</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700">
              <span className="text-xs">Adults</span>
              <button onClick={() => setAdults(Math.max(1, adults - 1))} className="text-slate-400 hover:text-slate-600"><Minus className="w-3 h-3" /></button>
              <span className="text-sm font-semibold w-5 text-center">{adults}</span>
              <button onClick={() => setAdults(Math.min(9, adults + 1))} className="text-slate-400 hover:text-slate-600"><Plus className="w-3 h-3" /></button>
            </div>
            <div className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 dark:border-slate-700">
              <span className="text-xs">Kids</span>
              <button onClick={() => setChildren(Math.max(0, children - 1))} className="text-slate-400 hover:text-slate-600"><Minus className="w-3 h-3" /></button>
              <span className="text-sm font-semibold w-5 text-center">{children}</span>
              <button onClick={() => setChildren(Math.min(6, children + 1))} className="text-slate-400 hover:text-slate-600"><Plus className="w-3 h-3" /></button>
            </div>
          </div>
        </div>
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-500">Cabin Class</span>
          <div className="relative">
            <select value={cabin} onChange={(e) => setCabin(e.target.value)} className={selCls}>
              {["Economy", "Premium Economy", "Business", "First"].map((c) => <option key={c}>{c}</option>)}
            </select>
            <CaretDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </label>
        <div className="flex items-end">
          <button onClick={() => setSearched(true)}
            className="w-full rounded-lg bg-gradient-to-r from-cyan-600 to-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98] transition">
            Search Flights
          </button>
        </div>
      </div>
      {searched && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-3">
          {results.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-300 p-8 text-center text-slate-500 dark:border-slate-600">
              <MapPin className="w-8 h-8 mx-auto mb-2 opacity-50" />
              No direct routes found for {origin} {"→"} {dest}. Contact us for custom routing.
            </div>
          ) : results.map((r) => {
            const mult = cabin === "Business" ? 2.2 : cabin === "First" ? 3.5 : cabin === "Premium Economy" ? 1.5 : 1;
            const pax = adults + children * 0.75;
            const total = Math.round(r.priceNGN * mult * pax);
            return (
              <div key={r.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md transition dark:bg-slate-800 dark:border-slate-700">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <AirplaneInFlight className="w-4 h-4 text-cyan-600" />
                    <span className="text-sm font-semibold">{r.airline}</span>
                    <span className="text-xs text-slate-400">({r.airlineCode})</span>
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-600 dark:bg-slate-700 dark:text-slate-300">{r.stops === 0 ? "Direct" : `${r.stops} stop`}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <span className="font-medium">{r.originCode}</span>
                    <div className="flex items-center gap-1 flex-1 max-w-[120px]">
                      <div className="h-px flex-1 bg-slate-300 dark:bg-slate-600" />
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span className="text-xs">{r.duration}</span>
                      <div className="h-px flex-1 bg-slate-300 dark:bg-slate-600" />
                    </div>
                    <span className="font-medium">{r.destinationCode}</span>
                  </div>
                  <div className="mt-1 text-xs text-slate-400">Luggage: {r.luggage} | Cabin: {cabin}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-slate-900 dark:text-white">{fmtNGN(total)}</div>
                  <div className="text-xs text-slate-400">{fmtUSD(Math.round(r.priceUSD * mult * pax))} USD</div>
                  <button onClick={() => book(r)}
                    className="mt-2 rounded-lg bg-cyan-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-cyan-700 active:scale-[0.97] transition">
                    Book Now
                  </button>
                </div>
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}

export function HotelTab({ onBook }: { onBook: (b: SavedBooking) => void }) {
  const [city, setCity] = useState("all");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(2);
  const [minStars, setMinStars] = useState(0);
  const [searched, setSearched] = useState(false);

  const cities = Array.from(new Set(HOTELS.map((h) => h.city)));
  const results = HOTELS.filter((h) => (city === "all" || h.city === city) && h.stars >= minStars);
  const nights = checkIn && checkOut
    ? Math.max(1, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
    : 1;

  const book = (hotel: HotelListing) => {
    const room = hotel.roomTypes[0];
    const total = Math.round(hotel.pricePerNightNGN * room.priceMultiplier * nights * rooms);
    const ref = genRef();
    const booking: SavedBooking = {
      id: crypto.randomUUID(), type: "hotel",
      title: hotel.name,
      details: `${hotel.city}, ${hotel.country} | ${room.name} | ${nights} Night${nights > 1 ? "s" : ""} | ${rooms} Room(s), ${guests} Guest(s)`,
      price: fmtNGN(total), date: checkIn || new Date().toISOString().slice(0, 10),
      reference: ref, createdAt: Date.now(),
    };
    saveBooking(booking); onBook(booking);
    const msg = encodeURIComponent(`Hotel Booking Inquiry
Ref: ${ref}
Hotel: ${hotel.name}
City: ${hotel.city}, ${hotel.country}
Room: ${room.name}
Check-in: ${checkIn || "TBD"}
Check-out: ${checkOut || "TBD"}
Nights: ${nights}
Rooms: ${rooms} | Guests: ${guests}
Est. Total: ${fmtNGN(total)}`);
    window.open(`${WHATSAPP_LINK}?text=${msg}`, "_blank");
    toast.success("Hotel booking saved!");
  };

  const selCls = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm appearance-none dark:bg-slate-800 dark:border-slate-700 dark:text-white";
  const inputCls = "w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm dark:bg-slate-800 dark:border-slate-700 dark:text-white";

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-500">City</span>
          <div className="relative">
            <select value={city} onChange={(e) => setCity(e.target.value)} className={selCls}>
              <option value="all">All Cities</option>
              {cities.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <CaretDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>
        </label>
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-500">Check-in</span>
          <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className={inputCls} />
        </label>
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-500">Check-out</span>
          <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className={inputCls} />
        </label>
        <label className="space-y-1">
          <span className="text-xs font-medium text-slate-500">Rooms / Guests</span>
          <div className="flex items-center gap-1 rounded-lg border border-slate-200 px-2 py-2 dark:border-slate-700">
            <Bed className="w-3.5 h-3.5 text-slate-400" />
            <button onClick={() => setRooms(Math.max(1, rooms - 1))} className="text-slate-400"><Minus className="w-3 h-3" /></button>
            <span className="text-xs font-semibold w-4 text-center">{rooms}</span>
            <button onClick={() => setRooms(Math.min(5, rooms + 1))} className="text-slate-400"><Plus className="w-3 h-3" /></button>
            <span className="text-xs text-slate-300 mx-0.5">|</span>
            <Users className="w-3.5 h-3.5 text-slate-400" />
            <button onClick={() => setGuests(Math.max(1, guests - 1))} className="text-slate-400"><Minus className="w-3 h-3" /></button>
            <span className="text-xs font-semibold w-4 text-center">{guests}</span>
            <button onClick={() => setGuests(Math.min(10, guests + 1))} className="text-slate-400"><Plus className="w-3 h-3" /></button>
          </div>
        </label>
        <div className="flex items-end">
          <button onClick={() => setSearched(true)}
            className="w-full rounded-lg bg-gradient-to-r from-cyan-600 to-sky-600 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-[0.98] transition">
            Search Hotels
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-500">Min rating:</span>
        {[0, 3, 4, 5].map((s) => (
          <button key={s} onClick={() => setMinStars(s)}
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition ${minStars === s ? "bg-amber-500 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300"}`}>
            {s === 0 ? "All" : <><Star className="w-3 h-3 fill-current" />{s}+</>}
          </button>
        ))}
      </div>
      {searched && (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((h) => {
            const total = Math.round(h.pricePerNightNGN * nights * rooms);
            return (
              <div key={h.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition dark:bg-slate-800 dark:border-slate-700">
                <div className="relative h-40 overflow-hidden">
                  <img src={h.image} alt={h.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute top-2 right-2 rounded-full bg-white/90 px-2 py-1 text-xs font-medium backdrop-blur-sm">
                    {Array.from({ length: h.stars }).map((_, i) => <Star key={i} className="inline w-3 h-3 fill-amber-400 text-amber-400" />)}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white">{h.name}</h4>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><MapPin className="w-3 h-3" />{h.city}, {h.country}</p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {h.amenities.slice(0, 4).map((a) => (
                      <span key={a} className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] text-slate-600 dark:bg-slate-700 dark:text-slate-300">{a}</span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{fmtNGN(total)}</div>
                      <div className="text-[10px] text-slate-400">{nights} night{nights > 1 ? "s" : ""} {"·"} {rooms} room{rooms > 1 ? "s" : ""}</div>
                    </div>
                    <button onClick={() => book(h)}
                      className="rounded-lg bg-cyan-600 px-4 py-2 text-xs font-semibold text-white hover:bg-cyan-700 active:scale-[0.97] transition">
                      Book
                    </button>
                  </div>
                  <p className="mt-2 text-[10px] text-emerald-600 flex items-center gap-1"><ShieldCheck className="w-3 h-3" />{h.cancellationPolicy}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      )}
    </div>
  );
}