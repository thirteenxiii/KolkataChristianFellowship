'use client';

import { MapPin, Clock, Cross, Menu } from 'lucide-react';
import Link from 'next/link';

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 block md:hidden bg-deep-charcoal/95 backdrop-blur-md border-t border-white/10 safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {/* Service Time */}
        <div className="flex flex-col items-center gap-0.5 text-white/80">
          <Clock className="w-5 h-5 text-liturgical-gold" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Service</span>
          <span className="text-xs font-bold text-white">9:45 AM</span>
        </div>

        {/* Directions */}
        <a
          href="https://maps.google.com/?q=Kolkata+Christian+Fellowship+Mukundapur"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-white/80"
        >
          <MapPin className="w-5 h-5 text-liturgical-gold" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Find Us</span>
          <span className="text-xs font-bold text-white">Directions</span>
        </a>

        {/* Mega Menu Trigger */}
        <Link
          href="/"
          className="flex flex-col items-center gap-0.5 text-white/80"
        >
          <Cross className="w-5 h-5 text-liturgical-gold" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">KCF</span>
          <span className="text-xs font-bold text-white">Home</span>
        </Link>

        {/* Our Impact (Mega Menu) */}
        <div className="group relative flex flex-col items-center gap-0.5 text-white/80">
          <Menu className="w-5 h-5 text-liturgical-gold" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Impact</span>
          <span className="text-xs font-bold text-white">Our Work</span>

          {/* Mega Menu Dropdown */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
            <div className="bg-deep-charcoal/95 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-2xl">
              <h4 className="text-liturgical-gold font-serif font-bold text-sm mb-3 border-b border-white/10 pb-2">
                Our Impact
              </h4>
              <div className="grid grid-cols-2 gap-1">
                {[
                  { name: 'Sonarpur', href: '/sonarpur' },
                  { name: 'Madhyamgram', href: '/madhyamgram' },
                  { name: 'Sulkuni', href: '/sulkuni' },
                  { name: 'Nirmaan', href: '/nirmaan' },
                  { name: 'School of Excellence', href: '/school' },
                  { name: 'Micro Credit', href: '/micro' },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xs text-white/70 hover:text-liturgical-gold hover:bg-white/5 rounded-lg px-2 py-1.5 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
