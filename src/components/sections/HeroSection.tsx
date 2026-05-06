'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const heroImages = [
  { id: 1, src: '/assets/easter.jpg', alt: 'KCF Easter Celebration' },
  { id: 2, src: '/assets/palm-sunday.jpg', alt: 'KCF Palm Sunday Service' },
  { id: 3, src: '/assets/heroes.jpg', alt: 'KCF Community Heroes' },
];

const textPillars = [
  {
    id: 'encounter',
    text: 'Encountering the Saviour',
    subtitle: 'Experience the transformative love of Christ',
  },
  {
    id: 'equip',
    text: 'Equipping the Saints',
    subtitle: 'Grow in faith, knowledge, and purpose',
  },
  {
    id: 'encourage',
    text: 'Encouraging Service',
    subtitle: 'Love your neighbour through action',
  },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const backgroundScale = useTransform(scrollY, [0, 500], [1, 1.15]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0.6]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Ken Burns effect */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: backgroundScale, opacity: backgroundOpacity }}
      >
        <Image
          src={heroImages[0].src}
          alt={heroImages[0].alt}
          fill
          className="object-cover"
          preload
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
        />
      </motion.div>

      {/* Gradient Overlay for text legibility */}
      <div className="absolute inset-0 hero-gradient-overlay" />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Welcome Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-liturgical-gold font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-6"
          >
            Welcome to Kolkata Christian Fellowship
          </motion.p>

          {/* Staggered Text Pillars */}
          <div className="space-y-4 md:space-y-6">
            {textPillars.map((pillar, index) => (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.5 + index * 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
                  {pillar.text}
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.5 }}
                  className="text-white/60 text-sm md:text-base mt-2 max-w-2xl mx-auto hidden md:block"
                >
                  {pillar.subtitle}
                </motion.p>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2, ease: 'easeOut' }}
            className="mt-10 md:mt-12"
          >
            <a href="#services" className="btn-gold inline-block text-base md:text-lg">
              Join Us This Sunday
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-liturgical-gold" />
        </motion.div>
      </motion.div>
    </section>
  );
}
