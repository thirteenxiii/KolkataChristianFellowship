'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-4">
            <Image src="/assets/kcficon.png" alt="KCF Logo" width={50} height={50} className="rounded-full bg-white p-1" />
            <span className="text-white font-script text-2xl md:text-3xl hidden md:block">Kolkata Christian Fellowship</span>
          </Link>
          <div className="flex items-center gap-4 md:gap-6 text-white text-sm font-semibold">
            <Link href="/" className="hover:text-stone-300 transition-colors hidden md:block">Home</Link>
            <Link href="/about" className="hover:text-stone-300 transition-colors hidden md:block">About</Link>
            <Link href="/sermons" className="hover:text-stone-300 transition-colors hidden md:block">Sermons</Link>
            <select 
              defaultValue="en"
              className="bg-transparent border border-white/40 rounded-full px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer"
            >
              <option className="text-black" value="en">English</option>
              <option className="text-black" value="bn">বাংলা (Bengali)</option>
              <option className="text-black" value="hi">हिंदी (Hindi)</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
