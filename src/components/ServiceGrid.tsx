'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Globe } from 'lucide-react';

const services = [
  {
    id: 1,
    time: "9:45 AM",
    title: "Main Worship Service",
    translation: "With English Translation",
    icon: <Globe className="w-6 h-6 text-liturgical-gold" />
  },
  {
    id: 2,
    time: "11:00 AM",
    title: "Second Service",
    translation: "With Hindi Translation",
    icon: <Users className="w-6 h-6 text-liturgical-gold" />
  },
  {
    id: 3,
    time: "9:45 AM",
    title: "Kids Church",
    translation: "Simultaneous with Regular Services",
    icon: <Clock className="w-6 h-6 text-liturgical-gold" />
  }
];

export default function ServiceGrid() {
  return (
    <section id="services" className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-liturgical-gold/10 text-liturgical-gold-dark text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Worship Times
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-deep-charcoal mb-4">Join Us for Worship</h2>
          <p className="text-lg text-deep-charcoal/60 max-w-2xl mx-auto">
            Experience community, grow in faith, and encounter God together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card rounded-2xl p-8 border-t-4 border-liturgical-gold hover:shadow-xl transition-shadow"
            >
              <div className="bg-liturgical-gold/10 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold text-liturgical-gold font-serif mb-2">{service.time}</h3>
              <h4 className="text-xl font-semibold text-deep-charcoal mb-2">{service.title}</h4>
              <p className="text-deep-charcoal/60 flex items-center gap-2">
                {service.translation}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
