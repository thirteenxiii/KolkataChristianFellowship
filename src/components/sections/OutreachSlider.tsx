'use client';

import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Heart, Users, GraduationCap, HandHelping } from 'lucide-react';

const outreachSlides = [
  {
    id: 'sonarpur',
    title: 'Sonarpur',
    subtitle: 'Community Transformation Center',
    description:
      'A partnership that began in 2007, bringing holistic transformation through football schools, computer training, sewing school, and weekly worship services to the Sonarpur community.',
    image: '/assets/Welcome.png',
    stats: { label: 'Children Impacted', value: '200+' },
    icon: <Heart className="w-5 h-5" />,
  },
  {
    id: 'madhyamgram',
    title: 'Madhyamgram',
    subtitle: 'Urban & Semi-Urban Outreach',
    description:
      'Since 2002, reaching the Doltala area with sewing schools, computer training, women\'s fellowship, and a thriving Sunday worship service.',
    image: '/assets/Welcome.png',
    stats: { label: 'Weekly Attendance', value: '80+' },
    icon: <Users className="w-5 h-5" />,
  },
  {
    id: 'nirmaan',
    title: 'Nirmaan',
    subtitle: 'Child Development Program',
    description:
      '"To Build" — a comprehensive program providing sponsorship, computer education, English learning, and character building for children in need.',
    image: '/assets/Welcome.png',
    stats: { label: 'Children in Program', value: '500+' },
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 'sulkuni',
    title: 'Sulkuni',
    subtitle: 'Rural Health & Community Center',
    description:
      'Born from a simple act of kindness — a community center providing medical camps, disaster relief, and weekly fellowship in this cyclone-affected island region.',
    image: '/assets/Welcome.png',
    stats: { label: 'Medical Camp Patients', value: '1,000+' },
    icon: <HandHelping className="w-5 h-5" />,
  },
  {
    id: 'school',
    title: 'School of Excellence',
    subtitle: 'Hope & Healing Through Education',
    description:
      'A non-formal school within a correctional facility, providing education and vocational training to survivors of trafficking, preparing them for reintegration.',
    image: '/assets/Welcome.png',
    stats: { label: 'Survivors Educated', value: '300+' },
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 'microcredit',
    title: 'Micro Credit',
    subtitle: 'Empowering Women & Families',
    description:
      'Women\'s self-help groups providing skill training, small business loans, and financial literacy to help families move toward independence and dignity.',
    image: '/assets/Welcome.png',
    stats: { label: 'Women Empowered', value: '150+' },
    icon: <HandHelping className="w-5 h-5" />,
  },
];

export default function OutreachSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="outreach" className="section-padding bg-deep-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
            Outreach & Impact
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            Serving communities across Kolkata and beyond through holistic transformation and the love of Christ.
          </p>
        </motion.div>

        {/* Embla Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
            <div className="flex">
              {outreachSlides.map((slide) => (
                <div
                  key={slide.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_85%] lg:flex-[0_0_70%] pl-4 md:pl-6"
                >
                  <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                    {/* Background Image */}
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 70vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/95 via-deep-charcoal/40 to-transparent" />

                    {/* Content Card */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                      <div className="max-w-2xl">
                        {/* Icon & Category */}
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-liturgical-gold">{slide.icon}</span>
                          <span className="text-liturgical-gold text-sm font-semibold uppercase tracking-wider">
                            {slide.subtitle}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
                          {slide.title}
                        </h3>

                        {/* Description */}
                        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4 line-clamp-3 md:line-clamp-none">
                          {slide.description}
                        </p>

                        {/* Stats Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                          <span className="text-liturgical-gold font-bold text-sm">
                            {slide.stats.value}
                          </span>
                          <span className="text-white/60 text-xs">
                            {slide.stats.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-liturgical-gold hover:text-deep-charcoal transition-all duration-300"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-liturgical-gold hover:text-deep-charcoal transition-all duration-300"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? 'bg-liturgical-gold w-8'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
