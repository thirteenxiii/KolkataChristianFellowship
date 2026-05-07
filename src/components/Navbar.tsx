"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; desc?: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    children: [
      { label: "Our Story", href: "/about", desc: "The journey of KCF from 2005" },
      { label: "History", href: "/about/history", desc: "How it all began" },
      { label: "Vision & Mission", href: "/about/vision-mission", desc: "Our purpose and calling" },
      { label: "Foundational Principles", href: "/about/foundational-principles", desc: "The B-U-I-L-D values" },
      { label: "Statement of Faith", href: "/about/statement-of-faith", desc: "What we believe" },
    ],
  },
  {
    label: "Church Corner",
    children: [
      { label: "KCF Main Service", href: "/services/main-service", desc: "Sunday worship at Mukundapur" },
      { label: "Hour of Power", href: "/services/hour-of-power", desc: "Sunday morning prayer" },
      { label: "Rajarhat Fellowship", href: "/services/rajarhat", desc: "New Town community" },
      { label: "Updates Wall", href: "/updates", desc: "Latest news & announcements" },
    ],
  },
  {
    label: "Ministries",
    children: [
      { label: "Kids Church", href: "/ministries/kids-church", desc: "Ages 0–12 Sunday program" },
      { label: "Teens on Track", href: "/ministries/teens-on-track", desc: "Youth ministry for teens" },
      { label: "College & Career", href: "/ministries/college-career", desc: "Young adults fellowship" },
      { label: "Freedom Church", href: "/ministries/freedom-church", desc: "Hope & healing ministry" },
      { label: "Bengali Mentorship", href: "/ministries/bengali-mentorship", desc: "Empowering Bengali leaders" },
    ],
  },
  {
    label: "Our Impact",
    children: [
      { label: "Sonarpur", href: "/impact/sonarpur", desc: "Community outreach & church" },
      { label: "Madhyamgram", href: "/impact/madhyamgram", desc: "Rural development center" },
      { label: "Sulkuni", href: "/impact/sulkuni", desc: "Village ministry & medical camp" },
      { label: "Nirmaan", href: "/impact/nirmaan", desc: "Child development program" },
      { label: "School of Excellence", href: "/impact/school-of-excellence", desc: "Education for survivors" },
      { label: "Micro Credit", href: "/impact/micro-credit", desc: "Women empowerment & loans" },
      { label: "Our Partners", href: "/impact/partners", desc: "Mission partners" },
    ],
  },
  {
    label: "DNA Study",
    children: [
      { label: "Jerusalem", href: "/dna-study/jerusalem", desc: "A Church that set STANDARDS" },
      { label: "Antioch", href: "/dna-study/antioch", desc: "A SENDING Church" },
      { label: "Macedonia", href: "/dna-study/macedonia", desc: "A SHARING Church" },
      { label: "Philippi", href: "/dna-study/philippi", desc: "A SUPPORTING Church" },
      { label: "Berea", href: "/dna-study/berea", desc: "A STUDYING Church" },
      { label: "Thessalonica", href: "/dna-study/thessalonica", desc: "The SECOND-COMING Church" },
    ],
  },
  {
    label: "Resources",
    children: [
      { label: "Sermons & Notes", href: "/resources/sermon-notes", desc: "PDF sermon notes" },
      { label: "Videos", href: "/resources/videos", desc: "Sermon video library" },
      { label: "Resource Corner", href: "/resources/resource-corner", desc: "Audio, PDF & more" },
      { label: "Photos", href: "/photos", desc: "Church photo gallery" },
    ],
  },
  {
    label: "Connect",
    children: [
      { label: "Prayer Wall", href: "/prayer", desc: "Submit prayer requests" },
      { label: "Contact Us", href: "/contact", desc: "Get in touch" },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Top bar with service info */}
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-kcf-blue flex items-center justify-center text-white font-bold text-sm lg:text-base transition-transform group-hover:scale-105">
              KCF
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
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                      pathname === item.href
                        ? "text-kcf-blue"
                        : "text-kcf-dark hover:text-kcf-blue"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${
                      pathname.startsWith(
                        "/" + item.label.toLowerCase().replace(/\s+/g, "-")
                      )
                        ? "text-kcf-blue"
                        : "text-kcf-dark hover:text-kcf-blue"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-200 ${
                      openDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 hover:bg-kcf-blue-lighter transition-colors group/link"
                        >
                          <span className="text-sm font-semibold text-kcf-dark group-hover/link:text-kcf-blue">
                            {child.label}
                          </span>
                          {child.desc && (
                            <span className="block text-xs text-kcf-muted mt-0.5">
                              {child.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-kcf-dark hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 lg:hidden bg-black/50 z-40" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile menu */}
      <div
        className={`fixed top-16 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 overflow-y-auto lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="py-4 px-4">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.href ? (
                <Link
                  href={item.href}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium ${
                    pathname === item.href
                      ? "text-kcf-blue bg-kcf-blue-lighter"
                      : "text-kcf-dark hover:bg-gray-50"
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
                    className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-kcf-dark hover:bg-gray-50"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileDropdown === item.label && (
                    <div className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-kcf-blue-lighter pl-3">
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 rounded-lg text-sm text-kcf-dark hover:bg-kcf-blue-lighter transition-colors"
                        >
                          <span className="font-medium">{child.label}</span>
                          {child.desc && (
                            <span className="block text-xs text-kcf-muted mt-0.5">
                              {child.desc}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>

        {/* Mobile bottom info */}
        <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
          <p className="text-xs text-kcf-muted mb-1">Sunday: 9:45 AM & 11:00 AM</p>
          <p className="text-xs text-kcf-muted">Mukundapur, Kolkata</p>
        </div>
      </div>
    </header>
  );
}
