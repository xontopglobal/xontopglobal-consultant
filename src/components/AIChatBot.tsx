import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChatCircleDots,
  Envelope,
  MapPin,
  PaperPlaneTilt,
  PhoneCall,
  Sparkle,
  WhatsappLogo,
  X,
} from "@phosphor-icons/react";
import {
  BRAND_NAME,
  CAC_PACKAGES,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP_LINK,
} from "../constants";
import type { ChatMessage } from "../types";

/* ---------- Knowledge base (intent → reply) ---------- */
interface KBEntry {
  match: string[];
  text: string;
  card?: ChatMessage["card"];
  actions?: string[];
}

const KB: KBEntry[] = [
  {
    match: ["cac", "business name", "register business", "llc", "limited", "tin", "trustees", "ngo", "scuml"],
    text: "We handle full CAC registration: Business Name ₦55,000 (7–10 days), Limited Liability ₦95,000 (10–14 days), and Incorporated Trustees ₦185,000 (14–21 days) — including TIN, SCUML, and affidavits. Pick a package below or message us to start today!",
    card: "cac",
    actions: ["Start LLC", "Requirements checklist"],
  },
  {
    match: ["flight", "airline", "ticket", "travel", "visa", "book a flight", "fare"],
    text: "Our travel desk books domestic & international flights with competitive fares, plus visa consultation and itinerary planning. Share your route (e.g. Lagos → London), preferred date, and number of travelers and we'll send the best fare within 24–48 hours.",
    card: "flight",
    actions: ["Book a flight", "Visa help"],
  },
  {
    match: ["website", "web", "e-commerce", "ecommerce", "app", "landing", "develop"],
    text: "We build modern, fast, conversion-focused websites, e-commerce stores, and web apps. Typical investment: business website ₦350k–₦1.2m (2–4 weeks), e-commerce ₦800k–₦2.5m (4–8 weeks). Want a free scoping call?",
    card: "quote",
    actions: ["Get website quote", "E-commerce"],
  },
  {
    match: ["google", "maps", "map", "local seo", "business profile", "registration on google"],
    text: "We register, verify, and optimize your Google Business Profile so you appear on Google Maps & Search within days — with review setup and local SEO. Fees: ₦50,000–₦120,000 depending on complexity. Shall we run a free listing check?",
    card: "quote",
    actions: ["Check my listing", "Google Maps setup"],
  },
  {
    match: ["seo", "rank", "traffic", "search engine"],
    text: "Our SEO service covers technical audits, keyword research, on-page optimization, and authority building to scale your organic traffic. Monthly retainers start at ₦250,000. Ask us for a free mini-audit of your site!",
    card: "quote",
    actions: ["Request SEO audit"],
  },
  {
    match: ["social", "instagram", "facebook", "tiktok", "ads", "marketing", "tiktok"],
    text: "We run targeted social media campaigns, content strategy, and paid ads across Facebook, Instagram, TikTok, and LinkedIn — including creatives and growth reports. What's your goal: brand awareness, followers, or direct sales?",
    card: "quote",
    actions: ["Social media plan", "Run ads"],
  },
  {
    match: ["import", "1688", "taobao", "alibaba", "china", "shipping", "clearing", "rmb", "digital import"],
    text: "Our Digital Importation Academy teaches 1688, Taobao, and Alibaba sourcing, RMB payment rails, and China→Nigeria shipping & clearing — no middlemen. Masterclass: ₦150,000–₦400,000 (2–6 weeks). Ready to start sourcing?",
    card: "quote",
    actions: ["Join masterclass", "Free intro call"],
  },
  {
    match: ["price", "cost", "how much", "fee", "charge", "quote", "pricing", "package"],
    text: "Here's a quick guide: CAC Business Name ₦55,000 · LLC ₦95,000 · Trustees ₦185,000 · Websites from ₦350,000 · Google Business ₦50k–₦120k · SEO from ₦250k/mo · Importation ₦150k–₦400k · Flights at live best fares. Want a detailed quote for your project?",
    card: "quote",
    actions: ["Detailed quote", "Talk to consultant"],
  },
  {
    match: ["contact", "email", "phone", "number", "reach", "whatsapp", "talk", "human", "agent"],
    text: `You can reach us anytime: WhatsApp/call ${PHONE_DISPLAY}, or email ${EMAIL}. Our team replies fast, every day.`,
    card: "contact",
    actions: ["Open WhatsApp", "Send email"],
  },
  {
    match: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening"],
    text: `Hello! 👋 Welcome to ${BRAND_NAME} — your partner for websites, social media marketing, Google Business registration, SEO, CAC registration, importation coaching, and flights. What can I help you with today?`,
    actions: ["CAC registration", "Flight booking", "Website quote", "Importation"],
  },
];

function findReply(input: string): KBEntry {
  const q = input.toLowerCase();
  let best: KBEntry | null = null;
  let bestScore = 0;
  for (const entry of KB) {
    const score = entry.match.reduce(
      (acc, m) => acc + (q.includes(m) ? m.length : 0),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return best ?? {
    match: [],
    text: "Great question! I can help with CAC registration, websites & apps, social media marketing, Google Business setup, SEO, importation coaching, and flight bookings. Could you share a bit more detail so I can point you to the right expert?",
    actions: ["How much is CAC?", "Book a flight", "Build a website", "Talk to human"],
  };
}

const QUICK_PROMPTS = [
  "How much is CAC registration?",
  "Book a flight to London",
  "I want to learn 1688 importation",
  "Build an e-commerce website",
  "Register my business on Google Map",
];

const WELCOME: ChatMessage = {
  id: "welcome",
  role: "bot",
  text: `Hi, I'm XonBot! 👋 I'm ${BRAND_NAME}'s AI concierge. Ask me about CAC registration, websites, social media, Google Business, SEO, importation coaching, or flights — or tap a quick question below.`,
  quickActions: QUICK_PROMPTS,
  ts: Date.now(),
};

let idc = 0;
const nid = () => `m-${++idc}-${Date.now()}`;

interface AIChatBotProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function AIChatBot({ open, onOpen, onClose }: AIChatBotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [unread, setUnread] = useState(1);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing, open]);

  const sendText = (raw: string) => {
    const text = raw.trim();
    if (!text || typing) return;
    setMessages((m) => [...m, { id: nid(), role: "user", text, ts: Date.now() }]);
    setInput("");
    setTyping(true);
    const entry = findReply(text);
    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          id: nid(),
          role: "bot",
          text: entry.text,
          card: entry.card,
          quickActions: entry.actions,
          ts: Date.now(),
        },
      ]);
    }, 900 + Math.random() * 500);
  };

  const onQuick = (q: string) => {
    setUnread(0);
    sendText(q);
  };

  const openChat = () => {
    onOpen();
    setUnread(0);
  };

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        onClick={openChat}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 18 }}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 text-white shadow-2xl shadow-emerald-600/40 transition hover:scale-105"
        aria-label="Open XonBot AI chat"
      >
        {open ? (
          <X size={26} weight="bold" />
        ) : (
          <ChatCircleDots size={26} weight="fill" />
        )}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 grid h-5 w-5 place-items-center rounded-full bg-rose-500 text-[10px] font-bold text-white">
            {unread}
          </span>
        )}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed bottom-20 right-4 z-50 flex h-[560px] max-h-[calc(100dvh-6rem)] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#0B1B33] sm:right-5"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-slate-200 bg-gradient-to-r from-emerald-500 to-cyan-600 px-5 py-4 text-white dark:border-white/10">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20">
                <Sparkle size={20} weight="fill" />
              </span>
              <div className="flex-1">
                <p className="text-sm font-extrabold">XonBot AI</p>
                <p className="flex items-center gap-1.5 text-[11px] text-white/85">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  Online · replies instantly
                </p>
              </div>
              <button
                onClick={onClose}
                className="grid h-8 w-8 place-items-center rounded-full bg-white/15 transition hover:bg-white/25"
                aria-label="Close chat"
              >
                <X size={16} weight="bold" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              {messages.map((m) => (
                <MessageBubble key={m.id} msg={m} onQuick={onQuick} onAction={sendText} />
              ))}
              {typing && (
                <div className="flex items-center gap-2">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 text-white">
                    <Sparkle size={13} weight="fill" />
                  </span>
                  <div className="flex gap-1 rounded-2xl rounded-tl-sm bg-slate-100 px-3.5 py-2.5 dark:bg-white/10">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        className="h-1.5 w-1.5 rounded-full bg-slate-400 dark:bg-slate-300"
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick chips */}
            {messages.length <= 2 && (
              <div className="flex flex-wrap gap-1.5 border-t border-slate-100 px-4 py-2.5 dark:border-white/5">
                {QUICK_PROMPTS.slice(0, 3).map((q) => (
                  <button
                    key={q}
                    onClick={() => onQuick(q)}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:text-emerald-400"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendText(input);
              }}
              className="flex items-center gap-2 border-t border-slate-200 p-3 dark:border-white/10"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message…"
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 focus:border-emerald-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 text-white shadow-lg shadow-emerald-600/25 transition hover:brightness-110 disabled:opacity-40"
                aria-label="Send message"
              >
                <PaperPlaneTilt size={18} weight="fill" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MessageBubble({
  msg,
  onQuick,
  onAction,
}: {
  msg: ChatMessage;
  onQuick: (q: string) => void;
  onAction: (q: string) => void;
}) {
  const isUser = msg.role === "user";
  return (
    <div className={isUser ? "flex justify-end" : "flex justify-start"}>
      <div className={isUser ? "max-w-[85%]" : "max-w-[88%]"}>
        {!isUser && (
          <div className="mb-1 flex items-center gap-1.5">
            <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-cyan-600 text-white">
              <Sparkle size={12} weight="fill" />
            </span>
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">
              XonBot AI
            </span>
          </div>
        )}
        <div
          className={
            isUser
              ? "rounded-2xl rounded-tr-sm bg-gradient-to-r from-emerald-500 to-cyan-600 px-4 py-2.5 text-sm text-white shadow-md shadow-emerald-600/15"
              : "rounded-2xl rounded-tl-sm border border-slate-100 bg-slate-50 px-4 py-2.5 text-sm text-slate-700 dark:border-white/5 dark:bg-white/10 dark:text-slate-200"
          }
        >
          {msg.text}
        </div>

        {!isUser && msg.card === "cac" && <CACCard onAction={onAction} />}
        {!isUser && msg.card === "flight" && <FlightCard onAction={onAction} />}
        {!isUser && msg.card === "contact" && <ContactCard />}

        {!isUser && msg.quickActions && msg.quickActions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {msg.quickActions.map((a) => (
              <button
                key={a}
                onClick={() => (msg.card ? onAction(a) : onQuick(a))}
                className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1.5 text-[11px] font-semibold text-emerald-700 transition hover:bg-emerald-500/20 dark:text-emerald-300"
              >
                {a}
              </button>
            ))}
          </div>
        )}

        {!isUser && msg.card === "quote" && (
          <div className="mt-2">
            <button
              onClick={() =>
                onAction(
                  "I'd like a detailed quote — please put me through to a consultant."
                )
              }
              className="rounded-full bg-slate-900 px-4 py-2 text-[11px] font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900"
            >
              Get detailed quote
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function CACCard({ onAction }: { onAction: (q: string) => void }) {
  return (
    <div className="mt-2 space-y-1.5 rounded-2xl border border-indigo-200/70 bg-indigo-50/60 p-3 dark:border-indigo-400/20 dark:bg-indigo-500/10">
      {CAC_PACKAGES.map((p) => (
        <div
          key={p.id}
          className="flex items-center justify-between text-xs text-slate-700 dark:text-slate-200"
        >
          <span className="font-semibold">{p.name}</span>
          <span className="font-extrabold text-indigo-600 dark:text-indigo-400">
            {p.price}
          </span>
        </div>
      ))}
      <button
        onClick={() => onAction("Start my CAC registration now")}
        className="mt-1 w-full rounded-lg bg-indigo-600 py-2 text-xs font-bold text-white transition hover:bg-indigo-500"
      >
        Start CAC registration
      </button>
    </div>
  );
}

function FlightCard({ onAction }: { onAction: (q: string) => void }) {
  return (
    <div className="mt-2 space-y-1.5 rounded-2xl border border-cyan-200/70 bg-cyan-50/60 p-3 dark:border-cyan-400/20 dark:bg-cyan-500/10">
      {["Lagos → London", "Abuja → Dubai", "Lagos → New York"].map((r) => (
        <div
          key={r}
          className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200"
        >
          <MapPin size={12} weight="fill" className="shrink-0 text-cyan-600 dark:text-cyan-400" />
          {r}
        </div>
      ))}
      <button
        onClick={() => onAction("Book a flight: Lagos to London, next month, 1 adult")}
        className="mt-1 w-full rounded-lg bg-cyan-600 py-2 text-xs font-bold text-white transition hover:bg-cyan-500"
      >
        Search best fares
      </button>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="mt-2 space-y-2 rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/5">
      <a
        href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hello Xontopglobal Consultant! I'm chatting with XonBot and would like to speak with a consultant.")}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-emerald-500"
      >
        <WhatsappLogo size={14} weight="fill" /> WhatsApp us
      </a>
      <a
        href={`tel:${PHONE_TEL}`}
        className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-emerald-400 dark:border-white/10 dark:text-slate-200"
      >
        <PhoneCall size={14} weight="fill" className="text-emerald-600 dark:text-emerald-400" />
        +234 803 749 0042
      </a>
      <a
        href={`mailto:${EMAIL}`}
        className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-bold text-slate-700 transition hover:border-emerald-400 dark:border-white/10 dark:text-slate-200"
      >
        <Envelope size={14} weight="fill" className="text-emerald-600 dark:text-emerald-400" />
        xontopglobal@gmail.com
      </a>
    </div>
  );
}