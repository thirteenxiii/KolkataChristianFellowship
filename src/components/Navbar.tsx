"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Church, MapPin, Clock, TvMinimalPlay } from "lucide-react";

/* ── Crucifix Icon — rises on active ── */
function CrucifixIcon({ className = "", isActive = false }: { className?: string; isActive?: boolean }) {
  return (
    <span className="relative inline-flex items-center justify-center">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`${className} transition-all duration-300 ease-out ${
          isActive ? "scale-125 -translate-y-0.5" : "scale-100 translate-y-0"
        }`}
      >
        {/* Vertical beam */}
        <line x1="12" y1="2" x2="12" y2="22" />
        {/* Horizontal beam */}
        <line x1="5" y1="9" x2="19" y2="9" />
        {/* Top plaque (INRI) */}
        <line x1="9" y1="5" x2="15" y2="5" />
        {/* Slanted footrest (stipes) */}
        <line x1="9" y1="20" x2="14" y2="17" />
      </svg>
    </span>
  );
}

/* ──────────────────────────────────────────────
   Mega Menu Configuration
   ────────────────────────────────────────────── */
interface MegaChild {
  label: string;
  href: string;
  desc?: string;
}

interface MegaMenuCategory {
  label: string;
  href?: string;
  megaChildren?: MegaChild[];
}

const navConfig: MegaMenuCategory[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    megaChildren: [
      { label: "History", href: "/about/history", desc: "How it all began" },
      { label: "Vision & Mission", href: "/about/vision-mission", desc: "Our purpose and calling" },
      { label: "Foundational Principles", href: "/about/foundational-principles", desc: "The B-U-I-L-D values" },
      { label: "Statement of Faith", href: "/about/statement-of-faith", desc: "What we believe" },
      { label: "Our Partners", href: "/impact/partners", desc: "Mission partners around the world" },
    ],
  },
  {
    label: "Ministries",
    megaChildren: [
      { label: "Hour of Power", href: "/services/hour-of-power", desc: "Sunday morning prayer" },
      { label: "KCF Main Service", href: "/services/main-service", desc: "Sunday worship at Mukundapur" },
      { label: "Kids Church", href: "/ministries/kids-church", desc: "Ages 0–12 Sunday program" },
      { label: "Teens on Track", href: "/ministries/teens-on-track", desc: "Youth ministry for teens" },
      { label: "Freedom Church", href: "/ministries/freedom-church", desc: "Hope & healing ministry" },
      { label: "College & Career", href: "/ministries/college-career", desc: "Young adults fellowship" },
      { label: "Bengali Mentorship", href: "/ministries/bengali-mentorship", desc: "Empowering Bengali leaders" },
    ],
  },
  {
    label: "Outreach",
    megaChildren: [
      { label: "Rajarhat Fellowship", href: "/services/rajarhat", desc: "New Town community" },
      { label: "Sonarpur", href: "/impact/sonarpur", desc: "Community outreach & church" },
      { label: "Madhyamgram", href: "/impact/madhyamgram", desc: "Rural development center" },
      { label: "Sulkuni", href: "/impact/sulkuni", desc: "Village ministry & medical camp" },
      { label: "Nirmaan", href: "/impact/nirmaan", desc: "Child development program" },
      { label: "School of Excellence", href: "/impact/school-of-excellence", desc: "Education for survivors" },
      { label: "Micro Credit", href: "/impact/micro-credit", desc: "Women empowerment & loans" },
    ],
  },
  {
    label: "Resources",
    megaChildren: [
      { label: "Sermons & Notes", href: "/resources/sermon-notes", desc: "PDF sermon notes" },
      { label: "Videos", href: "/resources/videos", desc: "Sermon video library" },
      { label: "Resource Corner", href: "/resources/resource-corner", desc: "Audio, PDF & more" },
      { label: "Prayer Wall", href: "/prayer", desc: "Submit prayer requests" },
      { label: "Photos", href: "/photos", desc: "Church photo gallery" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/* ──────────────────────────────────────────────
   Hover-intent hook
   ────────────────────────────────────────────── */
function useHoverIntent(delay = 180) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onStart = useCallback(
    (cb: () => void) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(cb, delay);
    },
    [delay],
  );

  const onEnd = useCallback(
    (cb: () => void) => {
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(cb, 80);
    },
    [],
  );

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  return { onStart, onEnd };
}

/* ──────────────────────────────────────────────
   Animation Variants
   ────────────────────────────────────────────── */
const megaPanelVariants = {
  hidden: { opacity: 0, y: -8, scaleY: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -6,
    scaleY: 0.96,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.04, duration: 0.25, ease: "easeOut" as const },
  }),
};

const mobileItemVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto", opacity: 1, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2, ease: "easeIn" as const } },
};

/* ──────────────────────────────────────────────
   Component
   ────────────────────────────────────────────── */
const megaMenuImages = [
  "/assets/Mega menu images/WhatsApp Image 2026-05-09 at 2.25.30 PM (1).jpeg",
  "/assets/Mega menu images/WhatsApp Image 2026-05-09 at 2.25.30 PM.jpeg",
  "/assets/Mega menu images/WhatsApp Image 2026-05-09 at 2.28.07 PM.jpeg",
  "/assets/Mega menu images/WhatsApp Image 2026-05-09 at 2.36.05 PM (1).jpeg",
  "/assets/Mega menu images/WhatsApp Image 2026-05-09 at 2.36.05 PM.jpeg",
  "/assets/Mega menu images/WhatsApp Image 2026-05-09 at 2.36.06 PM.jpeg",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();
  const { onStart, onEnd } = useHoverIntent(180);
  const navRef = useRef<HTMLDivElement>(null);

  /* Scroll listener */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMobileOpen(false);
    setActiveMega(null);
  }, [pathname]);

  /* Close mega menu on click outside */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveMega(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ── Helpers ── */
  const isActive = (href?: string) => href && pathname === href;
  const isParentActive = (cat: MegaMenuCategory) =>
    cat.megaChildren?.some((c) => pathname.startsWith(c.href)) ?? false;

  /* ── Render ── */
  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-lg"
            : "bg-kcf-dark/80 backdrop-blur-md"
        }`}
      >
        {/* ── Top bar ── */}
        <div className="hidden lg:block bg-kcf-blue/90 text-white text-xs py-1.5">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              Sunday: 9:45 AM & 11:00 AM · Mukundapur, Kolkata
            </span>
            <span className="flex items-center gap-1.5">
              <Church className="w-3 h-3" />
              Encountering · Equipping · Encouraging
            </span>
          </div>
        </div>

        {/* ── Main bar ── */}
        <div className="max-w-7xl mx-auto px-4 lg:px-6" ref={navRef}>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden transition-transform group-hover:scale-105 shadow-lg shadow-kcf-blue/20 bg-white">
                <img
                  src="/assets/kcficon.png"
                  alt="KCF"
                  className="w-full h-full object-contain p-1.5"
                />
              </div>
              <div className="block">
                <h1
                  className={`text-sm lg:text-lg font-bold leading-tight transition-colors duration-300 ${
                    scrolled ? "text-kcf-blue" : "text-white"
                  }`}
                >
                  Kolkata Christian Fellowship
                </h1>
                <p
                  className={`text-[9px] lg:text-xs tracking-wider uppercase transition-colors duration-300 ${
                    scrolled ? "text-kcf-muted" : "text-gray-400"
                  }`}
                >
                  Encountering · Equipping · Encouraging
                </p>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {navConfig.map((cat) => {
                const hasMega = !!cat.megaChildren;
                const active = isActive(cat.href) || isParentActive(cat);

                return (
                  <div
                    key={cat.label}
                    className="relative"
                    onMouseEnter={() => hasMega && onStart(() => setActiveMega(cat.label))}
                    onMouseLeave={() => hasMega && onEnd(() => setActiveMega(null))}
                  >
                    {cat.href && !hasMega ? (
                      <Link
                        href={cat.href}
                        className={`relative px-3 py-1.5 text-xs transition-colors flex items-center gap-1 cursor-pointer ${
                          active
                            ? scrolled
                              ? "text-kcf-blue border-l-3 border-kcf-blue pl-2"
                              : "text-kcf-gold border-l-3 border-kcf-gold pl-2"
                            : scrolled
                              ? "text-kcf-dark/80 hover:text-kcf-blue pl-3"
                              : "text-white/85 hover:text-white pl-3"
                        }`}
                      >
                        <span className="uppercase tracking-wider">{cat.label}</span>
                      </Link>
                    ) : (
                      <button
                        onFocus={() => setActiveMega(cat.label)}
                        className={`relative px-3 py-1.5 text-xs transition-colors flex items-center gap-1 cursor-pointer ${
                          active
                            ? scrolled
                              ? "text-kcf-blue border-l-3 border-kcf-blue pl-2"
                              : "text-kcf-gold border-l-3 border-kcf-gold pl-2"
                            : scrolled
                              ? "text-kcf-dark/80 hover:text-kcf-blue pl-3"
                              : "text-white/85 hover:text-white pl-3"
                        }`}
                      >
                        <span className="uppercase tracking-wider">{cat.label}</span>
                        <CrucifixIcon
                          className="w-3 h-3"
                          isActive={activeMega === cat.label}
                        />
                      </button>
                    )}

                    {/* ── Mega Menu Panel ── */}
                    <AnimatePresence>
                      {hasMega && activeMega === cat.label && (
                        <motion.div
                          key={cat.label}
                          variants={megaPanelVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          onMouseEnter={() => setActiveMega(cat.label)}
                          onMouseLeave={() => setActiveMega(null)}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] overflow-hidden origin-top"
                          style={{ perspective: "800px" }}
                        >
                          {/* Solid backdrop */}
                          <div className="relative bg-white border border-gray-100 shadow-2xl shadow-black/10">
                            {/* Decorative gradient accent */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-kcf-blue via-kcf-gold to-kcf-blue" />

                            <div className="flex">
                              {/* Left: KCF Logo with rotating mega menu images */}
                              <div className="w-[200px] shrink-0 relative overflow-hidden bg-kcf-blue flex items-center justify-center">
                                <div
                                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
                                  style={{
                                    backgroundImage: `url('${megaMenuImages[navConfig.indexOf(cat) % megaMenuImages.length]}')`,
                                  }}
                                />
                                <div className="relative z-10 text-center px-4">
                                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/20 flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">KCF</span>
                                  </div>
                                  <p className="text-white/90 text-xs font-bold uppercase tracking-wider leading-relaxed">
                                    {cat.label}
                                  </p>
                                </div>
                              </div>

                              {/* Right: Links grid */}
                              <div className="flex-1 p-4">
                                <div className="grid grid-cols-2 gap-1.5">
                                  {cat.megaChildren!.map((child, i) => (
                                    <motion.div
                                      key={child.label}
                                      custom={i}
                                      variants={itemVariants}
                                      initial="hidden"
                                      animate="visible"
                                    >
                                      <Link
                                        href={child.href}
                                        className={`group block p-3 transition-all duration-200 cursor-pointer ${
                                          pathname === child.href
                                            ? "bg-kcf-blue-lighter/80 border border-kcf-blue"
                                            : "hover:bg-gray-50 border border-transparent"
                                        }`}
                                      >
                                        <span className="block text-sm font-semibold text-kcf-dark group-hover:text-kcf-blue transition-colors">
                                          {child.label}
                                        </span>
                                        {child.desc && (
                                          <span className="block text-xs text-kcf-muted/80 mt-0.5 leading-snug">
                                            {child.desc}
                                          </span>
                                        )}
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* ── CTA Dropdown ── */}
              <div className="ml-4 pl-4 border-l border-white/20">
                <div className="group relative min-w-fit">
                  {/* Button — fills parent width */}
                  <button
                    className="w-full inline-flex items-center justify-center gap-2 bg-kcf-gold text-kcf-dark font-bold px-5 py-2.5 text-sm hover:bg-kcf-gold/90 transition-all shadow-lg shadow-kcf-gold/20 whitespace-nowrap"
                  >
                    <Church className="w-4 h-4 shrink-0" />
                    <span>Join Us Sunday</span>
                    <ChevronDown className="w-3.5 h-3.5 shrink-0 transition-transform duration-300 group-hover:rotate-180" />
                  </button>

                  {/* Dropdown panel — scroll animation, same width as button */}
                  <div className="absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-40">
                    <div className="bg-white shadow-2xl shadow-black/10 border border-kcf-gold/30">
                      <div className="divide-y divide-gray-100">
                        <Link
                          href="/about#location"
                          className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors group/item cursor-pointer"
                        >
                          <Church className="w-4 h-4 text-kcf-blue shrink-0" />
                          <div>
                            <span className="block text-sm font-semibold text-kcf-dark group-hover/item:text-kcf-blue transition-colors whitespace-nowrap">
                              Attend In Person
                            </span>
                            <span className="block text-xs text-kcf-muted whitespace-nowrap">
                              Mukundapur, Kolkata
                            </span>
                          </div>
                        </Link>
                        <a
                          href="https://www.youtube.com/@KolkataChristianFellowship"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 px-5 py-3.5 hover:bg-gray-50 transition-colors group/item cursor-pointer"
                        >
                          <span className="relative shrink-0">
                            <TvMinimalPlay className="w-4 h-4 text-red-600" />
                            {/* Glowing dot */}
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping opacity-75" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
                          </span>
                          <div>
                            <span className="block text-sm font-semibold text-kcf-dark group-hover/item:text-red-600 transition-colors whitespace-nowrap">
                              Attend Online
                            </span>
                            <span className="block text-xs text-kcf-muted whitespace-nowrap">
                              Watch live on YouTube
                            </span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            {/* ── Mobile Hamburger ── */}
            <button
              className={`lg:hidden p-2 rounded-13 transition-colors cursor-pointer ${
                scrolled
                  ? "text-kcf-dark hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Panel ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 350 }}
            className="fixed inset-0 top-16 z-[70] bg-white lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col h-full">
              {/* Scrollable nav items */}
              <div className="flex-1 overflow-y-auto px-4 py-4">
                {navConfig.map((cat) => {
                  const hasChildren = !!cat.megaChildren;
                  const isOpen = mobileAccordion === cat.label;

                  return (
                    <div key={cat.label}>
                      {cat.href && !hasChildren ? (
                        <Link
                          href={cat.href}
                          onClick={() => setMobileOpen(false)}
                          className={`block px-4 py-3 rounded-13 text-sm font-semibold cursor-pointer ${
                            isActive(cat.href)
                              ? "text-kcf-blue bg-kcf-blue-lighter"
                              : "text-kcf-dark hover:bg-gray-50"
                          }`}
                        >
                          <span className="uppercase tracking-wider">{cat.label}</span>
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() =>
                              setMobileAccordion(isOpen ? null : cat.label)
                            }
                            className="w-full flex items-center justify-between px-4 py-3 rounded-13 text-sm font-semibold text-kcf-dark hover:bg-gray-50 cursor-pointer"
                          >
                            <span className="uppercase tracking-wider">{cat.label}</span>
                            <CrucifixIcon
                              className="w-4 h-4"
                              isActive={isOpen}
                            />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                key={cat.label}
                                variants={mobileItemVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="overflow-hidden"
                              >
                                <div className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-kcf-blue-lighter pl-3">
                                  {cat.megaChildren?.map((child) => (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-4 py-2.5 rounded-13 text-sm text-kcf-dark hover:bg-kcf-blue-lighter transition-colors cursor-pointer"
                                    >
                                      <span className="font-medium">{child.label}</span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Sticky CTA at bottom */}
              <div className="shrink-0 px-4 py-4 border-t border-gray-100 bg-white space-y-2">
                <Link
                  href="/about#location"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-kcf-gold text-kcf-dark font-semibold px-6 py-3 rounded-full text-sm hover:bg-kcf-gold/90 transition-all shadow-lg w-full cursor-pointer"
                >
                  <Church className="w-4 h-4" />
                  Attend In Person
                </Link>
                <a
                  href="https://www.youtube.com/@KolkataChristianFellowship"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-red-700 transition-all shadow-lg w-full relative overflow-hidden cursor-pointer"
                >
                  {/* Glow effect */}
                  <span className="absolute inset-0 bg-red-500 animate-pulse opacity-20" />
                  <span className="relative flex items-center gap-2">
                    <span className="relative">
                      <TvMinimalPlay className="w-4 h-4" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping opacity-75" />
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full" />
                    </span>
                    Attend Online
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
