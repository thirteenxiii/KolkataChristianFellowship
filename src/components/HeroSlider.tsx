'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const slides = [
  { id: 1, image: '/assets/66104-Resurrection (Easter) Sunday 2021 1920x1080.jpg' },
  { id: 2, image: '/assets/64211-Palm Sunday 2021 2b 1920x1080.jpg' },
  { id: 3, image: '/assets/1616869766310_ToT_January_2021_Heroes_2.jpg' },
];

export default function HeroSlider() {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gray-900" ref={emblaRef}>
      <div className="flex h-full">
        {slides.map((slide) => (
          <div className="relative flex-[0_0_100%] h-full" key={slide.id}>
            <div className="absolute inset-0">
              <Image 
                src={slide.image} 
                alt="KCF Worship and Community" 
                fill 
                className="object-cover"
                priority={slide.id === 1}
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold text-white max-w-4xl font-serif mb-6"
              >
                Encountering the Saviour, Equipping the Saints, Encouraging Service
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-lg md:text-2xl text-gray-200"
              >
                Welcome to Kolkata Christian Fellowship
              </motion.p>
              <motion.a 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                href="#services"
                className="mt-8 px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-semibold transition-colors shadow-lg inline-block"
              >
                Join Us This Sunday
              </motion.a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
