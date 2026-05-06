'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle2 } from 'lucide-react';
import prayersData from '../data/prayers.json';

export default function PrayerWall() {
  const [prayers, setPrayers] = useState(prayersData);

  const handlePray = (id: string) => {
    setPrayers(current => 
      current.map(p => 
        p.id === id ? { ...p, prayedForCount: p.prayedForCount + 1 } : p
      )
    );
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-gray-900 mb-4">Prayer Wall</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            "Carry each other's burdens, and in this way you will fulfill the law of Christ." - Galatians 6:2
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prayers.map((prayer, index) => (
            <motion.div
              key={prayer.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full mb-2">
                    {prayer.category}
                  </span>
                  <h4 className="font-semibold text-gray-900">{prayer.requesterName}</h4>
                </div>
                {prayer.isAnswered && (
                  <span className="flex items-center text-green-600 text-sm font-medium gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Answered
                  </span>
                )}
              </div>
              
              <p className="text-gray-700 mb-6 flex-grow">"{prayer.requestText}"</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  {new Date(prayer.dateSubmitted).toLocaleDateString()}
                </span>
                <button 
                  onClick={() => handlePray(prayer.id)}
                  className="flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors bg-amber-50 px-4 py-2 rounded-lg hover:bg-amber-100"
                >
                  <Heart className="w-4 h-4" /> 
                  I Prayed ({prayer.prayedForCount})
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-full font-semibold transition-colors shadow-lg">
            Submit a Prayer Request
          </button>
        </div>
      </div>
    </section>
  );
}
