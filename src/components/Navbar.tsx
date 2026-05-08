"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ── Crucifix Icon (replaces ChevronDown) ── */
function CrucifixIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* vertical beam */}
      <line x1="12" y1="3" x2="12" y2="21" />
      {/* horizontal beam */}
      <line x1="5" y1="9" x2="19" y2="9" />
      {/* INRI title */}
      <line x1="12" y1="9" x2="12" y2="12" />
      <line x1="9" y1="12" x2="15" y2="12" />
    </svg>
  );
}

/* ── Types ── */
interface NavChild {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

/* ── Navigation Data ── */
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "History", href: "/about/history" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Foundational Principles", href: "/about/foundational-principles" },
      { label: "Statement of Faith", href: "/about/statement-of-faith" },
    ],
  },
  {
    label: "Church Corner",
    children: [
      { label: "KCF Main Service", href: "/services/main-service" },
      { label: "Hour of Power", href: "/services/hour-of-power" },
      { label: "Rajarhat Fellowship", href: "/services/rajarhat" },
      { label: "Updates Wall", href: "/updates" },
    ],
  },
  {
    label: "Ministries",
    children: [
      { label: "Kids Church", href: "/ministries/kids-church" },
      { label: "Teens on Track", href: "/ministries/teens-on-track" },
      { label: "College & Career", href: "/ministries/college-career" },
      { label: "Freedom Church", href: "/ministries/freedom-church" },
      { label: "Bengali Mentorship", href: "/ministries/bengali-mentorship" },
    ],
  },
  {
    label: "Our Impact",
    children: [
      { label: "Sonarpur", href: "/impact/sonarpur" },
      { label: "Madhyamgram", href: "/impact/madhyamgram" },
      { label: "Sulkuni", href: "/impact/sulkuni" },
      { label: "Nirmaan", href: "/impact/nirmaan" },
      { label: "School of Excellence", href: "/impact/school-of-excellence" },
      { label: "Micro Credit", href: "/impact/micro-credit" },
      { label: "Our Partners", href: "/impact/partners" },
    ],
  },
  {
    label: "DNA Study",
    children: [
      { label: "Jerusalem", href: "/dna-study/jerusalem" },
      { label: "Antioch", href: "/dna-study/antioch" },
      { label: "Macedonia", href: "/dna-study/macedonia" },
      { label: "Philippi", href: "/dna-study/philippi" },
      { label: "Berea", href: "/dna-study/berea" },
      { label: "Thessalonica", href: "/dna-study/thessalonica" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Sermons & Notes", href: "/resources/sermon-notes" },
      { label: "Videos", href: "/resources/videos" },
      { label: "Resource Corner", href: "/resources/resource-corner" },
      { label: "Photos", href: "/photos" },
    ],
  },
  {
    label: "Connect",
    children: [
      { label: "Prayer Wall", href: "/prayer" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

/* ── Animation Variants ── */
const dropdownVariants = {
  hidden: { opacity: 0, y: -6, scaleY: 0.96 },
  visible: { opacity: 1, y: 0, scaleY: 1, transition: { duration: 0.18, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -6, scaleY: 0.96, transition: { duration: 0.12, ease: "easeIn" as const } },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.035, duration: 0.25, ease: "easeOut" as const },
  }),
};

/* ── Component ── */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const [joinOpen, setJoinOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  /* Scroll listener */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close mobile on route change */
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  /* Hover-intent helpers */
  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 120);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      {/* Top bar */}
      <div className="hidden lg:block bg-kcf-blue text-white text-xs py-1.5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span>Sunday: 9:45 AM & 11:00 AM · Mukundapur, Kolkata</span>
          <span>Encountering · Equipping · Encouraging</span>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden ring-2 ring-kcf-blue/20 transition-transform group-hover:scale-105">
              <Image
                src="/assets/kcficon.png"
                alt="KCF"
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base lg:text-lg font-bold text-kcf-blue leading-tight">
                Kolkata Christian Fellowship
              </h1>
              <p className="text-[10px] lg:text-xs text-kcf-muted tracking-wider uppercase">
                Encountering · Equipping · Encouraging
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`cursor-pointer px-3 py-2 text-sm font-medium rounded-13 transition-colors flex items-center gap-1 ${
                      pathname === item.href
                        ? "text-kcf-blue bg-kcf-blue-lighter/60"
                        : "text-kcf-dark/80 hover:text-kcf-blue hover:bg-kcf-blue-lighter/30"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`cursor-pointer px-3 py-2 text-sm font-medium rounded-13 transition-colors flex items-center gap-1 ${
                      openDropdown === item.label
                        ? "text-kcf-blue bg-kcf-blue-lighter/60"
                        : "text-kcf-dark/80 hover:text-kcf-blue hover:bg-kcf-blue-lighter/30"
                    }`}
                  >
                    {item.label}
                    <CrucifixIcon
                      className={`w-3 h-3 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                {/* Mega Dropdown */}
                <AnimatePresence>
                  {item.children && openDropdown === item.label && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="absolute top-full left-0 mt-1 w-56 bg-white/90 backdrop-blur-2xl rounded-13 shadow-2xl shadow-black/10 border border-white/30 overflow-hidden"
                      style={{ transformOrigin: "top center" }}
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="cursor-pointer block px-4 py-2.5 text-sm font-medium text-kcf-dark/80 hover:text-kcf-blue hover:bg-kcf-blue-lighter/40 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Join Us Sunday CTA */}
            <div
              className="relative ml-3"
              onMouseEnter={() => {
                if (closeTimer.current) clearTimeout(closeTimer.current);
                setJoinOpen(true);
              }}
              onMouseLeave={() => {
                closeTimer.current = setTimeout(() => setJoinOpen(false), 120);
              }}
            >
              <button className="cursor-pointer bg-kcf-blue text-white text-sm font-semibold px-5 py-2.5 rounded-13 hover:bg-kcf-blue-light transition-colors shadow-md shadow-kcf-blue/20 flex items-center gap-2">
                <span>Join Us Sunday</span>
                <CrucifixIcon
                  className={`w-3 h-3 transition-transform duration-200 ${
                    joinOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {joinOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full right-0 mt-1 w-52 bg-white/90 backdrop-blur-2xl rounded-13 shadow-2xl shadow-black/10 border border-white/30 overflow-hidden"
                    style={{ transformOrigin: "top right" }}
                  >
                    <div className="py-2">
                      <Link
                        href="/services/main-service"
                        className="cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-kcf-blue-lighter/40 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-13 bg-kcf-blue/10 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-kcf-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-kcf-dark">Attend In Person</p>
                          <p className="text-xs text-kcf-muted">Mukundapur, Kolkata</p>
                        </div>
                      </Link>
                      <Link
                        href="/resources/videos"
                        className="cursor-pointer flex items-center gap-3 px-4 py-3 hover:bg-kcf-blue-lighter/40 transition-colors"
                      >
                        <div className="w-8 h-8 rounded-13 bg-red-50 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-kcf-dark">Attend Online</p>
                          <p className="text-xs text-kcf-muted">Live stream on YouTube</p>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-13 text-kcf-dark hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-16 lg:hidden bg-black/40 z-40"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu — full screen from top */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto lg:hidden"
          >
            <div className="py-4 px-4">
              {navItems.map((item, idx) => (
                <motion.div
                  key={item.label}
                  custom={idx}
                  variants={mobileItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`cursor-pointer block px-4 py-3 rounded-13 text-sm font-medium ${
                        pathname === item.href
                          ? "text-kcf-blue bg-kcf-blue-lighter/60"
                          : "text-kcf-dark/80 hover:bg-gray-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === item.label ? null : item.label
                          )
                        }
                        className="cursor-pointer w-full flex items-center justify-between px-4 py-3 rounded-13 text-sm font-medium text-kcf-dark/80 hover:bg-gray-50"
                      >
                        {item.label}
                        <CrucifixIcon
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            mobileDropdown === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {mobileDropdown === item.label && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-kcf-blue-lighter pl-3">
                              {item.children?.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="cursor-pointer block px-4 py-2.5 rounded-13 text-sm text-kcf-dark/70 hover:bg-kcf-blue-lighter/40 transition-colors font-medium"
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                custom={navItems.length}
                variants={mobileItemVariants}
                initial="hidden"
                animate="visible"
                className="mt-6 space-y-2"
              >
                <Link
                  href="/services/main-service"
                  className="cursor-pointer flex items-center gap-3 px-4 py-3 rounded-13 bg-kcf-blue text-white font-semibold text-sm hover:bg-kcf-blue-light transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Attend In Person
                </Link>
                <Link
                  href="/resources/videos"
                  className="cursor-pointer flex items-center gap-3 px-4 py-3 rounded-13 bg-red-50 text-red-700 font-semibold text-sm hover:bg-red-100 transition-colors"
                >
                  <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  Watch Online
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
