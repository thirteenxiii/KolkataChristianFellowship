'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, CheckCircle2 } from 'lucide-react';
import prayersData from '../data/prayers.json';

export default function PrayerWall() {
  const [prayers, setPrayers] = useState(prayersData);
  const [prayedSet, setPrayedSet] = useState<Set<string>>(new Set());
  const [showForm, setShowForm] = useState(false);
  
  // Form states
  const [newName, setNewName] = useState('');
  const [newRequest, setNewRequest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('kcf_prayed_set');
      if (saved) {
        setPrayedSet(new Set(JSON.parse(saved)));
      }
      
      const savedPrayers = localStorage.getItem('kcf_custom_prayers');
      if (savedPrayers) {
        setPrayers([...JSON.parse(savedPrayers), ...prayersData]);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handlePray = (id: string) => {
    if (prayedSet.has(id)) return;
    
    const newSet = new Set(prayedSet).add(id);
    setPrayedSet(newSet);
    
    try {
      localStorage.setItem('kcf_prayed_set', JSON.stringify(Array.from(newSet)));
    } catch (e) {}

    setPrayers(current => 
      current.map(p => 
        p.id === id ? { ...p, prayedForCount: p.prayedForCount + 1 } : p
      )
    );
  };

  const handleSubmit = () => {
    if (!newName.trim() || !newRequest.trim()) return;
    
    setIsSubmitting(true);
    
    // Simulate network delay
    setTimeout(() => {
      const newPrayer = {
        id: `pr-${Date.now()}`,
        requesterName: newName,
        category: "General",
        requestText: newRequest,
        dateSubmitted: new Date().toISOString(),
        prayedForCount: 0,
        isAnswered: false
      };
      
      const updatedPrayers = [newPrayer, ...prayers];
      setPrayers(updatedPrayers);
      
      try {
        const customPrayers = updatedPrayers.filter(p => p.id.startsWith('pr-'));
        localStorage.setItem('kcf_custom_prayers', JSON.stringify(customPrayers));
      } catch(e) {}
      
      setNewName('');
      setNewRequest('');
      setShowForm(false);
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <section className="section-padding bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-liturgical-gold/10 text-liturgical-gold-dark text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Prayer & Intercession
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-deep-charcoal mb-4">Prayer Wall</h2>
          <p className="text-lg text-deep-charcoal/60 max-w-2xl mx-auto">
            &ldquo;Carry each other&rsquo;s burdens, and in this way you will fulfill the law of Christ.&rdquo; — Galatians 6:2
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
              className="glass-card rounded-xl p-6 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-liturgical-gold/10 text-liturgical-gold-dark text-xs font-semibold rounded-full mb-2">
                    {prayer.category}
                  </span>
                  <h4 className="font-semibold text-deep-charcoal">{prayer.requesterName}</h4>
                </div>
                {prayer.isAnswered && (
                  <span className="flex items-center text-green-600 text-sm font-medium gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Answered
                  </span>
                )}
              </div>
              
              <p className="text-deep-charcoal/70 mb-6 flex-grow">&ldquo;{prayer.requestText}&rdquo;</p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
                <span className="text-sm text-deep-charcoal/50">
                  {new Date(prayer.dateSubmitted).toLocaleDateString()}
                </span>
                <button 
                  onClick={() => handlePray(prayer.id)}
                  disabled={prayedSet.has(prayer.id)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors px-4 py-2 rounded-lg ${
                    prayedSet.has(prayer.id) 
                      ? 'text-deep-charcoal/40 bg-deep-charcoal/5 cursor-not-allowed' 
                      : 'text-deep-charcoal/60 hover:text-liturgical-gold hover:bg-liturgical-gold/10 bg-deep-charcoal/5'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${prayedSet.has(prayer.id) ? 'fill-current' : ''}`} /> 
                  {prayedSet.has(prayer.id) ? 'Prayed' : 'I Prayed'} ({prayer.prayedForCount})
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowForm(!showForm)}
            className="btn-gold inline-flex items-center gap-2"
          >
            Submit a Prayer Request
          </button>
        </div>
        
        {showForm && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 max-w-xl mx-auto glass-card p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold font-serif mb-4 text-deep-charcoal">New Prayer Request</h3>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-deep-charcoal/70 mb-1">Your Name</label>
              <input 
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="w-full border border-white/20 bg-warm-white/50 rounded-lg p-3 text-deep-charcoal focus:ring-2 focus:ring-liturgical-gold/50 focus:border-liturgical-gold outline-none" 
                placeholder="John Doe (or Anonymous)"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-deep-charcoal/70 mb-1">Your Request</label>
              <textarea 
                value={newRequest}
                onChange={(e) => setNewRequest(e.target.value)}
                className="w-full border border-white/20 bg-warm-white/50 rounded-lg p-3 min-h-[100px] text-deep-charcoal focus:ring-2 focus:ring-liturgical-gold/50 focus:border-liturgical-gold outline-none" 
                placeholder="How can we pray for you?"
              ></textarea>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setShowForm(false)}
                className="flex-1 py-3 bg-deep-charcoal/5 text-deep-charcoal/70 font-semibold rounded-lg hover:bg-deep-charcoal/10 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSubmit}
                disabled={isSubmitting || !newName.trim() || !newRequest.trim()}
                className="flex-1 py-3 bg-liturgical-gold text-deep-charcoal font-semibold rounded-lg hover:bg-liturgical-gold-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
