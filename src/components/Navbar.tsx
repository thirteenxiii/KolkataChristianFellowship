'use client';
import Image from 'next/image';
import Link from 'next/link';

const NavItem = ({ title, links }: { title: string, links: { name: string, href: string }[] }) => {
  return (
    <div className="relative group">
      <button className="hover:text-liturgical-gold-light transition-colors py-4 px-2 hidden md:block">
        {title}
      </button>
      <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-deep-charcoal/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
        <div className="py-2">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="block px-4 py-2 text-sm text-warm-white/70 hover:bg-liturgical-gold/10 hover:text-liturgical-gold-light transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-deep-charcoal/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-4">
            <Image src="/assets/kcficon.png" alt="KCF Logo" width={50} height={50} className="rounded-full bg-white p-1" />
            <span className="text-white font-script text-2xl md:text-3xl hidden lg:block">Kolkata Christian Fellowship</span>
          </Link>
          
          <div className="flex items-center gap-2 lg:gap-4 text-white text-sm font-semibold">
            <Link href="/" className="hover:text-liturgical-gold-light transition-colors hidden md:block py-4 px-2">Home</Link>
            
            <NavItem 
              title="About" 
              links={[
                { name: 'History', href: '/history' },
                { name: 'Vision / Mission', href: '/vision' },
                { name: 'Foundational Principles', href: '/principles' },
                { name: 'Statement of Faith', href: '/faith' },
                { name: 'Updates Wall', href: '/update' }
              ]} 
            />
            
            <NavItem 
              title="Church Corner" 
              links={[
                { name: 'KCF Main Service', href: '/kcf_main_service' },
                { name: 'Hour of Power', href: '/hop' },
                { name: 'Kids Church', href: '/kids' },
                { name: 'Teens on Track (TOT)', href: '/tot' },
                { name: 'Freedom Church', href: '/freedom' },
                { name: 'College & Career', href: '/college' },
                { name: 'Bengali Mentorship', href: '/mentorship' },
                { name: 'Rajarhat Fellowship', href: '/rajarhat' }
              ]} 
            />
            
            {/* Our Impact — Mega Menu */}
            <div className="relative group hidden md:block">
              <button className="hover:text-liturgical-gold-light transition-colors py-4 px-2">
                Our Impact
              </button>
              <div className="absolute right-0 mt-2 w-[480px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-deep-charcoal/95 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                <div className="p-4 grid grid-cols-2 gap-2">
                  <div className="col-span-2 px-3 py-2 border-b border-white/10 mb-1">
                    <span className="text-liturgical-gold text-xs font-semibold uppercase tracking-widest">Serving Communities</span>
                  </div>
                  <Link href="/sonarpur" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-liturgical-gold/10 transition-colors group/item">
                    <span className="w-8 h-8 rounded-full bg-liturgical-gold/20 flex items-center justify-center text-liturgical-gold text-xs font-bold shrink-0">S</span>
                    <div>
                      <p className="text-white text-sm font-medium">Sonarpur</p>
                      <p className="text-warm-white/50 text-xs">Community outreach</p>
                    </div>
                  </Link>
                  <Link href="/madhyamgram" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-liturgical-gold/10 transition-colors group/item">
                    <span className="w-8 h-8 rounded-full bg-liturgical-gold/20 flex items-center justify-center text-liturgical-gold text-xs font-bold shrink-0">M</span>
                    <div>
                      <p className="text-white text-sm font-medium">Madhyamgram</p>
                      <p className="text-warm-white/50 text-xs">Rural development</p>
                    </div>
                  </Link>
                  <Link href="/nirmaan" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-liturgical-gold/10 transition-colors group/item">
                    <span className="w-8 h-8 rounded-full bg-liturgical-gold/20 flex items-center justify-center text-liturgical-gold text-xs font-bold shrink-0">N</span>
                    <div>
                      <p className="text-white text-sm font-medium">Nirmaan</p>
                      <p className="text-warm-white/50 text-xs">Construction & skills</p>
                    </div>
                  </Link>
                  <Link href="/sulkuni" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-liturgical-gold/10 transition-colors group/item">
                    <span className="w-8 h-8 rounded-full bg-liturgical-gold/20 flex items-center justify-center text-liturgical-gold text-xs font-bold shrink-0">S</span>
                    <div>
                      <p className="text-white text-sm font-medium">Sulkuni</p>
                      <p className="text-warm-white/50 text-xs">Village ministry</p>
                    </div>
                  </Link>
                  <Link href="/school" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-liturgical-gold/10 transition-colors group/item">
                    <span className="w-8 h-8 rounded-full bg-liturgical-gold/20 flex items-center justify-center text-liturgical-gold text-xs font-bold shrink-0">SE</span>
                    <div>
                      <p className="text-white text-sm font-medium">School of Excellence</p>
                      <p className="text-warm-white/50 text-xs">Education initiative</p>
                    </div>
                  </Link>
                  <Link href="/micro" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-liturgical-gold/10 transition-colors group/item">
                    <span className="w-8 h-8 rounded-full bg-liturgical-gold/20 flex items-center justify-center text-liturgical-gold text-xs font-bold shrink-0">MC</span>
                    <div>
                      <p className="text-white text-sm font-medium">Micro Credit</p>
                      <p className="text-warm-white/50 text-xs">Financial empowerment</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            <NavItem 
              title="Resources" 
              links={[
                { name: 'Sermons / Notes', href: '/note' },
                { name: 'Videos', href: '/video' },
                { name: 'Resource Corner', href: '/resource1' },
                { name: 'Prayer Wall', href: '/prayer' },
                { name: 'Photos', href: '/photo' },
                { name: 'Our Partners', href: '/partner' },
                { name: 'Contact Us', href: '/contact' }
              ]} 
            />

            <select 
              defaultValue="en"
              className="ml-4 bg-transparent border border-white/40 rounded-full px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-liturgical-gold/50 cursor-pointer"
            >
              <option className="text-deep-charcoal" value="en">English</option>
              <option className="text-deep-charcoal" value="bn">বাংলা</option>
              <option className="text-deep-charcoal" value="hi">हिंदी</option>
            </select>
          </div>
        </div>
      </div>
    </nav>
  );
}
